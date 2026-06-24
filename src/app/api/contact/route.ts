import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/validations/contact-inquiry";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    const data = parsed.data;

    const insertPayload = {
      name: data.name,
      email: data.email,
      message: data.message,
      company: data.company ?? null,
      whatsapp: data.whatsapp ?? null,
      budget_range: data.budgetRange ?? null,
      timeline: data.timeline ?? null,
      services: data.services ?? [],
      source_page: "contact",
    } as const;

    const supabaseAdmin = getSupabaseAdmin();
    const { error } = await supabaseAdmin.from("contact_inquiries").insert([insertPayload]);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
