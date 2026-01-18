-- ============================================
-- ScopeTraceAI Leads Table
-- System of record for marketing leads
-- ============================================

-- Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    
    -- Contact information
    name TEXT,
    email TEXT NOT NULL,
    company TEXT,
    role TEXT,
    message TEXT,
    
    -- Source tracking
    source TEXT,
    source_page TEXT,
    
    -- UTM parameters
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    
    -- Lead management
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed', 'junk')),
    notes TEXT,
    last_contacted_at TIMESTAMPTZ,
    
    -- Deduplication: generated column for case-insensitive email lookup
    email_lower TEXT GENERATED ALWAYS AS (lower(email)) STORED
);

-- Create unique index on email_lower for deduplication
CREATE UNIQUE INDEX IF NOT EXISTS leads_email_lower_idx ON public.leads(email_lower);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS leads_status_idx ON public.leads(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads(created_at DESC);

-- Create index on source for analytics
CREATE INDEX IF NOT EXISTS leads_source_idx ON public.leads(source);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_leads_updated_at ON public.leads;
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can do everything (backend writes use service role key)
-- Note: This table is written ONLY by the backend service role, not by the public web app.
-- The marketing site calls the Flask backend API, which uses the service role key.
-- No anon key writes are exposed.

-- Allow service role full access (this is the default, but explicit for clarity)
-- Service role bypasses RLS, so no policy needed for service role writes.

-- For admin reads (if needed via anon key with proper auth):
-- You would add policies here if you need to read via anon key with JWT auth.
-- For now, all reads/writes happen via service role from backend.

-- Add length constraints via check constraints (enforced at application level, but good to have)
ALTER TABLE public.leads ADD CONSTRAINT leads_name_length CHECK (name IS NULL OR length(name) <= 200);
ALTER TABLE public.leads ADD CONSTRAINT leads_email_length CHECK (length(email) <= 254);
ALTER TABLE public.leads ADD CONSTRAINT leads_company_length CHECK (company IS NULL OR length(company) <= 200);
ALTER TABLE public.leads ADD CONSTRAINT leads_role_length CHECK (role IS NULL OR length(role) <= 200);
ALTER TABLE public.leads ADD CONSTRAINT leads_message_length CHECK (message IS NULL OR length(message) <= 2000);
ALTER TABLE public.leads ADD CONSTRAINT leads_source_length CHECK (source IS NULL OR length(source) <= 500);
ALTER TABLE public.leads ADD CONSTRAINT leads_source_page_length CHECK (source_page IS NULL OR length(source_page) <= 500);
ALTER TABLE public.leads ADD CONSTRAINT leads_utm_length CHECK (
    (utm_source IS NULL OR length(utm_source) <= 200) AND
    (utm_medium IS NULL OR length(utm_medium) <= 200) AND
    (utm_campaign IS NULL OR length(utm_campaign) <= 200) AND
    (utm_term IS NULL OR length(utm_term) <= 200) AND
    (utm_content IS NULL OR length(utm_content) <= 200)
);

-- Comments for documentation
COMMENT ON TABLE public.leads IS 'Marketing leads captured from the ScopeTraceAI website. System of record for lead data.';
COMMENT ON COLUMN public.leads.email_lower IS 'Generated column for case-insensitive email deduplication';
COMMENT ON COLUMN public.leads.status IS 'Lead status: new, contacted, qualified, closed, or junk';
COMMENT ON COLUMN public.leads.source IS 'Lead source identifier (e.g., "marketing_more_info")';
COMMENT ON COLUMN public.leads.source_page IS 'Page URL where lead was captured (e.g., "/")';
