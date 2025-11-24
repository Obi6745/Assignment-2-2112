'use client'

import { useState, useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'
import TodoItem from '@/components/TodoItem'
import TodoStats from '@/components/TodoStats'

// What a todo item looks like
interface Todo {
  id: string
  text: string
  done: boolean
}

export default function TasksPage() {
  const { user } = useAppContext()
  
  // useState hook - stores the list of todos
  const [todos, setTodos] = useState<Todo[]>([])
  // useState hook - stores what user types in the input
  const [inputText, setInputText] = useState('')

  // Load todos from localStorage when page first loads
  useEffect(() => {
    const saved = localStorage.getItem('myTodos')
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todos))
  }, [todos])

  // Function to add a new todo
  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputText.trim(),
        done: false
      }
      setTodos([...todos, newTodo])
      setInputText('')
    }
  }

  // Function to delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Function to toggle done/not done
  const toggleDone = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  // Theme colors
  const isDark = user?.theme === 'dark'
  const bgClass = isDark ? 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 to-blue-100'
  const textClass = isDark ? 'text-white' : 'text-gray-800'
  const cardClass = isDark ? 'bg-slate-800' : 'bg-white'

  return (
    <div className={`min-h-screen ${bgClass} py-8`}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className={`text-5xl font-bold text-center mb-8 ${textClass}`}>
          My Todo List
        </h1>
        
        {/* Form to add new todo */}
        <div className={`${cardClass} rounded-2xl shadow-lg p-6 mb-6`}>
          <div className="flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="What do you need to do?"
              className={`flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 text-lg ${
                isDark 
                  ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                  : 'bg-white border-blue-300 text-gray-800'
              }`}
            />
            <button
              onClick={addTodo}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all hover:scale-105"
            >
              Add
            </button>
          </div>
        </div>

        {/* List of todos */}
        <div className={`${cardClass} rounded-2xl shadow-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Your Tasks</h2>
          {todos.length === 0 ? (
            <p className={`text-center py-8 text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No tasks yet! Add one above to get started.
            </p>
          ) : (
            <div className="space-y-3">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteTodo}
                  onToggle={toggleDone}
                  theme={user?.theme || 'light'}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats component - receives todos as props */}
        <TodoStats todos={todos} />
      </div>
    </div>
  )
}
