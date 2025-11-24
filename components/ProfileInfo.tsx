'use client'

// Props this component receives from parent
interface ProfileInfoProps {
  name: string
  email: string
  theme: 'light' | 'dark'
}

export default function ProfileInfo({ name, email, theme }: ProfileInfoProps) {
  const isDark = theme === 'dark'
  const textClass = isDark ? 'text-white' : 'text-gray-800'
  const subTextClass = isDark ? 'text-gray-300' : 'text-gray-600'
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200'
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${textClass}`}>{name}</h3>
          <p className={subTextClass}>{email}</p>
        </div>
      </div>
      <div className={`pt-4 border-t ${borderClass}`}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className={`text-sm mb-1 ${subTextClass}`}>Name</p>
            <p className={`text-lg font-semibold ${textClass}`}>{name}</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${subTextClass}`}>Email</p>
            <p className={`text-lg font-semibold ${textClass}`}>{email}</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${subTextClass}`}>Theme</p>
            <p className={`text-lg font-semibold ${textClass} capitalize`}>{theme}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

