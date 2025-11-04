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
import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
interface BudgetSummaryProps {
  totalBudget: number;
  totalSpent: number;
}
export function BudgetSummary({
  totalBudget,
  totalSpent
}: BudgetSummaryProps) {
  if (stryMutAct_9fa48("169")) {
    {}
  } else {
    stryCov_9fa48("169");
    const remaining = stryMutAct_9fa48("170") ? totalBudget + totalSpent : (stryCov_9fa48("170"), totalBudget - totalSpent);
    const percentUsed = (stryMutAct_9fa48("174") ? totalBudget <= 0 : stryMutAct_9fa48("173") ? totalBudget >= 0 : stryMutAct_9fa48("172") ? false : stryMutAct_9fa48("171") ? true : (stryCov_9fa48("171", "172", "173", "174"), totalBudget > 0)) ? stryMutAct_9fa48("175") ? totalSpent / totalBudget / 100 : (stryCov_9fa48("175"), (stryMutAct_9fa48("176") ? totalSpent * totalBudget : (stryCov_9fa48("176"), totalSpent / totalBudget)) * 100) : 0;
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      <div className={stryMutAct_9fa48("177") ? `` : (stryCov_9fa48("177"), `bg-gradient-to-br ${(stryMutAct_9fa48("181") ? remaining < 0 : stryMutAct_9fa48("180") ? remaining > 0 : stryMutAct_9fa48("179") ? false : stryMutAct_9fa48("178") ? true : (stryCov_9fa48("178", "179", "180", "181"), remaining >= 0)) ? stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), 'from-green-500 to-green-600') : stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'from-red-500 to-red-600')} rounded-xl shadow-lg p-6 text-white`)}>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg">
            {(stryMutAct_9fa48("187") ? remaining < 0 : stryMutAct_9fa48("186") ? remaining > 0 : stryMutAct_9fa48("185") ? false : stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184", "185", "186", "187"), remaining >= 0)) ? <TrendingUp size={24} /> : <DollarSign size={24} />}
          </div>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            {(stryMutAct_9fa48("191") ? remaining < 0 : stryMutAct_9fa48("190") ? remaining > 0 : stryMutAct_9fa48("189") ? false : stryMutAct_9fa48("188") ? true : (stryCov_9fa48("188", "189", "190", "191"), remaining >= 0)) ? stryMutAct_9fa48("192") ? "" : (stryCov_9fa48("192"), 'Remaining') : stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'Over Budget')}
          </span>
        </div>
        <p className="text-3xl font-bold mb-1">${Math.abs(remaining).toFixed(2)}</p>
        <p className={stryMutAct_9fa48("194") ? `` : (stryCov_9fa48("194"), `text-sm ${(stryMutAct_9fa48("198") ? remaining < 0 : stryMutAct_9fa48("197") ? remaining > 0 : stryMutAct_9fa48("196") ? false : stryMutAct_9fa48("195") ? true : (stryCov_9fa48("195", "196", "197", "198"), remaining >= 0)) ? stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), 'text-green-100') : stryMutAct_9fa48("200") ? "" : (stryCov_9fa48("200"), 'text-red-100')}`)}>
          {(stryMutAct_9fa48("204") ? remaining < 0 : stryMutAct_9fa48("203") ? remaining > 0 : stryMutAct_9fa48("202") ? false : stryMutAct_9fa48("201") ? true : (stryCov_9fa48("201", "202", "203", "204"), remaining >= 0)) ? stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'Available to spend') : stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), 'Budget exceeded')}
        </p>
      </div>
    </div>;
  }
}