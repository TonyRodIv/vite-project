import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'

function App() {
  return(
    <div className='bg-indigo-950 w-full h-screen flex flex-col items-center '>  
      <Tasks />
      <AddTasks />
    </div>
  )
}

export default App
