import { BudgetCategory, Transaction } from '../lib/supabase';
import { useState } from 'react';

interface PieChartProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
}

export function PieChart({ categories, transactions }: PieChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSpentByCategory = (categoryId: string) => {
    return transactions
      .filter(t => t.category_id === categoryId)
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
  };

  const totalSpent = transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

  const chartData = categories
    .map(category => ({
      ...category,
      spent: getSpentByCategory(category.id),
      percentage: totalSpent > 0 ? (getSpentByCategory(category.id) / totalSpent) * 100 : 0
    }))
    .filter(item => item.spent > 0)
    .sort((a, b) => b.spent - a.spent);

  if (chartData.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No spending data available</p>
      </div>
    );
  }

  let currentAngle = -90;
  const slices = chartData.map((item, index) => {
    const angle = (item.percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 100 + 80 * Math.cos(startRad);
    const y1 = 100 + 80 * Math.sin(startRad);
    const x2 = 100 + 80 * Math.cos(endRad);
    const y2 = 100 + 80 * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

    return {
      ...item,
      path,
      index
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending Distribution</h3>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative" style={{ width: '280px', height: '280px' }}>
          <svg viewBox="0 0 200 200" className="w-full h-full transform rotate-0">
            {slices.map((slice) => (
              <g key={slice.id}>
                <path
                  d={slice.path}
                  fill={slice.color}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    opacity: hoveredIndex === null || hoveredIndex === slice.index ? 1 : 0.3,
                    transform:
                      hoveredIndex === slice.index
                        ? 'scale(1.05)'
                        : 'scale(1)',
                    transformOrigin: '100px 100px'
                  }}
                  onMouseEnter={() => setHoveredIndex(slice.index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </g>
            ))}
            <circle cx="100" cy="100" r="45" fill="white" />
            <text
              x="100"
              y="95"
              textAnchor="middle"
              className="text-xs fill-gray-600 font-medium"
            >
              Total
            </text>
            <text
              x="100"
              y="110"
              textAnchor="middle"
              className="text-sm fill-gray-900 font-bold"
            >
              ${totalSpent.toFixed(0)}
            </text>
          </svg>
        </div>

        <div className="flex-1 w-full">
          <div className="space-y-3">
            {chartData.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: hoveredIndex === index ? `${item.color}15` : 'transparent',
                  borderLeft: `4px solid ${item.color}`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${item.spent.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">{item.percentage.toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
