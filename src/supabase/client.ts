import {createClient} from '@supabase/supabase-js'

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL
const apiKey: string = import.meta.env.VITE_API_KEY

export const supabase = createClient(supabaseUrl, apiKey); 