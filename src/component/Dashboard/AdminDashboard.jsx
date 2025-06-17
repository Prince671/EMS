import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data, handleLogout}) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header handleLogout={handleLogout}  data={data}/>
      <CreateTask/>
      <AllTask/>     
    </div>
  )
}

export default AdminDashboard