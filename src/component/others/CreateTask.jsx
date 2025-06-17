import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { setLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssingTo] = useState('');
  const [category, setCategory] = useState('');
  const [task, setTask] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const [userData, setUserData] = useContext(AuthContext);
  

  const handleSubmit = (e) => {
    // Validate required fields
    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    setTask(newTask);

    const data = [...userData.employees];

    data.forEach((employee) => {
      if (employee.firstName === assignTo) {
        if (!employee.tasks) employee.tasks = [];
        if (!employee.taskStats) {
          employee.taskStats = {
            newTask: 0,
            active: 0,
            completed: 0,
            failed: 0
          };
        }

        employee.tasks.push(newTask);
        employee.taskStats.newTask++;
      }
    });

    setUserData({ ...userData, employees: data });
    setLocalStorage({ employees: data });

    

    // Show success popup
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-6 lg:mt-10 p-4 lg:p-10 rounded-3xl bg-gradient-to-br from-gray-900/95 via-slate-900/90 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl transform hover:scale-[1.01] transition-all duration-500 animate-slideInUp">
        <div className="mb-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeIn">
            Create New Task
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 w-full">
          <div className='w-full lg:w-[50%] space-y-6'>
            <div className="group">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-blue-400 transition-colors duration-300">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI Design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/80 focus:bg-gray-800/90 transform focus:scale-[1.02]"
                required
              />
            </div>

            <div className="group">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-purple-400 transition-colors duration-300">Date</h3>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/80 focus:bg-gray-800/90 transform focus:scale-[1.02]"
                required
              />
            </div>

            <div className="group">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-pink-400 transition-colors duration-300">Assign To</h3>
              <input
                type="text"
                value={assignTo}
                onChange={(e) => setAssingTo(e.target.value)}
                placeholder="Employee Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/80 focus:bg-gray-800/90 transform focus:scale-[1.02]"
                required
              />
            </div>

            <div className="group">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-indigo-400 transition-colors duration-300">Category</h3>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Design, Dev, Tester"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/80 focus:bg-gray-800/90 transform focus:scale-[1.02]"
                required
              />
            </div>
          </div>

          <div className='w-full lg:w-[50%] flex flex-col space-y-6'>
            <div className="group flex-1">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors duration-300">Description</h3>
              <textarea
                cols="30"
                rows="8"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Describe the task here..."
                className="w-full h-full min-h-[200px] lg:min-h-[250px] px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none hover:bg-gray-800/80 focus:bg-gray-800/90 transform focus:scale-[1.01]"
                required
              ></textarea>
            </div>
            
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Create Task</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <div className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ${
        showSuccess 
          ? 'translate-x-0 opacity-100 scale-100' 
          : 'translate-x-full opacity-0 scale-95'
      }`}>
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-semibold">Task Created Successfully!</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in;
        }
      `}</style>
    </>
  );
};

export default CreateTask;