// localStorage.clear(); // Clear localStorage for testing purposes  

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login form with validation.",
        taskDate: "2025-06-14",
        category: "Design",
        priority: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve the issue causing misalignment on mobile devices.",
        taskDate: "2025-06-13",
        category: "Development",
        priority: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare Design Presentation",
        taskDescription: "Slides for UI/UX client meeting.",
        taskDate: "2025-06-12",
        category: "Presentation",
        priority: "Urgent",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      total: 4,
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate new payment gateway.",
        taskDate: "2025-06-11",
        category: "Development",
        priority: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Unit Testing",
        taskDescription: "Write tests for all services.",
        taskDate: "2025-06-10",
        category: "Testing",
        priority: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Reduce page load by compressing assets.",
        taskDate: "2025-06-09",
        category: "Optimization",
        priority: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Bug Fix - Modal",
        taskDescription: "Fix z-index issue in modals.",
        taskDate: "2025-06-08",
        category: "Development",
        priority: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Write Documentation",
        taskDescription: "Add comments and README updates.",
        taskDate: "2025-06-07",
        category: "Documentation",
        priority: "Low",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Create Task UI",
        taskDescription: "Build task card UI component.",
        taskDate: "2025-06-06",
        category: "Design",
        priority: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Discuss sprint planning.",
        taskDate: "2025-06-05",
        category: "Management",
        priority: "Urgent",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      total: 4,
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Dark Mode Feature",
        taskDescription: "Implement toggle and theme switcher.",
        taskDate: "2025-06-04",
        category: "UI/UX",
        priority: "Medium",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Loader Animation",
        taskDescription: "Improve spinner performance.",
        taskDate: "2025-06-03",
        category: "Design",
        priority: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Implement Notifications",
        taskDescription: "Toast messages for actions.",
        taskDate: "2025-06-02",
        category: "Frontend",
        priority: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update User Profile",
        taskDescription: "Add avatar upload feature.",
        taskDate: "2025-06-01",
        category: "Feature",
        priority: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      total: 5,
      active: 1,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Login API",
        taskDescription: "Build and test secure login route.",
        taskDate: "2025-06-01",
        category: "Backend",
        priority: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Database Schema",
        taskDescription: "Update tables for task assignment.",
        taskDate: "2025-05-30",
        category: "Database",
        priority: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Error Handling",
        taskDescription: "Catch and log API errors.",
        taskDate: "2025-05-29",
        category: "Backend",
        priority: "Urgent",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Design Dashboard",
        taskDescription: "Create an overview layout for admins.",
        taskDate: "2025-05-28",
        category: "UI",
        priority: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Token Expiry Setup",
        taskDescription: "JWT refresh logic implementation.",
        taskDate: "2025-05-27",
        category: "Security",
        priority: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  },
  {
    firstName: "Base Admin",
    id: 2,
    email: "admin2@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const EmployeesData=localStorage.getItem('employees');
    const admin=localStorage.getItem('admin');
    

    return{employees, admin};
}