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
import { X } from 'lucide-react';
import { BudgetCategory } from '../lib/supabase';
interface AddTransactionModalProps {
  categories: BudgetCategory[];
  onClose: () => void;
  onAdd: (categoryId: string, amount: number, description: string, date: string) => void;
}
export function AddTransactionModal({
  categories,
  onClose,
  onAdd
}: AddTransactionModalProps) {
  if (stryMutAct_9fa48("94")) {
    {}
  } else {
    stryCov_9fa48("94");
    const [categoryId, setCategoryId] = useState(stryMutAct_9fa48("97") ? categories[0]?.id && '' : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97"), (stryMutAct_9fa48("98") ? categories[0].id : (stryCov_9fa48("98"), categories[0]?.id)) || (stryMutAct_9fa48("99") ? "Stryker was here!" : (stryCov_9fa48("99"), ''))));
    const [amount, setAmount] = useState(stryMutAct_9fa48("100") ? "Stryker was here!" : (stryCov_9fa48("100"), ''));
    const [description, setDescription] = useState(stryMutAct_9fa48("101") ? "Stryker was here!" : (stryCov_9fa48("101"), ''));
    const [date, setDate] = useState(new Date().toISOString().split(stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), 'T'))[0]);
    const handleSubmit = (e: React.FormEvent) => {
      if (stryMutAct_9fa48("103")) {
        {}
      } else {
        stryCov_9fa48("103");
        e.preventDefault();
        const amountValue = parseFloat(amount);
        if (stryMutAct_9fa48("106") ? categoryId && !isNaN(amountValue) && amountValue > 0 || description : stryMutAct_9fa48("105") ? false : stryMutAct_9fa48("104") ? true : (stryCov_9fa48("104", "105", "106"), (stryMutAct_9fa48("108") ? categoryId && !isNaN(amountValue) || amountValue > 0 : stryMutAct_9fa48("107") ? true : (stryCov_9fa48("107", "108"), (stryMutAct_9fa48("110") ? categoryId || !isNaN(amountValue) : stryMutAct_9fa48("109") ? true : (stryCov_9fa48("109", "110"), categoryId && (stryMutAct_9fa48("111") ? isNaN(amountValue) : (stryCov_9fa48("111"), !isNaN(amountValue))))) && (stryMutAct_9fa48("114") ? amountValue <= 0 : stryMutAct_9fa48("113") ? amountValue >= 0 : stryMutAct_9fa48("112") ? true : (stryCov_9fa48("112", "113", "114"), amountValue > 0)))) && description)) {
          if (stryMutAct_9fa48("115")) {
            {}
          } else {
            stryCov_9fa48("115");
            onAdd(categoryId, amountValue, description, date);
            onClose();
          }
        }
      }
    };
    return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add Transaction</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select value={categoryId} onChange={stryMutAct_9fa48("116") ? () => undefined : (stryCov_9fa48("116"), e => setCategoryId(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required>
              {categories.map(stryMutAct_9fa48("117") ? () => undefined : (stryCov_9fa48("117"), category => <option key={category.id} value={category.id}>
                  {category.name}
                </option>))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input type="number" value={amount} onChange={stryMutAct_9fa48("118") ? () => undefined : (stryCov_9fa48("118"), e => setAmount(e.target.value))} placeholder="0.00" step="0.01" className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input type="text" value={description} onChange={stryMutAct_9fa48("119") ? () => undefined : (stryCov_9fa48("119"), e => setDescription(e.target.value))} placeholder="e.g., Weekly shopping" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input type="date" value={date} onChange={stryMutAct_9fa48("120") ? () => undefined : (stryCov_9fa48("120"), e => setDate(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button type="submit" className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>;
  }
}