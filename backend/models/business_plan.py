from pydantic import BaseModel, Field
from typing import List, Dict, Optional
from datetime import datetime
import uuid


class CompanyInfo(BaseModel):
    name: str
    subtitle: str
    tagline: str
    vision: str
    target: str


class ExecutiveSummary(BaseModel):
    vision: str
    target_market: str
    business_model: str
    financial_target: str


class MarketInfo(BaseModel):
    size: str
    growth: str
    penetration: str
    average_order: str


class MarketGrowthData(BaseModel):
    year: int
    traditional: int
    cloud_kitchen: int
    market_share: int


class CostComparisonData(BaseModel):
    category: str
    traditional: int
    cloud_kitchen: int
    savings: int


class DemographicData(BaseModel):
    age: str
    percentage: int
    description: str


class MarketData(BaseModel):
    shanghai_market: MarketInfo
    cloud_kitchen_growth: List[MarketGrowthData]
    cost_comparison: List[CostComparisonData]
    target_demographics: List[DemographicData]


class InvestmentItem(BaseModel):
    category: str
    amount: int
    percentage: int


class RevenueProjection(BaseModel):
    month: str
    orders: int
    avg_value: int
    revenue: int
    cumulative: int


class ProfitabilityData(BaseModel):
    yearly_revenue: int
    operation_costs: int
    net_profit: int
    margin: int


class FinancialData(BaseModel):
    initial_investment: List[InvestmentItem]
    revenue_projection: List[RevenueProjection]
    profitability: ProfitabilityData


class SignatureBowl(BaseModel):
    name: str
    price: str
    description: str


class MenuData(BaseModel):
    signature_bowls: List[SignatureBowl]
    proteins: List[str]
    toppings: List[str]
    sides: List[str]


class LocationInfo(BaseModel):
    name: str
    area: str
    capacity: str
    features: List[str]
    phase: int


class InvestmentUsage(BaseModel):
    purpose: str
    percentage: int


class ROIProjection(BaseModel):
    year: int
    roi: str


class SuccessMetrics(BaseModel):
    six_months: List[str]
    twelve_months: List[str]


class InvestmentData(BaseModel):
    amount: str
    usage: List[InvestmentUsage]
    roi_projection: List[ROIProjection]
    success_metrics: SuccessMetrics


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

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }