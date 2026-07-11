type AnalyticsEvent = 'phone_click' | 'whatsapp_click' | 'generate_lead'

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

/** İletişim formu başarıyla gönderildiğinde `generate_lead` event'ini gönderir. */
export function trackLead(params: EventParams = {}) {
  pushEvent('generate_lead', params)
}
