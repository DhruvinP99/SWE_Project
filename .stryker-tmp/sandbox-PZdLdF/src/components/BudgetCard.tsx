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
import { useState } from 'react';
import * as Icons from 'lucide-react';
import { BudgetCategory } from '../lib/supabase';
interface BudgetCardProps {
  category: BudgetCategory;
  spent: number;
  onUpdate: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
}
export function BudgetCard({
  category,
  spent,
  onUpdate,
  onDelete
}: BudgetCardProps) {
  if (stryMutAct_9fa48("121")) {
    {}
  } else {
    stryCov_9fa48("121");
    const [isEditing, setIsEditing] = useState(stryMutAct_9fa48("122") ? true : (stryCov_9fa48("122"), false));
    const [newAmount, setNewAmount] = useState(category.budget_amount.toString());
    const remaining = stryMutAct_9fa48("123") ? category.budget_amount + spent : (stryCov_9fa48("123"), category.budget_amount - spent);
    const percentUsed = stryMutAct_9fa48("124") ? spent / category.budget_amount / 100 : (stryCov_9fa48("124"), (stryMutAct_9fa48("125") ? spent * category.budget_amount : (stryCov_9fa48("125"), spent / category.budget_amount)) * 100);
    const Icon = stryMutAct_9fa48("128") ? (Icons as any)[category.icon] && Icons.DollarSign : stryMutAct_9fa48("127") ? false : stryMutAct_9fa48("126") ? true : (stryCov_9fa48("126", "127", "128"), (Icons as any)[category.icon] || Icons.DollarSign);
    const handleSave = () => {
      if (stryMutAct_9fa48("129")) {
        {}
      } else {
        stryCov_9fa48("129");
        const amount = parseFloat(newAmount);
        if (stryMutAct_9fa48("132") ? !isNaN(amount) || amount > 0 : stryMutAct_9fa48("131") ? false : stryMutAct_9fa48("130") ? true : (stryCov_9fa48("130", "131", "132"), (stryMutAct_9fa48("133") ? isNaN(amount) : (stryCov_9fa48("133"), !isNaN(amount))) && (stryMutAct_9fa48("136") ? amount <= 0 : stryMutAct_9fa48("135") ? amount >= 0 : stryMutAct_9fa48("134") ? true : (stryCov_9fa48("134", "135", "136"), amount > 0)))) {
          if (stryMutAct_9fa48("137")) {
            {}
          } else {
            stryCov_9fa48("137");
            onUpdate(category.id, amount);
            setIsEditing(stryMutAct_9fa48("138") ? true : (stryCov_9fa48("138"), false));
          }
        }
      }
    };
    return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg" style={stryMutAct_9fa48("139") ? {} : (stryCov_9fa48("139"), {
            backgroundColor: stryMutAct_9fa48("140") ? `` : (stryCov_9fa48("140"), `${category.color}20`)
          })}>
            <Icon size={24} style={stryMutAct_9fa48("141") ? {} : (stryCov_9fa48("141"), {
              color: category.color
            })} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
            <p className="text-sm text-gray-500">Monthly Budget</p>
          </div>
        </div>
        <button onClick={stryMutAct_9fa48("142") ? () => undefined : (stryCov_9fa48("142"), () => onDelete(category.id))} className="text-gray-400 hover:text-red-500 transition-colors">
          <Icons.Trash2 size={18} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          {isEditing ? <div className="flex items-center gap-2">
              <input type="number" value={newAmount} onChange={stryMutAct_9fa48("143") ? () => undefined : (stryCov_9fa48("143"), e => setNewAmount(e.target.value))} className="w-24 px-2 py-1 border border-gray-300 rounded text-lg font-bold" autoFocus />
              <button onClick={handleSave} className="text-green-600 hover:text-green-700">
                <Icons.Check size={20} />
              </button>
              <button onClick={stryMutAct_9fa48("144") ? () => undefined : (stryCov_9fa48("144"), () => setIsEditing(stryMutAct_9fa48("145") ? true : (stryCov_9fa48("145"), false)))} className="text-gray-400 hover:text-gray-600">
                <Icons.X size={20} />
              </button>
            </div> : <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ${category.budget_amount.toFixed(2)}
              </span>
              <button onClick={stryMutAct_9fa48("146") ? () => undefined : (stryCov_9fa48("146"), () => setIsEditing(stryMutAct_9fa48("147") ? false : (stryCov_9fa48("147"), true)))} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Icons.Edit2 size={16} />
              </button>
            </div>}
        </div>

        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-300" style={stryMutAct_9fa48("148") ? {} : (stryCov_9fa48("148"), {
            width: stryMutAct_9fa48("149") ? `` : (stryCov_9fa48("149"), `${stryMutAct_9fa48("150") ? Math.max(percentUsed, 100) : (stryCov_9fa48("150"), Math.min(percentUsed, 100))}%`),
            backgroundColor: (stryMutAct_9fa48("154") ? percentUsed <= 100 : stryMutAct_9fa48("153") ? percentUsed >= 100 : stryMutAct_9fa48("152") ? false : stryMutAct_9fa48("151") ? true : (stryCov_9fa48("151", "152", "153", "154"), percentUsed > 100)) ? stryMutAct_9fa48("155") ? "" : (stryCov_9fa48("155"), '#ef4444') : category.color
          })} />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Spent: <span className="font-semibold text-gray-900">${spent.toFixed(2)}</span>
          </span>
          <span className={stryMutAct_9fa48("156") ? `` : (stryCov_9fa48("156"), `font-semibold ${(stryMutAct_9fa48("160") ? remaining < 0 : stryMutAct_9fa48("159") ? remaining > 0 : stryMutAct_9fa48("158") ? false : stryMutAct_9fa48("157") ? true : (stryCov_9fa48("157", "158", "159", "160"), remaining >= 0)) ? stryMutAct_9fa48("161") ? "" : (stryCov_9fa48("161"), 'text-green-600') : stryMutAct_9fa48("162") ? "" : (stryCov_9fa48("162"), 'text-red-600')}`)}>
            {(stryMutAct_9fa48("166") ? remaining < 0 : stryMutAct_9fa48("165") ? remaining > 0 : stryMutAct_9fa48("164") ? false : stryMutAct_9fa48("163") ? true : (stryCov_9fa48("163", "164", "165", "166"), remaining >= 0)) ? stryMutAct_9fa48("167") ? "" : (stryCov_9fa48("167"), 'Left: ') : stryMutAct_9fa48("168") ? "" : (stryCov_9fa48("168"), 'Over: ')}${Math.abs(remaining).toFixed(2)}
          </span>
        </div>
      </div>
    </div>;
  }
}