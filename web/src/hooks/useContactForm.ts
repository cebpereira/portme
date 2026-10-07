import { useCallback, useState } from 'react'

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
  company_url?: string
}

export type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export type SubmitResult = 'success' | 'failure' | 'rateLimited' | 'network'

export function useContactForm() {
  const [state, setState] = useState<SubmitState>('idle')

  const submit = useCallback(async (payload: ContactPayload): Promise<SubmitResult> => {
    setState('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setState('success')
        return 'success'
      }

      setState('error')
      return response.status === 429 ? 'rateLimited' : 'failure'
    } catch {
      setState('error')
      return 'network'
    }
  }, [])

  return { state, submit }
}
