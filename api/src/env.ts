
function required(name: string): string {
  const value = process.env[name]
  if (!value || value.trim() === '') {
    throw new Error(`Variável de ambiente obrigatória ausente: ${name}`)
  }
  return value.trim()
}

function optional(name: string, fallback: string): string {
  const value = process.env[name]
  return value && value.trim() !== '' ? value.trim() : fallback
}

export const env = {
  port: Number(optional('PORT', '3001')),
  resendApiKey: required('RESEND_API_KEY'),
  contactTo: required('CONTACT_TO'),
  contactFrom: required('CONTACT_FROM'),
  allowedOrigins: optional('ALLOWED_ORIGIN', 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
}
