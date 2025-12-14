"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faBell,
  faKey,
  faGlobe,
  faSave,
  faEye,
  faEyeSlash,
  faTrash,
  faCopy,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  const [accountTab, setAccountTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState<{ [key: string]: boolean }>({});

  const apiKeys = [
    {
      id: "key-001",
      name: "Production API Key",
      key: "sk_live_51H3k9j2K4mN8pQr7vWxYzA6bC9dE1fG2hI3j",
      created: "Sep 15, 2025",
      lastUsed: "2 hours ago",
    },
    {
      id: "key-002",
      name: "Development API Key",
      key: "sk_test_98M7n5k3L9pR2sT4uV6wX8yB0cD1eF3gH4i",
      created: "Aug 20, 2025",
      lastUsed: "5 days ago",
    },
  ];

  const toggleApiKeyVisibility = (id: string) => {
    setShowApiKey((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
        <div className="flex space-x-2 mt-2 md:mt-0 bg-white p-1 rounded-lg border shadow-sm">
          <button
            onClick={() => setAccountTab("profile")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              accountTab === "profile"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Profile
          </button>
          <button
            onClick={() => setAccountTab("security")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              accountTab === "security"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Security
          </button>
          <button
            onClick={() => setAccountTab("notifications")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              accountTab === "notifications"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <FontAwesomeIcon icon={faBell} className="mr-2" />
            Notifications
          </button>
          <button
            onClick={() => setAccountTab("api")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              accountTab === "api"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            API Keys
          </button>
        </div>
      </div>

      {accountTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full border-2 border-gray-200"
                />
                <div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="User"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alex.user@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+84 123 456 789"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  defaultValue="TechStart Inc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Asia/Ho_Chi_Minh (GMT+7)</option>
                  <option>UTC (GMT+0)</option>
                  <option>America/New_York (GMT-5)</option>
                </select>
              </div>

              <div className="pt-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
                  <FontAwesomeIcon icon={faSave} className="mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Account Status</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Account Type</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                    Pro
                  </span>
                </div>
                <p className="text-xs text-gray-500">Active subscription</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Member Since</span>
                </div>
                <p className="text-sm font-semibold text-gray-800">January 15, 2024</p>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Account ID</span>
                </div>
                <p className="text-sm font-mono text-gray-800">ACC-2024-001234</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {accountTab === "security" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters with uppercase, lowercase, and numbers
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Two-Factor Authentication</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">2FA Status</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                    Not Enabled
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Add an extra layer of security to your account
                </p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                  Enable 2FA
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Active Sessions</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Current Session</p>
                      <p className="text-xs text-gray-500">Chrome on Windows • Hanoi, VN</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded border">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Mobile Device</p>
                      <p className="text-xs text-gray-500">Safari on iOS • Last used 2 days ago</p>
                    </div>
                    <button className="text-red-600 hover:text-red-700 text-xs font-medium">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {accountTab === "notifications" && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="font-bold text-lg mb-4">Notification Preferences</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Email Notifications</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Service Alerts</p>
                    <p className="text-xs text-gray-500">Get notified about service status changes</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Billing Updates</p>
                    <p className="text-xs text-gray-500">Receive invoices and payment reminders</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Security Alerts</p>
                    <p className="text-xs text-gray-500">Important security and account updates</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Newsletter</p>
                    <p className="text-xs text-gray-500">Product updates and tips</p>
                  </div>
                  <input type="checkbox" className="w-4 h-4 text-indigo-600" />
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">In-App Notifications</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Support Tickets</p>
                    <p className="text-xs text-gray-500">New replies to your tickets</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">System Alerts</p>
                    <p className="text-xs text-gray-500">Monitoring and performance alerts</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
                </label>
              </div>
            </div>

            <div className="pt-4 border-t">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {accountTab === "api" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">API Keys</h3>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Create New Key
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              API keys allow you to authenticate and access OptyxStack services programmatically.
            </p>

            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div
                  key={apiKey.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">{apiKey.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Created: {apiKey.created} • Last used: {apiKey.lastUsed}
                      </p>
                    </div>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      <FontAwesomeIcon icon={faTrash} className="mr-1" />
                      Delete
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 px-4 py-2 bg-gray-50 border rounded-lg font-mono text-sm">
                      {showApiKey[apiKey.id]
                        ? apiKey.key
                        : "•".repeat(apiKey.key.length)}
                    </div>
                    <button
                      onClick={() => toggleApiKeyVisibility(apiKey.id)}
                      className="px-3 py-2 border rounded-lg hover:bg-gray-100 text-gray-700"
                    >
                      <FontAwesomeIcon
                        icon={showApiKey[apiKey.id] ? faEyeSlash : faEye}
                      />
                    </button>
                    <button
                      onClick={() => copyToClipboard(apiKey.key)}
                      className="px-3 py-2 border rounded-lg hover:bg-gray-100 text-gray-700"
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <FontAwesomeIcon icon={faLock} className="text-yellow-600 mt-1 mr-3" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">Security Warning</h4>
                <p className="text-sm text-yellow-700">
                  Keep your API keys secure and never share them publicly. If a key is compromised,
                  delete it immediately and create a new one.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

