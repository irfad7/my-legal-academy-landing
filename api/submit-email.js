import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Email validation schema
const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().optional(),
  timestamp: z.string().optional(),
});

// In-memory storage (replace with database in production)
const emailSubmissions: Array<{
  email: string;
  source?: string;
  timestamp: string;
  id: string;
}> = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      const { email, source } = emailSchema.parse(req.body);
      
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
        id: Math.random().toString(36).substr(2, 9)
      };

      emailSubmissions.push(submission);

      // Log submission (replace with actual email service in production)
      console.log('New email submission:', submission);

      return res.status(201).json({
        success: true,
        message: 'Email submitted successfully',
        data: { email, id: submission.id }
      });

    } else if (req.method === 'GET') {
      return res.json({
        success: true,
        data: emailSubmissions,
        count: emailSubmissions.length
      });

    } else {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

  } catch (error) {
    console.error('Email submission error:', error);
    return res.status(400).json({
      success: false,
      message: 'Invalid email address',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
