
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Some features may not work properly.')
  console.warn('Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your Supabase integration.')
}

// Create a mock client if environment variables are missing
const createMockClient = () => ({
  from: () => ({
    insert: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
    select: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
  }),
  functions: {
    invoke: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
  }
})

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient()
