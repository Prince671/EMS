import React, { useState } from 'react';
import { Plus, Calendar, Tag, Check, X } from 'lucide-react';

const NewTask = ({ data = {
  category: 'Development',
  taskDate: '2024-06-16',
  taskTitle: 'Build Dashboard Component',
  taskDescription: 'Create a responsive dashboard component with data visualization charts and real-time updates for the admin panel.'
} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHover, setButtonHover] = useState(null);

  // Format date for better display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get category color based on category name (using vibrant colors for new tasks)
  const getCategoryColor = (category) => {
    const colors = {
      'Development': 'from-blue-500 to-purple-600',
      'Design': 'from-purple-500 to-pink-600',
      'Marketing': 'from-pink-500 to-rose-600',
      'Research': 'from-indigo-500 to-purple-600',
      'Meeting': 'from-cyan-500 to-blue-600',
      'Default': 'from-violet-500 to-purple-600'
    };
    return colors[category] || colors['Default'];
  };

  const handleAccept = () => {
    console.log('Task accepted:', data.taskTitle);
    // Add your accept logic here
  };

  const handleReject = () => {
    console.log('Task rejected:', data.taskTitle);
    // Add your reject logic here
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
                <Tag className={`w-4 h-4 text-purple-600 dark:text-purple-400`} />
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
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Plus 
                  className={`w-5 h-5 text-purple-600 dark:text-purple-400 transition-all duration-500 ${
                    isHovered ? 'rotate-90 scale-110' : ''
                  }`} 
                />
                {isHovered && (
                  <div className="absolute inset-0 w-5 h-5 bg-purple-400 rounded-full animate-ping opacity-30" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                {data.taskTitle}
              </h3>
            </div>
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

          {/* New task indicator */}
          <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              New Task • Awaiting Response
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              onClick={handleAccept}
              onMouseEnter={() => setButtonHover('accept')}
              onMouseLeave={() => setButtonHover(null)}
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <Check 
                className={`w-4 h-4 transition-all duration-300 ${
                  buttonHover === 'accept' ? 'scale-110 rotate-12' : ''
                }`} 
              />
              <span>Accept</span>
              {buttonHover === 'accept' && (
                <div className="absolute inset-0 bg-white rounded-xl opacity-10 animate-pulse" />
              )}
            </button>

            <button
              onClick={handleReject}
              onMouseEnter={() => setButtonHover('reject')}
              onMouseLeave={() => setButtonHover(null)}
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <X 
                className={`w-4 h-4 transition-all duration-300 ${
                  buttonHover === 'reject' ? 'scale-110 rotate-12' : ''
                }`} 
              />
              <span>Reject</span>
              {buttonHover === 'reject' && (
                <div className="absolute inset-0 bg-white rounded-xl opacity-10 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Floating particles effect on hover - using new task colors */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-70" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" />
            <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-60" />
          </>
        )}
      </div>

      {/* Bottom glow effect - purple/pink for new task */}
      <div 
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r ${getCategoryColor(data.category)} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 rounded-full`} 
      />
    </div>
  );
};

export default NewTask;