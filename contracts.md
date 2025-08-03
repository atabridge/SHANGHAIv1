# Shanghai Cloud Kitchen - API Contracts & Integration Plan

## 1. Mock Data → Real Data Conversion Plan

### Current Mock Data (frontend/src/mock.js)
- `businessPlanData`: Company info, executive summary, market data
- `navigationSections`: Site navigation structure
- Recharts data: Market growth, cost comparison, revenue projections

### Target Backend Implementation
Replace all mock data with REST API calls to MongoDB-backed endpoints.

## 2. API Contracts

### 2.1 Business Plan Endpoints

```
GET /api/business-plan/overview
Response: {
  company: { name, subtitle, tagline, vision, target },
  executiveSummary: { vision, targetMarket, businessModel, financialTarget }
}

GET /api/business-plan/market-analysis
Response: {
  shanghaiMarket: { size, growth, penetration, averageOrder },
  cloudKitchenGrowth: [{ year, traditional, cloudKitchen, marketShare }],
  costComparison: [{ category, traditional, cloudKitchen, savings }],
  targetDemographics: [{ age, percentage, description }]
}

GET /api/business-plan/financial
Response: {
  initialInvestment: [{ category, amount, percentage }],
  revenueProjection: [{ month, orders, avgValue, revenue, cumulative }],
  profitability: { yearlyRevenue, operationCosts, netProfit, margin }
}

GET /api/business-plan/menu
Response: {
  signatureBowls: [{ name, price, description }],
  proteins: [string],
  toppings: [string],
  sides: [string]
}

GET /api/business-plan/locations
Response: {
  locations: [{ name, area, capacity, features, phase }]
}

GET /api/business-plan/investment
Response: {
  amount: string,
  usage: [{ purpose, percentage }],
  roiProjection: [{ year, roi }],
  successMetrics: { sixMonths: [string], twelveMonths: [string] }
}
```

### 2.2 Admin Management Endpoints (Future Enhancement)

```
POST /api/admin/business-plan/update
PUT /api/admin/menu/items/{id}
POST /api/admin/locations/add
DELETE /api/admin/locations/{id}
```

## 3. MongoDB Data Models

### 3.1 BusinessPlan Model
```python
class BusinessPlan(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company: CompanyInfo
    executive_summary: ExecutiveSummary
    market_data: MarketData
    financial_data: FinancialData
    menu: MenuData
    locations: List[LocationInfo]
    investment: InvestmentData
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
```

### 3.2 Sub-Models
```python
class CompanyInfo(BaseModel):
    name: str
    subtitle: str
    tagline: str
    vision: str
    target: str

class MarketData(BaseModel):
    shanghai_market: Dict[str, str]
    cloud_kitchen_growth: List[MarketGrowthData]
    cost_comparison: List[CostComparisonData]
    target_demographics: List[DemographicData]

class FinancialData(BaseModel):
    initial_investment: List[InvestmentItem]
    revenue_projection: List[RevenueProjection]
    profitability: ProfitabilityData
```

## 4. Frontend Integration Plan

### 4.1 Files to Modify
1. **BusinessPlan.js**: Replace mock imports with API calls
2. **Charts.js**: Keep unchanged (receives data as props)
3. **mock.js**: Remove (replace with API service)

### 4.2 New Files to Create
1. **services/api.js**: Centralized API service
2. **hooks/useBusinessPlan.js**: Custom hook for data fetching
3. **utils/constants.js**: API endpoints constants

### 4.3 Integration Steps
```javascript
// services/api.js
const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const businessPlanAPI = {
  getOverview: () => axios.get(`${API_BASE}/business-plan/overview`),
  getMarketAnalysis: () => axios.get(`${API_BASE}/business-plan/market-analysis`),
  getFinancial: () => axios.get(`${API_BASE}/business-plan/financial`),
  getMenu: () => axios.get(`${API_BASE}/business-plan/menu`),
  getLocations: () => axios.get(`${API_BASE}/business-plan/locations`),
  getInvestment: () => axios.get(`${API_BASE}/business-plan/investment`)
};

// hooks/useBusinessPlan.js
export const useBusinessPlan = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overview, market, financial, menu, locations, investment] = await Promise.all([
          businessPlanAPI.getOverview(),
          businessPlanAPI.getMarketAnalysis(),
          businessPlanAPI.getFinancial(),
          businessPlanAPI.getMenu(),
          businessPlanAPI.getLocations(),
          businessPlanAPI.getInvestment()
        ]);
        
        setData({ overview, market, financial, menu, locations, investment });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { data, loading, error };
};
```

## 5. Backend Implementation Priority

### Phase 1: Core API Development
1. ✅ FastAPI project structure (already exists)
2. Create MongoDB models
3. Implement GET endpoints for business plan data
4. Seed database with current mock data
5. Add error handling and validation

### Phase 2: Frontend Integration
1. Create API service layer
2. Replace mock data imports with API calls
3. Add loading states and error handling
4. Test all components with real backend data

### Phase 3: Admin Features (Optional)
1. Authentication system
2. CRUD endpoints for content management
3. Admin dashboard for updating business plan data

## 6. Error Handling Strategy

### Backend
- Structured error responses with proper HTTP status codes
- Validation error messages for malformed requests
- Logging for debugging and monitoring

### Frontend
- Loading spinners during API calls
- Error boundaries for component-level error handling
- Fallback UI for failed API requests
- Retry mechanisms for network failures

## 7. Performance Considerations

### Backend
- Database indexing for frequently queried fields
- Response caching for static business plan data
- Pagination for large datasets (if needed)

### Frontend
- React.memo for chart components
- Lazy loading for heavy sections
- Image optimization and lazy loading
- Bundle size optimization

## 8. Testing Strategy

### Backend Testing
- Unit tests for each API endpoint
- Integration tests for MongoDB operations
- Mock data validation tests

### Frontend Testing
- Component unit tests with mocked API responses
- Integration tests for API service layer
- E2E tests for critical user flows

---

**Next Steps:**
1. Implement MongoDB models in backend/models/
2. Create API endpoints in backend/routers/
3. Seed database with mock data
4. Create frontend API service layer
5. Replace mock data with API calls in BusinessPlan.js