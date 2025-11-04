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
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{
    error: any;
  }>;
  signIn: (email: string, password: string) => Promise<{
    error: any;
  }>;
  signOut: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  if (stryMutAct_9fa48("773")) {
    {}
  } else {
    stryCov_9fa48("773");
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(stryMutAct_9fa48("774") ? false : (stryCov_9fa48("774"), true));
    useEffect(() => {
      if (stryMutAct_9fa48("775")) {
        {}
      } else {
        stryCov_9fa48("775");
        supabase.auth.getSession().then(({
          data: {
            session
          }
        }) => {
          if (stryMutAct_9fa48("776")) {
            {}
          } else {
            stryCov_9fa48("776");
            setUser(stryMutAct_9fa48("777") ? session?.user && null : (stryCov_9fa48("777"), (stryMutAct_9fa48("778") ? session.user : (stryCov_9fa48("778"), session?.user)) ?? null));
            setLoading(stryMutAct_9fa48("779") ? true : (stryCov_9fa48("779"), false));
          }
        });
        const {
          data: {
            subscription
          }
        } = supabase.auth.onAuthStateChange((_event, session) => {
          if (stryMutAct_9fa48("780")) {
            {}
          } else {
            stryCov_9fa48("780");
            (async () => {
              if (stryMutAct_9fa48("781")) {
                {}
              } else {
                stryCov_9fa48("781");
                setUser(stryMutAct_9fa48("782") ? session?.user && null : (stryCov_9fa48("782"), (stryMutAct_9fa48("783") ? session.user : (stryCov_9fa48("783"), session?.user)) ?? null));
              }
            })();
          }
        });
        return stryMutAct_9fa48("784") ? () => undefined : (stryCov_9fa48("784"), () => subscription.unsubscribe());
      }
    }, stryMutAct_9fa48("785") ? ["Stryker was here"] : (stryCov_9fa48("785"), []));
    const signUp = async (email: string, password: string) => {
      if (stryMutAct_9fa48("786")) {
        {}
      } else {
        stryCov_9fa48("786");
        const {
          error
        } = await supabase.auth.signUp(stryMutAct_9fa48("787") ? {} : (stryCov_9fa48("787"), {
          email,
          password
        }));
        return stryMutAct_9fa48("788") ? {} : (stryCov_9fa48("788"), {
          error
        });
      }
    };
    const signIn = async (email: string, password: string) => {
      if (stryMutAct_9fa48("789")) {
        {}
      } else {
        stryCov_9fa48("789");
        const {
          error
        } = await supabase.auth.signInWithPassword(stryMutAct_9fa48("790") ? {} : (stryCov_9fa48("790"), {
          email,
          password
        }));
        return stryMutAct_9fa48("791") ? {} : (stryCov_9fa48("791"), {
          error
        });
      }
    };
    const signOut = async () => {
      if (stryMutAct_9fa48("792")) {
        {}
      } else {
        stryCov_9fa48("792");
        await supabase.auth.signOut();
      }
    };
    return <AuthContext.Provider value={stryMutAct_9fa48("793") ? {} : (stryCov_9fa48("793"), {
      user,
      loading,
      signUp,
      signIn,
      signOut
    })}>
      {children}
    </AuthContext.Provider>;
  }
}
export function useAuth() {
  if (stryMutAct_9fa48("794")) {
    {}
  } else {
    stryCov_9fa48("794");
    const context = useContext(AuthContext);
    if (stryMutAct_9fa48("797") ? context !== undefined : stryMutAct_9fa48("796") ? false : stryMutAct_9fa48("795") ? true : (stryCov_9fa48("795", "796", "797"), context === undefined)) {
      if (stryMutAct_9fa48("798")) {
        {}
      } else {
        stryCov_9fa48("798");
        throw new Error(stryMutAct_9fa48("799") ? "" : (stryCov_9fa48("799"), 'useAuth must be used within an AuthProvider'));
      }
    }
    return context;
  }
}