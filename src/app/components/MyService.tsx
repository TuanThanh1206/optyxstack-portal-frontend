"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faServer,
  faGaugeHigh,
  faShieldHalved,
  faCloud,
  faCheckCircle,
  faTimesCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

interface Service {
  id: string;
  name: string;
  type: string;
  status: "active" | "suspended" | "expired";
  icon: IconDefinition;
  description: string;
  price: string;
  renewalDate?: string;
  features: string[];
}

export default function MyService() {
  const services: Service[] = [
    {
      id: "vps-001",
      name: "Managed VPS",
      type: "vps",
      status: "active",
      icon: faServer,
      description: "High-performance virtual private server with 24/7 management",
      price: "$49.00/month",
      renewalDate: "Oct 15, 2025",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "100GB SSD Storage",
        "Unlimited Bandwidth",
        "24/7 Support",
      ],
    },
    {
      id: "opt-001",
      name: "One Time Optimize",
      type: "optimization",
      status: "active",
      icon: faGaugeHigh,
      description: "One-time performance optimization for your server",
      price: "$199.00",
      renewalDate: undefined,
      features: [
        "Server Performance Audit",
        "Database Optimization",
        "Security Hardening",
        "Cache Configuration",
        "30-day Support",
      ],
    },
    {
      id: "sec-001",
      name: "Security Monitoring",
      type: "security",
      status: "active",
      icon: faShieldHalved,
      description: "Advanced security monitoring and threat detection",
      price: "$29.00/month",
      renewalDate: "Oct 20, 2025",
      features: [
        "Real-time Threat Detection",
        "Firewall Management",
        "DDoS Protection",
        "Security Reports",
        "Incident Response",
      ],
    },
    {
      id: "cloud-001",
      name: "Cloud Backup",
      type: "backup",
      status: "active",
      icon: faCloud,
      description: "Automated cloud backup solution",
      price: "$19.00/month",
      renewalDate: "Oct 10, 2025",
      features: [
        "Daily Automated Backups",
        "30-day Retention",
        "Point-in-time Recovery",
        "Encrypted Storage",
        "Unlimited Storage",
      ],
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
            Active
          </span>
        );
      case "suspended":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <FontAwesomeIcon icon={faClock} className="mr-1" />
            Suspended
          </span>
        );
      case "expired":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
            Expired
          </span>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "vps":
        return "bg-blue-100 text-blue-600";
      case "optimization":
        return "bg-purple-100 text-purple-600";
      case "security":
        return "bg-red-100 text-red-600";
      case "backup":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Services</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
          <FontAwesomeIcon icon={faServer} className="mr-2" />
          Order New Service
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${getTypeColor(service.type)}`}>
                    <FontAwesomeIcon icon={service.icon} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.id}</p>
                  </div>
                </div>
                {getStatusBadge(service.status)}
              </div>

              <p className="text-sm text-gray-600 mb-4">{service.description}</p>

              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">Price</span>
                  <span className="text-lg font-bold text-gray-800">{service.price}</span>
                </div>
                {service.renewalDate && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Renewal Date</span>
                    <span className="text-sm font-medium text-gray-700">
                      {service.renewalDate}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Features</p>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mr-2 text-xs"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                  Manage
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Service Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">
              {services.filter((s) => s.status === "active").length}
            </p>
            <p className="text-sm text-gray-600 mt-1">Active Services</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">
              {services.filter((s) => s.type === "vps").length}
            </p>
            <p className="text-sm text-gray-600 mt-1">VPS Instances</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">
              {services.filter((s) => s.renewalDate).length}
            </p>
            <p className="text-sm text-gray-600 mt-1">Recurring Services</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">$116.00</p>
            <p className="text-sm text-gray-600 mt-1">Monthly Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

