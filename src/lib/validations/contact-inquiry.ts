import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  company: z.string().optional().nullable(),
  whatsapp: z.string().optional().nullable(),
  budgetRange: z.string().optional().nullable(),
  timeline: z.string().optional().nullable(),
  services: z.array(z.string()).optional().nullable(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
