// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import * as Icons from 'lucide-react';
import { Transaction, BudgetCategory } from '../lib/supabase';
interface TransactionsListProps {
  transactions: Transaction[];
  categories: BudgetCategory[];
  onDelete: (id: string) => void;
}
export function TransactionsList({
  transactions,
  categories,
  onDelete
}: TransactionsListProps) {
  if (stryMutAct_9fa48("742")) {
    {}
  } else {
    stryCov_9fa48("742");
    const getCategoryInfo = (categoryId: string) => {
      if (stryMutAct_9fa48("743")) {
        {}
      } else {
        stryCov_9fa48("743");
        return categories.find(stryMutAct_9fa48("744") ? () => undefined : (stryCov_9fa48("744"), c => stryMutAct_9fa48("747") ? c.id !== categoryId : stryMutAct_9fa48("746") ? false : stryMutAct_9fa48("745") ? true : (stryCov_9fa48("745", "746", "747"), c.id === categoryId)));
      }
    };
    const sortedTransactions = stryMutAct_9fa48("748") ? [...transactions] : (stryCov_9fa48("748"), (stryMutAct_9fa48("749") ? [] : (stryCov_9fa48("749"), [...transactions])).sort(stryMutAct_9fa48("750") ? () => undefined : (stryCov_9fa48("750"), (a, b) => stryMutAct_9fa48("751") ? new Date(b.transaction_date).getTime() + new Date(a.transaction_date).getTime() : (stryCov_9fa48("751"), new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime()))));
    if (stryMutAct_9fa48("754") ? transactions.length !== 0 : stryMutAct_9fa48("753") ? false : stryMutAct_9fa48("752") ? true : (stryCov_9fa48("752", "753", "754"), transactions.length === 0)) {
      if (stryMutAct_9fa48("755")) {
        {}
      } else {
        stryCov_9fa48("755");
        return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icons.Receipt size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">No transactions yet. Add your first transaction to start tracking!</p>
      </div>;
      }
    }
    return <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {sortedTransactions.map(transaction => {
          if (stryMutAct_9fa48("756")) {
            {}
          } else {
            stryCov_9fa48("756");
            const category = getCategoryInfo(transaction.category_id);
            const Icon = category ? stryMutAct_9fa48("759") ? (Icons as any)[category.icon] && Icons.DollarSign : stryMutAct_9fa48("758") ? false : stryMutAct_9fa48("757") ? true : (stryCov_9fa48("757", "758", "759"), (Icons as any)[category.icon] || Icons.DollarSign) : Icons.DollarSign;
            return <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {stryMutAct_9fa48("762") ? category || <div className="p-2 rounded-lg" style={{
                    backgroundColor: `${category.color}20`
                  }}>
                      <Icon size={20} style={{
                      color: category.color
                    }} />
                    </div> : stryMutAct_9fa48("761") ? false : stryMutAct_9fa48("760") ? true : (stryCov_9fa48("760", "761", "762"), category && <div className="p-2 rounded-lg" style={stryMutAct_9fa48("763") ? {} : (stryCov_9fa48("763"), {
                    backgroundColor: stryMutAct_9fa48("764") ? `` : (stryCov_9fa48("764"), `${category.color}20`)
                  })}>
                      <Icon size={20} style={stryMutAct_9fa48("765") ? {} : (stryCov_9fa48("765"), {
                      color: category.color
                    })} />
                    </div>)}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-gray-500">{stryMutAct_9fa48("766") ? category.name : (stryCov_9fa48("766"), category?.name)}</p>
                      <span className="text-gray-300">•</span>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.transaction_date).toLocaleDateString(stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), 'en-US'), stryMutAct_9fa48("768") ? {} : (stryCov_9fa48("768"), {
                          month: stryMutAct_9fa48("769") ? "" : (stryCov_9fa48("769"), 'short'),
                          day: stryMutAct_9fa48("770") ? "" : (stryCov_9fa48("770"), 'numeric'),
                          year: stryMutAct_9fa48("771") ? "" : (stryCov_9fa48("771"), 'numeric')
                        }))}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </span>
                  <button onClick={stryMutAct_9fa48("772") ? () => undefined : (stryCov_9fa48("772"), () => onDelete(transaction.id))} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Icons.Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>;
          }
        })}
      </div>
    </div>;
  }
}