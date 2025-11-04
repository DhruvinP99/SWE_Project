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
import { Transaction } from '../lib/supabase';
interface MonthlyTrendsProps {
  transactions: Transaction[];
}
export function MonthlyTrends({
  transactions
}: MonthlyTrendsProps) {
  if (stryMutAct_9fa48("432")) {
    {}
  } else {
    stryCov_9fa48("432");
    const getLast6Months = () => {
      if (stryMutAct_9fa48("433")) {
        {}
      } else {
        stryCov_9fa48("433");
        const months = stryMutAct_9fa48("434") ? ["Stryker was here"] : (stryCov_9fa48("434"), []);
        const now = new Date();
        for (let i = 5; stryMutAct_9fa48("437") ? i < 0 : stryMutAct_9fa48("436") ? i > 0 : stryMutAct_9fa48("435") ? false : (stryCov_9fa48("435", "436", "437"), i >= 0); stryMutAct_9fa48("438") ? i++ : (stryCov_9fa48("438"), i--)) {
          if (stryMutAct_9fa48("439")) {
            {}
          } else {
            stryCov_9fa48("439");
            const date = new Date(now.getFullYear(), stryMutAct_9fa48("440") ? now.getMonth() + i : (stryCov_9fa48("440"), now.getMonth() - i), 1);
            months.push(stryMutAct_9fa48("441") ? {} : (stryCov_9fa48("441"), {
              date,
              name: date.toLocaleDateString(stryMutAct_9fa48("442") ? "" : (stryCov_9fa48("442"), 'en-US'), stryMutAct_9fa48("443") ? {} : (stryCov_9fa48("443"), {
                month: stryMutAct_9fa48("444") ? "" : (stryCov_9fa48("444"), 'short'),
                year: stryMutAct_9fa48("445") ? "" : (stryCov_9fa48("445"), 'numeric')
              })),
              month: date.getMonth(),
              year: date.getFullYear()
            }));
          }
        }
        return months;
      }
    };
    const months = getLast6Months();
    const monthlyData = months.map(m => {
      if (stryMutAct_9fa48("446")) {
        {}
      } else {
        stryCov_9fa48("446");
        const monthTransactions = stryMutAct_9fa48("447") ? transactions : (stryCov_9fa48("447"), transactions.filter(t => {
          if (stryMutAct_9fa48("448")) {
            {}
          } else {
            stryCov_9fa48("448");
            const transDate = new Date(t.transaction_date);
            return stryMutAct_9fa48("451") ? transDate.getMonth() === m.month || transDate.getFullYear() === m.year : stryMutAct_9fa48("450") ? false : stryMutAct_9fa48("449") ? true : (stryCov_9fa48("449", "450", "451"), (stryMutAct_9fa48("453") ? transDate.getMonth() !== m.month : stryMutAct_9fa48("452") ? true : (stryCov_9fa48("452", "453"), transDate.getMonth() === m.month)) && (stryMutAct_9fa48("455") ? transDate.getFullYear() !== m.year : stryMutAct_9fa48("454") ? true : (stryCov_9fa48("454", "455"), transDate.getFullYear() === m.year)));
          }
        }));
        const total = monthTransactions.reduce(stryMutAct_9fa48("456") ? () => undefined : (stryCov_9fa48("456"), (sum, t) => stryMutAct_9fa48("457") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("457"), sum + parseFloat(t.amount.toString()))), 0);
        return stryMutAct_9fa48("458") ? {} : (stryCov_9fa48("458"), {
          ...m,
          total,
          count: monthTransactions.length
        });
      }
    });
    const maxSpending = stryMutAct_9fa48("459") ? Math.min(...monthlyData.map(m => m.total), 1) : (stryCov_9fa48("459"), Math.max(...monthlyData.map(stryMutAct_9fa48("460") ? () => undefined : (stryCov_9fa48("460"), m => m.total)), 1));
    return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">6-Month Spending Trend</h3>

      <div className="space-y-6">
        <div className="flex items-end justify-between gap-2 h-64">
          {monthlyData.map((month, index) => {
            if (stryMutAct_9fa48("461")) {
              {}
            } else {
              stryCov_9fa48("461");
              const heightPercent = stryMutAct_9fa48("462") ? month.total / maxSpending / 100 : (stryCov_9fa48("462"), (stryMutAct_9fa48("463") ? month.total * maxSpending : (stryCov_9fa48("463"), month.total / maxSpending)) * 100);
              return <div key={index} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex flex-col items-center justify-end h-full">
                  <span className="text-xs font-semibold text-gray-700 mb-2">
                    ${month.total.toFixed(0)}
                  </span>
                  <div className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg transition-all duration-500 hover:from-orange-600 hover:to-orange-500 relative group" style={stryMutAct_9fa48("464") ? {} : (stryCov_9fa48("464"), {
                    height: stryMutAct_9fa48("465") ? `` : (stryCov_9fa48("465"), `${heightPercent}%`),
                    minHeight: (stryMutAct_9fa48("469") ? month.total <= 0 : stryMutAct_9fa48("468") ? month.total >= 0 : stryMutAct_9fa48("467") ? false : stryMutAct_9fa48("466") ? true : (stryCov_9fa48("466", "467", "468", "469"), month.total > 0)) ? stryMutAct_9fa48("470") ? "" : (stryCov_9fa48("470"), '8px') : stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), '0')
                  })}>
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
              </div>;
            }
          })}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">6-Month Total</p>
              <p className="text-xl font-bold text-gray-900">
                ${monthlyData.reduce(stryMutAct_9fa48("472") ? () => undefined : (stryCov_9fa48("472"), (sum, m) => stryMutAct_9fa48("473") ? sum - m.total : (stryCov_9fa48("473"), sum + m.total)), 0).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Monthly Average</p>
              <p className="text-xl font-bold text-gray-900">
                ${(stryMutAct_9fa48("474") ? monthlyData.reduce((sum, m) => sum + m.total, 0) * 6 : (stryCov_9fa48("474"), monthlyData.reduce(stryMutAct_9fa48("475") ? () => undefined : (stryCov_9fa48("475"), (sum, m) => stryMutAct_9fa48("476") ? sum - m.total : (stryCov_9fa48("476"), sum + m.total)), 0) / 6)).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-xl font-bold text-orange-500">
                ${monthlyData[stryMutAct_9fa48("477") ? monthlyData.length + 1 : (stryCov_9fa48("477"), monthlyData.length - 1)].total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}