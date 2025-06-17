import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {



  return (
    <div id='tasklist' className='h-[50%] w-full flex justify-start gap-4 flex-nowrap  py-5 mt-10 overflow-auto'>
        {data.tasks.map((task, index) => {
            console.log(task);
            
            if(task.active){
                return <AcceptTask key={index} data={task}/>
            }
            if(task.newTask){
                return <NewTask key={index} data={task}/>
            }
            if(task.completed){
                return <>
                <CompleteTask key={index} data={task}/>
                </>
            }
            if(task.failed){
                return <FailedTask key={index} data={task}/>
            }
        })}
    </div>
  )
}

export default TaskList