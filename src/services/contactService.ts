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
 * Otherwise returns an error so the UI shows the service is unavailable.
 * Replace with your email / API / database as needed.
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  if (!CONTACT_ENDPOINT) {
    // No backend configured — return a clear error instead of faking success.
    return {
      ok: false,
      error: 'Contact service is currently unavailable. Please email us directly at hello@ideavix.com.',
    };
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
