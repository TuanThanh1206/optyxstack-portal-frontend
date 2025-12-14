"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./components/DashboardHome";
import Store from "./components/Store";
import MyService from "./components/MyService";
import Billing from "./components/Billing";
import Support from "./components/Support";
import Monitoring from "./components/Monitoring";
import Account from "./components/Account";
import { getCurrentUser } from "@/lib/api";

export default function Home() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const user = await getCurrentUser();
      if (!user) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {currentTab === "home" && <DashboardHome setCurrentTab={setCurrentTab} />}
          {currentTab === "store" && <Store />}
          {currentTab === "services" && <MyService />}
          {currentTab === "billing" && <Billing />}
          {currentTab === "support" && <Support />}
          {currentTab === "monitoring" && <Monitoring />}
          {currentTab === "account" && <Account />}
        </main>
      </div>
    </div>
  );
}

