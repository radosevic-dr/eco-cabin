
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://lurzufojalloulfozkms.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1cnp1Zm9qYWxsb3VsZm96a21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MjU2MjEsImV4cCI6MjAxNjMwMTYyMX0.nEgjLIpIR1HgfaY9RukGTHWoXktft_VzcjYVZJVoinU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;