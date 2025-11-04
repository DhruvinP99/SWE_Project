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
import { Plus, PiggyBank, LogOut, BarChart3 } from 'lucide-react';
import { supabase, BudgetCategory, Transaction } from '../lib/supabase';
import { BudgetCard } from '../components/BudgetCard';
import { BudgetSummary } from '../components/BudgetSummary';
import { AddCategoryModal } from '../components/AddCategoryModal';
import { AddTransactionModal } from '../components/AddTransactionModal';
import { TransactionsList } from '../components/TransactionsList';
import { ExportPDF } from '../components/ExportPDF';
import { useAuth } from '../contexts/AuthContext';
interface DashboardPageProps {
  onNavigateToAnalysis: () => void;
}
export function DashboardPage({
  onNavigateToAnalysis
}: DashboardPageProps) {
  if (stryMutAct_9fa48("999")) {
    {}
  } else {
    stryCov_9fa48("999");
    const {
      user,
      signOut
    } = useAuth();
    const [categories, setCategories] = useState<BudgetCategory[]>(stryMutAct_9fa48("1000") ? ["Stryker was here"] : (stryCov_9fa48("1000"), []));
    const [transactions, setTransactions] = useState<Transaction[]>(stryMutAct_9fa48("1001") ? ["Stryker was here"] : (stryCov_9fa48("1001"), []));
    const [showCategoryModal, setShowCategoryModal] = useState(stryMutAct_9fa48("1002") ? true : (stryCov_9fa48("1002"), false));
    const [showTransactionModal, setShowTransactionModal] = useState(stryMutAct_9fa48("1003") ? true : (stryCov_9fa48("1003"), false));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1004") ? false : (stryCov_9fa48("1004"), true));
    useEffect(() => {
      if (stryMutAct_9fa48("1005")) {
        {}
      } else {
        stryCov_9fa48("1005");
        if (stryMutAct_9fa48("1007") ? false : stryMutAct_9fa48("1006") ? true : (stryCov_9fa48("1006", "1007"), user)) {
          if (stryMutAct_9fa48("1008")) {
            {}
          } else {
            stryCov_9fa48("1008");
            loadData();
          }
        }
      }
    }, stryMutAct_9fa48("1009") ? [] : (stryCov_9fa48("1009"), [user]));
    async function loadData() {
      if (stryMutAct_9fa48("1010")) {
        {}
      } else {
        stryCov_9fa48("1010");
        try {
          if (stryMutAct_9fa48("1011")) {
            {}
          } else {
            stryCov_9fa48("1011");
            const [categoriesRes, transactionsRes] = await Promise.all(stryMutAct_9fa48("1012") ? [] : (stryCov_9fa48("1012"), [supabase.from(stryMutAct_9fa48("1013") ? "" : (stryCov_9fa48("1013"), 'budget_categories')).select(stryMutAct_9fa48("1014") ? "" : (stryCov_9fa48("1014"), '*')).order(stryMutAct_9fa48("1015") ? "" : (stryCov_9fa48("1015"), 'created_at'), stryMutAct_9fa48("1016") ? {} : (stryCov_9fa48("1016"), {
              ascending: stryMutAct_9fa48("1017") ? false : (stryCov_9fa48("1017"), true)
            })), supabase.from(stryMutAct_9fa48("1018") ? "" : (stryCov_9fa48("1018"), 'transactions')).select(stryMutAct_9fa48("1019") ? "" : (stryCov_9fa48("1019"), '*')).order(stryMutAct_9fa48("1020") ? "" : (stryCov_9fa48("1020"), 'created_at'), stryMutAct_9fa48("1021") ? {} : (stryCov_9fa48("1021"), {
              ascending: stryMutAct_9fa48("1022") ? true : (stryCov_9fa48("1022"), false)
            }))]));
            if (stryMutAct_9fa48("1024") ? false : stryMutAct_9fa48("1023") ? true : (stryCov_9fa48("1023", "1024"), categoriesRes.data)) setCategories(categoriesRes.data);
            if (stryMutAct_9fa48("1026") ? false : stryMutAct_9fa48("1025") ? true : (stryCov_9fa48("1025", "1026"), transactionsRes.data)) setTransactions(transactionsRes.data);
          }
        } catch (error) {
          if (stryMutAct_9fa48("1027")) {
            {}
          } else {
            stryCov_9fa48("1027");
            console.error(stryMutAct_9fa48("1028") ? "" : (stryCov_9fa48("1028"), 'Error loading data:'), error);
          }
        } finally {
          if (stryMutAct_9fa48("1029")) {
            {}
          } else {
            stryCov_9fa48("1029");
            setLoading(stryMutAct_9fa48("1030") ? true : (stryCov_9fa48("1030"), false));
          }
        }
      }
    }
    async function addCategory(name: string, budget: number, color: string, icon: string) {
      if (stryMutAct_9fa48("1031")) {
        {}
      } else {
        stryCov_9fa48("1031");
        if (stryMutAct_9fa48("1034") ? false : stryMutAct_9fa48("1033") ? true : stryMutAct_9fa48("1032") ? user : (stryCov_9fa48("1032", "1033", "1034"), !user)) return;
        const {
          data,
          error
        } = await supabase.from(stryMutAct_9fa48("1035") ? "" : (stryCov_9fa48("1035"), 'budget_categories')).insert(stryMutAct_9fa48("1036") ? [] : (stryCov_9fa48("1036"), [stryMutAct_9fa48("1037") ? {} : (stryCov_9fa48("1037"), {
          name,
          budget_amount: budget,
          color,
          icon,
          user_id: user.id
        })])).select().single();
        if (stryMutAct_9fa48("1039") ? false : stryMutAct_9fa48("1038") ? true : (stryCov_9fa48("1038", "1039"), error)) {
          if (stryMutAct_9fa48("1040")) {
            {}
          } else {
            stryCov_9fa48("1040");
            console.error(stryMutAct_9fa48("1041") ? "" : (stryCov_9fa48("1041"), 'Error adding category:'), error);
            return;
          }
        }
        if (stryMutAct_9fa48("1043") ? false : stryMutAct_9fa48("1042") ? true : (stryCov_9fa48("1042", "1043"), data)) {
          if (stryMutAct_9fa48("1044")) {
            {}
          } else {
            stryCov_9fa48("1044");
            setCategories(stryMutAct_9fa48("1045") ? [] : (stryCov_9fa48("1045"), [...categories, data]));
          }
        }
      }
    }
    async function updateCategoryBudget(id: string, amount: number) {
      if (stryMutAct_9fa48("1046")) {
        {}
      } else {
        stryCov_9fa48("1046");
        const {
          error
        } = await supabase.from(stryMutAct_9fa48("1047") ? "" : (stryCov_9fa48("1047"), 'budget_categories')).update(stryMutAct_9fa48("1048") ? {} : (stryCov_9fa48("1048"), {
          budget_amount: amount,
          updated_at: new Date().toISOString()
        })).eq(stryMutAct_9fa48("1049") ? "" : (stryCov_9fa48("1049"), 'id'), id);
        if (stryMutAct_9fa48("1051") ? false : stryMutAct_9fa48("1050") ? true : (stryCov_9fa48("1050", "1051"), error)) {
          if (stryMutAct_9fa48("1052")) {
            {}
          } else {
            stryCov_9fa48("1052");
            console.error(stryMutAct_9fa48("1053") ? "" : (stryCov_9fa48("1053"), 'Error updating category:'), error);
            return;
          }
        }
        setCategories(categories.map(stryMutAct_9fa48("1054") ? () => undefined : (stryCov_9fa48("1054"), c => (stryMutAct_9fa48("1057") ? c.id !== id : stryMutAct_9fa48("1056") ? false : stryMutAct_9fa48("1055") ? true : (stryCov_9fa48("1055", "1056", "1057"), c.id === id)) ? stryMutAct_9fa48("1058") ? {} : (stryCov_9fa48("1058"), {
          ...c,
          budget_amount: amount
        }) : c)));
      }
    }
    async function deleteCategory(id: string) {
      if (stryMutAct_9fa48("1059")) {
        {}
      } else {
        stryCov_9fa48("1059");
        const {
          error
        } = await supabase.from(stryMutAct_9fa48("1060") ? "" : (stryCov_9fa48("1060"), 'budget_categories')).delete().eq(stryMutAct_9fa48("1061") ? "" : (stryCov_9fa48("1061"), 'id'), id);
        if (stryMutAct_9fa48("1063") ? false : stryMutAct_9fa48("1062") ? true : (stryCov_9fa48("1062", "1063"), error)) {
          if (stryMutAct_9fa48("1064")) {
            {}
          } else {
            stryCov_9fa48("1064");
            console.error(stryMutAct_9fa48("1065") ? "" : (stryCov_9fa48("1065"), 'Error deleting category:'), error);
            return;
          }
        }
        setCategories(stryMutAct_9fa48("1066") ? categories : (stryCov_9fa48("1066"), categories.filter(stryMutAct_9fa48("1067") ? () => undefined : (stryCov_9fa48("1067"), c => stryMutAct_9fa48("1070") ? c.id === id : stryMutAct_9fa48("1069") ? false : stryMutAct_9fa48("1068") ? true : (stryCov_9fa48("1068", "1069", "1070"), c.id !== id)))));
      }
    }
    async function addTransaction(categoryId: string, amount: number, description: string, date: string) {
      if (stryMutAct_9fa48("1071")) {
        {}
      } else {
        stryCov_9fa48("1071");
        if (stryMutAct_9fa48("1074") ? false : stryMutAct_9fa48("1073") ? true : stryMutAct_9fa48("1072") ? user : (stryCov_9fa48("1072", "1073", "1074"), !user)) return;
        const {
          data,
          error
        } = await supabase.from(stryMutAct_9fa48("1075") ? "" : (stryCov_9fa48("1075"), 'transactions')).insert(stryMutAct_9fa48("1076") ? [] : (stryCov_9fa48("1076"), [stryMutAct_9fa48("1077") ? {} : (stryCov_9fa48("1077"), {
          category_id: categoryId,
          amount,
          description,
          transaction_date: date,
          user_id: user.id
        })])).select().single();
        if (stryMutAct_9fa48("1079") ? false : stryMutAct_9fa48("1078") ? true : (stryCov_9fa48("1078", "1079"), error)) {
          if (stryMutAct_9fa48("1080")) {
            {}
          } else {
            stryCov_9fa48("1080");
            console.error(stryMutAct_9fa48("1081") ? "" : (stryCov_9fa48("1081"), 'Error adding transaction:'), error);
            return;
          }
        }
        if (stryMutAct_9fa48("1083") ? false : stryMutAct_9fa48("1082") ? true : (stryCov_9fa48("1082", "1083"), data)) {
          if (stryMutAct_9fa48("1084")) {
            {}
          } else {
            stryCov_9fa48("1084");
            setTransactions(stryMutAct_9fa48("1085") ? [] : (stryCov_9fa48("1085"), [data, ...transactions]));
          }
        }
      }
    }
    async function deleteTransaction(id: string) {
      if (stryMutAct_9fa48("1086")) {
        {}
      } else {
        stryCov_9fa48("1086");
        const {
          error
        } = await supabase.from(stryMutAct_9fa48("1087") ? "" : (stryCov_9fa48("1087"), 'transactions')).delete().eq(stryMutAct_9fa48("1088") ? "" : (stryCov_9fa48("1088"), 'id'), id);
        if (stryMutAct_9fa48("1090") ? false : stryMutAct_9fa48("1089") ? true : (stryCov_9fa48("1089", "1090"), error)) {
          if (stryMutAct_9fa48("1091")) {
            {}
          } else {
            stryCov_9fa48("1091");
            console.error(stryMutAct_9fa48("1092") ? "" : (stryCov_9fa48("1092"), 'Error deleting transaction:'), error);
            return;
          }
        }
        setTransactions(stryMutAct_9fa48("1093") ? transactions : (stryCov_9fa48("1093"), transactions.filter(stryMutAct_9fa48("1094") ? () => undefined : (stryCov_9fa48("1094"), t => stryMutAct_9fa48("1097") ? t.id === id : stryMutAct_9fa48("1096") ? false : stryMutAct_9fa48("1095") ? true : (stryCov_9fa48("1095", "1096", "1097"), t.id !== id)))));
      }
    }
    const getSpentByCategory = (categoryId: string) => {
      if (stryMutAct_9fa48("1098")) {
        {}
      } else {
        stryCov_9fa48("1098");
        return stryMutAct_9fa48("1099") ? transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) : (stryCov_9fa48("1099"), transactions.filter(stryMutAct_9fa48("1100") ? () => undefined : (stryCov_9fa48("1100"), t => stryMutAct_9fa48("1103") ? t.category_id !== categoryId : stryMutAct_9fa48("1102") ? false : stryMutAct_9fa48("1101") ? true : (stryCov_9fa48("1101", "1102", "1103"), t.category_id === categoryId))).reduce(stryMutAct_9fa48("1104") ? () => undefined : (stryCov_9fa48("1104"), (sum, t) => stryMutAct_9fa48("1105") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("1105"), sum + parseFloat(t.amount.toString()))), 0));
      }
    };
    const totalBudget = categories.reduce(stryMutAct_9fa48("1106") ? () => undefined : (stryCov_9fa48("1106"), (sum, c) => stryMutAct_9fa48("1107") ? sum - parseFloat(c.budget_amount.toString()) : (stryCov_9fa48("1107"), sum + parseFloat(c.budget_amount.toString()))), 0);
    const totalSpent = transactions.reduce(stryMutAct_9fa48("1108") ? () => undefined : (stryCov_9fa48("1108"), (sum, t) => stryMutAct_9fa48("1109") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("1109"), sum + parseFloat(t.amount.toString()))), 0);
    if (stryMutAct_9fa48("1111") ? false : stryMutAct_9fa48("1110") ? true : (stryCov_9fa48("1110", "1111"), loading)) {
      if (stryMutAct_9fa48("1112")) {
        {}
      } else {
        stryCov_9fa48("1112");
        return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>;
      }
    }
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-500 rounded-xl shadow-lg">
              <PiggyBank size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Budget Tracker</h1>
              <p className="text-gray-600">{stryMutAct_9fa48("1113") ? user.email : (stryCov_9fa48("1113"), user?.email)}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={onNavigateToAnalysis} className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-sm">
              <BarChart3 size={20} />
              Analysis
            </button>
            <ExportPDF categories={categories} transactions={transactions} userEmail={stryMutAct_9fa48("1116") ? user?.email && '' : stryMutAct_9fa48("1115") ? false : stryMutAct_9fa48("1114") ? true : (stryCov_9fa48("1114", "1115", "1116"), (stryMutAct_9fa48("1117") ? user.email : (stryCov_9fa48("1117"), user?.email)) || (stryMutAct_9fa48("1118") ? "Stryker was here!" : (stryCov_9fa48("1118"), '')))} />
            <button onClick={stryMutAct_9fa48("1119") ? () => undefined : (stryCov_9fa48("1119"), () => setShowTransactionModal(stryMutAct_9fa48("1120") ? false : (stryCov_9fa48("1120"), true)))} disabled={stryMutAct_9fa48("1123") ? categories.length !== 0 : stryMutAct_9fa48("1122") ? false : stryMutAct_9fa48("1121") ? true : (stryCov_9fa48("1121", "1122", "1123"), categories.length === 0)} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
              <Plus size={20} />
              Add Transaction
            </button>
            <button onClick={stryMutAct_9fa48("1124") ? () => undefined : (stryCov_9fa48("1124"), () => setShowCategoryModal(stryMutAct_9fa48("1125") ? false : (stryCov_9fa48("1125"), true)))} className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-sm">
              <Plus size={20} />
              Add Category
            </button>
            <button onClick={signOut} className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        <BudgetSummary totalBudget={totalBudget} totalSpent={totalSpent} />

        {(stryMutAct_9fa48("1128") ? categories.length !== 0 : stryMutAct_9fa48("1127") ? false : stryMutAct_9fa48("1126") ? true : (stryCov_9fa48("1126", "1127", "1128"), categories.length === 0)) ? <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <PiggyBank size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No budget categories yet</h3>
            <p className="text-gray-600 mb-6">Create your first budget category to get started</p>
            <button onClick={stryMutAct_9fa48("1129") ? () => undefined : (stryCov_9fa48("1129"), () => setShowCategoryModal(stryMutAct_9fa48("1130") ? false : (stryCov_9fa48("1130"), true)))} className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              <Plus size={20} />
              Create Category
            </button>
          </div> : <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(stryMutAct_9fa48("1131") ? () => undefined : (stryCov_9fa48("1131"), category => <BudgetCard key={category.id} category={category} spent={getSpentByCategory(category.id)} onUpdate={updateCategoryBudget} onDelete={deleteCategory} />))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Transactions</h2>
              <TransactionsList transactions={transactions} categories={categories} onDelete={deleteTransaction} />
            </div>
          </>}
      </div>

      {stryMutAct_9fa48("1134") ? showCategoryModal || <AddCategoryModal onClose={() => setShowCategoryModal(false)} onAdd={addCategory} /> : stryMutAct_9fa48("1133") ? false : stryMutAct_9fa48("1132") ? true : (stryCov_9fa48("1132", "1133", "1134"), showCategoryModal && <AddCategoryModal onClose={stryMutAct_9fa48("1135") ? () => undefined : (stryCov_9fa48("1135"), () => setShowCategoryModal(stryMutAct_9fa48("1136") ? true : (stryCov_9fa48("1136"), false)))} onAdd={addCategory} />)}

      {stryMutAct_9fa48("1139") ? showTransactionModal || <AddTransactionModal categories={categories} onClose={() => setShowTransactionModal(false)} onAdd={addTransaction} /> : stryMutAct_9fa48("1138") ? false : stryMutAct_9fa48("1137") ? true : (stryCov_9fa48("1137", "1138", "1139"), showTransactionModal && <AddTransactionModal categories={categories} onClose={stryMutAct_9fa48("1140") ? () => undefined : (stryCov_9fa48("1140"), () => setShowTransactionModal(stryMutAct_9fa48("1141") ? true : (stryCov_9fa48("1141"), false)))} onAdd={addTransaction} />)}
    </div>;
  }
}