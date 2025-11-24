'use client'

import { useAppContext } from '@/context/AppContext'
import ProfileInfo from '@/components/ProfileInfo'

export default function ProfilePage() {
  // Get user data from Context
  const { user, updateUserTheme } = useAppContext()

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-200 to-blue-200 flex items-center justify-center">
        <p className="text-xl text-gray-600">No user data available.</p>
      </div>
    )
  }

  // Theme colors
  const isDark = user.theme === 'dark'
  const bgClass = isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900' : 'bg-gradient-to-br from-slate-200 to-blue-200'
  const textClass = isDark ? 'text-white' : 'text-gray-800'
  const cardClass = isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'
  const cardTextClass = isDark ? 'text-gray-200' : 'text-gray-600'

  return (
    <div className={`min-h-screen ${bgClass} py-8`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-5xl font-bold text-center mb-8 ${textClass}`}>
            My Profile
          </h1>
          
          {/* User info section */}
          <div className={`${cardClass} rounded-2xl shadow-lg p-8 mb-6`}>
            <h2 className={`text-3xl font-bold mb-6 ${textClass}`}>About Me</h2>
            {/* ProfileInfo receives user data as props */}
            <ProfileInfo 
              name={user.name} 
              email={user.email} 
              theme={user.theme}
            />
          </div>

          {/* Theme settings */}
          <div className={`${cardClass} rounded-2xl shadow-lg p-8`}>
            <h2 className={`text-3xl font-bold mb-6 ${textClass}`}>Settings</h2>
            <div className="space-y-4">
              <p className={cardTextClass}>Choose your favorite theme:</p>
              <div className="flex gap-4">
                <button
                  onClick={() => updateUserTheme('light')}
                  className={`flex-1 p-6 rounded-xl border-4 transition-all ${
                    user.theme === 'light'
                      ? 'border-blue-400 bg-blue-50 text-blue-800'
                      : 'border-gray-200 bg-white text-gray-800 hover:border-blue-300'
                  }`}
                >
                  <div className="font-bold text-lg mb-2">Light</div>
                  <div className="text-sm">Bright theme</div>
                </button>
                <button
                  onClick={() => updateUserTheme('dark')}
                  className={`flex-1 p-6 rounded-xl border-4 transition-all ${
                    user.theme === 'dark'
                      ? 'border-blue-400 bg-blue-900 text-white'
                      : 'border-gray-200 bg-white text-gray-800 hover:border-slate-400'
                  }`}
                >
                  <div className="font-bold text-lg mb-2">Dark</div>
                  <div className="text-sm">Dark theme</div>
                </button>
              </div>
              <p className={`text-sm mt-4 ${cardTextClass}`}>
                Current theme: <span className="font-bold capitalize">{user.theme}</span>
                <br />
                (This uses React Context - it's shared across the whole app!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
