'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/context/AppContext'

export default function Navbar() {
  const pathname = usePathname()
  const { user } = useAppContext()

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tasks', label: 'Todos' },
    { href: '/quotes', label: 'Quotes' },
    { href: '/counter', label: 'Counter' },
    { href: '/profile', label: 'Profile' },
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-700 via-blue-800 to-slate-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white text-xl font-bold hover:text-blue-200 transition-colors">
              My React App
            </Link>
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-white text-blue-800 font-bold'
                      : 'text-gray-200 hover:bg-white hover:text-blue-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {user && (
            <div className="text-gray-200 text-sm font-semibold">
              Hi, {user.name}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
