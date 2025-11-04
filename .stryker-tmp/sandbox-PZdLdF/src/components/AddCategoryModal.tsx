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
import { X } from 'lucide-react';
interface AddCategoryModalProps {
  onClose: () => void;
  onAdd: (name: string, budget: number, color: string, icon: string) => void;
}
const AVAILABLE_ICONS = stryMutAct_9fa48("35") ? [] : (stryCov_9fa48("35"), [stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), 'ShoppingCart'), stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), 'Home'), stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), 'Car'), stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), 'Film'), stryMutAct_9fa48("40") ? "" : (stryCov_9fa48("40"), 'Zap'), stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), 'Coffee'), stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), 'Heart'), stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), 'Book'), stryMutAct_9fa48("44") ? "" : (stryCov_9fa48("44"), 'Smartphone'), stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), 'Plane'), stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), 'Music'), stryMutAct_9fa48("47") ? "" : (stryCov_9fa48("47"), 'Utensils'), stryMutAct_9fa48("48") ? "" : (stryCov_9fa48("48"), 'Gift'), stryMutAct_9fa48("49") ? "" : (stryCov_9fa48("49"), 'Briefcase')]);
const AVAILABLE_COLORS = stryMutAct_9fa48("50") ? [] : (stryCov_9fa48("50"), [stryMutAct_9fa48("51") ? "" : (stryCov_9fa48("51"), '#10b981'), stryMutAct_9fa48("52") ? "" : (stryCov_9fa48("52"), '#f59e0b'), stryMutAct_9fa48("53") ? "" : (stryCov_9fa48("53"), '#3b82f6'), stryMutAct_9fa48("54") ? "" : (stryCov_9fa48("54"), '#ec4899'), stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), '#8b5cf6'), stryMutAct_9fa48("56") ? "" : (stryCov_9fa48("56"), '#ef4444'), stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), '#14b8a6'), stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), '#f97316'), stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), '#06b6d4'), stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), '#a855f7')]);
export function AddCategoryModal({
  onClose,
  onAdd
}: AddCategoryModalProps) {
  if (stryMutAct_9fa48("61")) {
    {}
  } else {
    stryCov_9fa48("61");
    const [name, setName] = useState(stryMutAct_9fa48("62") ? "Stryker was here!" : (stryCov_9fa48("62"), ''));
    const [budget, setBudget] = useState(stryMutAct_9fa48("63") ? "Stryker was here!" : (stryCov_9fa48("63"), ''));
    const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0]);
    const [selectedIcon, setSelectedIcon] = useState(AVAILABLE_ICONS[0]);
    const handleSubmit = (e: React.FormEvent) => {
      if (stryMutAct_9fa48("64")) {
        {}
      } else {
        stryCov_9fa48("64");
        e.preventDefault();
        const budgetAmount = parseFloat(budget);
        if (stryMutAct_9fa48("67") ? name && !isNaN(budgetAmount) || budgetAmount > 0 : stryMutAct_9fa48("66") ? false : stryMutAct_9fa48("65") ? true : (stryCov_9fa48("65", "66", "67"), (stryMutAct_9fa48("69") ? name || !isNaN(budgetAmount) : stryMutAct_9fa48("68") ? true : (stryCov_9fa48("68", "69"), name && (stryMutAct_9fa48("70") ? isNaN(budgetAmount) : (stryCov_9fa48("70"), !isNaN(budgetAmount))))) && (stryMutAct_9fa48("73") ? budgetAmount <= 0 : stryMutAct_9fa48("72") ? budgetAmount >= 0 : stryMutAct_9fa48("71") ? true : (stryCov_9fa48("71", "72", "73"), budgetAmount > 0)))) {
          if (stryMutAct_9fa48("74")) {
            {}
          } else {
            stryCov_9fa48("74");
            onAdd(name, budgetAmount, selectedColor, selectedIcon);
            onClose();
          }
        }
      }
    };
    return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add Budget Category</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <input type="text" value={name} onChange={stryMutAct_9fa48("75") ? () => undefined : (stryCov_9fa48("75"), e => setName(e.target.value))} placeholder="e.g., Groceries" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Budget
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input type="number" value={budget} onChange={stryMutAct_9fa48("76") ? () => undefined : (stryCov_9fa48("76"), e => setBudget(e.target.value))} placeholder="0.00" step="0.01" className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Icon
            </label>
            <div className="grid grid-cols-7 gap-2">
              {AVAILABLE_ICONS.map(iconName => {
                if (stryMutAct_9fa48("77")) {
                  {}
                } else {
                  stryCov_9fa48("77");
                  const IconComponent = (Icons as any)[iconName];
                  return <button key={iconName} type="button" onClick={stryMutAct_9fa48("78") ? () => undefined : (stryCov_9fa48("78"), () => setSelectedIcon(iconName))} className={stryMutAct_9fa48("79") ? `` : (stryCov_9fa48("79"), `p-2 rounded-lg border-2 transition-all ${(stryMutAct_9fa48("82") ? selectedIcon !== iconName : stryMutAct_9fa48("81") ? false : stryMutAct_9fa48("80") ? true : (stryCov_9fa48("80", "81", "82"), selectedIcon === iconName)) ? stryMutAct_9fa48("83") ? "" : (stryCov_9fa48("83"), 'border-orange-500 bg-orange-50') : stryMutAct_9fa48("84") ? "" : (stryCov_9fa48("84"), 'border-gray-200 hover:border-gray-300')}`)}>
                    <IconComponent size={20} />
                  </button>;
                }
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Color
            </label>
            <div className="grid grid-cols-10 gap-2">
              {AVAILABLE_COLORS.map(stryMutAct_9fa48("85") ? () => undefined : (stryCov_9fa48("85"), color => <button key={color} type="button" onClick={stryMutAct_9fa48("86") ? () => undefined : (stryCov_9fa48("86"), () => setSelectedColor(color))} className={stryMutAct_9fa48("87") ? `` : (stryCov_9fa48("87"), `w-8 h-8 rounded-lg border-2 transition-all ${(stryMutAct_9fa48("90") ? selectedColor !== color : stryMutAct_9fa48("89") ? false : stryMutAct_9fa48("88") ? true : (stryCov_9fa48("88", "89", "90"), selectedColor === color)) ? stryMutAct_9fa48("91") ? "" : (stryCov_9fa48("91"), 'border-gray-900 scale-110') : stryMutAct_9fa48("92") ? "" : (stryCov_9fa48("92"), 'border-transparent hover:scale-105')}`)} style={stryMutAct_9fa48("93") ? {} : (stryCov_9fa48("93"), {
                backgroundColor: color
              })} />))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button type="submit" className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>;
  }
}