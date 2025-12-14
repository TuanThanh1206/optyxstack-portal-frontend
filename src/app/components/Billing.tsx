"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faCreditCard,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Billing() {
  const [billingTab, setBillingTab] = useState("overview");

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Billing & Invoices</h2>
        <div className="flex space-x-2 mt-2 md:mt-0 bg-white p-1 rounded-lg border shadow-sm">
          <button
            onClick={() => setBillingTab("overview")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              billingTab === "overview"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setBillingTab("invoices")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              billingTab === "invoices"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Invoices
          </button>
          <button
            onClick={() => setBillingTab("methods")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              billingTab === "methods"
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Payment Methods
          </button>
        </div>
      </div>

      {billingTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Current Plan</h3>
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div>
                <p className="text-2xl font-bold text-indigo-600">
                  Pro Cloud <span className="text-sm text-gray-500 font-normal">/ Monthly</span>
                </p>
                <p className="text-sm text-gray-500">Renews on Oct 01, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$29.00</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FontAwesomeIcon icon={faFileInvoice} className="mr-2" />
                Latest Invoice
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                Update Method
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Upgrade Plan
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Billing Info</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <strong>Company:</strong> TechStart Inc.
              </p>
              <p>
                <strong>Tax ID:</strong> 0102030405
              </p>
              <p>
                <strong>Address:</strong> 123 Tech Street, Hanoi, VN
              </p>
              <a
                href="#"
                className="text-indigo-600 text-xs hover:underline mt-2 inline-block"
                onClick={(e) => e.preventDefault()}
              >
                Edit details
              </a>
            </div>
          </div>
        </div>
      )}

      {billingTab === "invoices" && (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-gray-700">Invoice History</h3>
            <button className="text-xs text-indigo-600 font-medium hover:underline">
              Download All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    INV-2025-001
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">Sep 01, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">$29.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={(e) => e.preventDefault()}
                    >
                      <FontAwesomeIcon icon={faDownload} className="mr-1" />
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    INV-2025-002
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">Aug 01, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">$29.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={(e) => e.preventDefault()}
                    >
                      <FontAwesomeIcon icon={faDownload} className="mr-1" />
                      PDF
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {billingTab === "methods" && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
          <p className="text-gray-600">Payment methods management coming soon...</p>
        </div>
      )}
    </div>
  );
}

