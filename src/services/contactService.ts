export type ContactPayload = {
  fullName: string;
  workEmail: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  description: string;
  privacyAccepted: boolean;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

/**
 * Integration point for the contact form.
 * If VITE_CONTACT_ENDPOINT is set, POSTs JSON there.
 * Otherwise resolves locally so the UI remains functional.
 * Replace with your email / API / database as needed.
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  if (!CONTACT_ENDPOINT) {
    // No backend configured — simulate success for now.
    await new Promise((r) => setTimeout(r, 900));
    console.info('[contactService] No VITE_CONTACT_ENDPOINT configured — payload:', payload);
    return { ok: true };
  }
  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `Request failed (${res.status})` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Network error' };
  }
}
