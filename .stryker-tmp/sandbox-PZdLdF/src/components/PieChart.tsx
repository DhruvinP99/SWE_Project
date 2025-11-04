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
import { BudgetCategory, Transaction } from '../lib/supabase';
import { useState } from 'react';
interface PieChartProps {
  categories: BudgetCategory[];
  transactions: Transaction[];
}
export function PieChart({
  categories,
  transactions
}: PieChartProps) {
  if (stryMutAct_9fa48("478")) {
    {}
  } else {
    stryCov_9fa48("478");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const getSpentByCategory = (categoryId: string) => {
      if (stryMutAct_9fa48("479")) {
        {}
      } else {
        stryCov_9fa48("479");
        return stryMutAct_9fa48("480") ? transactions.reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0) : (stryCov_9fa48("480"), transactions.filter(stryMutAct_9fa48("481") ? () => undefined : (stryCov_9fa48("481"), t => stryMutAct_9fa48("484") ? t.category_id !== categoryId : stryMutAct_9fa48("483") ? false : stryMutAct_9fa48("482") ? true : (stryCov_9fa48("482", "483", "484"), t.category_id === categoryId))).reduce(stryMutAct_9fa48("485") ? () => undefined : (stryCov_9fa48("485"), (sum, t) => stryMutAct_9fa48("486") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("486"), sum + parseFloat(t.amount.toString()))), 0));
      }
    };
    const totalSpent = transactions.reduce(stryMutAct_9fa48("487") ? () => undefined : (stryCov_9fa48("487"), (sum, t) => stryMutAct_9fa48("488") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("488"), sum + parseFloat(t.amount.toString()))), 0);
    const chartData = stryMutAct_9fa48("490") ? categories.map(category => ({
      ...category,
      spent: getSpentByCategory(category.id),
      percentage: totalSpent > 0 ? getSpentByCategory(category.id) / totalSpent * 100 : 0
    })).sort((a, b) => b.spent - a.spent) : stryMutAct_9fa48("489") ? categories.map(category => ({
      ...category,
      spent: getSpentByCategory(category.id),
      percentage: totalSpent > 0 ? getSpentByCategory(category.id) / totalSpent * 100 : 0
    })).filter(item => item.spent > 0) : (stryCov_9fa48("489", "490"), categories.map(stryMutAct_9fa48("491") ? () => undefined : (stryCov_9fa48("491"), category => stryMutAct_9fa48("492") ? {} : (stryCov_9fa48("492"), {
      ...category,
      spent: getSpentByCategory(category.id),
      percentage: (stryMutAct_9fa48("496") ? totalSpent <= 0 : stryMutAct_9fa48("495") ? totalSpent >= 0 : stryMutAct_9fa48("494") ? false : stryMutAct_9fa48("493") ? true : (stryCov_9fa48("493", "494", "495", "496"), totalSpent > 0)) ? stryMutAct_9fa48("497") ? getSpentByCategory(category.id) / totalSpent / 100 : (stryCov_9fa48("497"), (stryMutAct_9fa48("498") ? getSpentByCategory(category.id) * totalSpent : (stryCov_9fa48("498"), getSpentByCategory(category.id) / totalSpent)) * 100) : 0
    }))).filter(stryMutAct_9fa48("499") ? () => undefined : (stryCov_9fa48("499"), item => stryMutAct_9fa48("503") ? item.spent <= 0 : stryMutAct_9fa48("502") ? item.spent >= 0 : stryMutAct_9fa48("501") ? false : stryMutAct_9fa48("500") ? true : (stryCov_9fa48("500", "501", "502", "503"), item.spent > 0))).sort(stryMutAct_9fa48("504") ? () => undefined : (stryCov_9fa48("504"), (a, b) => stryMutAct_9fa48("505") ? b.spent + a.spent : (stryCov_9fa48("505"), b.spent - a.spent))));
    if (stryMutAct_9fa48("508") ? chartData.length !== 0 : stryMutAct_9fa48("507") ? false : stryMutAct_9fa48("506") ? true : (stryCov_9fa48("506", "507", "508"), chartData.length === 0)) {
      if (stryMutAct_9fa48("509")) {
        {}
      } else {
        stryCov_9fa48("509");
        return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No spending data available</p>
      </div>;
      }
    }
    let currentAngle = stryMutAct_9fa48("510") ? +90 : (stryCov_9fa48("510"), -90);
    const slices = chartData.map((item, index) => {
      if (stryMutAct_9fa48("511")) {
        {}
      } else {
        stryCov_9fa48("511");
        const angle = stryMutAct_9fa48("512") ? item.percentage / 100 / 360 : (stryCov_9fa48("512"), (stryMutAct_9fa48("513") ? item.percentage * 100 : (stryCov_9fa48("513"), item.percentage / 100)) * 360);
        const startAngle = currentAngle;
        const endAngle = stryMutAct_9fa48("514") ? currentAngle - angle : (stryCov_9fa48("514"), currentAngle + angle);
        currentAngle = endAngle;
        const startRad = stryMutAct_9fa48("515") ? startAngle * Math.PI * 180 : (stryCov_9fa48("515"), (stryMutAct_9fa48("516") ? startAngle / Math.PI : (stryCov_9fa48("516"), startAngle * Math.PI)) / 180);
        const endRad = stryMutAct_9fa48("517") ? endAngle * Math.PI * 180 : (stryCov_9fa48("517"), (stryMutAct_9fa48("518") ? endAngle / Math.PI : (stryCov_9fa48("518"), endAngle * Math.PI)) / 180);
        const x1 = stryMutAct_9fa48("519") ? 100 - 80 * Math.cos(startRad) : (stryCov_9fa48("519"), 100 + (stryMutAct_9fa48("520") ? 80 / Math.cos(startRad) : (stryCov_9fa48("520"), 80 * Math.cos(startRad))));
        const y1 = stryMutAct_9fa48("521") ? 100 - 80 * Math.sin(startRad) : (stryCov_9fa48("521"), 100 + (stryMutAct_9fa48("522") ? 80 / Math.sin(startRad) : (stryCov_9fa48("522"), 80 * Math.sin(startRad))));
        const x2 = stryMutAct_9fa48("523") ? 100 - 80 * Math.cos(endRad) : (stryCov_9fa48("523"), 100 + (stryMutAct_9fa48("524") ? 80 / Math.cos(endRad) : (stryCov_9fa48("524"), 80 * Math.cos(endRad))));
        const y2 = stryMutAct_9fa48("525") ? 100 - 80 * Math.sin(endRad) : (stryCov_9fa48("525"), 100 + (stryMutAct_9fa48("526") ? 80 / Math.sin(endRad) : (stryCov_9fa48("526"), 80 * Math.sin(endRad))));
        const largeArc = (stryMutAct_9fa48("530") ? angle <= 180 : stryMutAct_9fa48("529") ? angle >= 180 : stryMutAct_9fa48("528") ? false : stryMutAct_9fa48("527") ? true : (stryCov_9fa48("527", "528", "529", "530"), angle > 180)) ? 1 : 0;
        const path = stryMutAct_9fa48("531") ? `` : (stryCov_9fa48("531"), `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`);
        return stryMutAct_9fa48("532") ? {} : (stryCov_9fa48("532"), {
          ...item,
          path,
          index
        });
      }
    });
    return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending Distribution</h3>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative" style={stryMutAct_9fa48("533") ? {} : (stryCov_9fa48("533"), {
          width: stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), '280px'),
          height: stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), '280px')
        })}>
          <svg viewBox="0 0 200 200" className="w-full h-full transform rotate-0">
            {slices.map(stryMutAct_9fa48("536") ? () => undefined : (stryCov_9fa48("536"), slice => <g key={slice.id}>
                <path d={slice.path} fill={slice.color} className="transition-all duration-300 cursor-pointer" style={stryMutAct_9fa48("537") ? {} : (stryCov_9fa48("537"), {
                opacity: (stryMutAct_9fa48("540") ? hoveredIndex === null && hoveredIndex === slice.index : stryMutAct_9fa48("539") ? false : stryMutAct_9fa48("538") ? true : (stryCov_9fa48("538", "539", "540"), (stryMutAct_9fa48("542") ? hoveredIndex !== null : stryMutAct_9fa48("541") ? false : (stryCov_9fa48("541", "542"), hoveredIndex === null)) || (stryMutAct_9fa48("544") ? hoveredIndex !== slice.index : stryMutAct_9fa48("543") ? false : (stryCov_9fa48("543", "544"), hoveredIndex === slice.index)))) ? 1 : 0.3,
                transform: (stryMutAct_9fa48("547") ? hoveredIndex !== slice.index : stryMutAct_9fa48("546") ? false : stryMutAct_9fa48("545") ? true : (stryCov_9fa48("545", "546", "547"), hoveredIndex === slice.index)) ? stryMutAct_9fa48("548") ? "" : (stryCov_9fa48("548"), 'scale(1.05)') : stryMutAct_9fa48("549") ? "" : (stryCov_9fa48("549"), 'scale(1)'),
                transformOrigin: stryMutAct_9fa48("550") ? "" : (stryCov_9fa48("550"), '100px 100px')
              })} onMouseEnter={stryMutAct_9fa48("551") ? () => undefined : (stryCov_9fa48("551"), () => setHoveredIndex(slice.index))} onMouseLeave={stryMutAct_9fa48("552") ? () => undefined : (stryCov_9fa48("552"), () => setHoveredIndex(null))} />
              </g>))}
            <circle cx="100" cy="100" r="45" fill="white" />
            <text x="100" y="95" textAnchor="middle" className="text-xs fill-gray-600 font-medium">
              Total
            </text>
            <text x="100" y="110" textAnchor="middle" className="text-sm fill-gray-900 font-bold">
              ${totalSpent.toFixed(0)}
            </text>
          </svg>
        </div>

        <div className="flex-1 w-full">
          <div className="space-y-3">
            {chartData.map(stryMutAct_9fa48("553") ? () => undefined : (stryCov_9fa48("553"), (item, index) => <div key={item.id} className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer" style={stryMutAct_9fa48("554") ? {} : (stryCov_9fa48("554"), {
              backgroundColor: (stryMutAct_9fa48("557") ? hoveredIndex !== index : stryMutAct_9fa48("556") ? false : stryMutAct_9fa48("555") ? true : (stryCov_9fa48("555", "556", "557"), hoveredIndex === index)) ? stryMutAct_9fa48("558") ? `` : (stryCov_9fa48("558"), `${item.color}15`) : stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), 'transparent'),
              borderLeft: stryMutAct_9fa48("560") ? `` : (stryCov_9fa48("560"), `4px solid ${item.color}`)
            })} onMouseEnter={stryMutAct_9fa48("561") ? () => undefined : (stryCov_9fa48("561"), () => setHoveredIndex(index))} onMouseLeave={stryMutAct_9fa48("562") ? () => undefined : (stryCov_9fa48("562"), () => setHoveredIndex(null))}>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={stryMutAct_9fa48("563") ? {} : (stryCov_9fa48("563"), {
                  backgroundColor: item.color
                })} />
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${item.spent.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">{item.percentage.toFixed(1)}%</div>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </div>;
  }
}