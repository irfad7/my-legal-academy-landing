import express from 'express';
import cors from 'cors';
import { z } from 'zod';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Zapier webhook URL
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/';

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

// In-memory storage (replace with database in production)
const emailSubmissions: Array<{
  email: string;
  source?: string;
  timestamp: string;
  id: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}> = [];

// Function to send webhook to Zapier
async function sendZapierWebhook(submission) {
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Email submission endpoint
app.post('/api/submit-email', async (req, res) => {
  try {
    const { email, source, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = emailSchema.parse(req.body);
    
    // Check if email already exists
    const existingSubmission = emailSubmissions.find(sub => sub.email === email);
    if (existingSubmission) {
      return res.status(409).json({
        success: false,
        message: 'Email already submitted',
        data: { email }
      });
    }

    // Create new submission
    const submission = {
      email,
      source: source || 'landing-page',
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9),
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    };

    emailSubmissions.push(submission);

    // Log submission
    console.log('New email submission:', submission);

    // Send webhook to Zapier (fire and forget)
    sendZapierWebhook(submission).then(success => {
      if (success) {
        console.log('Zapier webhook sent successfully for:', email);
      } else {
        console.error('Zapier webhook failed for:', email);
      }
    });

    res.status(201).json({
      success: true,
      message: 'Email submitted successfully',
      data: { email, id: submission.id }
    });

  } catch (error) {
    console.error('Email submission error:', error);
    res.status(400).json({
      success: false,
      message: 'Invalid email address',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get all submissions (for admin purposes)
app.get('/api/submissions', (req, res) => {
  res.json({
    success: true,
    data: emailSubmissions,
    count: emailSubmissions.length
  });
});

// Get submission count
app.get('/api/submissions/count', (req, res) => {
  res.json({
    success: true,
    count: emailSubmissions.length
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Email API server running on port ${PORT}`);
});

export default app;
