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
import { useEffect, useState } from 'react';
import { BarChart3, Calendar, Filter, TrendingUp, DollarSign, Target } from 'lucide-react';
import { supabase, BudgetCategory, Transaction } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { PieChart } from '../components/PieChart';
import { LineChart } from '../components/LineChart';
import { SpendingChart } from '../components/SpendingChart';
import { MonthlyTrends } from '../components/MonthlyTrends';
import { SpendingInsights } from '../components/SpendingInsights';
interface AnalysisPageProps {
  onNavigateBack: () => void;
}
export function AnalysisPage({
  onNavigateBack
}: AnalysisPageProps) {
  if (stryMutAct_9fa48("801")) {
    {}
  } else {
    stryCov_9fa48("801");
    const {
      user
    } = useAuth();
    const [categories, setCategories] = useState<BudgetCategory[]>(stryMutAct_9fa48("802") ? ["Stryker was here"] : (stryCov_9fa48("802"), []));
    const [transactions, setTransactions] = useState<Transaction[]>(stryMutAct_9fa48("803") ? ["Stryker was here"] : (stryCov_9fa48("803"), []));
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(stryMutAct_9fa48("804") ? ["Stryker was here"] : (stryCov_9fa48("804"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("805") ? false : (stryCov_9fa48("805"), true));
    const [selectedCategory, setSelectedCategory] = useState<string>(stryMutAct_9fa48("806") ? "" : (stryCov_9fa48("806"), 'all'));
    const [dateRange, setDateRange] = useState<string>(stryMutAct_9fa48("807") ? "" : (stryCov_9fa48("807"), '30'));
    const [startDate, setStartDate] = useState(stryMutAct_9fa48("808") ? "Stryker was here!" : (stryCov_9fa48("808"), ''));
    const [endDate, setEndDate] = useState(stryMutAct_9fa48("809") ? "Stryker was here!" : (stryCov_9fa48("809"), ''));
    useEffect(() => {
      if (stryMutAct_9fa48("810")) {
        {}
      } else {
        stryCov_9fa48("810");
        if (stryMutAct_9fa48("812") ? false : stryMutAct_9fa48("811") ? true : (stryCov_9fa48("811", "812"), user)) {
          if (stryMutAct_9fa48("813")) {
            {}
          } else {
            stryCov_9fa48("813");
            loadData();
          }
        }
      }
    }, stryMutAct_9fa48("814") ? [] : (stryCov_9fa48("814"), [user]));
    useEffect(() => {
      if (stryMutAct_9fa48("815")) {
        {}
      } else {
        stryCov_9fa48("815");
        applyFilters();
      }
    }, stryMutAct_9fa48("816") ? [] : (stryCov_9fa48("816"), [transactions, selectedCategory, dateRange, startDate, endDate]));
    async function loadData() {
      if (stryMutAct_9fa48("817")) {
        {}
      } else {
        stryCov_9fa48("817");
        try {
          if (stryMutAct_9fa48("818")) {
            {}
          } else {
            stryCov_9fa48("818");
            const [categoriesRes, transactionsRes] = await Promise.all(stryMutAct_9fa48("819") ? [] : (stryCov_9fa48("819"), [supabase.from(stryMutAct_9fa48("820") ? "" : (stryCov_9fa48("820"), 'budget_categories')).select(stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), '*')).order(stryMutAct_9fa48("822") ? "" : (stryCov_9fa48("822"), 'created_at'), stryMutAct_9fa48("823") ? {} : (stryCov_9fa48("823"), {
              ascending: stryMutAct_9fa48("824") ? false : (stryCov_9fa48("824"), true)
            })), supabase.from(stryMutAct_9fa48("825") ? "" : (stryCov_9fa48("825"), 'transactions')).select(stryMutAct_9fa48("826") ? "" : (stryCov_9fa48("826"), '*')).order(stryMutAct_9fa48("827") ? "" : (stryCov_9fa48("827"), 'created_at'), stryMutAct_9fa48("828") ? {} : (stryCov_9fa48("828"), {
              ascending: stryMutAct_9fa48("829") ? true : (stryCov_9fa48("829"), false)
            }))]));
            if (stryMutAct_9fa48("831") ? false : stryMutAct_9fa48("830") ? true : (stryCov_9fa48("830", "831"), categoriesRes.data)) setCategories(categoriesRes.data);
            if (stryMutAct_9fa48("833") ? false : stryMutAct_9fa48("832") ? true : (stryCov_9fa48("832", "833"), transactionsRes.data)) setTransactions(transactionsRes.data);
          }
        } catch (error) {
          if (stryMutAct_9fa48("834")) {
            {}
          } else {
            stryCov_9fa48("834");
            console.error(stryMutAct_9fa48("835") ? "" : (stryCov_9fa48("835"), 'Error loading data:'), error);
          }
        } finally {
          if (stryMutAct_9fa48("836")) {
            {}
          } else {
            stryCov_9fa48("836");
            setLoading(stryMutAct_9fa48("837") ? true : (stryCov_9fa48("837"), false));
          }
        }
      }
    }
    function applyFilters() {
      if (stryMutAct_9fa48("838")) {
        {}
      } else {
        stryCov_9fa48("838");
        let filtered = stryMutAct_9fa48("839") ? [] : (stryCov_9fa48("839"), [...transactions]);
        if (stryMutAct_9fa48("842") ? selectedCategory === 'all' : stryMutAct_9fa48("841") ? false : stryMutAct_9fa48("840") ? true : (stryCov_9fa48("840", "841", "842"), selectedCategory !== (stryMutAct_9fa48("843") ? "" : (stryCov_9fa48("843"), 'all')))) {
          if (stryMutAct_9fa48("844")) {
            {}
          } else {
            stryCov_9fa48("844");
            filtered = stryMutAct_9fa48("845") ? filtered : (stryCov_9fa48("845"), filtered.filter(stryMutAct_9fa48("846") ? () => undefined : (stryCov_9fa48("846"), t => stryMutAct_9fa48("849") ? t.category_id !== selectedCategory : stryMutAct_9fa48("848") ? false : stryMutAct_9fa48("847") ? true : (stryCov_9fa48("847", "848", "849"), t.category_id === selectedCategory))));
          }
        }
        if (stryMutAct_9fa48("852") ? dateRange === 'custom' && startDate || endDate : stryMutAct_9fa48("851") ? false : stryMutAct_9fa48("850") ? true : (stryCov_9fa48("850", "851", "852"), (stryMutAct_9fa48("854") ? dateRange === 'custom' || startDate : stryMutAct_9fa48("853") ? true : (stryCov_9fa48("853", "854"), (stryMutAct_9fa48("856") ? dateRange !== 'custom' : stryMutAct_9fa48("855") ? true : (stryCov_9fa48("855", "856"), dateRange === (stryMutAct_9fa48("857") ? "" : (stryCov_9fa48("857"), 'custom')))) && startDate)) && endDate)) {
          if (stryMutAct_9fa48("858")) {
            {}
          } else {
            stryCov_9fa48("858");
            filtered = stryMutAct_9fa48("859") ? filtered : (stryCov_9fa48("859"), filtered.filter(t => {
              if (stryMutAct_9fa48("860")) {
                {}
              } else {
                stryCov_9fa48("860");
                const transDate = new Date(t.transaction_date);
                return stryMutAct_9fa48("863") ? transDate >= new Date(startDate) || transDate <= new Date(endDate) : stryMutAct_9fa48("862") ? false : stryMutAct_9fa48("861") ? true : (stryCov_9fa48("861", "862", "863"), (stryMutAct_9fa48("866") ? transDate < new Date(startDate) : stryMutAct_9fa48("865") ? transDate > new Date(startDate) : stryMutAct_9fa48("864") ? true : (stryCov_9fa48("864", "865", "866"), transDate >= new Date(startDate))) && (stryMutAct_9fa48("869") ? transDate > new Date(endDate) : stryMutAct_9fa48("868") ? transDate < new Date(endDate) : stryMutAct_9fa48("867") ? true : (stryCov_9fa48("867", "868", "869"), transDate <= new Date(endDate))));
              }
            }));
          }
        } else if (stryMutAct_9fa48("872") ? dateRange === 'all' : stryMutAct_9fa48("871") ? false : stryMutAct_9fa48("870") ? true : (stryCov_9fa48("870", "871", "872"), dateRange !== (stryMutAct_9fa48("873") ? "" : (stryCov_9fa48("873"), 'all')))) {
          if (stryMutAct_9fa48("874")) {
            {}
          } else {
            stryCov_9fa48("874");
            const days = parseInt(dateRange);
            const cutoffDate = new Date();
            stryMutAct_9fa48("875") ? cutoffDate.setTime(cutoffDate.getDate() - days) : (stryCov_9fa48("875"), cutoffDate.setDate(stryMutAct_9fa48("876") ? cutoffDate.getDate() + days : (stryCov_9fa48("876"), cutoffDate.getDate() - days)));
            filtered = stryMutAct_9fa48("877") ? filtered : (stryCov_9fa48("877"), filtered.filter(stryMutAct_9fa48("878") ? () => undefined : (stryCov_9fa48("878"), t => stryMutAct_9fa48("882") ? new Date(t.transaction_date) < cutoffDate : stryMutAct_9fa48("881") ? new Date(t.transaction_date) > cutoffDate : stryMutAct_9fa48("880") ? false : stryMutAct_9fa48("879") ? true : (stryCov_9fa48("879", "880", "881", "882"), new Date(t.transaction_date) >= cutoffDate))));
          }
        }
        setFilteredTransactions(filtered);
      }
    }
    const totalSpent = filteredTransactions.reduce(stryMutAct_9fa48("883") ? () => undefined : (stryCov_9fa48("883"), (sum, t) => stryMutAct_9fa48("884") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("884"), sum + parseFloat(t.amount.toString()))), 0);
    const totalBudget = categories.reduce(stryMutAct_9fa48("885") ? () => undefined : (stryCov_9fa48("885"), (sum, c) => stryMutAct_9fa48("886") ? sum - parseFloat(c.budget_amount.toString()) : (stryCov_9fa48("886"), sum + parseFloat(c.budget_amount.toString()))), 0);
    const transactionCount = filteredTransactions.length;
    const avgTransaction = (stryMutAct_9fa48("890") ? transactionCount <= 0 : stryMutAct_9fa48("889") ? transactionCount >= 0 : stryMutAct_9fa48("888") ? false : stryMutAct_9fa48("887") ? true : (stryCov_9fa48("887", "888", "889", "890"), transactionCount > 0)) ? stryMutAct_9fa48("891") ? totalSpent * transactionCount : (stryCov_9fa48("891"), totalSpent / transactionCount) : 0;
    if (stryMutAct_9fa48("893") ? false : stryMutAct_9fa48("892") ? true : (stryCov_9fa48("892", "893"), loading)) {
      if (stryMutAct_9fa48("894")) {
        {}
      } else {
        stryCov_9fa48("894");
        return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading analytics...</div>
      </div>;
      }
    }
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500 rounded-xl shadow-lg">
              <BarChart3 size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analysis Dashboard</h1>
              <p className="text-gray-600">Detailed insights and trends</p>
            </div>
          </div>
          <button onClick={onNavigateBack} className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm">
            Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select value={selectedCategory} onChange={stryMutAct_9fa48("895") ? () => undefined : (stryCov_9fa48("895"), e => setSelectedCategory(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all">All Categories</option>
                {categories.map(stryMutAct_9fa48("896") ? () => undefined : (stryCov_9fa48("896"), cat => <option key={cat.id} value={cat.id}>{cat.name}</option>))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period
              </label>
              <select value={dateRange} onChange={stryMutAct_9fa48("897") ? () => undefined : (stryCov_9fa48("897"), e => setDateRange(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
                <option value="365">Last Year</option>
                <option value="all">All Time</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            {stryMutAct_9fa48("900") ? dateRange === 'custom' || <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </> : stryMutAct_9fa48("899") ? false : stryMutAct_9fa48("898") ? true : (stryCov_9fa48("898", "899", "900"), (stryMutAct_9fa48("902") ? dateRange !== 'custom' : stryMutAct_9fa48("901") ? true : (stryCov_9fa48("901", "902"), dateRange === (stryMutAct_9fa48("903") ? "" : (stryCov_9fa48("903"), 'custom')))) && <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input type="date" value={startDate} onChange={stryMutAct_9fa48("904") ? () => undefined : (stryCov_9fa48("904"), e => setStartDate(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input type="date" value={endDate} onChange={stryMutAct_9fa48("905") ? () => undefined : (stryCov_9fa48("905"), e => setEndDate(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </>)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <DollarSign size={24} />
              <span className="text-sm opacity-80">Total Spent</span>
            </div>
            <p className="text-3xl font-bold">${totalSpent.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">{transactionCount} transactions</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Target size={24} />
              <span className="text-sm opacity-80">Total Budget</span>
            </div>
            <p className="text-3xl font-bold">${totalBudget.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">
              {(stryMutAct_9fa48("909") ? totalSpent <= totalBudget : stryMutAct_9fa48("908") ? totalSpent >= totalBudget : stryMutAct_9fa48("907") ? false : stryMutAct_9fa48("906") ? true : (stryCov_9fa48("906", "907", "908", "909"), totalSpent > totalBudget)) ? stryMutAct_9fa48("910") ? "" : (stryCov_9fa48("910"), 'Over budget') : stryMutAct_9fa48("911") ? "" : (stryCov_9fa48("911"), 'On track')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp size={24} />
              <span className="text-sm opacity-80">Avg Transaction</span>
            </div>
            <p className="text-3xl font-bold">${avgTransaction.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">Per transaction</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar size={24} />
              <span className="text-sm opacity-80">Remaining</span>
            </div>
            <p className="text-3xl font-bold">${stryMutAct_9fa48("912") ? Math.min(0, totalBudget - totalSpent).toFixed(2) : (stryCov_9fa48("912"), Math.max(0, stryMutAct_9fa48("913") ? totalBudget + totalSpent : (stryCov_9fa48("913"), totalBudget - totalSpent)).toFixed(2))}</p>
            <p className="text-sm opacity-80 mt-1">
              {(stryMutAct_9fa48("914") ? Math.max(0, totalBudget - totalSpent) / totalBudget / 100 : (stryCov_9fa48("914"), (stryMutAct_9fa48("915") ? Math.max(0, totalBudget - totalSpent) * totalBudget : (stryCov_9fa48("915"), (stryMutAct_9fa48("916") ? Math.min(0, totalBudget - totalSpent) : (stryCov_9fa48("916"), Math.max(0, stryMutAct_9fa48("917") ? totalBudget + totalSpent : (stryCov_9fa48("917"), totalBudget - totalSpent)))) / totalBudget)) * 100)).toFixed(0)}% of budget
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <LineChart transactions={filteredTransactions} days={stryMutAct_9fa48("920") ? parseInt(dateRange) && 30 : stryMutAct_9fa48("919") ? false : stryMutAct_9fa48("918") ? true : (stryCov_9fa48("918", "919", "920"), parseInt(dateRange) || 30)} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PieChart categories={categories} transactions={filteredTransactions} />
            <MonthlyTrends transactions={filteredTransactions} />
          </div>

          <SpendingInsights categories={categories} transactions={filteredTransactions} />

          <SpendingChart categories={categories} transactions={filteredTransactions} />
        </div>
      </div>
    </div>;
  }
}