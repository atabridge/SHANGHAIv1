import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = {
  primary: '#DC2626',
  secondary: '#1E3A8A', 
  accent: '#EF4444',
  light: '#FEE2E2'
};

export const MarketGrowthChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis dataKey="year" stroke="#6B7280" />
      <YAxis stroke="#6B7280" />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: 'white', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px'
        }}
      />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="traditional" 
        stroke={COLORS.secondary} 
        strokeWidth={3}
        name="Geleneksel Restoran (%)"
        dot={{ fill: COLORS.secondary, strokeWidth: 2, r: 4 }}
      />
      <Line 
        type="monotone" 
        dataKey="cloud_kitchen" 
        stroke={COLORS.primary} 
        strokeWidth={3}
        name="Cloud Kitchen (%)"
        dot={{ fill: COLORS.primary, strokeWidth: 2, r: 4 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export const CostComparisonChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis 
        dataKey="category" 
        stroke="#6B7280"
        tick={{ fontSize: 12 }}
        angle={-45}
        textAnchor="end"
        height={80}
      />
      <YAxis stroke="#6B7280" />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: 'white', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px'
        }}
      />
      <Legend />
      <Bar 
        dataKey="traditional" 
        fill={COLORS.secondary} 
        name="Geleneksel Restoran"
        radius={[4, 4, 0, 0]}
      />
      <Bar 
        dataKey="cloud_kitchen" 
        fill={COLORS.primary} 
        name="Cloud Kitchen"
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
);

export const InvestmentPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="amount"
        label={({ category, percentage }) => `${category} (${percentage}%)`}
      >
        {data.map((entry, index) => (
          <Cell 
            key={`cell-${index}`} 
            fill={[
              COLORS.primary,
              COLORS.secondary, 
              COLORS.accent,
              '#F59E0B',
              '#10B981',
              '#8B5CF6',
              '#F97316'
            ][index % 7]} 
          />
        ))}
      </Pie>
      <Tooltip 
        formatter={(value, name) => [`${value.toLocaleString()} RMB`, name]}
        contentStyle={{ 
          backgroundColor: 'white', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px'
        }}
      />
    </PieChart>
  </ResponsiveContainer>
);

export const RevenueProjectionChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis dataKey="month" stroke="#6B7280" />
      <YAxis stroke="#6B7280" />
      <Tooltip 
        formatter={(value) => [`${value.toLocaleString()} RMB`, 'Gelir']}
        contentStyle={{ 
          backgroundColor: 'white', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px'
        }}
      />
      <Bar 
        dataKey="revenue" 
        fill={COLORS.primary}
        radius={[4, 4, 0, 0]}
        name="Aylık Gelir"
      />
    </BarChart>
  </ResponsiveContainer>
);

export const DemographicsChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
        dataKey="percentage"
        label={({ age, percentage }) => `${age}: ${percentage}%`}
      >
        {data.map((entry, index) => (
          <Cell 
            key={`cell-${index}`} 
            fill={[COLORS.primary, COLORS.secondary, COLORS.accent][index]} 
          />
        ))}
      </Pie>
      <Tooltip 
        formatter={(value, name) => [`${value}%`, 'Yüzde']}
        contentStyle={{ 
          backgroundColor: 'white', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px'
        }}
      />
    </PieChart>
  </ResponsiveContainer>
);