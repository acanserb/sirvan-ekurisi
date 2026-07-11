'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { trackLead } from '@/lib/analytics'

interface FormState {
  name: string
  phone: string
  email: string
  program: string
  message: string
}

const initial: FormState = {
  name: '',
  phone: '',
  email: '',
  program: 'Başlangıç Eğitimi',
  message: '',
}

const PROGRAMS = [
  'Çocuk Binicilik Eğitimi',
  'Yetişkin Binicilik Eğitimi',
  'Başlangıç Eğitimi',
  'Profesyonel Gelişim Eğitimi',
  'Genel Bilgi',
]

interface Props {
  variant?: 'light' | 'dark'
  title?: string
  subtitle?: string
}

export default function ContactForm({ variant = 'dark', title, subtitle }: Props) {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const dark = variant === 'dark'

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      trackLead()
      setForm(initial)
    }, 700)
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex h-full min-h-[500px] flex-col items-center justify-center border p-12 text-center',
          dark ? 'border-cream/10 bg-ink/40 text-cream' : 'border-ink/10 bg-cream-50 text-ink',
        )}
      >
        <CheckCircle2 className={cn('size-12', dark ? 'text-tan-200' : 'text-tan-600')} />
        <h3 className={cn('mt-8 font-display text-display-md', dark ? 'text-cream' : 'text-ink')}>
          Teşekkür ederiz.
        </h3>
        <p className={cn('mt-5 max-w-md text-body-lg', dark ? 'text-cream/85' : 'text-ink/65')}>
          Mesajınız bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek. Acil durumlar için telefon veya WhatsApp&apos;tan ulaşabilirsiniz.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className={cn(
            'mt-10 text-[11px] uppercase tracking-wider-2 underline-grow',
            dark ? 'text-tan-200' : 'text-tan-700',
          )}
        >
          Yeni Mesaj Gönder
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={cn('p-10 md:p-14', dark ? 'border border-cream/10 bg-ink/40' : 'border border-ink/10 bg-cream-50')}>
      <h3 className={cn('font-display text-display-md', dark ? 'text-cream' : 'text-ink')}>
        {title ?? 'Hızlı Başvuru'}
      </h3>
      <p className={cn('mt-3 max-w-sm text-[14px] leading-relaxed', dark ? 'text-cream/75' : 'text-ink/55')}>
        {subtitle ?? 'Formu doldurun, deneme dersinizi planlamak için size dönüş yapalım.'}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field label="Adınız Soyadınız" name="name" value={form.name} onChange={onChange} required autoComplete="name" dark={dark} />
        <Field label="Telefon" name="phone" type="tel" value={form.phone} onChange={onChange} required autoComplete="tel" placeholder="05XX XXX XX XX" dark={dark} />
        <Field label="E-posta" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" className="sm:col-span-2" dark={dark} />
        <SelectField label="İlgilendiğiniz Program" name="program" value={form.program} onChange={onChange} options={PROGRAMS} className="sm:col-span-2" dark={dark} />
        <TextAreaField label="Mesajınız" name="message" value={form.message} onChange={onChange} rows={4} className="sm:col-span-2" dark={dark} />
      </div>

      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className={cn('text-[10px] uppercase tracking-wider-2', dark ? 'text-cream/35' : 'text-ink/40')}>
          KVKK aydınlatma metnini kabul etmiş olursunuz.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group/btn inline-flex h-14 items-center gap-3 bg-tan-600 px-9 text-[12px] uppercase tracking-wider-2 text-cream transition-all duration-500 hover:bg-ink disabled:opacity-60"
        >
          {status === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
          <ArrowRight className="size-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </form>
  )
}

function Field({ label, className, dark = true, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; dark?: boolean }) {
  return (
    <label className={cn('flex flex-col gap-3', className)}>
      <span className={cn('text-[10px] uppercase tracking-wider-2', dark ? 'text-cream/75' : 'text-ink/50')}>
        {label}
        {rest.required ? <span aria-hidden> *</span> : null}
      </span>
      <input
        {...rest}
        className={cn(
          'h-12 border-b bg-transparent text-[15px] outline-none transition-colors',
          dark
            ? 'border-cream/35 text-cream placeholder:text-cream/45 focus:border-tan-200'
            : 'border-ink/15 text-ink placeholder:text-ink/30 focus:border-tan-600',
        )}
      />
    </label>
  )
}

function TextAreaField({ label, className, dark = true, ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; dark?: boolean }) {
  return (
    <label className={cn('flex flex-col gap-3', className)}>
      <span className={cn('text-[10px] uppercase tracking-wider-2', dark ? 'text-cream/75' : 'text-ink/50')}>
        {label}
      </span>
      <textarea
        {...rest}
        className={cn(
          'border-b bg-transparent py-3 text-[15px] outline-none transition-colors',
          dark
            ? 'border-cream/35 text-cream placeholder:text-cream/45 focus:border-tan-200'
            : 'border-ink/15 text-ink placeholder:text-ink/30 focus:border-tan-600',
        )}
      />
    </label>
  )
}

function SelectField({ label, options, className, dark = true, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[]; dark?: boolean }) {
  return (
    <label className={cn('flex flex-col gap-3', className)}>
      <span className={cn('text-[10px] uppercase tracking-wider-2', dark ? 'text-cream/75' : 'text-ink/50')}>
        {label}
      </span>
      <select
        {...rest}
        className={cn(
          'h-12 border-b bg-transparent text-[15px] outline-none',
          dark
            ? 'border-cream/35 text-cream focus:border-tan-200'
            : 'border-ink/15 text-ink focus:border-tan-600',
        )}
      >
        {options.map((o) => (
          <option key={o} value={o} className={dark ? 'bg-ink' : 'bg-cream-50'}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
