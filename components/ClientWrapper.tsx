'use client'

import { AppProvider } from '@/context/AppContext'
import Navbar from '@/components/Navbar'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
    </AppProvider>
  )
}

