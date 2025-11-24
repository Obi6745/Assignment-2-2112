'use client'

// What a todo looks like
interface Todo {
  id: string
  text: string
  done: boolean
}

// Props this component receives from parent
interface TodoStatsProps {
  todos: Todo[]
}

export default function TodoStats({ todos }: TodoStatsProps) {
  // Calculate statistics
  const total = todos.length
  const completed = todos.filter(t => t.done).length
  const remaining = total - completed

  return (
    <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl shadow-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-4xl font-bold">{total}</div>
          <div className="text-sm opacity-90">Total</div>
        </div>
        <div>
          <div className="text-4xl font-bold">{completed}</div>
          <div className="text-sm opacity-90">Completed</div>
        </div>
        <div>
          <div className="text-4xl font-bold">{remaining}</div>
          <div className="text-sm opacity-90">Remaining</div>
        </div>
      </div>
    </div>
  )
}

