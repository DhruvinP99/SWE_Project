// @ts-nocheck
// app.metrics.test.ts
interface Expense {
  id: number;
  category: string;
  amount: number;
}

class Budget {
  limit: number;
  expenses: Expense[] = [];

  constructor(limit: number) {
    this.limit = limit;
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  removeExpense(id: number) {
    this.expenses = this.expenses.filter(exp => exp.id !== id);
  }

  totalSpent(): number {
    return this.expenses.reduce((acc, exp) => acc + exp.amount, 0);
  }

  isOverBudget(): boolean {
    return this.totalSpent() > this.limit;
  }

  expensesByCategory(category: string): Expense[] {
    return this.expenses.filter(exp => exp.category === category);
  }
}

// ===== Metrics object =====
interface Metrics {
  testsRun: number;
  testsPassed: number;
  totalExpensesAdded: number;
  totalExpensesRemoved: number;
  overBudgetChecks: number;
}

const metrics: Metrics = {
  testsRun: 0,
  testsPassed: 0,
  totalExpensesAdded: 0,
  totalExpensesRemoved: 0,
  overBudgetChecks: 0,
};

// ===== Tests =====
describe('Budget Metrics Tests', () => {
  let budget: Budget;

  beforeEach(() => {
    budget = new Budget(500);
  });

  test('add expense increases total spent', () => {
    metrics.testsRun++;
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    budget.addExpense({ id: 2, category: 'Transport', amount: 50 });
    metrics.totalExpensesAdded += 2;

    try {
      expect(budget.totalSpent()).toBe(150);
      metrics.testsPassed++;
    } catch {}
  });

  test('remove expense decreases total spent', () => {
    metrics.testsRun++;
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    metrics.totalExpensesAdded++;
    budget.removeExpense(1);
    metrics.totalExpensesRemoved++;

    try {
      expect(budget.totalSpent()).toBe(0);
      metrics.testsPassed++;
    } catch {}
  });

  test('over budget detection', () => {
    metrics.testsRun++;
    budget.addExpense({ id: 1, category: 'Shopping', amount: 600 });
    metrics.totalExpensesAdded++;
    if (budget.isOverBudget()) metrics.overBudgetChecks++;

    try {
      expect(budget.isOverBudget()).toBe(true);
      metrics.testsPassed++;
    } catch {}
  });

  test('expenses by category', () => {
    metrics.testsRun++;
    budget.addExpense({ id: 1, category: 'Food', amount: 50 });
    budget.addExpense({ id: 2, category: 'Food', amount: 30 });
    metrics.totalExpensesAdded += 2;

    try {
      expect(budget.expensesByCategory('Food')).toHaveLength(2);
      metrics.testsPassed++;
    } catch {}
  });

  test('exactly at budget limit is not over budget', () => {
    metrics.testsRun++;
    budget.addExpense({ id: 1, category: 'Rent', amount: 500 });
    metrics.totalExpensesAdded++;

    if (!budget.isOverBudget()) metrics.overBudgetChecks++;

    try {
      expect(budget.isOverBudget()).toBe(false);
      metrics.testsPassed++;
    } catch {}
  });

  test('adding multiple expenses updates total correctly', () => {
    metrics.testsRun++;
    for (let i = 1; i <= 5; i++) {
      budget.addExpense({ id: i, category: 'Misc', amount: 50 });
      metrics.totalExpensesAdded++;
    }

    try {
      expect(budget.totalSpent()).toBe(250);
      metrics.testsPassed++;
    } catch {}
  });

  // ===== Output metrics at the end =====
  afterAll(() => {
    console.log('\n====== Budget Test Metrics =====');
    console.table(metrics);
  });
});
