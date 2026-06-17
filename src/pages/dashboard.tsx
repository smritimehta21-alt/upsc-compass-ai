import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - UPSC Compass AI</title>
        <meta name="description" content="Your UPSC preparation dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              UPSC Compass AI
            </Link>
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition">Profile</button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Topics Completed', value: '0' },
              { label: 'Current Streak', value: '0 days' },
              { label: 'Total Study Time', value: '0 hrs' },
              { label: 'Progress', value: '0%' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Recent Studies</h2>
              <p className="text-gray-600">Start studying to see your progress here.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Link href="#" className="block text-blue-600 hover:underline">Start New Topic</Link>
                <Link href="#" className="block text-blue-600 hover:underline">View Progress</Link>
                <Link href="#" className="block text-blue-600 hover:underline">Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
