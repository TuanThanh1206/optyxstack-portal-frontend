"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faBell,
  faGear,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "@/lib/api";

export default function Header() {
  const router = useRouter();
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still redirect even if logout API call fails
      router.push("/login");
    }
  };

  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10">
      <div className="flex items-center">
        <button className="md:hidden mr-4 text-gray-500">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="relative">
          <button
            onClick={() => setWorkspaceOpen(!workspaceOpen)}
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            <span>My Workspace</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
          </button>
          {workspaceOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg py-1 z-50"
              onClick={() => setWorkspaceOpen(false)}
            >
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={(e) => e.preventDefault()}
              >
                Team A
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={(e) => e.preventDefault()}
              >
                Personal
              </a>
              <div className="border-t my-1"></div>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm text-indigo-600"
                onClick={(e) => e.preventDefault()}
              >
                + Create Workspace
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative text-gray-500 hover:text-indigo-600">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative flex items-center cursor-pointer">
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center space-x-2"
          >
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="Avatar"
              className="w-9 h-9 rounded-full border border-gray-300"
            />
            <div className="hidden md:block text-sm text-right">
              <p className="font-semibold text-gray-700">Alex User</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>

          {profileOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg py-1 z-50"
              onClick={() => setProfileOpen(false)}
            >
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faGear} className="mr-2" />
                Settings
              </a>
              <div className="border-t my-1"></div>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

