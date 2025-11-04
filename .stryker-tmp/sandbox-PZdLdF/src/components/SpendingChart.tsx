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
import { BudgetCategory, Transaction } from '../lib/supabase';
interface SpendingChartProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
}
export function SpendingChart({
  categories,
  transactions
}: SpendingChartProps) {
  if (stryMutAct_9fa48("564")) {
    {}
  } else {
    stryCov_9fa48("564");
    const getSpentByCategory = (categoryId: string) => {
      if (stryMutAct_9fa48("565")) {
        {}
      } else {
        stryCov_9fa48("565");
        return stryMutAct_9fa48("566") ? transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) : (stryCov_9fa48("566"), transactions.filter(stryMutAct_9fa48("567") ? () => undefined : (stryCov_9fa48("567"), t => stryMutAct_9fa48("570") ? t.category_id !== categoryId : stryMutAct_9fa48("569") ? false : stryMutAct_9fa48("568") ? true : (stryCov_9fa48("568", "569", "570"), t.category_id === categoryId))).reduce(stryMutAct_9fa48("571") ? () => undefined : (stryCov_9fa48("571"), (sum, t) => stryMutAct_9fa48("572") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("572"), sum + parseFloat(t.amount.toString()))), 0));
      }
    };
    const totalSpent = transactions.reduce(stryMutAct_9fa48("573") ? () => undefined : (stryCov_9fa48("573"), (sum, t) => stryMutAct_9fa48("574") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("574"), sum + parseFloat(t.amount.toString()))), 0);
    const chartData = stryMutAct_9fa48("575") ? categories.map(category => ({
      ...category,
      spent: getSpentByCategory(category.id),
      percentage: totalSpent > 0 ? getSpentByCategory(category.id) / totalSpent * 100 : 0
    })) : (stryCov_9fa48("575"), categories.map(stryMutAct_9fa48("576") ? () => undefined : (stryCov_9fa48("576"), category => stryMutAct_9fa48("577") ? {} : (stryCov_9fa48("577"), {
      ...category,
      spent: getSpentByCategory(category.id),
      percentage: (stryMutAct_9fa48("581") ? totalSpent <= 0 : stryMutAct_9fa48("580") ? totalSpent >= 0 : stryMutAct_9fa48("579") ? false : stryMutAct_9fa48("578") ? true : (stryCov_9fa48("578", "579", "580", "581"), totalSpent > 0)) ? stryMutAct_9fa48("582") ? getSpentByCategory(category.id) / totalSpent / 100 : (stryCov_9fa48("582"), (stryMutAct_9fa48("583") ? getSpentByCategory(category.id) * totalSpent : (stryCov_9fa48("583"), getSpentByCategory(category.id) / totalSpent)) * 100) : 0
    }))).filter(stryMutAct_9fa48("584") ? () => undefined : (stryCov_9fa48("584"), item => stryMutAct_9fa48("588") ? item.spent <= 0 : stryMutAct_9fa48("587") ? item.spent >= 0 : stryMutAct_9fa48("586") ? false : stryMutAct_9fa48("585") ? true : (stryCov_9fa48("585", "586", "587", "588"), item.spent > 0))));
    const maxSpent = stryMutAct_9fa48("589") ? Math.min(...chartData.map(d => d.spent), 1) : (stryCov_9fa48("589"), Math.max(...chartData.map(stryMutAct_9fa48("590") ? () => undefined : (stryCov_9fa48("590"), d => d.spent)), 1));
    if (stryMutAct_9fa48("593") ? chartData.length !== 0 : stryMutAct_9fa48("592") ? false : stryMutAct_9fa48("591") ? true : (stryCov_9fa48("591", "592", "593"), chartData.length === 0)) {
      if (stryMutAct_9fa48("594")) {
        {}
      } else {
        stryCov_9fa48("594");
        return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No spending data yet. Add transactions to see charts!</p>
      </div>;
      }
    }
    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</h3>
        <div className="space-y-4">
          {chartData.map(stryMutAct_9fa48("595") ? () => undefined : (stryCov_9fa48("595"), item => <div key={item.id}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                <span className="text-sm font-semibold text-gray-900">
                  ${item.spent.toFixed(2)} ({item.percentage.toFixed(1)}%)
                </span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={stryMutAct_9fa48("596") ? {} : (stryCov_9fa48("596"), {
                width: stryMutAct_9fa48("597") ? `` : (stryCov_9fa48("597"), `${stryMutAct_9fa48("598") ? item.spent / maxSpent / 100 : (stryCov_9fa48("598"), (stryMutAct_9fa48("599") ? item.spent * maxSpent : (stryCov_9fa48("599"), item.spent / maxSpent)) * 100)}%`),
                backgroundColor: item.color
              })} />
              </div>
            </div>))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget vs Actual</h3>
        <div className="space-y-4">
          {chartData.map(item => {
            if (stryMutAct_9fa48("600")) {
              {}
            } else {
              stryCov_9fa48("600");
              const remaining = stryMutAct_9fa48("601") ? item.budget_amount + item.spent : (stryCov_9fa48("601"), item.budget_amount - item.spent);
              const isOverBudget = stryMutAct_9fa48("605") ? remaining >= 0 : stryMutAct_9fa48("604") ? remaining <= 0 : stryMutAct_9fa48("603") ? false : stryMutAct_9fa48("602") ? true : (stryCov_9fa48("602", "603", "604", "605"), remaining < 0);
              return <div key={item.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">${item.spent.toFixed(2)}</span>
                    <span className="text-gray-500"> / ${item.budget_amount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute h-full rounded-full transition-all duration-500" style={stryMutAct_9fa48("606") ? {} : (stryCov_9fa48("606"), {
                    width: stryMutAct_9fa48("607") ? `` : (stryCov_9fa48("607"), `${stryMutAct_9fa48("608") ? Math.max(item.spent / item.budget_amount * 100, 100) : (stryCov_9fa48("608"), Math.min(stryMutAct_9fa48("609") ? item.spent / item.budget_amount / 100 : (stryCov_9fa48("609"), (stryMutAct_9fa48("610") ? item.spent * item.budget_amount : (stryCov_9fa48("610"), item.spent / item.budget_amount)) * 100), 100))}%`),
                    backgroundColor: isOverBudget ? stryMutAct_9fa48("611") ? "" : (stryCov_9fa48("611"), '#ef4444') : item.color
                  })} />
                  {stryMutAct_9fa48("614") ? isOverBudget || <div className="absolute h-full bg-red-200 rounded-full" style={{
                    left: '100%',
                    width: `${(item.spent - item.budget_amount) / item.budget_amount * 100}%`
                  }} /> : stryMutAct_9fa48("613") ? false : stryMutAct_9fa48("612") ? true : (stryCov_9fa48("612", "613", "614"), isOverBudget && <div className="absolute h-full bg-red-200 rounded-full" style={stryMutAct_9fa48("615") ? {} : (stryCov_9fa48("615"), {
                    left: stryMutAct_9fa48("616") ? "" : (stryCov_9fa48("616"), '100%'),
                    width: stryMutAct_9fa48("617") ? `` : (stryCov_9fa48("617"), `${stryMutAct_9fa48("618") ? (item.spent - item.budget_amount) / item.budget_amount / 100 : (stryCov_9fa48("618"), (stryMutAct_9fa48("619") ? (item.spent - item.budget_amount) * item.budget_amount : (stryCov_9fa48("619"), (stryMutAct_9fa48("620") ? item.spent + item.budget_amount : (stryCov_9fa48("620"), item.spent - item.budget_amount)) / item.budget_amount)) * 100)}%`)
                  })} />)}
                </div>
                {stryMutAct_9fa48("623") ? isOverBudget || <p className="text-xs text-red-600 mt-1">
                    Over budget by ${Math.abs(remaining).toFixed(2)}
                  </p> : stryMutAct_9fa48("622") ? false : stryMutAct_9fa48("621") ? true : (stryCov_9fa48("621", "622", "623"), isOverBudget && <p className="text-xs text-red-600 mt-1">
                    Over budget by ${Math.abs(remaining).toFixed(2)}
                  </p>)}
              </div>;
            }
          })}
        </div>
      </div>
    </div>;
  }
}