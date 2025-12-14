"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function AuthCompletePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after a short delay
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="text-center text-white">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 shadow-2xl border border-white/30">
          <FontAwesomeIcon icon={faLayerGroup} className="text-white text-4xl" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Login Successful!</h2>
        <p className="text-lg text-white/90 mb-4">Redirecting to dashboard...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
}

