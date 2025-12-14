// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.optyxstack.com';

export interface User {
  id: string;
  email: string | null;
  email_verified: boolean;
  name: string | null;
  avatar_url: string | null;
  status: string;
}

export interface EmailLoginStartRequest {
  email: string;
}

export interface EmailLoginStartResponse {
  message: string;
}

// Email login - send magic link
export async function startEmailLogin(email: string): Promise<EmailLoginStartResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/email/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Important for cookies
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Failed to send login email');
  }

  return response.json();
}

// Get current user
export async function getCurrentUser(): Promise<User | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include', // Important for cookies
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    return null;
  }
}

// Logout
export async function logout(): Promise<void> {
  await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include', // Important for cookies
  });
}

// OAuth redirect URLs
export function getGoogleLoginUrl(): string {
  return `${API_BASE_URL}/auth/google/start`;
}

export function getGithubLoginUrl(): string {
  return `${API_BASE_URL}/auth/github/start`;
}

