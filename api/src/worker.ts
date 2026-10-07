import { sendContact } from './contact.js'

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
  CONTACT_LIMITER: { limit(options: { key: string }): Promise<{ success: boolean }> }
  RESEND_API_KEY: string
  CONTACT_TO: string
  CONTACT_FROM: string
}

const MAX_BODY_BYTES = 10 * 1024

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return Response.json({ error: 'method_not_allowed' }, { status: 405, headers: { Allow: 'POST' } })
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
  const { success } = await env.CONTACT_LIMITER.limit({ key: ip })

  if (!success) {
    return Response.json({ error: 'rate_limited' }, { status: 429 })
  }

  const raw = await request.text()

  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: 'payload_too_large' }, { status: 413 })
  }

  let payload: unknown
  try {
    payload = JSON.parse(raw)
  } catch {
    return Response.json({ error: 'invalid_payload' }, { status: 400 })
  }

  const result = await sendContact(
    {
      resendApiKey: env.RESEND_API_KEY,
      contactTo: env.CONTACT_TO,
      contactFrom: env.CONTACT_FROM,
    },
    payload,
  )

  return Response.json(result.body, { status: result.status })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)

    if (pathname === '/api/contact') {
      return handleContact(request, env)
    }

    if (pathname.startsWith('/api/')) {
      return Response.json({ error: 'not_found' }, { status: 404 })
    }

    return env.ASSETS.fetch(request)
  },
}
