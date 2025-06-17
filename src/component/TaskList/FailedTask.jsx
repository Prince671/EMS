import React, { useState } from 'react';
import { XCircle, Calendar, Tag, AlertTriangle } from 'lucide-react';

const FailedTask = ({ data = {
  category: 'Development',
  taskDate: '2024-06-16',
  taskTitle: 'API Integration Task',
  taskDescription: 'Integrate third-party payment gateway with the existing checkout system and handle error responses properly.'
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

  // Get category color based on category name (keeping failed theme with red/orange tones)
  const getCategoryColor = (category) => {
    const colors = {
      'Development': 'from-red-500 to-orange-500',
      'Design': 'from-pink-500 to-red-500',
      'Marketing': 'from-orange-500 to-red-500',
      'Research': 'from-red-500 to-pink-500',
      'Meeting': 'from-orange-500 to-yellow-500',
      'Default': 'from-red-500 to-orange-500'
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
                <Tag className={`w-4 h-4 text-red-600 dark:text-red-400`} />
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

          {/* Failed status with enhanced animation */}
          <div className="pt-2">
            <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-100 dark:border-red-800/30 group-hover:shadow-md transition-all duration-300">
              <div className="relative">
                <XCircle 
                  className={`w-6 h-6 text-red-600 dark:text-red-400 transition-all duration-500 ${
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`} 
                />
                {isHovered && (
                  <div className="absolute inset-0 w-6 h-6 bg-red-400 rounded-full animate-ping opacity-30" />
                )}
              </div>
              <span className="font-semibold text-red-700 dark:text-red-300 tracking-wide">
                💥 Failed
              </span>
            </div>
          </div>

          {/* Warning notice for failed tasks */}
          <div className="flex items-start space-x-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-400">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-amber-700 dark:text-amber-300">
              <span className="font-medium">Action Required:</span> Review and reschedule this task or mark as resolved.
            </div>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Floating particles effect on hover - using warning colors */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-70" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-50" />
            <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce opacity-60" />
          </>
        )}
      </div>

      {/* Bottom glow effect - red/orange for failed state */}
      <div 
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r ${getCategoryColor(data.category)} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 rounded-full`} 
      />
    </div>
  );
};

export default FailedTask;