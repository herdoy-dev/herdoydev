import "server-only";
import type { Lead, LeadStatus } from "@/types";
import type { ContactInput } from "@/schemas/contact";

/**
 * Lead persistence layer.
 *
 * This is a stub backed by an in-memory store so the project runs with zero
 * external setup. Swap the body of `createLead` / `getLeads` for a real
 * database (Prisma, Drizzle, Mongo, etc.) — the rest of the app is decoupled
 * from the storage implementation via this module.
 */

const leads: Lead[] = [];

function id() {
  return `lead_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

export async function createLead(input: ContactInput): Promise<Lead> {
  const lead: Lead = {
    id: id(),
    name: input.name,
    email: input.email,
    company: input.company || undefined,
    budget: input.budget,
    service: input.service,
    message: input.message,
    status: "New",
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);

  // TODO: replace with real persistence + transactional email
  // e.g. await db.lead.create({ data: lead })
  //      await sendEmail({ to: siteConfig.email, ... })
  console.info("[lead] new submission", { id: lead.id, email: lead.email });

  return lead;
}

export async function getLeads(status?: LeadStatus): Promise<Lead[]> {
  return status ? leads.filter((l) => l.status === status) : [...leads];
}

export async function updateLeadStatus(
  leadId: string,
  status: LeadStatus
): Promise<Lead | null> {
  const lead = leads.find((l) => l.id === leadId);
  if (!lead) return null;
  lead.status = status;
  return lead;
}
