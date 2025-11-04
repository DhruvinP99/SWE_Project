import { useEffect, useState } from 'react';
import { BarChart3, Calendar, Filter, TrendingUp, DollarSign, Target } from 'lucide-react';
import { supabase, BudgetCategory, Transaction } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { PieChart } from '../components/PieChart';
import { LineChart } from '../components/LineChart';
import { SpendingChart } from '../components/SpendingChart';
import { MonthlyTrends } from '../components/MonthlyTrends';
import { SpendingInsights } from '../components/SpendingInsights';

interface AnalysisPageProps {
  onNavigateBack: () => void;
}

export function AnalysisPage({ onNavigateBack }: AnalysisPageProps) {
  const { user } = useAuth();
  const [categories, setCategories] = useState<BudgetCategory[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('30');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  useEffect(() => {
    applyFilters();
  }, [transactions, selectedCategory, dateRange, startDate, endDate]);

  async function loadData() {
    try {
      const [categoriesRes, transactionsRes] = await Promise.all([
        supabase.from('budget_categories').select('*').order('created_at', { ascending: true }),
        supabase.from('transactions').select('*').order('created_at', { ascending: false })
      ]);

      if (categoriesRes.data) setCategories(categoriesRes.data);
      if (transactionsRes.data) setTransactions(transactionsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }

  function applyFilters() {
    let filtered = [...transactions];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(t => t.category_id === selectedCategory);
    }

    if (dateRange === 'custom' && startDate && endDate) {
      filtered = filtered.filter(t => {
        const transDate = new Date(t.transaction_date);
        return transDate >= new Date(startDate) && transDate <= new Date(endDate);
      });
    } else if (dateRange !== 'all') {
      const days = parseInt(dateRange);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - days);
      filtered = filtered.filter(t => new Date(t.transaction_date) >= cutoffDate);
    }

    setFilteredTransactions(filtered);
  }

  const totalSpent = filteredTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  const totalBudget = categories.reduce((sum, c) => sum + parseFloat(c.budget_amount.toString()), 0);
  const transactionCount = filteredTransactions.length;
  const avgTransaction = transactionCount > 0 ? totalSpent / transactionCount : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500 rounded-xl shadow-lg">
              <BarChart3 size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analysis Dashboard</h1>
              <p className="text-gray-600">Detailed insights and trends</p>
            </div>
          </div>
          <button
            onClick={onNavigateBack}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
                <option value="365">Last Year</option>
                <option value="all">All Time</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            {dateRange === 'custom' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <DollarSign size={24} />
              <span className="text-sm opacity-80">Total Spent</span>
            </div>
            <p className="text-3xl font-bold">${totalSpent.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">{transactionCount} transactions</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Target size={24} />
              <span className="text-sm opacity-80">Total Budget</span>
            </div>
            <p className="text-3xl font-bold">${totalBudget.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">
              {totalSpent > totalBudget ? 'Over budget' : 'On track'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp size={24} />
              <span className="text-sm opacity-80">Avg Transaction</span>
            </div>
            <p className="text-3xl font-bold">${avgTransaction.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">Per transaction</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar size={24} />
              <span className="text-sm opacity-80">Remaining</span>
            </div>
            <p className="text-3xl font-bold">${Math.max(0, totalBudget - totalSpent).toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">
              {((Math.max(0, totalBudget - totalSpent) / totalBudget) * 100).toFixed(0)}% of budget
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <LineChart transactions={filteredTransactions} days={parseInt(dateRange) || 30} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PieChart categories={categories} transactions={filteredTransactions} />
            <MonthlyTrends transactions={filteredTransactions} />
          </div>

          <SpendingInsights categories={categories} transactions={filteredTransactions} />

          <SpendingChart categories={categories} transactions={filteredTransactions} />
        </div>
      </div>
    </div>
  );
}
