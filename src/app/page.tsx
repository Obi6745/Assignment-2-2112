'use client'

import Link from 'next/link'
import { useAppContext } from '@/app/context/AppContext'

export default function Home() {
  const { user } = useAppContext()
  
  // Theme colors
  const isDark = user?.theme === 'dark'
  const bgClass = isDark ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black' : 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900'
  const textClass = 'text-white'

  return (
    <div className={`min-h-screen ${bgClass}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-6xl font-bold mb-4 ${textClass}`}>
            My React App
          </h1>
          <p className={`text-2xl mb-12 text-gray-300`}>
            A simple React application for college
          </p>
          
          {/* Navigation cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Link 
              href="/tasks" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-105 text-center"
            >
              <h2 className="text-3xl font-bold mb-2">My Todos</h2>
              <p className="text-lg text-blue-100">Add and manage your tasks</p>
            </Link>
            
            <Link 
              href="/quotes" 
              className="bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-105 text-center"
            >
              <h2 className="text-3xl font-bold mb-2">Inspirational Quotes</h2>
              <p className="text-lg text-gray-300">Get inspired with quotes</p>
            </Link>
            
            <Link 
              href="/counter" 
              className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-105 text-center"
            >
              <h2 className="text-3xl font-bold mb-2">Counter</h2>
              <p className="text-lg text-cyan-100">Simple counter demo</p>
            </Link>
            
            <Link 
              href="/profile" 
              className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-105 text-center"
            >
              <h2 className="text-3xl font-bold mb-2">My Profile</h2>
              <p className="text-lg text-indigo-100">View your profile</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
