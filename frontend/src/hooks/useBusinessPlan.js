import { useState, useEffect } from 'react';
import { businessPlanAPI } from '../services/api';

export const useBusinessPlan = () => {
  const [data, setData] = useState({
    overview: null,
    marketAnalysis: null,
    financial: null,
    menu: null,
    locations: null,
    investment: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinessPlanData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('🔄 Fetching business plan data...');

        // First seed the database if needed (development)
        try {
          await businessPlanAPI.seedDatabase();
          console.log('✅ Database seeded or already exists');
        } catch (seedError) {
          console.warn('⚠️ Database seeding failed or already exists:', seedError.message);
        }

        // Fetch all business plan sections in parallel
        const [
          overviewResponse,
          marketResponse,
          financialResponse,
          menuResponse,
          locationsResponse,
          investmentResponse
        ] = await Promise.all([
          businessPlanAPI.getOverview(),
          businessPlanAPI.getMarketAnalysis(),
          businessPlanAPI.getFinancial(),
          businessPlanAPI.getMenu(),
          businessPlanAPI.getLocations(),
          businessPlanAPI.getInvestment()
        ]);

        // Format the data to match the component expectations
        const formattedData = {
          overview: {
            company: overviewResponse.company,
            executiveSummary: overviewResponse.executive_summary
          },
          marketAnalysis: {
            marketData: marketResponse.market_data
          },
          financial: {
            financialData: financialResponse.financial_data
          },
          menu: {
            menu: menuResponse.menu
          },
          locations: {
            locations: locationsResponse.locations
          },
          investment: {
            investment: investmentResponse.investment
          }
        };

        setData(formattedData);
        console.log('✅ Business plan data loaded successfully');

      } catch (err) {
        console.error('❌ Error fetching business plan data:', err);
        setError(err.message || 'Failed to load business plan data');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessPlanData();
  }, []);

  return { data, loading, error };
};

// Individual section hooks for more granular control
export const useOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await businessPlanAPI.getOverview();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  return { data, loading, error };
};

export const useMarketAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketAnalysis = async () => {
      try {
        const response = await businessPlanAPI.getMarketAnalysis();
        setData(response.market_data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketAnalysis();
  }, []);

  return { data, loading, error };
};

export const useFinancial = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFinancial = async () => {
      try {
        const response = await businessPlanAPI.getFinancial();
        setData(response.financial_data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFinancial();
  }, []);

  return { data, loading, error };
};

export const useMenu = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await businessPlanAPI.getMenu();
        setData(response.menu);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return { data, loading, error };
};

export const useLocations = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await businessPlanAPI.getLocations();
        setData(response.locations);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { data, loading, error };
};

export const useInvestment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const response = await businessPlanAPI.getInvestment();
        setData(response.investment);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestment();
  }, []);

  return { data, loading, error };
};