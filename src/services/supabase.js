import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ixkcoogupvecywdjryma.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4a2Nvb2d1cHZlY3l3ZGpyeW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNTA5OTcsImV4cCI6MjA2NTYyNjk5N30.ddhlig-rey7EMBUCAoBwQXv-Uj7q8h0DcUrlpU1SEnk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
