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
import { Transaction } from '../lib/supabase';
import { useState } from 'react';
interface LineChartProps {
  transactions: Transaction[];
  days?: number;
}
export function LineChart({
  transactions,
  days = 30
}: LineChartProps) {
  if (stryMutAct_9fa48("314")) {
    {}
  } else {
    stryCov_9fa48("314");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const getDailyData = () => {
      if (stryMutAct_9fa48("315")) {
        {}
      } else {
        stryCov_9fa48("315");
        const data: {
          date: Date;
          dateStr: string;
          amount: number;
        }[] = stryMutAct_9fa48("316") ? ["Stryker was here"] : (stryCov_9fa48("316"), []);
        const now = new Date();
        for (let i = stryMutAct_9fa48("317") ? days + 1 : (stryCov_9fa48("317"), days - 1); stryMutAct_9fa48("320") ? i < 0 : stryMutAct_9fa48("319") ? i > 0 : stryMutAct_9fa48("318") ? false : (stryCov_9fa48("318", "319", "320"), i >= 0); stryMutAct_9fa48("321") ? i++ : (stryCov_9fa48("321"), i--)) {
          if (stryMutAct_9fa48("322")) {
            {}
          } else {
            stryCov_9fa48("322");
            const date = new Date(now);
            stryMutAct_9fa48("323") ? date.setTime(date.getDate() - i) : (stryCov_9fa48("323"), date.setDate(stryMutAct_9fa48("324") ? date.getDate() + i : (stryCov_9fa48("324"), date.getDate() - i)));
            stryMutAct_9fa48("325") ? date.setMinutes(0, 0, 0, 0) : (stryCov_9fa48("325"), date.setHours(0, 0, 0, 0));
            const dayTransactions = stryMutAct_9fa48("326") ? transactions : (stryCov_9fa48("326"), transactions.filter(t => {
              if (stryMutAct_9fa48("327")) {
                {}
              } else {
                stryCov_9fa48("327");
                const transDate = new Date(t.transaction_date);
                stryMutAct_9fa48("328") ? transDate.setMinutes(0, 0, 0, 0) : (stryCov_9fa48("328"), transDate.setHours(0, 0, 0, 0));
                return stryMutAct_9fa48("331") ? transDate.getTime() !== date.getTime() : stryMutAct_9fa48("330") ? false : stryMutAct_9fa48("329") ? true : (stryCov_9fa48("329", "330", "331"), transDate.getTime() === date.getTime());
              }
            }));
            const amount = dayTransactions.reduce(stryMutAct_9fa48("332") ? () => undefined : (stryCov_9fa48("332"), (sum, t) => stryMutAct_9fa48("333") ? sum - parseFloat(t.amount.toString()) : (stryCov_9fa48("333"), sum + parseFloat(t.amount.toString()))), 0);
            data.push(stryMutAct_9fa48("334") ? {} : (stryCov_9fa48("334"), {
              date,
              dateStr: date.toLocaleDateString(stryMutAct_9fa48("335") ? "" : (stryCov_9fa48("335"), 'en-US'), stryMutAct_9fa48("336") ? {} : (stryCov_9fa48("336"), {
                month: stryMutAct_9fa48("337") ? "" : (stryCov_9fa48("337"), 'short'),
                day: stryMutAct_9fa48("338") ? "" : (stryCov_9fa48("338"), 'numeric')
              })),
              amount
            }));
          }
        }
        return data;
      }
    };
    const dailyData = getDailyData();
    const maxAmount = stryMutAct_9fa48("339") ? Math.min(...dailyData.map(d => d.amount), 100) : (stryCov_9fa48("339"), Math.max(...dailyData.map(stryMutAct_9fa48("340") ? () => undefined : (stryCov_9fa48("340"), d => d.amount)), 100));
    const avgAmount = stryMutAct_9fa48("341") ? dailyData.reduce((sum, d) => sum + d.amount, 0) * dailyData.length : (stryCov_9fa48("341"), dailyData.reduce(stryMutAct_9fa48("342") ? () => undefined : (stryCov_9fa48("342"), (sum, d) => stryMutAct_9fa48("343") ? sum - d.amount : (stryCov_9fa48("343"), sum + d.amount)), 0) / dailyData.length);
    const chartWidth = 800;
    const chartHeight = 300;
    const padding = stryMutAct_9fa48("344") ? {} : (stryCov_9fa48("344"), {
      top: 40,
      right: 20,
      bottom: 60,
      left: 60
    });
    const innerWidth = stryMutAct_9fa48("345") ? chartWidth - padding.left + padding.right : (stryCov_9fa48("345"), (stryMutAct_9fa48("346") ? chartWidth + padding.left : (stryCov_9fa48("346"), chartWidth - padding.left)) - padding.right);
    const innerHeight = stryMutAct_9fa48("347") ? chartHeight - padding.top + padding.bottom : (stryCov_9fa48("347"), (stryMutAct_9fa48("348") ? chartHeight + padding.top : (stryCov_9fa48("348"), chartHeight - padding.top)) - padding.bottom);
    const xStep = stryMutAct_9fa48("349") ? innerWidth * (dailyData.length - 1) : (stryCov_9fa48("349"), innerWidth / (stryMutAct_9fa48("350") ? dailyData.length + 1 : (stryCov_9fa48("350"), dailyData.length - 1)));
    const yScale = stryMutAct_9fa48("351") ? innerHeight * maxAmount : (stryCov_9fa48("351"), innerHeight / maxAmount);
    const points = dailyData.map(stryMutAct_9fa48("352") ? () => undefined : (stryCov_9fa48("352"), (d, i) => stryMutAct_9fa48("353") ? {} : (stryCov_9fa48("353"), {
      x: stryMutAct_9fa48("354") ? padding.left - i * xStep : (stryCov_9fa48("354"), padding.left + (stryMutAct_9fa48("355") ? i / xStep : (stryCov_9fa48("355"), i * xStep))),
      y: stryMutAct_9fa48("356") ? padding.top + innerHeight + d.amount * yScale : (stryCov_9fa48("356"), (stryMutAct_9fa48("357") ? padding.top - innerHeight : (stryCov_9fa48("357"), padding.top + innerHeight)) - (stryMutAct_9fa48("358") ? d.amount / yScale : (stryCov_9fa48("358"), d.amount * yScale))),
      ...d
    })));
    const pathD = points.reduce((path, point, i) => {
      if (stryMutAct_9fa48("359")) {
        {}
      } else {
        stryCov_9fa48("359");
        if (stryMutAct_9fa48("362") ? i !== 0 : stryMutAct_9fa48("361") ? false : stryMutAct_9fa48("360") ? true : (stryCov_9fa48("360", "361", "362"), i === 0)) {
          if (stryMutAct_9fa48("363")) {
            {}
          } else {
            stryCov_9fa48("363");
            return stryMutAct_9fa48("364") ? `` : (stryCov_9fa48("364"), `M ${point.x} ${point.y}`);
          }
        }
        const prevPoint = points[stryMutAct_9fa48("365") ? i + 1 : (stryCov_9fa48("365"), i - 1)];
        const cpX = stryMutAct_9fa48("366") ? (prevPoint.x + point.x) * 2 : (stryCov_9fa48("366"), (stryMutAct_9fa48("367") ? prevPoint.x - point.x : (stryCov_9fa48("367"), prevPoint.x + point.x)) / 2);
        return stryMutAct_9fa48("368") ? `` : (stryCov_9fa48("368"), `${path} C ${cpX} ${prevPoint.y}, ${cpX} ${point.y}, ${point.x} ${point.y}`);
      }
    }, stryMutAct_9fa48("369") ? "Stryker was here!" : (stryCov_9fa48("369"), ''));
    const areaPathD = stryMutAct_9fa48("370") ? `` : (stryCov_9fa48("370"), `${pathD} L ${points[stryMutAct_9fa48("371") ? points.length + 1 : (stryCov_9fa48("371"), points.length - 1)].x} ${stryMutAct_9fa48("372") ? padding.top - innerHeight : (stryCov_9fa48("372"), padding.top + innerHeight)} L ${padding.left} ${stryMutAct_9fa48("373") ? padding.top - innerHeight : (stryCov_9fa48("373"), padding.top + innerHeight)} Z`);
    const yAxisLabels = stryMutAct_9fa48("374") ? [] : (stryCov_9fa48("374"), [0, stryMutAct_9fa48("375") ? maxAmount * 2 : (stryCov_9fa48("375"), maxAmount / 2), maxAmount]);
    return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Daily Spending Trend</h3>
        <div className="text-sm text-gray-600">
          Last {days} days • Avg: <span className="font-semibold text-gray-900">${avgAmount.toFixed(2)}/day</span>
        </div>
      </div>

      <div className="relative">
        <svg viewBox={stryMutAct_9fa48("376") ? `` : (stryCov_9fa48("376"), `0 0 ${chartWidth} ${chartHeight}`)} className="w-full" style={stryMutAct_9fa48("377") ? {} : (stryCov_9fa48("377"), {
          maxHeight: stryMutAct_9fa48("378") ? "" : (stryCov_9fa48("378"), '400px')
        })}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {yAxisLabels.map((label, i) => {
            if (stryMutAct_9fa48("379")) {
              {}
            } else {
              stryCov_9fa48("379");
              const y = stryMutAct_9fa48("380") ? padding.top + innerHeight + label / maxAmount * innerHeight : (stryCov_9fa48("380"), (stryMutAct_9fa48("381") ? padding.top - innerHeight : (stryCov_9fa48("381"), padding.top + innerHeight)) - (stryMutAct_9fa48("382") ? label / maxAmount / innerHeight : (stryCov_9fa48("382"), (stryMutAct_9fa48("383") ? label * maxAmount : (stryCov_9fa48("383"), label / maxAmount)) * innerHeight)));
              return <g key={i}>
                <line x1={padding.left} y1={y} x2={stryMutAct_9fa48("384") ? chartWidth + padding.right : (stryCov_9fa48("384"), chartWidth - padding.right)} y2={y} stroke="#e5e7eb" strokeWidth="1" strokeDasharray={(stryMutAct_9fa48("387") ? i !== 0 : stryMutAct_9fa48("386") ? false : stryMutAct_9fa48("385") ? true : (stryCov_9fa48("385", "386", "387"), i === 0)) ? stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), "0") : stryMutAct_9fa48("389") ? "" : (stryCov_9fa48("389"), "4 4")} />
                <text x={stryMutAct_9fa48("390") ? padding.left + 10 : (stryCov_9fa48("390"), padding.left - 10)} y={stryMutAct_9fa48("391") ? y - 4 : (stryCov_9fa48("391"), y + 4)} textAnchor="end" className="text-xs fill-gray-600">
                  ${label.toFixed(0)}
                </text>
              </g>;
            }
          })}

          <path d={areaPathD} fill="url(#areaGradient)" />

          <path d={pathD} fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {points.map((point, i) => {
            if (stryMutAct_9fa48("392")) {
              {}
            } else {
              stryCov_9fa48("392");
              const showLabel = stryMutAct_9fa48("395") ? i % Math.ceil(points.length / 7) === 0 && i === points.length - 1 : stryMutAct_9fa48("394") ? false : stryMutAct_9fa48("393") ? true : (stryCov_9fa48("393", "394", "395"), (stryMutAct_9fa48("397") ? i % Math.ceil(points.length / 7) !== 0 : stryMutAct_9fa48("396") ? false : (stryCov_9fa48("396", "397"), (stryMutAct_9fa48("398") ? i * Math.ceil(points.length / 7) : (stryCov_9fa48("398"), i % Math.ceil(stryMutAct_9fa48("399") ? points.length * 7 : (stryCov_9fa48("399"), points.length / 7)))) === 0)) || (stryMutAct_9fa48("401") ? i !== points.length - 1 : stryMutAct_9fa48("400") ? false : (stryCov_9fa48("400", "401"), i === (stryMutAct_9fa48("402") ? points.length + 1 : (stryCov_9fa48("402"), points.length - 1)))));
              return <g key={i}>
                {stryMutAct_9fa48("405") ? showLabel || <text x={point.x} y={chartHeight - padding.bottom + 20} textAnchor="middle" className="text-xs fill-gray-600">
                    {point.dateStr}
                  </text> : stryMutAct_9fa48("404") ? false : stryMutAct_9fa48("403") ? true : (stryCov_9fa48("403", "404", "405"), showLabel && <text x={point.x} y={stryMutAct_9fa48("406") ? chartHeight - padding.bottom - 20 : (stryCov_9fa48("406"), (stryMutAct_9fa48("407") ? chartHeight + padding.bottom : (stryCov_9fa48("407"), chartHeight - padding.bottom)) + 20)} textAnchor="middle" className="text-xs fill-gray-600">
                    {point.dateStr}
                  </text>)}
                <circle cx={point.x} cy={point.y} r={(stryMutAct_9fa48("410") ? hoveredIndex !== i : stryMutAct_9fa48("409") ? false : stryMutAct_9fa48("408") ? true : (stryCov_9fa48("408", "409", "410"), hoveredIndex === i)) ? 6 : 4} fill="white" stroke="#f97316" strokeWidth="2" className="transition-all duration-200 cursor-pointer" onMouseEnter={stryMutAct_9fa48("411") ? () => undefined : (stryCov_9fa48("411"), () => setHoveredIndex(i))} onMouseLeave={stryMutAct_9fa48("412") ? () => undefined : (stryCov_9fa48("412"), () => setHoveredIndex(null))} />
                {stryMutAct_9fa48("415") ? hoveredIndex === i || <>
                    <rect x={point.x - 50} y={point.y - 50} width="100" height="40" rx="6" fill="#1f2937" opacity="0.95" />
                    <text x={point.x} y={point.y - 35} textAnchor="middle" className="text-xs fill-white font-medium">
                      {point.dateStr}
                    </text>
                    <text x={point.x} y={point.y - 20} textAnchor="middle" className="text-sm fill-white font-bold">
                      ${point.amount.toFixed(2)}
                    </text>
                  </> : stryMutAct_9fa48("414") ? false : stryMutAct_9fa48("413") ? true : (stryCov_9fa48("413", "414", "415"), (stryMutAct_9fa48("417") ? hoveredIndex !== i : stryMutAct_9fa48("416") ? true : (stryCov_9fa48("416", "417"), hoveredIndex === i)) && <>
                    <rect x={stryMutAct_9fa48("418") ? point.x + 50 : (stryCov_9fa48("418"), point.x - 50)} y={stryMutAct_9fa48("419") ? point.y + 50 : (stryCov_9fa48("419"), point.y - 50)} width="100" height="40" rx="6" fill="#1f2937" opacity="0.95" />
                    <text x={point.x} y={stryMutAct_9fa48("420") ? point.y + 35 : (stryCov_9fa48("420"), point.y - 35)} textAnchor="middle" className="text-xs fill-white font-medium">
                      {point.dateStr}
                    </text>
                    <text x={point.x} y={stryMutAct_9fa48("421") ? point.y + 20 : (stryCov_9fa48("421"), point.y - 20)} textAnchor="middle" className="text-sm fill-white font-bold">
                      ${point.amount.toFixed(2)}
                    </text>
                  </>)}
              </g>;
            }
          })}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Total Spent</p>
          <p className="text-xl font-bold text-gray-900">
            ${dailyData.reduce(stryMutAct_9fa48("422") ? () => undefined : (stryCov_9fa48("422"), (sum, d) => stryMutAct_9fa48("423") ? sum - d.amount : (stryCov_9fa48("423"), sum + d.amount)), 0).toFixed(2)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Peak Day</p>
          <p className="text-xl font-bold text-orange-600">
            ${stryMutAct_9fa48("424") ? Math.min(...dailyData.map(d => d.amount)).toFixed(2) : (stryCov_9fa48("424"), Math.max(...dailyData.map(stryMutAct_9fa48("425") ? () => undefined : (stryCov_9fa48("425"), d => d.amount))).toFixed(2))}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Days Active</p>
          <p className="text-xl font-bold text-blue-600">
            {stryMutAct_9fa48("426") ? dailyData.length : (stryCov_9fa48("426"), dailyData.filter(stryMutAct_9fa48("427") ? () => undefined : (stryCov_9fa48("427"), d => stryMutAct_9fa48("431") ? d.amount <= 0 : stryMutAct_9fa48("430") ? d.amount >= 0 : stryMutAct_9fa48("429") ? false : stryMutAct_9fa48("428") ? true : (stryCov_9fa48("428", "429", "430", "431"), d.amount > 0))).length)}
          </p>
        </div>
      </div>
    </div>;
  }
}