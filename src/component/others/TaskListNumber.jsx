import React, { useState, useEffect } from 'react'

const TaskListNumber = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedCounts, setAnimatedCounts] = useState({
    newTask: 0,
    active: 0,
    completed: 0,
    total: 0,
    failed: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Animate counters
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    
    const targets = {
      newTask: data?.taskStats?.newTask || 0,
      active: data?.taskStats?.active || 0,
      completed: data?.taskStats?.completed || 0,
      total: data?.taskStats?.total || 0,
      failed: data?.taskStats?.failed || 0
    }

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3) // Cubic ease-out

      setAnimatedCounts({
        newTask: Math.floor(targets.newTask * easeOut),
        active: Math.floor(targets.active * easeOut),
        completed: Math.floor(targets.completed * easeOut),
        total: Math.floor(targets.total * easeOut),
        failed: Math.floor(targets.failed * easeOut)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedCounts(targets) // Ensure exact final values
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [data])

  const taskCards = [
    {
      key: 'newTask',
      title: 'New Tasks',
      value: animatedCounts.newTask,
      icon: '📋',
      gradient: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/25',
      hoverShadow: 'hover:shadow-blue-500/40',
      delay: 'delay-100'
    },
    {
      key: 'active',
      title: 'Active Tasks',
      value: animatedCounts.active,
      icon: '🔄',
      gradient: 'from-teal-600 to-teal-700',
      shadowColor: 'shadow-teal-600/25',
      hoverShadow: 'hover:shadow-teal-600/40',
      delay: 'delay-200'
    },
    {
      key: 'completed',
      title: 'Completed Tasks',
      value: animatedCounts.completed,
      icon: '✅',
      gradient: 'from-green-500 to-green-600',
      shadowColor: 'shadow-green-500/25',
      hoverShadow: 'hover:shadow-green-500/40',
      delay: 'delay-300'
    },
    {
      key: 'total',
      title: 'Accepted Tasks',
      value: animatedCounts.total,
      icon: '📊',
      gradient: 'from-yellow-400 to-yellow-500',
      shadowColor: 'shadow-yellow-400/25',
      hoverShadow: 'hover:shadow-yellow-400/40',
      textColor: 'text-gray-900',
      delay: 'delay-400'
    },
    {
      key: 'failed',
      title: 'Failed Tasks',
      value: animatedCounts.failed,
      icon: '❌',
      gradient: 'from-red-600 to-red-700',
      shadowColor: 'shadow-red-600/25',
      hoverShadow: 'hover:shadow-red-600/40',
      delay: 'delay-500'
    }
  ]

  return (
    <div className="mt-6 px-2">
      {/* Desktop Grid (3 columns for larger screens, 2 for medium) */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
        {taskCards.map((card, index) => (
          <TaskCard key={card.key} card={card} isVisible={isVisible} index={index} />
        ))}
      </div>

      {/* Mobile Stack */}
      <div className="sm:hidden space-y-4">
        {taskCards.map((card, index) => (
          <TaskCard key={card.key} card={card} isVisible={isVisible} index={index} isMobile={true} />
        ))}
      </div>
    </div>
  )
}

const TaskCard = ({ card, isVisible, index, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden transition-all duration-700 ease-out ${card.delay} ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
      
      {/* Main Card */}
      <div className={`relative bg-gradient-to-br ${card.gradient} ${isMobile ? 'p-6' : 'p-5 lg:p-6'} rounded-2xl shadow-lg ${card.shadowColor} ${card.hoverShadow} hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10`}>
        
        {/* Shine Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl`}></div>
        
        {/* Card Content */}
        <div className="relative">
          {/* Header with Icon */}
          <div className="flex items-center justify-between mb-3">
            <div className={`text-2xl transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
              {card.icon}
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Count Display */}
          <div className={`${card.textColor || 'text-white'} mb-2`}>
            <h2 className={`${isMobile ? 'text-4xl' : 'text-2xl lg:text-3xl'} font-bold leading-none tracking-tight transform transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
              {card.value}
            </h2>
          </div>

          {/* Title */}
          <h3 className={`${card.textColor || 'text-white/90'} ${isMobile ? 'text-lg' : 'text-sm lg:text-base'} font-semibold leading-tight`}>
            {card.title}
          </h3>

          {/* Progress Bar */}
          <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/40 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${Math.min(100, (card.value / Math.max(card.value, 10)) * 100)}%`,
                transitionDelay: `${index * 200 + 800}ms`
              }}
            ></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default TaskListNumber