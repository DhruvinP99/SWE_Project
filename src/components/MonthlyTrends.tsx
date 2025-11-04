import { Transaction } from '../lib/supabase';

interface MonthlyTrendsProps {
  transactions: Transaction[];
}

export function MonthlyTrends({ transactions }: MonthlyTrendsProps) {
  const getLast6Months = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        date,
        name: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        month: date.getMonth(),
        year: date.getFullYear()
      });
    }

    return months;
  };

  const months = getLast6Months();

  const monthlyData = months.map(m => {
    const monthTransactions = transactions.filter(t => {
      const transDate = new Date(t.transaction_date);
      return transDate.getMonth() === m.month && transDate.getFullYear() === m.year;
    });

    const total = monthTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

    return {
      ...m,
      total,
      count: monthTransactions.length
    };
  });

  const maxSpending = Math.max(...monthlyData.map(m => m.total), 1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">6-Month Spending Trend</h3>

      <div className="space-y-6">
        <div className="flex items-end justify-between gap-2 h-64">
          {monthlyData.map((month, index) => {
            const heightPercent = (month.total / maxSpending) * 100;

            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex flex-col items-center justify-end h-full">
                  <span className="text-xs font-semibold text-gray-700 mb-2">
                    ${month.total.toFixed(0)}
                  </span>
                  <div
                    className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg transition-all duration-500 hover:from-orange-600 hover:to-orange-500 relative group"
                    style={{ height: `${heightPercent}%`, minHeight: month.total > 0 ? '8px' : '0' }}
                  >
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs pointer-events-none">
                      {month.count} transactions
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-600 whitespace-nowrap">
                    {month.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">6-Month Total</p>
              <p className="text-xl font-bold text-gray-900">
                ${monthlyData.reduce((sum, m) => sum + m.total, 0).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Monthly Average</p>
              <p className="text-xl font-bold text-gray-900">
                ${(monthlyData.reduce((sum, m) => sum + m.total, 0) / 6).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-xl font-bold text-orange-500">
                ${monthlyData[monthlyData.length - 1].total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
