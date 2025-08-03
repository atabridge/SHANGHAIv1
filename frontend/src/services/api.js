import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.message);
    
    // Handle different error types
    if (error.response?.status === 404) {
      console.warn('Resource not found');
    } else if (error.response?.status >= 500) {
      console.error('Server error occurred');
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    }
    
    return Promise.reject(error);
  }
);

// Business Plan API endpoints
export const businessPlanAPI = {
  // Get overview data (company info + executive summary)
  getOverview: async () => {
    const response = await apiClient.get('/business-plan/overview');
    return response.data;
  },

  // Get market analysis data
  getMarketAnalysis: async () => {
    const response = await apiClient.get('/business-plan/market-analysis');
    return response.data;
  },

  // Get financial projections
  getFinancial: async () => {
    const response = await apiClient.get('/business-plan/financial');
    return response.data;
  },

  // Get menu data
  getMenu: async () => {
    const response = await apiClient.get('/business-plan/menu');
    return response.data;
  },

  // Get locations data
  getLocations: async () => {
    const response = await apiClient.get('/business-plan/locations');
    return response.data;
  },

  // Get investment data
  getInvestment: async () => {
    const response = await apiClient.get('/business-plan/investment');
    return response.data;
  },

  // Seed database (development only)
  seedDatabase: async () => {
    const response = await apiClient.post('/business-plan/seed');
    return response.data;
  }
};

// Navigation sections (static data, no API needed)
export const navigationSections = [
  { id: "overview", title: "Genel Bakış", icon: "Home" },
  { id: "market", title: "Pazar Analizi", icon: "TrendingUp" },
  { id: "business", title: "İş Modeli", icon: "Building" },
  { id: "menu", title: "Menü & Ürünler", icon: "ChefHat" },
  { id: "operations", title: "Operasyon", icon: "MapPin" },
  { id: "financial", title: "Finansal", icon: "DollarSign" },
  { id: "investment", title: "Yatırım", icon: "Target" }
];

export default apiClient;