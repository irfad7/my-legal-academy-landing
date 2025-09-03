const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://pi-lander-staging-4lfcv3gql-irfad7s-projects.vercel.app/api'
  : 'http://localhost:3001/api';

export interface EmailSubmission {
  email: string;
  source?: string;
  timestamp?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export class EmailService {
  static async submitEmail(email: string, source?: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/submit-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: source || 'landing-page',
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit email');
      }

      return data;
    } catch (error) {
      console.error('Email submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit email',
      };
    }
  }

  static async getSubmissions(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/submit-email`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch submissions');
      }

      return data;
    } catch (error) {
      console.error('Fetch submissions error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch submissions',
      };
    }
  }

  static async checkHealth(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Health check failed');
      }

      return data;
    } catch (error) {
      console.error('Health check error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Health check failed',
      };
    }
  }
}
