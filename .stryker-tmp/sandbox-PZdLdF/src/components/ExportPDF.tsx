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
import { Download, Calendar } from 'lucide-react';
import { BudgetCategory, Transaction } from '../lib/supabase';
interface ExportPDFProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
  userEmail: string;
}
export function ExportPDF({
  categories,
  transactions,
  userEmail
}: ExportPDFProps) {
  if (stryMutAct_9fa48("207")) {
    {}
  } else {
    stryCov_9fa48("207");
    const [startDate, setStartDate] = useState(stryMutAct_9fa48("208") ? "Stryker was here!" : (stryCov_9fa48("208"), ''));
    const [endDate, setEndDate] = useState(stryMutAct_9fa48("209") ? "Stryker was here!" : (stryCov_9fa48("209"), ''));
    const [showModal, setShowModal] = useState(stryMutAct_9fa48("210") ? true : (stryCov_9fa48("210"), false));
    const generatePDF = () => {
      if (stryMutAct_9fa48("211")) {
        {}
      } else {
        stryCov_9fa48("211");
        let filteredTransactions = transactions;
        if (stryMutAct_9fa48("214") ? startDate || endDate : stryMutAct_9fa48("213") ? false : stryMutAct_9fa48("212") ? true : (stryCov_9fa48("212", "213", "214"), startDate && endDate)) {
          if (stryMutAct_9fa48("215")) {
            {}
          } else {
            stryCov_9fa48("215");
            filteredTransactions = stryMutAct_9fa48("216") ? transactions : (stryCov_9fa48("216"), transactions.filter(t => {
              if (stryMutAct_9fa48("217")) {
                {}
              } else {
                stryCov_9fa48("217");
                const transDate = new Date(t.transaction_date);
                return stryMutAct_9fa48("220") ? transDate >= new Date(startDate) || transDate <= new Date(endDate) : stryMutAct_9fa48("219") ? false : stryMutAct_9fa48("218") ? true : (stryCov_9fa48("218", "219", "220"), (stryMutAct_9fa48("223") ? transDate < new Date(startDate) : stryMutAct_9fa48("222") ? transDate > new Date(startDate) : stryMutAct_9fa48("221") ? true : (stryCov_9fa48("221", "222", "223"), transDate >= new Date(startDate))) && (stryMutAct_9fa48("226") ? transDate > new Date(endDate) : stryMutAct_9fa48("225") ? transDate < new Date(endDate) : stryMutAct_9fa48("224") ? true : (stryCov_9fa48("224", "225", "226"), transDate <= new Date(endDate))));
              }
            }));
          }
        }
        const totalSpent = filteredTransactions.reduce(stryMutAct_9fa48("227") ? () => undefined : (stryCov_9fa48("227"), (sum, t) => stryMutAct_9fa48("228") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("228"), sum + parseFloat(t.amount.toString()))), 0);
        const totalBudget = categories.reduce(stryMutAct_9fa48("229") ? () => undefined : (stryCov_9fa48("229"), (sum, c) => stryMutAct_9fa48("230") ? sum - parseFloat(c.budget_amount.toString()) : (stryCov_9fa48("230"), sum + parseFloat(c.budget_amount.toString()))), 0);
        const getCategoryInfo = (categoryId: string) => {
          if (stryMutAct_9fa48("231")) {
            {}
          } else {
            stryCov_9fa48("231");
            return categories.find(stryMutAct_9fa48("232") ? () => undefined : (stryCov_9fa48("232"), c => stryMutAct_9fa48("235") ? c.id !== categoryId : stryMutAct_9fa48("234") ? false : stryMutAct_9fa48("233") ? true : (stryCov_9fa48("233", "234", "235"), c.id === categoryId)));
          }
        };
        const getSpentByCategory = (categoryId: string) => {
          if (stryMutAct_9fa48("236")) {
            {}
          } else {
            stryCov_9fa48("236");
            return stryMutAct_9fa48("237") ? filteredTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) : (stryCov_9fa48("237"), filteredTransactions.filter(stryMutAct_9fa48("238") ? () => undefined : (stryCov_9fa48("238"), t => stryMutAct_9fa48("241") ? t.category_id !== categoryId : stryMutAct_9fa48("240") ? false : stryMutAct_9fa48("239") ? true : (stryCov_9fa48("239", "240", "241"), t.category_id === categoryId))).reduce(stryMutAct_9fa48("242") ? () => undefined : (stryCov_9fa48("242"), (sum, t) => stryMutAct_9fa48("243") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("243"), sum + parseFloat(t.amount.toString()))), 0));
          }
        };
        const printWindow = window.open(stryMutAct_9fa48("244") ? "Stryker was here!" : (stryCov_9fa48("244"), ''), stryMutAct_9fa48("245") ? "" : (stryCov_9fa48("245"), '_blank'));
        if (stryMutAct_9fa48("248") ? false : stryMutAct_9fa48("247") ? true : stryMutAct_9fa48("246") ? printWindow : (stryCov_9fa48("246", "247", "248"), !printWindow)) return;
        const dateRangeText = (stryMutAct_9fa48("251") ? startDate || endDate : stryMutAct_9fa48("250") ? false : stryMutAct_9fa48("249") ? true : (stryCov_9fa48("249", "250", "251"), startDate && endDate)) ? stryMutAct_9fa48("252") ? `` : (stryCov_9fa48("252"), `${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`) : stryMutAct_9fa48("253") ? "" : (stryCov_9fa48("253"), 'All Time');
        const htmlContent = stryMutAct_9fa48("254") ? `` : (stryCov_9fa48("254"), `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Budget Report - ${dateRangeText}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              padding: 40px;
              color: #1f2937;
              background: white;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 3px solid #f97316;
            }
            .header h1 {
              font-size: 32px;
              color: #f97316;
              margin-bottom: 10px;
            }
            .header .date-range {
              font-size: 16px;
              color: #6b7280;
              margin-top: 8px;
            }
            .header .user-email {
              font-size: 14px;
              color: #9ca3af;
              margin-top: 5px;
            }
            .summary {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin-bottom: 40px;
            }
            .summary-card {
              padding: 20px;
              border-radius: 8px;
              background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
              border: 1px solid #d1d5db;
            }
            .summary-card.total { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-color: #fbbf24; }
            .summary-card.spent { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-color: #60a5fa; }
            .summary-card.remaining { background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-color: #34d399; }
            .summary-card.over { background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); border-color: #f87171; }
            .summary-card h3 {
              font-size: 14px;
              color: #6b7280;
              margin-bottom: 8px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .summary-card p {
              font-size: 28px;
              font-weight: bold;
              color: #1f2937;
            }
            .section {
              margin-bottom: 40px;
            }
            .section h2 {
              font-size: 22px;
              margin-bottom: 20px;
              color: #1f2937;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 10px;
            }
            .category-breakdown {
              margin-bottom: 30px;
            }
            .category-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 15px;
              margin-bottom: 10px;
              border-radius: 8px;
              background: #f9fafb;
              border-left: 4px solid;
            }
            .category-name {
              font-weight: 600;
              font-size: 16px;
            }
            .category-amounts {
              text-align: right;
            }
            .category-spent {
              font-size: 18px;
              font-weight: bold;
              color: #1f2937;
            }
            .category-budget {
              font-size: 14px;
              color: #6b7280;
              margin-top: 4px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              background: white;
            }
            th {
              background: #f3f4f6;
              padding: 12px;
              text-align: left;
              font-weight: 600;
              color: #374151;
              border-bottom: 2px solid #e5e7eb;
            }
            td {
              padding: 12px;
              border-bottom: 1px solid #f3f4f6;
            }
            tr:hover {
              background: #f9fafb;
            }
            .transaction-date {
              color: #6b7280;
              font-size: 14px;
            }
            .transaction-amount {
              font-weight: 600;
              color: #1f2937;
            }
            .footer {
              margin-top: 60px;
              text-align: center;
              color: #9ca3af;
              font-size: 12px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
            }
            @media print {
              body { padding: 20px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Budget Report</h1>
            <div class="date-range">${dateRangeText}</div>
            <div class="user-email">${userEmail}</div>
          </div>

          <div class="summary">
            <div class="summary-card total">
              <h3>Total Budget</h3>
              <p>$${totalBudget.toFixed(2)}</p>
            </div>
            <div class="summary-card spent">
              <h3>Total Spent</h3>
              <p>$${totalSpent.toFixed(2)}</p>
            </div>
            <div class="summary-card ${(stryMutAct_9fa48("258") ? totalSpent <= totalBudget : stryMutAct_9fa48("257") ? totalSpent >= totalBudget : stryMutAct_9fa48("256") ? false : stryMutAct_9fa48("255") ? true : (stryCov_9fa48("255", "256", "257", "258"), totalSpent > totalBudget)) ? stryMutAct_9fa48("259") ? "" : (stryCov_9fa48("259"), 'over') : stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), 'remaining')}">
              <h3>${(stryMutAct_9fa48("264") ? totalSpent <= totalBudget : stryMutAct_9fa48("263") ? totalSpent >= totalBudget : stryMutAct_9fa48("262") ? false : stryMutAct_9fa48("261") ? true : (stryCov_9fa48("261", "262", "263", "264"), totalSpent > totalBudget)) ? stryMutAct_9fa48("265") ? "" : (stryCov_9fa48("265"), 'Over Budget') : stryMutAct_9fa48("266") ? "" : (stryCov_9fa48("266"), 'Remaining')}</h3>
              <p>$${Math.abs(stryMutAct_9fa48("267") ? totalBudget + totalSpent : (stryCov_9fa48("267"), totalBudget - totalSpent)).toFixed(2)}</p>
            </div>
          </div>

          <div class="section category-breakdown">
            <h2>Spending by Category</h2>
            ${categories.map(cat => {
          if (stryMutAct_9fa48("268")) {
            {}
          } else {
            stryCov_9fa48("268");
            const spent = getSpentByCategory(cat.id);
            const remaining = stryMutAct_9fa48("269") ? cat.budget_amount + spent : (stryCov_9fa48("269"), cat.budget_amount - spent);
            const isOver = stryMutAct_9fa48("273") ? remaining >= 0 : stryMutAct_9fa48("272") ? remaining <= 0 : stryMutAct_9fa48("271") ? false : stryMutAct_9fa48("270") ? true : (stryCov_9fa48("270", "271", "272", "273"), remaining < 0);
            return stryMutAct_9fa48("274") ? `` : (stryCov_9fa48("274"), `
                <div class="category-item" style="border-left-color: ${cat.color}">
                  <div class="category-name">${cat.name}</div>
                  <div class="category-amounts">
                    <div class="category-spent" style="color: ${isOver ? stryMutAct_9fa48("275") ? "" : (stryCov_9fa48("275"), '#ef4444') : stryMutAct_9fa48("276") ? "" : (stryCov_9fa48("276"), '#1f2937')}">
                      $${spent.toFixed(2)}
                    </div>
                    <div class="category-budget">
                      Budget: $${cat.budget_amount.toFixed(2)}
                      ${isOver ? stryMutAct_9fa48("277") ? `` : (stryCov_9fa48("277"), `<span style="color: #ef4444;"> (Over by $${Math.abs(remaining).toFixed(2)})</span>`) : stryMutAct_9fa48("278") ? "Stryker was here!" : (stryCov_9fa48("278"), '')}
                    </div>
                  </div>
                </div>
              `);
          }
        }).join(stryMutAct_9fa48("279") ? "Stryker was here!" : (stryCov_9fa48("279"), ''))}
          </div>

          <div class="section">
            <h2>Transaction History</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th style="text-align: right;">Amount</th>
                </tr>
              </thead>
              <tbody>
                ${stryMutAct_9fa48("280") ? filteredTransactions.map(t => {
          const category = getCategoryInfo(t.category_id);
          return `
                    <tr>
                      <td class="transaction-date">
                        ${new Date(t.transaction_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
                      </td>
                      <td>${t.description}</td>
                      <td>${category?.name || 'Unknown'}</td>
                      <td class="transaction-amount" style="text-align: right;">$${parseFloat(t.amount.toString()).toFixed(2)}</td>
                    </tr>
                  `;
        }).join('') : (stryCov_9fa48("280"), filteredTransactions.sort(stryMutAct_9fa48("281") ? () => undefined : (stryCov_9fa48("281"), (a, b) => stryMutAct_9fa48("282") ? new Date(b.transaction_date).getTime() + new Date(a.transaction_date).getTime() : (stryCov_9fa48("282"), new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime()))).map(t => {
          if (stryMutAct_9fa48("283")) {
            {}
          } else {
            stryCov_9fa48("283");
            const category = getCategoryInfo(t.category_id);
            return stryMutAct_9fa48("284") ? `` : (stryCov_9fa48("284"), `
                    <tr>
                      <td class="transaction-date">
                        ${new Date(t.transaction_date).toLocaleDateString(stryMutAct_9fa48("285") ? "" : (stryCov_9fa48("285"), 'en-US'), stryMutAct_9fa48("286") ? {} : (stryCov_9fa48("286"), {
              year: stryMutAct_9fa48("287") ? "" : (stryCov_9fa48("287"), 'numeric'),
              month: stryMutAct_9fa48("288") ? "" : (stryCov_9fa48("288"), 'short'),
              day: stryMutAct_9fa48("289") ? "" : (stryCov_9fa48("289"), 'numeric')
            }))}
                      </td>
                      <td>${t.description}</td>
                      <td>${stryMutAct_9fa48("292") ? category?.name && 'Unknown' : stryMutAct_9fa48("291") ? false : stryMutAct_9fa48("290") ? true : (stryCov_9fa48("290", "291", "292"), (stryMutAct_9fa48("293") ? category.name : (stryCov_9fa48("293"), category?.name)) || (stryMutAct_9fa48("294") ? "" : (stryCov_9fa48("294"), 'Unknown')))}</td>
                      <td class="transaction-amount" style="text-align: right;">$${parseFloat(t.amount.toString()).toFixed(2)}</td>
                    </tr>
                  `);
          }
        }).join(stryMutAct_9fa48("295") ? "Stryker was here!" : (stryCov_9fa48("295"), '')))}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Generated on ${new Date().toLocaleDateString(stryMutAct_9fa48("296") ? "" : (stryCov_9fa48("296"), 'en-US'), stryMutAct_9fa48("297") ? {} : (stryCov_9fa48("297"), {
          year: stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), 'numeric'),
          month: stryMutAct_9fa48("299") ? "" : (stryCov_9fa48("299"), 'long'),
          day: stryMutAct_9fa48("300") ? "" : (stryCov_9fa48("300"), 'numeric'),
          hour: stryMutAct_9fa48("301") ? "" : (stryCov_9fa48("301"), '2-digit'),
          minute: stryMutAct_9fa48("302") ? "" : (stryCov_9fa48("302"), '2-digit')
        }))}</p>
            <p style="margin-top: 8px;">Budget Tracker - Personal Finance Management</p>
          </div>
        </body>
      </html>
    `);
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        setTimeout(() => {
          if (stryMutAct_9fa48("303")) {
            {}
          } else {
            stryCov_9fa48("303");
            printWindow.print();
          }
        }, 250);
        setShowModal(stryMutAct_9fa48("304") ? true : (stryCov_9fa48("304"), false));
      }
    };
    return <>
      <button onClick={stryMutAct_9fa48("305") ? () => undefined : (stryCov_9fa48("305"), () => setShowModal(stryMutAct_9fa48("306") ? false : (stryCov_9fa48("306"), true)))} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm">
        <Download size={20} />
        Export PDF
      </button>

      {stryMutAct_9fa48("309") ? showModal || <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Download size={24} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Export Budget Report</h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Select a date range for your report, or leave blank to export all transactions.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button onClick={generatePDF} className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                  Generate PDF
                </button>
              </div>
            </div>
          </div>
        </div> : stryMutAct_9fa48("308") ? false : stryMutAct_9fa48("307") ? true : (stryCov_9fa48("307", "308", "309"), showModal && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Download size={24} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Export Budget Report</h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Select a date range for your report, or leave blank to export all transactions.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" value={startDate} onChange={stryMutAct_9fa48("310") ? () => undefined : (stryCov_9fa48("310"), e => setStartDate(e.target.value))} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" value={endDate} onChange={stryMutAct_9fa48("311") ? () => undefined : (stryCov_9fa48("311"), e => setEndDate(e.target.value))} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={stryMutAct_9fa48("312") ? () => undefined : (stryCov_9fa48("312"), () => setShowModal(stryMutAct_9fa48("313") ? true : (stryCov_9fa48("313"), false)))} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button onClick={generatePDF} className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                  Generate PDF
                </button>
              </div>
            </div>
          </div>
        </div>)}
    </>;
  }
}