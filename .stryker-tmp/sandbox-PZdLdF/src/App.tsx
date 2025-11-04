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
import { useAuth } from './contexts/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { AnalysisPage } from './pages/AnalysisPage';
function App() {
  if (stryMutAct_9fa48("17")) {
    {}
  } else {
    stryCov_9fa48("17");
    const {
      user,
      loading
    } = useAuth();
    const [currentPage, setCurrentPage] = useState<'dashboard' | 'analysis'>(stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), 'dashboard'));
    if (stryMutAct_9fa48("20") ? false : stryMutAct_9fa48("19") ? true : (stryCov_9fa48("19", "20"), loading)) {
      if (stryMutAct_9fa48("21")) {
        {}
      } else {
        stryCov_9fa48("21");
        return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>;
      }
    }
    if (stryMutAct_9fa48("24") ? false : stryMutAct_9fa48("23") ? true : stryMutAct_9fa48("22") ? user : (stryCov_9fa48("22", "23", "24"), !user)) {
      if (stryMutAct_9fa48("25")) {
        {}
      } else {
        stryCov_9fa48("25");
        return <AuthPage />;
      }
    }
    if (stryMutAct_9fa48("28") ? currentPage !== 'analysis' : stryMutAct_9fa48("27") ? false : stryMutAct_9fa48("26") ? true : (stryCov_9fa48("26", "27", "28"), currentPage === (stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), 'analysis')))) {
      if (stryMutAct_9fa48("30")) {
        {}
      } else {
        stryCov_9fa48("30");
        return <AnalysisPage onNavigateBack={stryMutAct_9fa48("31") ? () => undefined : (stryCov_9fa48("31"), () => setCurrentPage(stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'dashboard')))} />;
      }
    }
    return <DashboardPage onNavigateToAnalysis={stryMutAct_9fa48("33") ? () => undefined : (stryCov_9fa48("33"), () => setCurrentPage(stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), 'analysis')))} />;
  }
}
export default App;