import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabaseAdmin: SupabaseClient | null = null;

// NOTE: We use the public anon key from environment, but calls remain server-side.
// The DB RLS policy is configured to allow anonymous inserts but block anonymous reads.
export function getSupabaseAdmin() {
  if (_supabaseAdmin) return _supabaseAdmin;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables");
  }

  _supabaseAdmin = createClient(url, key, { auth: { persistSession: false } });
  return _supabaseAdmin;
}
