import { useEffect, useState } from 'react';
import { Plus, PiggyBank, LogOut, BarChart3 } from 'lucide-react';
import { supabase, BudgetCategory, Transaction } from '../lib/supabase';
import { BudgetCard } from '../components/BudgetCard';
import { BudgetSummary } from '../components/BudgetSummary';
import { AddCategoryModal } from '../components/AddCategoryModal';
import { AddTransactionModal } from '../components/AddTransactionModal';
import { TransactionsList } from '../components/TransactionsList';
import { ExportPDF } from '../components/ExportPDF';
import { useAuth } from '../contexts/AuthContext';

interface DashboardPageProps {
  onNavigateToAnalysis: () => void;
}

export function DashboardPage({ onNavigateToAnalysis }: DashboardPageProps) {
  const { user, signOut } = useAuth();
  const [categories, setCategories] = useState<BudgetCategory[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

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

  async function addCategory(name: string, budget: number, color: string, icon: string) {
    if (!user) return;

    const { data, error } = await supabase
      .from('budget_categories')
      .insert([{ name, budget_amount: budget, color, icon, user_id: user.id }])
      .select()
      .single();

    if (error) {
      console.error('Error adding category:', error);
      return;
    }

    if (data) {
      setCategories([...categories, data]);
    }
  }

  async function updateCategoryBudget(id: string, amount: number) {
    const { error } = await supabase
      .from('budget_categories')
      .update({ budget_amount: amount, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      console.error('Error updating category:', error);
      return;
    }

    setCategories(categories.map(c => c.id === id ? { ...c, budget_amount: amount } : c));
  }

  async function deleteCategory(id: string) {
    const { error } = await supabase
      .from('budget_categories')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting category:', error);
      return;
    }

    setCategories(categories.filter(c => c.id !== id));
  }

  async function addTransaction(categoryId: string, amount: number, description: string, date: string) {
    if (!user) return;

    const { data, error } = await supabase
      .from('transactions')
      .insert([{ category_id: categoryId, amount, description, transaction_date: date, user_id: user.id }])
      .select()
      .single();

    if (error) {
      console.error('Error adding transaction:', error);
      return;
    }

    if (data) {
      setTransactions([data, ...transactions]);
    }
  }

  async function deleteTransaction(id: string) {
    const { error } = await supabase
      .from('transactions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting transaction:', error);
      return;
    }

    setTransactions(transactions.filter(t => t.id !== id));
  }

  const getSpentByCategory = (categoryId: string) => {
    return transactions
      .filter(t => t.category_id === categoryId)
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  };

  const totalBudget = categories.reduce((sum, c) => sum + parseFloat(c.budget_amount.toString()), 0);
  const totalSpent = transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-500 rounded-xl shadow-lg">
              <PiggyBank size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Budget Tracker</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onNavigateToAnalysis}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-sm"
            >
              <BarChart3 size={20} />
              Analysis
            </button>
            <ExportPDF
              categories={categories}
              transactions={transactions}
              userEmail={user?.email || ''}
            />
            <button
              onClick={() => setShowTransactionModal(true)}
              disabled={categories.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <Plus size={20} />
              Add Transaction
            </button>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-sm"
            >
              <Plus size={20} />
              Add Category
            </button>
            <button
              onClick={signOut}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        <BudgetSummary totalBudget={totalBudget} totalSpent={totalSpent} />

        {categories.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <PiggyBank size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No budget categories yet</h3>
            <p className="text-gray-600 mb-6">Create your first budget category to get started</p>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Plus size={20} />
              Create Category
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(category => (
                  <BudgetCard
                    key={category.id}
                    category={category}
                    spent={getSpentByCategory(category.id)}
                    onUpdate={updateCategoryBudget}
                    onDelete={deleteCategory}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Transactions</h2>
              <TransactionsList
                transactions={transactions}
                categories={categories}
                onDelete={deleteTransaction}
              />
            </div>
          </>
        )}
      </div>

      {showCategoryModal && (
        <AddCategoryModal
          onClose={() => setShowCategoryModal(false)}
          onAdd={addCategory}
        />
      )}

      {showTransactionModal && (
        <AddTransactionModal
          categories={categories}
          onClose={() => setShowTransactionModal(false)}
          onAdd={addTransaction}
        />
      )}
    </div>
  );
}
