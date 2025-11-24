'use client'

// Props this component receives from parent
interface CounterDisplayProps {
  count: number
}

export default function CounterDisplay({ count }: CounterDisplayProps) {
  // Message based on count value
  let message = 'Start counting!'
  if (count > 0 && count < 10) message = 'Keep going!'
  if (count >= 10 && count < 50) message = 'You\'re doing great!'
  if (count >= 50) message = 'That\'s a lot!'
  if (count < 0) message = 'Negative numbers!'

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-12 text-white">
      <div className="text-8xl font-bold mb-4">{count}</div>
      <p className="text-2xl opacity-90">{message}</p>
    </div>
  )
}

