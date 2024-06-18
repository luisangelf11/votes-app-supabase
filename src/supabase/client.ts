import {createClient} from '@supabase/supabase-js'

const supabaseUrl: string = "https://wtoundgydybfdzziaetj.supabase.co";
const apiKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0b3VuZGd5ZHliZmR6emlhZXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjU1NDksImV4cCI6MjAzMjg0MTU0OX0.ogu7D_suPhPejV53nlgOye4HAesI1mTy1Y1eQIawxhU";

export const supabase = createClient(supabaseUrl, apiKey); 