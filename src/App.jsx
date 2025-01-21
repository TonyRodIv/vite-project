import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'

function App() {
  return(
    <div>
      <h1 className='text-red-600'>Gerenciador de tarefas</h1>
      <AddTasks />
      <Tasks />
    </div>
  )
}

export default App
