import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { BudgetCategory, Transaction } from '../lib/supabase';

interface SpendingInsightsProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
}

export function SpendingInsights({ categories, transactions }: SpendingInsightsProps) {
  const getSpentByCategory = (categoryId: string) => {
    return transactions
      .filter(t => t.category_id === categoryId)
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  };

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const thisMonthTransactions = transactions.filter(t => {
    const date = new Date(t.transaction_date);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  const lastMonthTransactions = transactions.filter(t => {
    const date = new Date(t.transaction_date);
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    return date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear;
  });

  const thisMonthSpent = thisMonthTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  const lastMonthSpent = lastMonthTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  const monthChange = lastMonthSpent > 0 ? ((thisMonthSpent - lastMonthSpent) / lastMonthSpent) * 100 : 0;

  const overBudgetCategories = categories.filter(cat => {
    const spent = getSpentByCategory(cat.id);
    return spent > cat.budget_amount;
  });

  const onTrackCategories = categories.filter(cat => {
    const spent = getSpentByCategory(cat.id);
    return spent <= cat.budget_amount && spent > 0;
  });

  const avgTransactionAmount = transactions.length > 0
    ? transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) / transactions.length
    : 0;

  const mostExpensiveCategory = categories.reduce((max, cat) => {
    const spent = getSpentByCategory(cat.id);
    const maxSpent = getSpentByCategory(max.id);
    return spent > maxSpent ? cat : max;
  }, categories[0]);

  const mostExpensiveCategorySpent = mostExpensiveCategory ? getSpentByCategory(mostExpensiveCategory.id) : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending Insights</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            {monthChange > 0 ? (
              <TrendingUp className="text-blue-600 flex-shrink-0 mt-1" size={20} />
            ) : (
              <TrendingDown className="text-green-600 flex-shrink-0 mt-1" size={20} />
            )}
            <div>
              <p className="font-medium text-gray-900">Monthly Comparison</p>
              <p className="text-sm text-gray-600 mt-1">
                You've spent <span className="font-semibold">${thisMonthSpent.toFixed(2)}</span> this month.
                {lastMonthSpent > 0 && (
                  <span>
                    {' '}That's{' '}
                    <span className={monthChange > 0 ? 'text-red-600' : 'text-green-600'}>
                      {Math.abs(monthChange).toFixed(1)}% {monthChange > 0 ? 'more' : 'less'}
                    </span>
                    {' '}than last month.
                  </span>
                )}
              </p>
            </div>
          </div>

          {overBudgetCategories.length > 0 ? (
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">Budget Alerts</p>
                <p className="text-sm text-gray-600 mt-1">
                  You're over budget in <span className="font-semibold">{overBudgetCategories.length}</span>{' '}
                  {overBudgetCategories.length === 1 ? 'category' : 'categories'}:
                </p>
                <ul className="mt-2 space-y-1">
                  {overBudgetCategories.slice(0, 3).map(cat => {
                    const spent = getSpentByCategory(cat.id);
                    const over = spent - cat.budget_amount;
                    return (
                      <li key={cat.id} className="text-sm text-gray-700">
                        <span className="font-medium">{cat.name}</span> - ${over.toFixed(2)} over
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">Great Job!</p>
                <p className="text-sm text-gray-600 mt-1">
                  All your spending is within budget. Keep up the good work!
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Average Transaction</p>
            <p className="text-2xl font-bold text-gray-900">${avgTransactionAmount.toFixed(2)}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Largest Spending Category</p>
            <p className="text-xl font-semibold text-gray-900">{mostExpensiveCategory?.name || 'N/A'}</p>
            <p className="text-sm text-gray-600 mt-1">${mostExpensiveCategorySpent.toFixed(2)} spent</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Categories On Track</p>
            <p className="text-2xl font-bold text-green-600">
              {onTrackCategories.length} / {categories.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
