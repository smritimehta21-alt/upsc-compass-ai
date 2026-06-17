import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>UPSC Compass AI - Intelligent UPSC Preparation</title>
        <meta name="description" content="AI-powered UPSC exam preparation platform with personalized learning paths" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">UPSC Compass AI</h1>
            <div className="space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition">
                Dashboard
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Your AI-Powered UPSC Companion</h2>
              <p className="text-xl text-gray-600 mb-8">
                Personalized learning paths, AI-generated study materials, and real-time progress tracking to help you ace the UPSC examination.
              </p>
              <div className="flex gap-4">
                <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Get Started
                </Link>
                <Link href="/about" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center">
                <p className="text-white text-center text-2xl font-bold">🎓 UPSC Compass AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'AI Learning', desc: 'Personalized study recommendations powered by AI' },
                { title: 'Progress Tracking', desc: 'Real-time analytics and performance insights' },
                { title: 'Mobile Ready', desc: 'Study anytime, anywhere on any device' },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 UPSC Compass AI. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
