"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faHouse,
  faCreditCard,
  faLifeRing,
  faChartLine,
  faServer,
  faUser,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Sidebar({ currentTab, setCurrentTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl z-20 hidden md:flex">
      <div
        className="h-16 flex items-center justify-center border-b border-slate-700 cursor-pointer"
        onClick={() => setCurrentTab("home")}
      >
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-indigo-500 text-2xl mr-2"
        />
        <span className="text-xl font-bold tracking-wide">OptyxStack</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="text-xs text-slate-500 uppercase font-semibold mb-2 ml-2">
          Main Menu
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("home");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "home"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faHouse} className="w-6" />
          <span className="ml-2">Portal Home</span>
        </a>

        <p className="text-xs text-slate-500 uppercase font-semibold mt-6 mb-2 ml-2">
          Management
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("store");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "store"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faStore} className="w-6" />
          <span className="ml-2">Store</span>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("services");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "services"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faServer} className="w-6" />
          <span className="ml-2">My Services</span>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("billing");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "billing"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faCreditCard} className="w-6" />
          <span className="ml-2">Billing</span>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("support");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "support"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faLifeRing} className="w-6" />
          <span className="ml-2">Support</span>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("monitoring");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "monitoring"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faChartLine} className="w-6" />
          <span className="ml-2">Monitoring</span>
        </a>

        <p className="text-xs text-slate-500 uppercase font-semibold mt-6 mb-2 ml-2">
          Account
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentTab("account");
          }}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
            currentTab === "account"
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FontAwesomeIcon icon={faUser} className="w-6" />
          <span className="ml-2">Account</span>
        </a>
      </nav>

      <div className="p-4 border-t border-slate-700 text-xs text-slate-400 text-center">
        v1.0.0 &copy; 2025 OptyxStack
      </div>
    </aside>
  );
}

