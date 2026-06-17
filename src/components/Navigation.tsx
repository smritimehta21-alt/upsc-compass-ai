import React from 'react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            UPSC Compass AI
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
