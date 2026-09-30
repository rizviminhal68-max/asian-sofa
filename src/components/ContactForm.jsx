import { useMemo, useState } from 'react'
import { Send } from 'lucide-react'

import { WhatsAppIcon } from './ContactButtons'
import { EVENTS, trackEvent } from '../lib/tracking'
import { serviceOptions } from '../content/services'
import {
  PHONE_DISPLAY,
  WHATSAPP_MESSAGE,
  whatsappLink,
} from '../content/site'

const EMPTY = { name: '', phone: '', service: '', message: '' }

/**
 * Enquiry form.
 *
 * There is NO backend wired up, and the form does not pretend otherwise.
 * Set VITE_ENQUIRY_ENDPOINT in `.env` once a backend exists and the form will
 * POST to it. Until then it hands the enquiry over to WhatsApp, which is fully
 * functional and needs no server.
 */
export default function ContactForm({ initialService = '' }) {
  const [values, setValues] = useState(() => ({ ...EMPTY, service: initialService }))
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT || ''

  const whatsappHref = useMemo(() => {
    const lines = []
    if (values.name) lines.push(`Name: ${values.name}`)
    if (values.phone) lines.push(`Phone: ${values.phone}`)
    if (values.service) lines.push(`Service required: ${values.service}`)
    if (values.message) lines.push(`Message: ${values.message}`)

    const body = lines.length
      ? `Hello Asian Sofa,\n\n${lines.join('\n')}`
      : WHATSAPP_MESSAGE

    return whatsappLink(body)
  }, [values])

  const validate = () => {
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    const digits = values.phone.replace(/\D/g, '')
    if (digits.length < 10) next.phone = 'Please enter a 10-digit phone number.'
    if (!values.service) next.service = 'Please choose a service.'
    if (values.message.length > 1000) next.message = 'Please keep the message shorter.'
    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const payload = { ...values, submitted_at: new Date().toISOString() }

    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(() => {
          setSubmitted(true)
          setValues(EMPTY)
          trackEvent(EVENTS.CONTACT_FORM_SUBMIT, {
            event_label: 'contact-form',
            event_category: 'lead',
            service_required: payload.service,
          })
        })
        .catch(() => setErrors({ form: 'Something went wrong. Please call or WhatsApp us instead.' }))
      return
    }

    // No backend: hand off to WhatsApp rather than pretending to submit.
    trackEvent(EVENTS.CONTACT_FORM_SUBMIT, {
      event_label: 'contact-form-whatsapp-handoff',
      event_category: 'lead',
      service_required: payload.service,
    })
    window.open(whatsappHref, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setValues(EMPTY)
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const fieldClass = (hasError) =>
    `mt-2 w-full rounded-md border bg-ivory px-4 py-3 text-[0.9375rem] text-ink-900 placeholder:text-ink-300 transition-colors focus:outline-none ${
      hasError ? 'border-clay-600' : 'border-ink-900/15 hover:border-ink-900/30'
    }`

  return (
    <div>
      <form onSubmit={onSubmit} noValidate className="rounded-lg border border-ink-900/10 bg-ivory p-6 shadow-[0_24px_60px_-40px_rgba(18,40,29,0.5)] sm:p-8">
        <h2 className="text-[1.4rem] text-forest-900">Send an enquiry</h2>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
          Fill this in and we will continue on WhatsApp, which is the quickest
          way to reach us. Fields marked with an asterisk are required.
        </p>

        {submitted && (
          <p
            role="status"
            className="mt-5 rounded-md border-l-[3px] border-forest-500 bg-forest-50 px-4 py-3 text-[0.875rem] text-forest-800"
          >
            {endpoint
              ? 'Thanks — your enquiry has been sent. We will get back to you.'
              : 'Your enquiry is ready to send on WhatsApp. If the WhatsApp window did not open, use the button below.'}
          </p>
        )}

        {errors.form && (
          <p role="alert" className="mt-5 rounded-md border-l-[3px] border-clay-600 bg-clay-100 px-4 py-3 text-[0.875rem] text-clay-900">
            {errors.form}
          </p>
        )}

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="text-[0.875rem] font-semibold text-forest-900">
              Name <span aria-hidden="true" className="text-clay-600">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={onChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'cf-name-error' : undefined}
              placeholder="Your name"
              className={fieldClass(errors.name)}
            />
            {errors.name && (
              <p id="cf-name-error" className="mt-1.5 text-[0.8125rem] text-clay-700">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cf-phone" className="text-[0.875rem] font-semibold text-forest-900">
              Phone number <span aria-hidden="true" className="text-clay-600">*</span>
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={onChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'cf-phone-error' : 'cf-phone-hint'}
              placeholder="10-digit mobile number"
              className={fieldClass(errors.phone)}
            />
            {errors.phone ? (
              <p id="cf-phone-error" className="mt-1.5 text-[0.8125rem] text-clay-700">
                {errors.phone}
              </p>
            ) : (
              <p id="cf-phone-hint" className="mt-1.5 text-[0.8125rem] text-ink-400">
                We will only use this to reply to your enquiry.
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="cf-service" className="text-[0.875rem] font-semibold text-forest-900">
              Service required <span aria-hidden="true" className="text-clay-600">*</span>
            </label>
            <select
              id="cf-service"
              name="service"
              required
              value={values.service}
              onChange={onChange}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'cf-service-error' : undefined}
              className={fieldClass(errors.service)}
            >
              <option value="">Choose a service…</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id="cf-service-error" className="mt-1.5 text-[0.8125rem] text-clay-700">
                {errors.service}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="cf-message" className="text-[0.875rem] font-semibold text-forest-900">
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={4}
              value={values.message}
              onChange={onChange}
              aria-describedby="cf-message-hint"
              placeholder="Tell us about the sofa or furniture — what is wrong, how many seats, and anything else you think is useful."
              className={`${fieldClass(errors.message)} resize-y`}
            />
            <p id="cf-message-hint" className="mt-1.5 text-[0.8125rem] text-ink-400">
              Photos are best sent directly on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            data-event="contact_form_submit"
            data-event-label="submit-button"
            className="btn-primary w-full sm:w-auto"
          >
            {endpoint ? (
              <>
                <Send className="size-4" aria-hidden="true" />
                Send enquiry
              </>
            ) : (
              <>
                <WhatsAppIcon className="size-4" />
                Send on WhatsApp
              </>
            )}
          </button>

          <p className="text-[0.8125rem] leading-relaxed text-ink-400">
            {endpoint
              ? 'Your enquiry goes straight to us.'
              : 'This form does not send to a server — it opens WhatsApp with your details filled in.'}
          </p>
        </div>
      </form>

      {/* Manual fallback */}
      <div className="mt-5 flex flex-col gap-3 rounded-lg bg-forest-900 p-5 text-ivory sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.9375rem] text-forest-100">
          Prefer to talk? Call{' '}
          <a
            href="tel:+919873112891"
            data-event="phone_click"
            data-event-label="contact-form-fallback"
            className="font-semibold text-ivory underline decoration-clay-400 underline-offset-4"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          data-event-label="contact-form-fallback"
          aria-label="Message Asian Sofa on WhatsApp"
          className="btn-outline btn-outline-on-dark btn-sm w-full sm:w-auto"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp Us
        </a>
      </div>
    </div>
  )
}
