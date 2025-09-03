// Google Analytics event tracking utility
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track email submissions
export const trackEmailSubmission = (source: string, email: string) => {
  trackEvent('email_submit', 'lead_generation', source);
  
  // Also track as conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'G-BPBP33H4JP/email_submission',
      value: 1.0,
      currency: 'USD',
    });
  }
};

// Track form interactions
export const trackFormInteraction = (action: string, formType: string) => {
  trackEvent(action, 'form_interaction', formType);
};

// Track page views with UTM parameters
export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-BPBP33H4JP', {
      page_title: page,
      page_location: window.location.href,
    });
  }
};

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
