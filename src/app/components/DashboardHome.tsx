"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faTicket,
  faHeartPulse,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

interface DashboardHomeProps {
  setCurrentTab: (tab: string) => void;
}

export default function DashboardHome({
  setCurrentTab,
}: DashboardHomeProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 font-medium">Current Balance</p>
              <h3 className="text-3xl font-bold text-gray-800">$124.00</h3>
            </div>
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <FontAwesomeIcon icon={faWallet} />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Next invoice: <span className="font-semibold text-gray-700">Oct 01, 2025</span>
          </div>
          <div className="mt-2 text-xs text-green-600 font-semibold bg-green-50 inline-block px-2 py-1 rounded">
            Status: Paid
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition"
          onClick={() => setCurrentTab("support")}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 font-medium">Open Tickets</p>
              <h3 className="text-3xl font-bold text-gray-800">2</h3>
            </div>
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
              <FontAwesomeIcon icon={faTicket} />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Last reply: <span className="text-gray-700">10 mins ago</span>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition"
          onClick={() => setCurrentTab("monitoring")}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 font-medium">System Health</p>
              <h3 className="text-3xl font-bold text-green-600">99.9%</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <FontAwesomeIcon icon={faHeartPulse} />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Active Alerts (24h): <span className="text-red-500 font-bold">1</span>
          </div>
          <div className="mt-2 text-xs text-orange-600 bg-orange-50 inline-block px-2 py-1 rounded">
            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-1" />
            High CPU Load
          </div>
        </div>
      </div>
    </div>
  );
}

