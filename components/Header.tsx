"use client";

import Link from "next/link";
import { useState } from "react";
import MoreInfoModal from "./MoreInfoModal";

export default function Header() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
                ScopeTraceAI
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                <div
                  className="relative"
                  onMouseEnter={() => setIsProductDropdownOpen(true)}
                  onMouseLeave={() => setIsProductDropdownOpen(false)}
                >
                  <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                    Product
                  </button>
                  {isProductDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-2">
                      <Link
                        href="/product"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Overview
                      </Link>
                      <Link
                        href="/product#capabilities"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Capabilities
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/how-it-works"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  How It Works
                </Link>

                <Link
                  href="/security"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Security
                </Link>

                <Link
                  href="/pricing"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Pricing
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="https://app.scopetraceai.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Sign in
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                More information
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
