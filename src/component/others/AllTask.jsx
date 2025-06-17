import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const data = localStorage.getItem('employees');
  
  
  
  
  return (
    <div className="w-full min-h-screen px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-0.5 sm:p-1 shadow-2xl">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-8">
            
            {/* Header Section */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                Team Overview
              </h1>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg px-2">Track your team's progress and task distribution</p>
            </div>

            {/* Stats Cards Row - Mobile: 2x2 grid, Desktop: 1x4 grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-500/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 font-medium text-xs sm:text-sm">New Tasks</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-yellow-500/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-300 font-medium text-xs sm:text-sm">Active Tasks</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-green-500/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium text-xs sm:text-sm">Completed</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-red-500/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-red-300 font-medium text-xs sm:text-sm">Failed</span>
                </div>
              </div>
            </div>

            {/* Table Container */}
            <div className="relative">
              {/* Table Header - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block sticky top-0 z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 mb-6 shadow-lg">
                <div className="grid grid-cols-5 gap-6 text-white font-semibold">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Employee Name</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span>New Task</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                    <span>Active Task</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                    <span>Failed</span>
                  </div>
                </div>
              </div>

              {/* Scrollable Employee List */}
              <div className="h-64 sm:h-72 lg:h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 pr-1 sm:pr-2">
                <div className="space-y-3 sm:space-y-4">
                  {userData.employees && userData.employees.map((employee, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-3 sm:p-4 lg:p-6 transition-all duration-500 hover:scale-[1.01] lg:hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {/* Background gradient animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Mobile Layout */}
                      <div className="lg:hidden relative z-10">
                        {/* Employee Info */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                            {employee.firstName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-base sm:text-lg group-hover:text-indigo-300 transition-colors">
                              {employee.firstName}
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm">Team Member</p>
                          </div>
                        </div>
                        
                        {/* Task Stats Grid - Mobile: 2x2 */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          <div className="flex items-center gap-2 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-lg p-2 sm:p-3 border border-blue-500/20">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-500/30 flex items-center justify-center">
                              <span className="text-blue-300 font-bold text-sm sm:text-base">{employee.taskStats.newTask}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-blue-300 font-medium text-xs sm:text-sm">New</p>
                              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
                                <div 
                                  className="bg-gradient-to-r from-blue-400 to-blue-500 h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${Math.min((employee.taskStats.newTask / 10) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg p-2 sm:p-3 border border-yellow-500/20">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 border border-yellow-500/30 flex items-center justify-center">
                              <span className="text-yellow-300 font-bold text-sm sm:text-base">{employee.taskStats.active}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-yellow-300 font-medium text-xs sm:text-sm">Active</p>
                              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
                                <div 
                                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${Math.min((employee.taskStats.active / 10) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-lg p-2 sm:p-3 border border-green-500/20">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/30 border border-green-500/30 flex items-center justify-center">
                              <span className="text-green-300 font-bold text-sm sm:text-base">{employee.taskStats.completed}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-green-300 font-medium text-xs sm:text-sm">Done</p>
                              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
                                <div 
                                  className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${Math.min((employee.taskStats.completed / 10) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gradient-to-br from-red-500/10 to-red-600/20 rounded-lg p-2 sm:p-3 border border-red-500/20">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/30 border border-red-500/30 flex items-center justify-center">
                              <span className="text-red-300 font-bold text-sm sm:text-base">{employee.taskStats.failed}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-red-300 font-medium text-xs sm:text-sm">Failed</p>
                              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
                                <div 
                                  className="bg-gradient-to-r from-red-400 to-red-500 h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${Math.min((employee.taskStats.failed / 10) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout - Original 5-column grid */}
                      <div className="hidden lg:block relative z-10">
                        <div className="grid grid-cols-5 gap-6 items-center">
                          {/* Employee Name with Avatar */}
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {employee.firstName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                                {employee.firstName}
                              </h3>
                              <p className="text-slate-400 text-sm">Team Member</p>
                            </div>
                          </div>

                          {/* Task Stats with Animated Counters */}
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-blue-300 font-bold text-xl">{employee.taskStats.newTask}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${Math.min((employee.taskStats.newTask / 10) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 border border-yellow-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-yellow-300 font-bold text-xl">{employee.taskStats.active}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${Math.min((employee.taskStats.active / 10) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/30 border border-green-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-green-300 font-bold text-xl">{employee.taskStats.completed}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${Math.min((employee.taskStats.completed / 10) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/30 border border-red-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-red-300 font-bold text-xl">{employee.taskStats.failed}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${Math.min((employee.taskStats.failed / 10) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements - Adjusted for mobile */}
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-indigo-500 rounded-full blur-3xl opacity-10 -translate-x-10 sm:-translate-x-16 lg:-translate-x-20 -translate-y-10 sm:-translate-y-16 lg:-translate-y-20"></div>
            <div className="absolute top-1/2 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-purple-500 rounded-full blur-3xl opacity-10 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
            <div className="absolute bottom-0 left-1/3 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-pink-500 rounded-full blur-3xl opacity-10 translate-y-7 sm:translate-y-10 lg:translate-y-14"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        @media (min-width: 640px) {
          .scrollbar-thin::-webkit-scrollbar {
            width: 6px;
          }
        }
        
        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
          background-color: rgb(71 85 105);
          border-radius: 9999px;
        }
        
        .scrollbar-track-slate-800::-webkit-scrollbar-track {
          background-color: rgb(30 41 59);
          border-radius: 9999px;
        }
      `}</style>
    </div>
  )
}

export default AllTask