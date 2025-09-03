import { UTMParams, getUTMParams } from '../utils/utmTracking';
import { trackEmailSubmission } from '../utils/analytics';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/';

export interface EmailSubmission {
  email: string;
  source?: string;
  timestamp?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Function to send webhook to Zapier
async function sendZapierWebhook(submission: EmailSubmission): Promise<boolean> {
  try {
    const webhookData = {
      email: submission.email,
      utm_source: submission.utm_source || '',
      utm_medium: submission.utm_medium || '',
      utm_campaign: submission.utm_campaign || '',
      utm_term: submission.utm_term || '',
      utm_content: submission.utm_content || '',
    };

    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!response.ok) {
      console.error('Zapier webhook failed:', response.status, response.statusText);
      return false;
    }

    const result = await response.json();
    console.log('Zapier webhook success:', result);
    return true;
  } catch (error) {
    console.error('Zapier webhook error:', error);
    return false;
  }
}

export class EmailService {
  static async submitEmail(email: string, source?: string): Promise<ApiResponse> {
    try {
      const utmParams = getUTMParams();
      
      const submission: EmailSubmission = {
        email,
        source: source || 'landing-page',
        timestamp: new Date().toISOString(),
        ...utmParams,
      };

      // Send webhook to Zapier (fire and forget)
      sendZapierWebhook(submission).then(success => {
        if (success) {
          console.log('Zapier webhook sent successfully for:', email);
        } else {
          console.error('Zapier webhook failed for:', email);
        }
      });

      // Track successful email submission
      trackEmailSubmission(source || 'landing-page', email);

      return {
        success: true,
        message: 'Email submitted successfully',
        data: { email }
      };
    } catch (error) {
      console.error('Email submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit email',
      };
    }
  }
}
