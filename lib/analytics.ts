type AnalyticsEvent = 'phone_click' | 'whatsapp_click' | 'contact_form_submit'

type EventParams = Record<string, unknown>

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Dönüşüm event'lerini doğrudan Google Tag Manager dataLayer'ına gönderir.
 * GTM (GTM-WRNRXBCB) app/layout.tsx içinde @next/third-parties ile yüklenir.
 */
function pushEvent(event: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/** tel: linkine tıklanınca `phone_click` event'ini gönderir. */
export function trackPhoneClick() {
  pushEvent('phone_click')
}

/** WhatsApp linkine tıklanınca `whatsapp_click` event'ini gönderir. */
export function trackWhatsappClick() {
  pushEvent('whatsapp_click')
}

/** İletişim formu başarıyla gönderildiğinde `contact_form_submit` event'ini gönderir. */
export function trackContactFormSubmit() {
  pushEvent('contact_form_submit', {
    form_name: 'contact',
    lead_type: 'reservation',
    success: true,
  })
}
