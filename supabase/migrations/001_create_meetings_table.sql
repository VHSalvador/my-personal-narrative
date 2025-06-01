
-- Create meetings table
CREATE TABLE IF NOT EXISTS meetings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  meeting_date DATE NOT NULL,
  meeting_time TIME NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policy
ALTER TABLE meetings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert meetings (for booking)
CREATE POLICY "Anyone can create meetings" ON meetings
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading your own meetings (by email)
CREATE POLICY "Users can read their own meetings" ON meetings
  FOR SELECT
  USING (auth.jwt() ->> 'email' = email);
