'use client'

import { useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import CounterDisplay from '@/components/CounterDisplay'

export default function CounterPage() {
  const { user } = useAppContext()
  
  // useState hook - stores the count number
  const [count, setCount] = useState(0)

  // Functions to change the count
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  // Theme colors
  const isDark = user?.theme === 'dark'
  const bgClass = isDark ? 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 to-cyan-100'
  const textClass = isDark ? 'text-white' : 'text-gray-800'
  const cardClass = isDark ? 'bg-slate-800' : 'bg-white'

  return (
    <div className={`min-h-screen ${bgClass} py-8`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className={`text-5xl font-bold mb-8 ${textClass}`}>
            Simple Counter
          </h1>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Click the buttons to change the number
          </p>
          
          {/* CounterDisplay receives count as a prop */}
          <CounterDisplay count={count} />
          
          <div className={`${cardClass} rounded-2xl shadow-lg p-8 mt-8`}>
            <div className="flex gap-4 justify-center">
              <button
                onClick={decrement}
                className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold w-16 h-16 rounded-full transition-all hover:scale-110"
              >
                −
              </button>
              <button
                onClick={reset}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all hover:scale-105"
              >
                Reset
              </button>
              <button
                onClick={increment}
                className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold w-16 h-16 rounded-full transition-all hover:scale-110"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
