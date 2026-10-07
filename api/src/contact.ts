import { Resend } from 'resend'
import { z } from 'zod'

export interface ContactConfig {
  resendApiKey: string
  contactTo: string
  contactFrom: string
}

export interface ContactResult {
  status: number
  body: Record<string, unknown>
}

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(10).max(5000),
  company_url: z.string().optional(),
})

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ESCAPES[character] as string)
}

export async function sendContact(config: ContactConfig, payload: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return { status: 400, body: { error: 'invalid_payload' } }
  }

  const { name, email, subject, message, company_url } = parsed.data

  if (company_url && company_url.trim() !== '') {
    console.warn('[contact] honeypot preenchido, descartando mensagem')
    return { status: 200, body: { ok: true } }
  }

  try {
    const { error } = await new Resend(config.resendApiKey).emails.send({
      from: config.contactFrom,
      to: config.contactTo,
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      text: `${name} <${email}>\n\n${message}`,
      html: [
        `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>`,
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      ].join(''),
    })

    if (error) {
      console.error('[contact] Resend recusou o envio:', error)
      return { status: 502, body: { error: 'send_failed' } }
    }

    return { status: 200, body: { ok: true } }
  } catch (error) {
    console.error('[contact] falha inesperada ao enviar:', error)
    return { status: 500, body: { error: 'send_failed' } }
  }
}
