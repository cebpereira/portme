import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import { sendContact } from './contact.js'
import { env } from './env.js'

const app = express()

app.set('trust proxy', 1)

app.use(cors({ origin: env.allowedOrigins }))
app.use(express.json({ limit: '10kb' }))

app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' })
})

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'rate_limited' },
})

app.post('/contact', contactLimiter, async (request, response) => {
  const result = await sendContact(env, request.body)
  response.status(result.status).json(result.body)
})

app.listen(env.port, () => {
  console.log(`[api] ouvindo na porta ${env.port}`)
})
