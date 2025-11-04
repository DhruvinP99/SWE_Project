/*
test('adds budget correctly', () => {
  const total = 100;
  const expense = 40;
  expect(total - expense).toBe(60);
});

test('does not exceed budget limit', () => {
  const limit = 500;
  const spent = 450;
  expect(spent).toBeLessThanOrEqual(limit);
});
*/
// @ts-nocheck


// app.test.ts
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

// ===== TESTS =====
describe('Budget Tracking App Tests', () => {
  let budget: Budget;

  beforeEach(() => {
    budget = new Budget(500); // set limit $500
  });

  test('add expense increases total spent', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    budget.addExpense({ id: 2, category: 'Transport', amount: 50 });
    expect(budget.totalSpent()).toBe(150);
  });

  test('remove expense decreases total spent', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    budget.addExpense({ id: 2, category: 'Transport', amount: 50 });
    budget.removeExpense(1);
    expect(budget.totalSpent()).toBe(50);
  });

  test('detects over budget', () => {
    budget.addExpense({ id: 1, category: 'Shopping', amount: 600 });
    expect(budget.isOverBudget()).toBe(true);
  });

  test('expenses by category', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 50 });
    budget.addExpense({ id: 2, category: 'Transport', amount: 100 });
    budget.addExpense({ id: 3, category: 'Food', amount: 30 });
    expect(budget.expensesByCategory('Food')).toHaveLength(2);
  });

  test('initially no expenses over budget', () => {
    expect(budget.isOverBudget()).toBe(false);
  });

  test('total spent updates correctly after multiple operations', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    budget.addExpense({ id: 2, category: 'Transport', amount: 50 });
    budget.removeExpense(1);
    budget.addExpense({ id: 3, category: 'Shopping', amount: 200 });
    expect(budget.totalSpent()).toBe(250);
  });

  test('over budget after cumulative expenses', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 200 });
    budget.addExpense({ id: 2, category: 'Shopping', amount: 350 });
    expect(budget.isOverBudget()).toBe(true);
  });

  test('expenses by category empty if none exist', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    expect(budget.expensesByCategory('Transport')).toHaveLength(0);
  });

  // ===== ADDITIONAL TESTS =====

  test('exactly at budget limit is not over budget', () => {
    budget.addExpense({ id: 1, category: 'Rent', amount: 500 });
    expect(budget.isOverBudget()).toBe(false);
  });

  test('multiple expenses in same category are grouped correctly', () => {
    budget.addExpense({ id: 1, category: 'Groceries', amount: 100 });
    budget.addExpense({ id: 2, category: 'Groceries', amount: 200 });
    budget.addExpense({ id: 3, category: 'Bills', amount: 50 });
    const groceries = budget.expensesByCategory('Groceries');
    expect(groceries.reduce((a, b) => a + b.amount, 0)).toBe(300);
  });

  test('removing non-existent expense does not affect total', () => {
    budget.addExpense({ id: 1, category: 'Food', amount: 100 });
    budget.removeExpense(999); // invalid ID
    expect(budget.totalSpent()).toBe(100);
  });

  test('can handle zero-amount expenses', () => {
    budget.addExpense({ id: 1, category: 'Misc', amount: 0 });
    expect(budget.totalSpent()).toBe(0);
    expect(budget.isOverBudget()).toBe(false);
  });

  test('adding multiple expenses updates total correctly', () => {
    for (let i = 1; i <= 5; i++) {
      budget.addExpense({ id: i, category: 'Food', amount: 50 });
    }
    expect(budget.totalSpent()).toBe(250);
  });
});
