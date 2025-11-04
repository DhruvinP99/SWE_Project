/*
  # Add User Authentication Support

  1. Changes
    - Add user_id column to budget_categories table
    - Add user_id column to transactions table
    - Update RLS policies to be user-specific
    - Remove public access policies
    - Add authenticated user policies

  2. Security
    - Enable RLS with proper user authentication
    - Users can only see and manage their own data
    - All policies check auth.uid() for ownership
*/

-- Add user_id columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'budget_categories' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE budget_categories ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'transactions' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE transactions ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;

-- Create indexes for user_id columns
CREATE INDEX IF NOT EXISTS idx_budget_categories_user_id ON budget_categories(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);

-- Drop old public policies
DROP POLICY IF EXISTS "Allow public read access to categories" ON budget_categories;
DROP POLICY IF EXISTS "Allow public insert to categories" ON budget_categories;
DROP POLICY IF EXISTS "Allow public update to categories" ON budget_categories;
DROP POLICY IF EXISTS "Allow public delete to categories" ON budget_categories;
DROP POLICY IF EXISTS "Allow public read access to transactions" ON transactions;
DROP POLICY IF EXISTS "Allow public insert to transactions" ON transactions;
DROP POLICY IF EXISTS "Allow public update to transactions" ON transactions;
DROP POLICY IF EXISTS "Allow public delete to transactions" ON transactions;

-- Create user-specific policies for budget_categories
CREATE POLICY "Users can read own categories"
  ON budget_categories FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own categories"
  ON budget_categories FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own categories"
  ON budget_categories FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own categories"
  ON budget_categories FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create user-specific policies for transactions
CREATE POLICY "Users can read own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions"
  ON transactions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own transactions"
  ON transactions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own transactions"
  ON transactions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);