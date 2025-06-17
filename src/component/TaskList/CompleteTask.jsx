import React, { useState } from 'react';
import { CheckCircle, Calendar, Tag, Clock } from 'lucide-react';

const CompleteTask = ({ data = {
  category: 'Development',
  taskDate: '2024-06-16',
  taskTitle: 'Complete React Component',
  taskDescription: 'Design and implement a responsive task completion card with smooth animations and modern styling for optimal user experience.'
} }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format date for better display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get category color based on category name
  const getCategoryColor = (category) => {
    const colors = {
      'Development': 'from-blue-500 to-cyan-500',
      'Design': 'from-purple-500 to-pink-500',
      'Marketing': 'from-green-500 to-emerald-500',
      'Research': 'from-orange-500 to-red-500',
      'Meeting': 'from-indigo-500 to-blue-500',
      'Default': 'from-gray-500 to-slate-500'
    };
    return colors[category] || colors['Default'];
  };

  return (
    <div
      className="group relative max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background blur effect */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-r ${getCategoryColor(data.category)} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:duration-200`}
      />
      
      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-800">
        {/* Top gradient accent */}
        <div className={`h-1 bg-gradient-to-r ${getCategoryColor(data.category)}`} />
        
        <div className="p-6 space-y-4">
          {/* Header with category and date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(data.category)} bg-opacity-10`}>
                <Tag className={`w-4 h-4 text-blue-600 dark:text-blue-400`} />
              </div>
              <span className={`text-sm font-semibold bg-gradient-to-r ${getCategoryColor(data.category)} bg-clip-text text-transparent`}>
                {data.category}
              </span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">
                {formatDate(data.taskDate)}
              </span>
            </div>
          </div>

          {/* Task title with animation */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
              {data.taskTitle}
            </h3>
            <div 
              className={`h-0.5 bg-gradient-to-r ${getCategoryColor(data.category)} transform origin-left transition-all duration-500 ${
                isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} 
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {data.taskDescription}
          </p>

          {/* Completion status with enhanced animation */}
          <div className="pt-2">
            <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-100 dark:border-green-800/30 group-hover:shadow-md transition-all duration-300">
              <div className="relative">
                <CheckCircle 
                  className={`w-6 h-6 text-green-600 dark:text-green-400 transition-all duration-500 ${
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`} 
                />
                {isHovered && (
                  <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-30" />
                )}
              </div>
              <span className="font-semibold text-green-700 dark:text-green-300 tracking-wide">
                ✨ Completed
              </span>
            </div>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Floating particles effect on hover */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-70" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" />
            <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-60" />
          </>
        )}
      </div>

      {/* Bottom glow effect */}
      <div 
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r ${getCategoryColor(data.category)} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 rounded-full`} 
      />
    </div>
  );
};

export default CompleteTask;