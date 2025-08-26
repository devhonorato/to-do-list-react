import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {v4} from 'uuid';
import Title from './components/Title';


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(()=>{
    async function fetchTasks(){
      // Chama a API
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        method: "GET"
      });

      // Pegar os dados que ela retorna 
      const data = await response.json();
      console.log(data)

      // Armazenar/Persistir esses dados no state
      setTasks(data);
    }

    // fetchTasks();
  }, [])

  function onTaskCompleted(taskID){
    const newTask = tasks.map( task => {
      if(task.id === taskID){
        return {...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTask(taskID){
    const newTask = tasks.filter(task => task.id != taskID)
    setTasks(newTask);
  }

  function onNewTask(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onNewTask={onNewTask}/>
        <Tasks tasks={tasks} onTaskCompleted={onTaskCompleted} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  )
}

export default App
