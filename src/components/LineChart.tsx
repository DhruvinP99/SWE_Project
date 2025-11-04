import { Transaction } from '../lib/supabase';
import { useState } from 'react';

interface LineChartProps {
  transactions: Transaction[];
  days?: number;
}

export function LineChart({ transactions, days = 30 }: LineChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getDailyData = () => {
    const data: { date: Date; dateStr: string; amount: number }[] = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const dayTransactions = transactions.filter(t => {
        const transDate = new Date(t.transaction_date);
        transDate.setHours(0, 0, 0, 0);
        return transDate.getTime() === date.getTime();
      });

      const amount = dayTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

      data.push({
        date,
        dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        amount
      });
    }

    return data;
  };

  const dailyData = getDailyData();
  const maxAmount = Math.max(...dailyData.map(d => d.amount), 100);
  const avgAmount = dailyData.reduce((sum, d) => sum + d.amount, 0) / dailyData.length;

  const chartWidth = 800;
  const chartHeight = 300;
  const padding = { top: 40, right: 20, bottom: 60, left: 60 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const xStep = innerWidth / (dailyData.length - 1);
  const yScale = innerHeight / maxAmount;

  const points = dailyData.map((d, i) => ({
    x: padding.left + i * xStep,
    y: padding.top + innerHeight - d.amount * yScale,
    ...d
  }));

  const pathD = points.reduce((path, point, i) => {
    if (i === 0) {
      return `M ${point.x} ${point.y}`;
    }
    const prevPoint = points[i - 1];
    const cpX = (prevPoint.x + point.x) / 2;
    return `${path} C ${cpX} ${prevPoint.y}, ${cpX} ${point.y}, ${point.x} ${point.y}`;
  }, '');

  const areaPathD = `${pathD} L ${points[points.length - 1].x} ${padding.top + innerHeight} L ${padding.left} ${padding.top + innerHeight} Z`;

  const yAxisLabels = [0, maxAmount / 2, maxAmount];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Daily Spending Trend</h3>
        <div className="text-sm text-gray-600">
          Last {days} days • Avg: <span className="font-semibold text-gray-900">${avgAmount.toFixed(2)}/day</span>
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full"
          style={{ maxHeight: '400px' }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {yAxisLabels.map((label, i) => {
            const y = padding.top + innerHeight - (label / maxAmount) * innerHeight;
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray={i === 0 ? "0" : "4 4"}
                />
                <text
                  x={padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="text-xs fill-gray-600"
                >
                  ${label.toFixed(0)}
                </text>
              </g>
            );
          })}

          <path d={areaPathD} fill="url(#areaGradient)" />

          <path
            d={pathD}
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((point, i) => {
            const showLabel = i % Math.ceil(points.length / 7) === 0 || i === points.length - 1;

            return (
              <g key={i}>
                {showLabel && (
                  <text
                    x={point.x}
                    y={chartHeight - padding.bottom + 20}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                  >
                    {point.dateStr}
                  </text>
                )}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={hoveredIndex === i ? 6 : 4}
                  fill="white"
                  stroke="#f97316"
                  strokeWidth="2"
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                {hoveredIndex === i && (
                  <>
                    <rect
                      x={point.x - 50}
                      y={point.y - 50}
                      width="100"
                      height="40"
                      rx="6"
                      fill="#1f2937"
                      opacity="0.95"
                    />
                    <text
                      x={point.x}
                      y={point.y - 35}
                      textAnchor="middle"
                      className="text-xs fill-white font-medium"
                    >
                      {point.dateStr}
                    </text>
                    <text
                      x={point.x}
                      y={point.y - 20}
                      textAnchor="middle"
                      className="text-sm fill-white font-bold"
                    >
                      ${point.amount.toFixed(2)}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Total Spent</p>
          <p className="text-xl font-bold text-gray-900">
            ${dailyData.reduce((sum, d) => sum + d.amount, 0).toFixed(2)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Peak Day</p>
          <p className="text-xl font-bold text-orange-600">
            ${Math.max(...dailyData.map(d => d.amount)).toFixed(2)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Days Active</p>
          <p className="text-xl font-bold text-blue-600">
            {dailyData.filter(d => d.amount > 0).length}
          </p>
        </div>
      </div>
    </div>
  );
}
