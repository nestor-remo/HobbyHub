import { createClient } from "@supabase/supabase-js";

const URL = "https://udsiaptxhdztjdfkkwog.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkc2lhcHR4aGR6dGpkZmtrd29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzQ1MjQsImV4cCI6MjAyODU1MDUyNH0.BJKRlm3CPTbLdKotwRm4GhKD0en6MHrF28aTpoIqPsI";

export const supabase = createClient(URL, API_KEY);