import './App.css'
import Login from './component/Auth/Login'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import { getLocalStorage } from './utils/localStorage'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  // 🔐 Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('loggedInUser')
    if (stored) {
      const parsed = JSON.parse(stored)
      setUser(parsed.role)
      setLoggedInUser(parsed.data)
    }
  }, [])

  // ✅ Handle Login
  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      const admin = { email, password }
      setUser('admin')
      setLoggedInUser(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }))
      return
    }

    if (userData && userData.employees) {
      const employee = userData.employees.find(emp => emp.email === email && emp.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }

    alert('Invalid credentials')
  }

  // 🔓 Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUser(null)
  }

  // ✅ Get local data
  useEffect(() => {
    getLocalStorage()
  }, [])

  // 🖥️ Render UI
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard data={loggedInUser} handleLogout={handleLogout} />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUser} handleLogout={handleLogout} />}
    </>
  )
}

export default App
