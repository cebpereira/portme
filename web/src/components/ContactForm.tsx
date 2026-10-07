import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useContactForm } from '@/hooks/useContactForm'
import { useContent } from '@/lib/i18n'
import type { Content } from '@/content/types'

function buildSchema(errors: Content['contact']['errors']) {
  return z.object({
    name: z.string().trim().min(1, errors.nameRequired),
    email: z.string().trim().min(1, errors.emailRequired).email(errors.emailInvalid),
    subject: z.string().trim().min(1, errors.subjectRequired),
    message: z.string().trim().min(1, errors.messageRequired).min(10, errors.messageTooShort),
    company_url: z.string().optional(),
  })
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1.5 text-sm text-ochre">{message}</p>
}

export function ContactForm() {
  const content = useContent()
  const { state, submit } = useContactForm()

  const schema = useMemo(() => buildSchema(content.contact.errors), [content.contact.errors])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '', company_url: '' },
  })

  const submitting = state === 'submitting'

  async function onSubmit(values: FormValues) {
    const result = await submit(values)

    if (result === 'success') {
      toast.success(content.contact.toast.success)
      reset()
      return
    }

    toast.error(content.contact.toast[result])
  }

  const fieldClass =
    'border-chalk/45 bg-chalk/5 text-chalk placeholder:text-chalk/45 selection:bg-chalk selection:text-brand-block focus-visible:border-ochre aria-invalid:border-ochre aria-invalid:ring-0'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="lg:pt-2">
      <div className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_url">Company URL</label>
        <input id="company_url" type="text" tabIndex={-1} autoComplete="off" {...register('company_url')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-chalk/80">
            {content.contact.fields.name}
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder={content.contact.placeholders.name}
            aria-invalid={Boolean(errors.name)}
            className={`mt-2 ${fieldClass}`}
            {...register('name')}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="email" className="text-chalk/80">
            {content.contact.fields.email}
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={content.contact.placeholders.email}
            aria-invalid={Boolean(errors.email)}
            className={`mt-2 ${fieldClass}`}
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="subject" className="text-chalk/80">
          {content.contact.fields.subject}
        </Label>
        <Input
          id="subject"
          placeholder={content.contact.placeholders.subject}
          aria-invalid={Boolean(errors.subject)}
          className={`mt-2 ${fieldClass}`}
          {...register('subject')}
        />
        <FieldError message={errors.subject?.message} />
      </div>

      <div className="mt-5">
        <Label htmlFor="message" className="text-chalk/80">
          {content.contact.fields.message}
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder={content.contact.placeholders.message}
          aria-invalid={Boolean(errors.message)}
          className={`mt-2 resize-y ${fieldClass}`}
          {...register('message')}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="mt-7 bg-chalk text-brand-block hover:bg-ochre hover:text-ink disabled:opacity-60"
      >
        {submitting ? content.contact.submitting : content.contact.submit}
      </Button>
    </form>
  )
}
