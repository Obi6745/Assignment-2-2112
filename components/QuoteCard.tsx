'use client'

// What a quote looks like
interface Quote {
  text: string
  author: string
}

// Props this component receives from parent
interface QuoteCardProps {
  quote: Quote
  theme?: 'light' | 'dark'
}

export default function QuoteCard({ quote, theme = 'light' }: QuoteCardProps) {
  const isDark = theme === 'dark'
  
  return (
    <div className={`rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 border-2 ${
      isDark ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-300'
    }`}>
      <p className={`text-lg mb-4 italic ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        "{quote.text}"
      </p>
      <p className={`text-right font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
        — {quote.author}
      </p>
    </div>
  )
}

