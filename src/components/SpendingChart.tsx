import { BudgetCategory, Transaction } from '../lib/supabase';

interface SpendingChartProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
}

export function SpendingChart({ categories, transactions }: SpendingChartProps) {
  const getSpentByCategory = (categoryId: string) => {
    return transactions
      .filter(t => t.category_id === categoryId)
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  };

  const totalSpent = transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

  const chartData = categories.map(category => ({
    ...category,
    spent: getSpentByCategory(category.id),
    percentage: totalSpent > 0 ? (getSpentByCategory(category.id) / totalSpent) * 100 : 0
  })).filter(item => item.spent > 0);

  const maxSpent = Math.max(...chartData.map(d => d.spent), 1);

  if (chartData.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No spending data yet. Add transactions to see charts!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</h3>
        <div className="space-y-4">
          {chartData.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                <span className="text-sm font-semibold text-gray-900">
                  ${item.spent.toFixed(2)} ({item.percentage.toFixed(1)}%)
                </span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(item.spent / maxSpent) * 100}%`,
                    backgroundColor: item.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget vs Actual</h3>
        <div className="space-y-4">
          {chartData.map((item) => {
            const remaining = item.budget_amount - item.spent;
            const isOverBudget = remaining < 0;

            return (
              <div key={item.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">${item.spent.toFixed(2)}</span>
                    <span className="text-gray-500"> / ${item.budget_amount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min((item.spent / item.budget_amount) * 100, 100)}%`,
                      backgroundColor: isOverBudget ? '#ef4444' : item.color
                    }}
                  />
                  {isOverBudget && (
                    <div
                      className="absolute h-full bg-red-200 rounded-full"
                      style={{
                        left: '100%',
                        width: `${((item.spent - item.budget_amount) / item.budget_amount) * 100}%`
                      }}
                    />
                  )}
                </div>
                {isOverBudget && (
                  <p className="text-xs text-red-600 mt-1">
                    Over budget by ${Math.abs(remaining).toFixed(2)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
