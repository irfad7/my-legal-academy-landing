import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Email validation schema with UTM parameters
const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().optional(),
  timestamp: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
});

// Zapier webhook URL - should be moved to environment variable
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/';

// Function to send webhook to Zapier
async function sendZapierWebhook(submission: any) {
  try {
    const webhookData = {
      email: submission.email,
      utm_source: submission.utm_source || '',
      utm_medium: submission.utm_medium || '',
      utm_campaign: submission.utm_campaign || '',
      utm_term: submission.utm_term || '',
      utm_content: submission.utm_content || '',
    };

    console.log('Sending webhook to Zapier:', webhookData);

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      // Parse and validate the request body
      const { email, source, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = emailSchema.parse(req.body);
      
      // Create submission object
      const submission = {
        email,
        source: source || 'landing-page',
        timestamp: new Date().toISOString(),
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
      };

      // Log submission for debugging
      console.log('New email submission:', submission);

      // Send webhook to Zapier (fire and forget - don't wait for response)
      sendZapierWebhook(submission).then(success => {
        if (success) {
          console.log('Zapier webhook sent successfully for:', email);
        } else {
          console.error('Zapier webhook failed for:', email);
        }
      }).catch(error => {
        console.error('Zapier webhook promise error:', error);
      });

      // Return success response immediately
      return res.status(201).json({
        success: true,
        message: 'Email submitted successfully',
        data: { email }
      });

    } else {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

  } catch (error) {
    console.error('Email submission error:', error);
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request data',
        error: error.errors.map(e => e.message).join(', ')
      });
    }
    
    return res.status(400).json({
      success: false,
      message: 'Invalid email address',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
