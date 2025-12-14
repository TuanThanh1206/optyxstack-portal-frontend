"use client";

import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faRotate,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Monitoring() {
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
    },
    yaxis: {
      min: 0,
    },
    colors: ["#f97316", "#3b82f6"],
    legend: {
      position: "bottom",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  };

  const chartSeries = [
    {
      name: "CPU Usage (%)",
      data: [12, 19, 15, 78, 45, 30, 25],
    },
    {
      name: "Network In (MB)",
      data: [5, 10, 8, 40, 20, 15, 10],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">System Monitoring</h2>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span> All
            Systems Operational
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 uppercase font-bold">Uptime (7d)</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">99.98%</h3>
          <div className="h-1 w-full bg-gray-100 mt-3 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: "99%" }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 uppercase font-bold">CPU Load</p>
          <h3 className="text-2xl font-bold text-orange-500 mt-1">78%</h3>
          <div className="h-1 w-full bg-gray-100 mt-3 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "78%" }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 uppercase font-bold">RAM Usage</p>
          <h3 className="text-2xl font-bold text-blue-500 mt-1">4.2 GB</h3>
          <p className="text-xs text-gray-400">of 8 GB</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500 uppercase font-bold">Latency</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">24ms</h3>
          <p className="text-xs text-green-600">
            <FontAwesomeIcon icon={faArrowDown} className="mr-1" />
            2ms
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">Instance: prod-web-01</h3>
          <div className="space-x-2">
            <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-gray-700">
              1h
            </button>
            <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded">24h</button>
            <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-gray-700">
              7d
            </button>
          </div>
        </div>

        <div className="h-64 w-full">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height="100%"
            width="100%"
          />
        </div>

        <div className="mt-6 border-t pt-4">
          <h4 className="text-sm font-bold text-gray-700 mb-2">Recent Events</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="text-yellow-500 mt-1 mr-2"
              />
              <div>
                <span className="font-medium">CPU Spike &gt; 80%</span>
                <p className="text-xs text-gray-500">Today, 10:45 AM</p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faRotate} className="text-blue-500 mt-1 mr-2" />
              <div>
                <span className="font-medium">Service Restarted (Auto-healing)</span>
                <p className="text-xs text-gray-500">Yesterday, 02:00 AM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

