import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://vxmzjrsnsuhasbwszsmc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bXpqcnNuc3VoYXNid3N6c21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3ODU5MzksImV4cCI6MjA4NzM2MTkzOX0.cl3NtOvc-XuRoVnC5QdY-e9d1ijLU1DOLN09ypJIAeY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)