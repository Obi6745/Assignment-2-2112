'use client'

import { AppProvider } from '@/app/context/AppContext'
import Navbar from '@/app/components/Navbar'

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
