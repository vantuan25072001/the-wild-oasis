import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ttvpmpfqdwifwkmbugqs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0dnBtcGZxZHdpZndrbWJ1Z3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODMxMDksImV4cCI6MjAxMDk1OTEwOX0.4-B-ayXx9Dr8sqo8gUr12rAOanNEzhdDaFob8RLhik8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
