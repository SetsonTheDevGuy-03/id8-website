-- Supabase schema for contact inquiries (anon insert, no anon read)
-- Run this in Supabase SQL editor to create the table and RLS policies

-- Enable uuid/gen functions
create extension if not exists "pgcrypto";

-- Table schema
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  company text,
  whatsapp text,
  budget_range text,
  timeline text,
  services text[] default '{}',
  status text not null default 'new',
  source_page text default 'contact',
  created_at timestamptz not null default now()
);

-- Enable row level security
alter table public.contact_inquiries enable row level security;

-- Policy: allow anonymous inserts (public/anon key)
create policy "Allow anon inserts" on public.contact_inquiries
  for insert
  using (true)
  with check (true);

-- Policy: block anon selects, allow only authenticated selects
create policy "Allow authenticated selects" on public.contact_inquiries
  for select
  using (auth.role() = 'authenticated');

-- Note: Inserts are allowed by anonymous (anon) key via the insert policy above.
-- Selects are restricted to authenticated users only.
