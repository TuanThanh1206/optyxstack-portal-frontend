"use client";

import { useState, useEffect, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { startEmailLogin, getGoogleLoginUrl, getGithubLoginUrl } from "@/lib/api";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam) {
      setError(errorParam === "invalid_token" ? "Invalid or expired login link" : "Authentication failed");
    }
  }, [searchParams]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      await startEmailLogin(email);
      setSuccess(true);
      // Clear email field after successful submission
      setEmail("");
    } catch (err) {
      setError("Failed to send login email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = getGoogleLoginUrl();
  };

  const handleGithubLogin = () => {
    setIsLoading(true);
    window.location.href = getGithubLoginUrl();
  };

  return (
    <>
      <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg">
              <FontAwesomeIcon icon={faLayerGroup} className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your OptyxStack account</p>
          </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              onClick={handleGithubLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Email Form (Magic Link) */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              Login link sent! Please check your email to continue.
            </div>
          )}

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="you@example.com"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                We'll send you a magic link to sign in
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading || success}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : success ? (
                <span className="flex items-center">
                  Link Sent!
                </span>
              ) : (
                <span className="flex items-center">
                  Send Login Link
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </span>
              )}
            </button>
          </form>

          {/* Sign Up Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              No account needed. Just enter your email to get started.
            </p>
          </div>
        </div>

          {/* Footer */}
          <div className="mt-8 text-sm text-gray-500">
            <p>
              By signing in, you agree to our{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-700">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-700">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white w-full">
          {/* Large Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 shadow-2xl border border-white/30">
              <FontAwesomeIcon icon={faLayerGroup} className="text-white text-6xl" />
            </div>
            <h2 className="text-4xl font-bold mb-2">OptyxStack</h2>
            <p className="text-xl text-white/90">Cloud Infrastructure Platform</p>
          </div>

          {/* Image/Illustration */}
          <div className="mt-8 w-full max-w-md">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              {/* Main image placeholder - you can replace with actual image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="aspect-square flex items-center justify-center">
                  <svg
                    className="w-full h-full text-white/80"
                    fill="none"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                      </linearGradient>
                    </defs>
                    {/* Server/Cloud illustration */}
                    <rect x="40" y="60" width="120" height="80" rx="8" fill="url(#gradient)" />
                    <rect x="50" y="70" width="20" height="15" rx="2" fill="rgba(255,255,255,0.5)" />
                    <rect x="80" y="70" width="20" height="15" rx="2" fill="rgba(255,255,255,0.5)" />
                    <rect x="110" y="70" width="20" height="15" rx="2" fill="rgba(255,255,255,0.5)" />
                    <rect x="50" y="95" width="80" height="8" rx="2" fill="rgba(255,255,255,0.4)" />
                    <rect x="50" y="110" width="60" height="8" rx="2" fill="rgba(255,255,255,0.4)" />
                    <circle cx="80" cy="30" r="15" fill="rgba(255,255,255,0.3)" />
                    <circle cx="120" cy="30" r="12" fill="rgba(255,255,255,0.25)" />
                    <circle cx="160" cy="50" r="10" fill="rgba(255,255,255,0.2)" />
                    <path
                      d="M 60 160 Q 100 140 140 160"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="mt-12 w-full max-w-md">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Managed Cloud Infrastructure</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Enterprise-Grade Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      </div>
    </div>
    </>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

