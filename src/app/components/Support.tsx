"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileArrowUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Support() {
  const [selectedTicket, setSelectedTicket] = useState("TK-921");

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Support Center</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Create Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-180px)]">
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border flex flex-col h-full">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <div className="flex mt-3 space-x-2">
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-md cursor-pointer">
                Open (2)
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md cursor-pointer">
                Closed
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div
              className={`p-4 border-b border-l-4 cursor-pointer transition ${
                selectedTicket === "TK-921"
                  ? "border-l-indigo-600 bg-indigo-50"
                  : "border-l-transparent hover:bg-gray-50"
              }`}
              onClick={() => setSelectedTicket("TK-921")}
            >
              <div className="flex justify-between mb-1">
                <span className="text-xs font-bold text-gray-500">#TK-921</span>
                <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                  High
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm truncate">
                Server downtime incident
              </h4>
              <p className="text-xs text-gray-500 mt-1">Tech Support • 10 mins ago</p>
            </div>
            <div
              className={`p-4 border-b border-l-4 cursor-pointer transition ${
                selectedTicket === "TK-880"
                  ? "border-l-indigo-600 bg-indigo-50"
                  : "border-l-transparent hover:bg-gray-50"
              }`}
              onClick={() => setSelectedTicket("TK-880")}
            >
              <div className="flex justify-between mb-1">
                <span className="text-xs font-bold text-gray-500">#TK-880</span>
                <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                  Low
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm truncate">
                Billing inquiry for Aug
              </h4>
              <p className="text-xs text-gray-500 mt-1">Billing • 1 day ago</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border flex flex-col h-full">
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <div>
              <h3 className="font-bold text-gray-800 text-lg">
                Server downtime incident{" "}
                <span className="text-gray-400 font-normal">#TK-921</span>
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-green-700 font-medium">Open</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700 bg-white border p-2 rounded-md">
                <FontAwesomeIcon icon={faFileArrowUp} />
              </button>
              <button className="text-red-500 hover:text-red-700 bg-white border p-2 rounded-md text-sm">
                Close Ticket
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50">
            <div className="flex justify-end">
              <div className="max-w-[80%]">
                <div className="bg-indigo-600 text-white p-3 rounded-l-lg rounded-tr-lg shadow-sm text-sm">
                  Hi, my server instance i-092 is unreachable since 20 mins ago. Please check.
                </div>
                <p className="text-right text-[10px] text-gray-400 mt-1">You • 10:00 AM</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[80%]">
                <div className="bg-white border text-gray-800 p-3 rounded-r-lg rounded-tl-lg shadow-sm text-sm">
                  <p className="font-bold text-xs text-indigo-600 mb-1">Support Agent</p>
                  Hello, we are investigating the issue on Node VN-01. It seems like a network
                  congestion issue.
                </div>
                <p className="text-left text-[10px] text-gray-400 mt-1">Staff • 10:05 AM</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your reply..."
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

