/*
  # Budget Tracking App Schema

  1. New Tables
    - `budget_categories`
      - `id` (uuid, primary key)
      - `name` (text) - Category name (e.g., "Groceries", "Rent")
      - `budget_amount` (decimal) - Monthly budget allocation
      - `color` (text) - Display color for the category
      - `icon` (text) - Icon identifier
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `transactions`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key to budget_categories)
      - `amount` (decimal) - Transaction amount
      - `description` (text) - Transaction description
      - `transaction_date` (date) - When the transaction occurred
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public access for demo purposes (simplified version)
    - In production, would use auth.uid() for user-specific data

  3. Indexes
    - Index on category_id for faster transaction lookups
    - Index on transaction_date for date-based queries
*/

-- Create budget_categories table
CREATE TABLE IF NOT EXISTS budget_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  budget_amount decimal(10, 2) NOT NULL DEFAULT 0,
  color text NOT NULL DEFAULT '#6366f1',
  icon text NOT NULL DEFAULT 'DollarSign',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES budget_categories(id) ON DELETE CASCADE,
  amount decimal(10, 2) NOT NULL,
  description text NOT NULL,
  transaction_date date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_transactions_category_id ON transactions(category_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(transaction_date);

-- Enable RLS
ALTER TABLE budget_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies (allowing public access for demo - simplified version)
CREATE POLICY "Allow public read access to categories"
  ON budget_categories FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert to categories"
  ON budget_categories FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public update to categories"
  ON budget_categories FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete to categories"
  ON budget_categories FOR DELETE
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to transactions"
  ON transactions FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert to transactions"
  ON transactions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public update to transactions"
  ON transactions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete to transactions"
  ON transactions FOR DELETE
  TO anon
  USING (true);

-- Insert sample categories
INSERT INTO budget_categories (name, budget_amount, color, icon) VALUES
  ('Groceries', 500.00, '#10b981', 'ShoppingCart'),
  ('Rent', 1500.00, '#f59e0b', 'Home'),
  ('Transportation', 300.00, '#3b82f6', 'Car'),
  ('Entertainment', 200.00, '#ec4899', 'Film'),
  ('Utilities', 250.00, '#8b5cf6', 'Zap')
ON CONFLICT DO NOTHING;