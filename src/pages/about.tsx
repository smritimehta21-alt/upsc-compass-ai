import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - UPSC Compass AI</title>
        <meta name="description" content="Learn about UPSC Compass AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-gray-50 shadow">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              UPSC Compass AI
            </Link>
          </div>
        </nav>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">About UPSC Compass AI</h1>
          
          <div className="prose max-w-2xl">
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              UPSC Compass AI is designed to revolutionize UPSC exam preparation by combining artificial intelligence with personalized learning strategies. We aim to make quality education accessible to all aspirants.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>AI-powered personalized study paths</li>
              <li>Comprehensive study materials</li>
              <li>Real-time progress tracking</li>
              <li>Mobile-responsive platform</li>
              <li>Secure data management</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
            <p className="text-gray-700 mb-6">
              Built with modern web technologies including Next.js, React, TypeScript, Tailwind CSS, and powered by Supabase and OpenAI APIs.
            </p>

            <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-8">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
