import React, { useState, useEffect } from 'react'

const Header = ({ data, handleLogout }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>
      
      {/* Main Header Container */}
      <div className="relative flex items-start justify-between p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
        
        {/* Left Section - Greeting */}
        <div className="flex flex-col space-y-2">
          {/* Time Display */}
          <div className={`text-sm font-medium text-gray-400 transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}>
            {formatTime(currentTime)}
          </div>
          
          {/* Main Greeting */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
          }`}>
            <h2 className="text-lg font-medium text-gray-300 leading-tight">
              {getGreeting()}
            </h2>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-pulse">
                  {data.firstName ? data.firstName : 'Admin'}
              <span className="inline-block ml-2 animate-bounce">👋</span>
            </h1>
          </div>

          {/* Subtle Status Indicator */}
          <div className={`flex items-center space-x-2 transition-all duration-700 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-xs text-gray-400 font-medium">Online</span>
          </div>
        </div>

        {/* Right Section - Logout Button */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}>
          <button
            onClick={handleLogout}
            className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40 active:scale-95 border border-red-400/20"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center space-x-2">
              <span className="transition-transform duration-300 group-hover:scale-110">🚪</span>
              <span>Log Out</span>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-1 -left-1 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-tl from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
  )
}

export default Header