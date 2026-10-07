import type { Request, Response } from 'express'
import { Resend } from 'resend'
import { z } from 'zod'
import { env } from './env.js'

const resend = new Resend(env.resendApiKey)

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

export async function handleContact(request: Request, response: Response) {
  const parsed = contactSchema.safeParse(request.body)

  if (!parsed.success) {
    return response.status(400).json({ error: 'invalid_payload' })
  }

  const { name, email, subject, message, company_url } = parsed.data

  if (company_url && company_url.trim() !== '') {
    console.warn('[contact] honeypot preenchido, descartando mensagem')
    return response.status(200).json({ ok: true })
  }

  try {
    const { error } = await resend.emails.send({
      from: env.contactFrom,
      to: env.contactTo,
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
      return response.status(502).json({ error: 'send_failed' })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('[contact] falha inesperada ao enviar:', error)
    return response.status(500).json({ error: 'send_failed' })
  }
}
