import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface BudgetSummaryProps {
  totalBudget: number;
  totalSpent: number;
}

export function BudgetSummary({ totalBudget, totalSpent }: BudgetSummaryProps) {
  const remaining = totalBudget - totalSpent;
  const percentUsed = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Wallet size={24} />
          </div>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            Total Budget
          </span>
        </div>
        <p className="text-3xl font-bold mb-1">${totalBudget.toFixed(2)}</p>
        <p className="text-orange-100 text-sm">Monthly allocation</p>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <TrendingDown size={24} />
          </div>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            Spent
          </span>
        </div>
        <p className="text-3xl font-bold mb-1">${totalSpent.toFixed(2)}</p>
        <p className="text-blue-100 text-sm">{percentUsed.toFixed(1)}% of budget</p>
      </div>

      <div className={`bg-gradient-to-br ${
        remaining >= 0 ? 'from-green-500 to-green-600' : 'from-red-500 to-red-600'
      } rounded-xl shadow-lg p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            {remaining >= 0 ? <TrendingUp size={24} /> : <DollarSign size={24} />}
          </div>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            {remaining >= 0 ? 'Remaining' : 'Over Budget'}
          </span>
        </div>
        <p className="text-3xl font-bold mb-1">${Math.abs(remaining).toFixed(2)}</p>
        <p className={`text-sm ${remaining >= 0 ? 'text-green-100' : 'text-red-100'}`}>
          {remaining >= 0 ? 'Available to spend' : 'Budget exceeded'}
        </p>
      </div>
    </div>
  );
}
