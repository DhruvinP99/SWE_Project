import { useState } from 'react';
import * as Icons from 'lucide-react';
import { BudgetCategory } from '../lib/supabase';

interface BudgetCardProps {
  category: BudgetCategory;
  spent: number;
  onUpdate: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
}

export function BudgetCard({ category, spent, onUpdate, onDelete }: BudgetCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newAmount, setNewAmount] = useState(category.budget_amount.toString());

  const remaining = category.budget_amount - spent;
  const percentUsed = (spent / category.budget_amount) * 100;

  const Icon = (Icons as any)[category.icon] || Icons.DollarSign;

  const handleSave = () => {
    const amount = parseFloat(newAmount);
    if (!isNaN(amount) && amount > 0) {
      onUpdate(category.id, amount);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <Icon size={24} style={{ color: category.color }} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
            <p className="text-sm text-gray-500">Monthly Budget</p>
          </div>
        </div>
        <button
          onClick={() => onDelete(category.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Icons.Trash2 size={18} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                className="w-24 px-2 py-1 border border-gray-300 rounded text-lg font-bold"
                autoFocus
              />
              <button onClick={handleSave} className="text-green-600 hover:text-green-700">
                <Icons.Check size={20} />
              </button>
              <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-gray-600">
                <Icons.X size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ${category.budget_amount.toFixed(2)}
              </span>
              <button
                onClick={() => setIsEditing(true)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icons.Edit2 size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(percentUsed, 100)}%`,
              backgroundColor: percentUsed > 100 ? '#ef4444' : category.color,
            }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Spent: <span className="font-semibold text-gray-900">${spent.toFixed(2)}</span>
          </span>
          <span className={`font-semibold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {remaining >= 0 ? 'Left: ' : 'Over: '}${Math.abs(remaining).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
