// @ts-nocheck
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export interface BudgetCategory {
  id: string;
  name: string;
  budget_amount: number;
  color: string;
  icon: string;
  created_at: string;
  updated_at: string;
}
export interface Transaction {
  id: string;
  category_id: string;
  amount: number;
  description: string;
  transaction_date: string;
  created_at: string;
}