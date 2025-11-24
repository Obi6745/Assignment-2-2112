'use client'

import { useState, useEffect } from 'react'
import { useAppContext } from '@/app/context/AppContext'
import QuoteCard from '@/app/components/QuoteCard'

// What a quote looks like
interface Quote {
  text: string
  author: string
}

// Fallback quotes if API doesn't work
const fallbackQuotes: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" }
]

export default function QuotesPage() {
  const { user } = useAppContext()
  // Start with fallback quotes immediately (no loading)
  const [quotes, setQuotes] = useState<Quote[]>(fallbackQuotes)

  // Fetch quotes from API
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes/random?limit=10')
        const data = await response.json()
        
        if (data && data.length > 0) {
          const newQuotes = data.map((q: any) => ({
            text: q.content,
            author: q.author
          }))
          setQuotes(newQuotes)
        }
      } catch (err) {
        console.log('API fetch failed, using fallback quotes')
      }
    }

    fetchQuotes()
  }, [])

  // Theme colors
  const isDark = user?.theme === 'dark'
  const bgClass = isDark ? 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900' : 'bg-gradient-to-br from-slate-200 to-gray-300'
  const textClass = isDark ? 'text-white' : 'text-gray-800'

  return (
    <div className={`min-h-screen ${bgClass} py-8`}>
      <div className="container mx-auto px-4">
        <h1 className={`text-5xl font-bold text-center mb-8 ${textClass}`}>
          Inspirational Quotes
        </h1>
        <p className={`text-center mb-8 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Get motivated with these quotes
        </p>
        
        {/* Display quotes - QuoteCard receives quote as a prop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} theme={user?.theme || 'light'} />
          ))}
        </div>
      </div>
    </div>
  )
}
