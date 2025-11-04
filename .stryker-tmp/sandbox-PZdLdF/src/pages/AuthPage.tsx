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
import { PiggyBank, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
export function AuthPage() {
  if (stryMutAct_9fa48("921")) {
    {}
  } else {
    stryCov_9fa48("921");
    const [isLogin, setIsLogin] = useState(stryMutAct_9fa48("922") ? false : (stryCov_9fa48("922"), true));
    const [email, setEmail] = useState(stryMutAct_9fa48("923") ? "Stryker was here!" : (stryCov_9fa48("923"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("924") ? "Stryker was here!" : (stryCov_9fa48("924"), ''));
    const [confirmPassword, setConfirmPassword] = useState(stryMutAct_9fa48("925") ? "Stryker was here!" : (stryCov_9fa48("925"), ''));
    const [error, setError] = useState(stryMutAct_9fa48("926") ? "Stryker was here!" : (stryCov_9fa48("926"), ''));
    const [loading, setLoading] = useState(stryMutAct_9fa48("927") ? true : (stryCov_9fa48("927"), false));
    const {
      signIn,
      signUp
    } = useAuth();
    const handleSubmit = async (e: React.FormEvent) => {
      if (stryMutAct_9fa48("928")) {
        {}
      } else {
        stryCov_9fa48("928");
        e.preventDefault();
        setError(stryMutAct_9fa48("929") ? "Stryker was here!" : (stryCov_9fa48("929"), ''));
        setLoading(stryMutAct_9fa48("930") ? false : (stryCov_9fa48("930"), true));
        if (stryMutAct_9fa48("933") ? !isLogin || password !== confirmPassword : stryMutAct_9fa48("932") ? false : stryMutAct_9fa48("931") ? true : (stryCov_9fa48("931", "932", "933"), (stryMutAct_9fa48("934") ? isLogin : (stryCov_9fa48("934"), !isLogin)) && (stryMutAct_9fa48("936") ? password === confirmPassword : stryMutAct_9fa48("935") ? true : (stryCov_9fa48("935", "936"), password !== confirmPassword)))) {
          if (stryMutAct_9fa48("937")) {
            {}
          } else {
            stryCov_9fa48("937");
            setError(stryMutAct_9fa48("938") ? "" : (stryCov_9fa48("938"), 'Passwords do not match'));
            setLoading(stryMutAct_9fa48("939") ? true : (stryCov_9fa48("939"), false));
            return;
          }
        }
        if (stryMutAct_9fa48("943") ? password.length >= 6 : stryMutAct_9fa48("942") ? password.length <= 6 : stryMutAct_9fa48("941") ? false : stryMutAct_9fa48("940") ? true : (stryCov_9fa48("940", "941", "942", "943"), password.length < 6)) {
          if (stryMutAct_9fa48("944")) {
            {}
          } else {
            stryCov_9fa48("944");
            setError(stryMutAct_9fa48("945") ? "" : (stryCov_9fa48("945"), 'Password must be at least 6 characters'));
            setLoading(stryMutAct_9fa48("946") ? true : (stryCov_9fa48("946"), false));
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("947")) {
            {}
          } else {
            stryCov_9fa48("947");
            if (stryMutAct_9fa48("949") ? false : stryMutAct_9fa48("948") ? true : (stryCov_9fa48("948", "949"), isLogin)) {
              if (stryMutAct_9fa48("950")) {
                {}
              } else {
                stryCov_9fa48("950");
                const {
                  error
                } = await signIn(email, password);
                if (stryMutAct_9fa48("952") ? false : stryMutAct_9fa48("951") ? true : (stryCov_9fa48("951", "952"), error)) {
                  if (stryMutAct_9fa48("953")) {
                    {}
                  } else {
                    stryCov_9fa48("953");
                    setError(error.message);
                  }
                }
              }
            } else {
              if (stryMutAct_9fa48("954")) {
                {}
              } else {
                stryCov_9fa48("954");
                const {
                  error
                } = await signUp(email, password);
                if (stryMutAct_9fa48("956") ? false : stryMutAct_9fa48("955") ? true : (stryCov_9fa48("955", "956"), error)) {
                  if (stryMutAct_9fa48("957")) {
                    {}
                  } else {
                    stryCov_9fa48("957");
                    setError(error.message);
                  }
                }
              }
            }
          }
        } catch (err: any) {
          if (stryMutAct_9fa48("958")) {
            {}
          } else {
            stryCov_9fa48("958");
            setError(stryMutAct_9fa48("961") ? err.message && 'An error occurred' : stryMutAct_9fa48("960") ? false : stryMutAct_9fa48("959") ? true : (stryCov_9fa48("959", "960", "961"), err.message || (stryMutAct_9fa48("962") ? "" : (stryCov_9fa48("962"), 'An error occurred'))));
          }
        } finally {
          if (stryMutAct_9fa48("963")) {
            {}
          } else {
            stryCov_9fa48("963");
            setLoading(stryMutAct_9fa48("964") ? true : (stryCov_9fa48("964"), false));
          }
        }
      }
    };
    return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-orange-500 rounded-2xl shadow-lg mb-4">
            <PiggyBank size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Budget Tracker</h1>
          <p className="text-gray-600">Take control of your finances</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <button type="button" onClick={() => {
              if (stryMutAct_9fa48("965")) {
                {}
              } else {
                stryCov_9fa48("965");
                setIsLogin(stryMutAct_9fa48("966") ? false : (stryCov_9fa48("966"), true));
                setError(stryMutAct_9fa48("967") ? "Stryker was here!" : (stryCov_9fa48("967"), ''));
              }
            }} className={stryMutAct_9fa48("968") ? `` : (stryCov_9fa48("968"), `flex-1 py-2 px-4 rounded-md font-medium transition-all ${isLogin ? stryMutAct_9fa48("969") ? "" : (stryCov_9fa48("969"), 'bg-white text-gray-900 shadow-sm') : stryMutAct_9fa48("970") ? "" : (stryCov_9fa48("970"), 'text-gray-600 hover:text-gray-900')}`)}>
              Login
            </button>
            <button type="button" onClick={() => {
              if (stryMutAct_9fa48("971")) {
                {}
              } else {
                stryCov_9fa48("971");
                setIsLogin(stryMutAct_9fa48("972") ? true : (stryCov_9fa48("972"), false));
                setError(stryMutAct_9fa48("973") ? "Stryker was here!" : (stryCov_9fa48("973"), ''));
              }
            }} className={stryMutAct_9fa48("974") ? `` : (stryCov_9fa48("974"), `flex-1 py-2 px-4 rounded-md font-medium transition-all ${(stryMutAct_9fa48("975") ? isLogin : (stryCov_9fa48("975"), !isLogin)) ? stryMutAct_9fa48("976") ? "" : (stryCov_9fa48("976"), 'bg-white text-gray-900 shadow-sm') : stryMutAct_9fa48("977") ? "" : (stryCov_9fa48("977"), 'text-gray-600 hover:text-gray-900')}`)}>
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {stryMutAct_9fa48("980") ? error || <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-800">
                <AlertCircle size={18} />
                <span className="text-sm">{error}</span>
              </div> : stryMutAct_9fa48("979") ? false : stryMutAct_9fa48("978") ? true : (stryCov_9fa48("978", "979", "980"), error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-800">
                <AlertCircle size={18} />
                <span className="text-sm">{error}</span>
              </div>)}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" value={email} onChange={stryMutAct_9fa48("981") ? () => undefined : (stryCov_9fa48("981"), e => setEmail(e.target.value))} placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="password" value={password} onChange={stryMutAct_9fa48("982") ? () => undefined : (stryCov_9fa48("982"), e => setPassword(e.target.value))} placeholder="••••••••" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
              </div>
            </div>

            {stryMutAct_9fa48("985") ? !isLogin || <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
                </div>
              </div> : stryMutAct_9fa48("984") ? false : stryMutAct_9fa48("983") ? true : (stryCov_9fa48("983", "984", "985"), (stryMutAct_9fa48("986") ? isLogin : (stryCov_9fa48("986"), !isLogin)) && <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="password" value={confirmPassword} onChange={stryMutAct_9fa48("987") ? () => undefined : (stryCov_9fa48("987"), e => setConfirmPassword(e.target.value))} placeholder="••••••••" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required />
                </div>
              </div>)}

            <button type="submit" disabled={loading} className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
              {loading ? stryMutAct_9fa48("988") ? "" : (stryCov_9fa48("988"), 'Please wait...') : isLogin ? stryMutAct_9fa48("989") ? "" : (stryCov_9fa48("989"), 'Login') : stryMutAct_9fa48("990") ? "" : (stryCov_9fa48("990"), 'Create Account')}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? <p>
                Don't have an account?{stryMutAct_9fa48("991") ? "" : (stryCov_9fa48("991"), ' ')}
                <button onClick={() => {
                if (stryMutAct_9fa48("992")) {
                  {}
                } else {
                  stryCov_9fa48("992");
                  setIsLogin(stryMutAct_9fa48("993") ? true : (stryCov_9fa48("993"), false));
                  setError(stryMutAct_9fa48("994") ? "Stryker was here!" : (stryCov_9fa48("994"), ''));
                }
              }} className="text-orange-500 font-medium hover:text-orange-600">
                  Sign up
                </button>
              </p> : <p>
                Already have an account?{stryMutAct_9fa48("995") ? "" : (stryCov_9fa48("995"), ' ')}
                <button onClick={() => {
                if (stryMutAct_9fa48("996")) {
                  {}
                } else {
                  stryCov_9fa48("996");
                  setIsLogin(stryMutAct_9fa48("997") ? false : (stryCov_9fa48("997"), true));
                  setError(stryMutAct_9fa48("998") ? "Stryker was here!" : (stryCov_9fa48("998"), ''));
                }
              }} className="text-orange-500 font-medium hover:text-orange-600">
                  Login
                </button>
              </p>}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Your data is securely stored and encrypted
        </p>
      </div>
    </div>;
  }
}