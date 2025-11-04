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
const API_URL = stryMutAct_9fa48("0") ? "" : (stryCov_9fa48("0"), "http://localhost:5000"); // your backend server

export async function getCategories() {
  if (stryMutAct_9fa48("1")) {
    {}
  } else {
    stryCov_9fa48("1");
    const response = await fetch(stryMutAct_9fa48("2") ? `` : (stryCov_9fa48("2"), `${API_URL}/categories`));
    if (stryMutAct_9fa48("5") ? false : stryMutAct_9fa48("4") ? true : stryMutAct_9fa48("3") ? response.ok : (stryCov_9fa48("3", "4", "5"), !response.ok)) throw new Error(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), "Failed to fetch categories"));
    return response.json();
  }
}
export async function addCategory(newCategory) {
  if (stryMutAct_9fa48("7")) {
    {}
  } else {
    stryCov_9fa48("7");
    const response = await fetch(stryMutAct_9fa48("8") ? `` : (stryCov_9fa48("8"), `${API_URL}/categories`), stryMutAct_9fa48("9") ? {} : (stryCov_9fa48("9"), {
      method: stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), "POST"),
      headers: stryMutAct_9fa48("11") ? {} : (stryCov_9fa48("11"), {
        "Content-Type": stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), "application/json")
      }),
      body: JSON.stringify(newCategory)
    }));
    if (stryMutAct_9fa48("15") ? false : stryMutAct_9fa48("14") ? true : stryMutAct_9fa48("13") ? response.ok : (stryCov_9fa48("13", "14", "15"), !response.ok)) throw new Error(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), "Failed to add category"));
    return response.json();
  }
}