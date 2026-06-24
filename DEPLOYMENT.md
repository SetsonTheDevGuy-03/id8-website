**Supabase Deployment Notes**

- **Create a Supabase project**: In Supabase, create a new project and note the `SUPABASE_URL`.
- **Database table**: Run `supabase/schema.sql` from this repository in the Supabase SQL editor to create the `contact_inquiries` table and RLS configuration.
- **Service role key**: In Supabase Settings → API, copy the `SERVICE_ROLE` key. This key MUST NOT be exposed client-side. Use it only on the server (Next.js route handlers).
- **Environment variables**: Add the following to your Hostinger environment (or `.env.local` during development):
  - `SUPABASE_URL` = your Supabase project URL
  - `SUPABASE_SERVICE_ROLE_KEY` = service_role key (secret)

- **Hostinger notes & risks**:
  - Hostinger supports setting server environment variables for Node deployments; ensure `SUPABASE_SERVICE_ROLE_KEY` is set in the server env — do not inject it into client build-time variables.
  - Do NOT commit `.env.local` or the service role key to git.
  - The API route (`/api/contact`) uses the service role key to write into Supabase. Because the service role bypasses RLS, keep the key secret and rotate if leaked.

- **Verification**:
  - After deployment, send a test POST to `https://<your-site>/api/contact` with a valid JSON payload matching the form fields.
  - Check Supabase table `contact_inquiries` for a new row.
