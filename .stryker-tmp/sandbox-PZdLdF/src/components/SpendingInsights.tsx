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
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { BudgetCategory, Transaction } from '../lib/supabase';
interface SpendingInsightsProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
}
export function SpendingInsights({
  categories,
  transactions
}: SpendingInsightsProps) {
  if (stryMutAct_9fa48("624")) {
    {}
  } else {
    stryCov_9fa48("624");
    const getSpentByCategory = (categoryId: string) => {
      if (stryMutAct_9fa48("625")) {
        {}
      } else {
        stryCov_9fa48("625");
        return stryMutAct_9fa48("626") ? transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) : (stryCov_9fa48("626"), transactions.filter(stryMutAct_9fa48("627") ? () => undefined : (stryCov_9fa48("627"), t => stryMutAct_9fa48("630") ? t.category_id !== categoryId : stryMutAct_9fa48("629") ? false : stryMutAct_9fa48("628") ? true : (stryCov_9fa48("628", "629", "630"), t.category_id === categoryId))).reduce(stryMutAct_9fa48("631") ? () => undefined : (stryCov_9fa48("631"), (sum, t) => stryMutAct_9fa48("632") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("632"), sum + parseFloat(t.amount.toString()))), 0));
      }
    };
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const thisMonthTransactions = stryMutAct_9fa48("633") ? transactions : (stryCov_9fa48("633"), transactions.filter(t => {
      if (stryMutAct_9fa48("634")) {
        {}
      } else {
        stryCov_9fa48("634");
        const date = new Date(t.transaction_date);
        return stryMutAct_9fa48("637") ? date.getMonth() === currentMonth || date.getFullYear() === currentYear : stryMutAct_9fa48("636") ? false : stryMutAct_9fa48("635") ? true : (stryCov_9fa48("635", "636", "637"), (stryMutAct_9fa48("639") ? date.getMonth() !== currentMonth : stryMutAct_9fa48("638") ? true : (stryCov_9fa48("638", "639"), date.getMonth() === currentMonth)) && (stryMutAct_9fa48("641") ? date.getFullYear() !== currentYear : stryMutAct_9fa48("640") ? true : (stryCov_9fa48("640", "641"), date.getFullYear() === currentYear)));
      }
    }));
    const lastMonthTransactions = stryMutAct_9fa48("642") ? transactions : (stryCov_9fa48("642"), transactions.filter(t => {
      if (stryMutAct_9fa48("643")) {
        {}
      } else {
        stryCov_9fa48("643");
        const date = new Date(t.transaction_date);
        const lastMonth = (stryMutAct_9fa48("646") ? currentMonth !== 0 : stryMutAct_9fa48("645") ? false : stryMutAct_9fa48("644") ? true : (stryCov_9fa48("644", "645", "646"), currentMonth === 0)) ? 11 : stryMutAct_9fa48("647") ? currentMonth + 1 : (stryCov_9fa48("647"), currentMonth - 1);
        const lastMonthYear = (stryMutAct_9fa48("650") ? currentMonth !== 0 : stryMutAct_9fa48("649") ? false : stryMutAct_9fa48("648") ? true : (stryCov_9fa48("648", "649", "650"), currentMonth === 0)) ? stryMutAct_9fa48("651") ? currentYear + 1 : (stryCov_9fa48("651"), currentYear - 1) : currentYear;
        return stryMutAct_9fa48("654") ? date.getMonth() === lastMonth || date.getFullYear() === lastMonthYear : stryMutAct_9fa48("653") ? false : stryMutAct_9fa48("652") ? true : (stryCov_9fa48("652", "653", "654"), (stryMutAct_9fa48("656") ? date.getMonth() !== lastMonth : stryMutAct_9fa48("655") ? true : (stryCov_9fa48("655", "656"), date.getMonth() === lastMonth)) && (stryMutAct_9fa48("658") ? date.getFullYear() !== lastMonthYear : stryMutAct_9fa48("657") ? true : (stryCov_9fa48("657", "658"), date.getFullYear() === lastMonthYear)));
      }
    }));
    const thisMonthSpent = thisMonthTransactions.reduce(stryMutAct_9fa48("659") ? () => undefined : (stryCov_9fa48("659"), (sum, t) => stryMutAct_9fa48("660") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("660"), sum + parseFloat(t.amount.toString()))), 0);
    const lastMonthSpent = lastMonthTransactions.reduce(stryMutAct_9fa48("661") ? () => undefined : (stryCov_9fa48("661"), (sum, t) => stryMutAct_9fa48("662") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("662"), sum + parseFloat(t.amount.toString()))), 0);
    const monthChange = (stryMutAct_9fa48("666") ? lastMonthSpent <= 0 : stryMutAct_9fa48("665") ? lastMonthSpent >= 0 : stryMutAct_9fa48("664") ? false : stryMutAct_9fa48("663") ? true : (stryCov_9fa48("663", "664", "665", "666"), lastMonthSpent > 0)) ? stryMutAct_9fa48("667") ? (thisMonthSpent - lastMonthSpent) / lastMonthSpent / 100 : (stryCov_9fa48("667"), (stryMutAct_9fa48("668") ? (thisMonthSpent - lastMonthSpent) * lastMonthSpent : (stryCov_9fa48("668"), (stryMutAct_9fa48("669") ? thisMonthSpent + lastMonthSpent : (stryCov_9fa48("669"), thisMonthSpent - lastMonthSpent)) / lastMonthSpent)) * 100) : 0;
    const overBudgetCategories = stryMutAct_9fa48("670") ? categories : (stryCov_9fa48("670"), categories.filter(cat => {
      if (stryMutAct_9fa48("671")) {
        {}
      } else {
        stryCov_9fa48("671");
        const spent = getSpentByCategory(cat.id);
        return stryMutAct_9fa48("675") ? spent <= cat.budget_amount : stryMutAct_9fa48("674") ? spent >= cat.budget_amount : stryMutAct_9fa48("673") ? false : stryMutAct_9fa48("672") ? true : (stryCov_9fa48("672", "673", "674", "675"), spent > cat.budget_amount);
      }
    }));
    const onTrackCategories = stryMutAct_9fa48("676") ? categories : (stryCov_9fa48("676"), categories.filter(cat => {
      if (stryMutAct_9fa48("677")) {
        {}
      } else {
        stryCov_9fa48("677");
        const spent = getSpentByCategory(cat.id);
        return stryMutAct_9fa48("680") ? spent <= cat.budget_amount || spent > 0 : stryMutAct_9fa48("679") ? false : stryMutAct_9fa48("678") ? true : (stryCov_9fa48("678", "679", "680"), (stryMutAct_9fa48("683") ? spent > cat.budget_amount : stryMutAct_9fa48("682") ? spent < cat.budget_amount : stryMutAct_9fa48("681") ? true : (stryCov_9fa48("681", "682", "683"), spent <= cat.budget_amount)) && (stryMutAct_9fa48("686") ? spent <= 0 : stryMutAct_9fa48("685") ? spent >= 0 : stryMutAct_9fa48("684") ? true : (stryCov_9fa48("684", "685", "686"), spent > 0)));
      }
    }));
    const avgTransactionAmount = (stryMutAct_9fa48("690") ? transactions.length <= 0 : stryMutAct_9fa48("689") ? transactions.length >= 0 : stryMutAct_9fa48("688") ? false : stryMutAct_9fa48("687") ? true : (stryCov_9fa48("687", "688", "689", "690"), transactions.length > 0)) ? stryMutAct_9fa48("691") ? transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) * transactions.length : (stryCov_9fa48("691"), transactions.reduce(stryMutAct_9fa48("692") ? () => undefined : (stryCov_9fa48("692"), (sum, t) => stryMutAct_9fa48("693") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("693"), sum + parseFloat(t.amount.toString()))), 0) / transactions.length) : 0;
    const mostExpensiveCategory = categories.reduce((max, cat) => {
      if (stryMutAct_9fa48("694")) {
        {}
      } else {
        stryCov_9fa48("694");
        const spent = getSpentByCategory(cat.id);
        const maxSpent = getSpentByCategory(max.id);
        return (stryMutAct_9fa48("698") ? spent <= maxSpent : stryMutAct_9fa48("697") ? spent >= maxSpent : stryMutAct_9fa48("696") ? false : stryMutAct_9fa48("695") ? true : (stryCov_9fa48("695", "696", "697", "698"), spent > maxSpent)) ? cat : max;
      }
    }, categories[0]);
    const mostExpensiveCategorySpent = mostExpensiveCategory ? getSpentByCategory(mostExpensiveCategory.id) : 0;
    return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending Insights</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            {(stryMutAct_9fa48("702") ? monthChange <= 0 : stryMutAct_9fa48("701") ? monthChange >= 0 : stryMutAct_9fa48("700") ? false : stryMutAct_9fa48("699") ? true : (stryCov_9fa48("699", "700", "701", "702"), monthChange > 0)) ? <TrendingUp className="text-blue-600 flex-shrink-0 mt-1" size={20} /> : <TrendingDown className="text-green-600 flex-shrink-0 mt-1" size={20} />}
            <div>
              <p className="font-medium text-gray-900">Monthly Comparison</p>
              <p className="text-sm text-gray-600 mt-1">
                You've spent <span className="font-semibold">${thisMonthSpent.toFixed(2)}</span> this month.
                {stryMutAct_9fa48("705") ? lastMonthSpent > 0 || <span>
                    {' '}That's{' '}
                    <span className={monthChange > 0 ? 'text-red-600' : 'text-green-600'}>
                      {Math.abs(monthChange).toFixed(1)}% {monthChange > 0 ? 'more' : 'less'}
                    </span>
                    {' '}than last month.
                  </span> : stryMutAct_9fa48("704") ? false : stryMutAct_9fa48("703") ? true : (stryCov_9fa48("703", "704", "705"), (stryMutAct_9fa48("708") ? lastMonthSpent <= 0 : stryMutAct_9fa48("707") ? lastMonthSpent >= 0 : stryMutAct_9fa48("706") ? true : (stryCov_9fa48("706", "707", "708"), lastMonthSpent > 0)) && <span>
                    {stryMutAct_9fa48("709") ? "" : (stryCov_9fa48("709"), ' ')}That's{stryMutAct_9fa48("710") ? "" : (stryCov_9fa48("710"), ' ')}
                    <span className={(stryMutAct_9fa48("714") ? monthChange <= 0 : stryMutAct_9fa48("713") ? monthChange >= 0 : stryMutAct_9fa48("712") ? false : stryMutAct_9fa48("711") ? true : (stryCov_9fa48("711", "712", "713", "714"), monthChange > 0)) ? stryMutAct_9fa48("715") ? "" : (stryCov_9fa48("715"), 'text-red-600') : stryMutAct_9fa48("716") ? "" : (stryCov_9fa48("716"), 'text-green-600')}>
                      {Math.abs(monthChange).toFixed(1)}% {(stryMutAct_9fa48("720") ? monthChange <= 0 : stryMutAct_9fa48("719") ? monthChange >= 0 : stryMutAct_9fa48("718") ? false : stryMutAct_9fa48("717") ? true : (stryCov_9fa48("717", "718", "719", "720"), monthChange > 0)) ? stryMutAct_9fa48("721") ? "" : (stryCov_9fa48("721"), 'more') : stryMutAct_9fa48("722") ? "" : (stryCov_9fa48("722"), 'less')}
                    </span>
                    {stryMutAct_9fa48("723") ? "" : (stryCov_9fa48("723"), ' ')}than last month.
                  </span>)}
              </p>
            </div>
          </div>

          {(stryMutAct_9fa48("727") ? overBudgetCategories.length <= 0 : stryMutAct_9fa48("726") ? overBudgetCategories.length >= 0 : stryMutAct_9fa48("725") ? false : stryMutAct_9fa48("724") ? true : (stryCov_9fa48("724", "725", "726", "727"), overBudgetCategories.length > 0)) ? <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">Budget Alerts</p>
                <p className="text-sm text-gray-600 mt-1">
                  You're over budget in <span className="font-semibold">{overBudgetCategories.length}</span>{stryMutAct_9fa48("728") ? "" : (stryCov_9fa48("728"), ' ')}
                  {(stryMutAct_9fa48("731") ? overBudgetCategories.length !== 1 : stryMutAct_9fa48("730") ? false : stryMutAct_9fa48("729") ? true : (stryCov_9fa48("729", "730", "731"), overBudgetCategories.length === 1)) ? stryMutAct_9fa48("732") ? "" : (stryCov_9fa48("732"), 'category') : stryMutAct_9fa48("733") ? "" : (stryCov_9fa48("733"), 'categories')}:
                </p>
                <ul className="mt-2 space-y-1">
                  {stryMutAct_9fa48("734") ? overBudgetCategories.map(cat => {
                  const spent = getSpentByCategory(cat.id);
                  const over = spent - cat.budget_amount;
                  return <li key={cat.id} className="text-sm text-gray-700">
                        <span className="font-medium">{cat.name}</span> - ${over.toFixed(2)} over
                      </li>;
                }) : (stryCov_9fa48("734"), overBudgetCategories.slice(0, 3).map(cat => {
                  if (stryMutAct_9fa48("735")) {
                    {}
                  } else {
                    stryCov_9fa48("735");
                    const spent = getSpentByCategory(cat.id);
                    const over = stryMutAct_9fa48("736") ? spent + cat.budget_amount : (stryCov_9fa48("736"), spent - cat.budget_amount);
                    return <li key={cat.id} className="text-sm text-gray-700">
                        <span className="font-medium">{cat.name}</span> - ${over.toFixed(2)} over
                      </li>;
                  }
                }))}
                </ul>
              </div>
            </div> : <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900">Great Job!</p>
                <p className="text-sm text-gray-600 mt-1">
                  All your spending is within budget. Keep up the good work!
                </p>
              </div>
            </div>}
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Average Transaction</p>
            <p className="text-2xl font-bold text-gray-900">${avgTransactionAmount.toFixed(2)}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Largest Spending Category</p>
            <p className="text-xl font-semibold text-gray-900">{stryMutAct_9fa48("739") ? mostExpensiveCategory?.name && 'N/A' : stryMutAct_9fa48("738") ? false : stryMutAct_9fa48("737") ? true : (stryCov_9fa48("737", "738", "739"), (stryMutAct_9fa48("740") ? mostExpensiveCategory.name : (stryCov_9fa48("740"), mostExpensiveCategory?.name)) || (stryMutAct_9fa48("741") ? "" : (stryCov_9fa48("741"), 'N/A')))}</p>
            <p className="text-sm text-gray-600 mt-1">${mostExpensiveCategorySpent.toFixed(2)} spent</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Categories On Track</p>
            <p className="text-2xl font-bold text-green-600">
              {onTrackCategories.length} / {categories.length}
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}