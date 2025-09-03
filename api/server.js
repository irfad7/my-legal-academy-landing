import express from 'express';
import cors from 'cors';
import { z } from 'zod';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Email submission endpoint
app.post('/api/submit-email', async (req, res) => {
  try {
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
