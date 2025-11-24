'use client'

// What a todo looks like
interface Todo {
  id: string
  text: string
  done: boolean
}

// Props this component receives from parent
interface TodoItemProps {
  todo: Todo
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  theme?: 'light' | 'dark'
}

export default function TodoItem({ todo, onDelete, onToggle, theme = 'light' }: TodoItemProps) {
  const isDark = theme === 'dark'
  
  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
      todo.done 
        ? isDark ? 'bg-slate-700 border-slate-600 opacity-75' : 'bg-gray-50 border-gray-300 opacity-75'
        : isDark ? 'bg-slate-800 border-slate-600 hover:border-blue-500' : 'bg-white border-blue-200 hover:border-blue-400'
    }`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className="w-6 h-6 cursor-pointer"
      />
      <span className={`flex-1 text-lg ${
        todo.done ? 'line-through text-gray-500' : isDark ? 'text-gray-200' : 'text-gray-800'
      }`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-all hover:scale-105"
      >
        Delete
      </button>
    </div>
  )
}
