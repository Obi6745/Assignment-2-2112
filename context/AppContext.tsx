'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

// User data structure
interface User {
  name: string
  email: string
  theme: 'light' | 'dark'
}

// What the context provides
interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  updateUserTheme: (theme: 'light' | 'dark') => void
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined)

// Provider component - wraps the app and provides user data to all components
export function AppProvider({ children }: { children: ReactNode }) {
  // useState hook - stores user data
  const [user, setUser] = useState<User | null>({
    name: 'Obi Habibi',
    email: 'Obaidullah.Habibi@MyGeorgian.ca',
    theme: 'light',
  })

  // Function to update theme
  const updateUserTheme = (theme: 'light' | 'dark') => {
    if (user) {
      setUser({ ...user, theme })
    }
  }

  return (
    <AppContext.Provider value={{ user, setUser, updateUserTheme }}>
      {children}
    </AppContext.Provider>
  )
}

// Hook to use the context in components
export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

