import * as Icons from 'lucide-react';
import { Transaction, BudgetCategory } from '../lib/supabase';

interface TransactionsListProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  onDelete: (id: string) => void;
}

export function TransactionsList({ transactions, categories, onDelete }: TransactionsListProps) {
  const getCategoryInfo = (categoryId: string) => {
    return categories.find(c => c.id === categoryId);
  };

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime()
  );

  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icons.Receipt size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">No transactions yet. Add your first transaction to start tracking!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {sortedTransactions.map((transaction) => {
          const category = getCategoryInfo(transaction.category_id);
          const Icon = category ? (Icons as any)[category.icon] || Icons.DollarSign : Icons.DollarSign;

          return (
            <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {category && (
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Icon size={20} style={{ color: category.color }} />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-gray-500">{category?.name}</p>
                      <span className="text-gray-300">•</span>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.transaction_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onDelete(transaction.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Icons.Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
