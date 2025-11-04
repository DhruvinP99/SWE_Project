import { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { BudgetCategory, Transaction } from '../lib/supabase';

interface ExportPDFProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
  userEmail: string;
}

export function ExportPDF({ categories, transactions, userEmail }: ExportPDFProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const generatePDF = () => {
    let filteredTransactions = transactions;

    if (startDate && endDate) {
      filteredTransactions = transactions.filter(t => {
        const transDate = new Date(t.transaction_date);
        return transDate >= new Date(startDate) && transDate <= new Date(endDate);
      });
    }

    const totalSpent = filteredTransactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
    const totalBudget = categories.reduce((sum, c) => sum + parseFloat(c.budget_amount.toString()), 0);

    const getCategoryInfo = (categoryId: string) => {
      return categories.find(c => c.id === categoryId);
    };

    const getSpentByCategory = (categoryId: string) => {
      return filteredTransactions
        .filter(t => t.category_id === categoryId)
        .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
    };

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const dateRangeText = startDate && endDate
      ? `${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`
      : 'All Time';

    const htmlContent = `
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
            <div class="summary-card ${totalSpent > totalBudget ? 'over' : 'remaining'}">
              <h3>${totalSpent > totalBudget ? 'Over Budget' : 'Remaining'}</h3>
              <p>$${Math.abs(totalBudget - totalSpent).toFixed(2)}</p>
            </div>
          </div>

          <div class="section category-breakdown">
            <h2>Spending by Category</h2>
            ${categories.map(cat => {
              const spent = getSpentByCategory(cat.id);
              const remaining = cat.budget_amount - spent;
              const isOver = remaining < 0;
              return `
                <div class="category-item" style="border-left-color: ${cat.color}">
                  <div class="category-name">${cat.name}</div>
                  <div class="category-amounts">
                    <div class="category-spent" style="color: ${isOver ? '#ef4444' : '#1f2937'}">
                      $${spent.toFixed(2)}
                    </div>
                    <div class="category-budget">
                      Budget: $${cat.budget_amount.toFixed(2)}
                      ${isOver ? `<span style="color: #ef4444;"> (Over by $${Math.abs(remaining).toFixed(2)})</span>` : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
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
                ${filteredTransactions.sort((a, b) =>
                  new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime()
                ).map(t => {
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
                }).join('')}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Generated on ${new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            <p style="margin-top: 8px;">Budget Tracker - Personal Finance Management</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 250);

    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
      >
        <Download size={20} />
        Export PDF
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
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
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={generatePDF}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  Generate PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
