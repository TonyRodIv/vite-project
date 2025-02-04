import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'

function App() {
  return(
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <h1 className='text-red-600 text-3xl'>Gerenciador de tarefas</h1>
      <AddTasks />
      <Tasks />
    </div>
  )
}

export default App
