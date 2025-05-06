import React, {useState, useEffect} from 'react'
import{ Trash2 } from 'lucide-react'

const Todo = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [filter, setFilter] = useState('all')
  
    
  
    const addTask = () => {
      if(task.trim()) {
         const updateTasklist =[ {id: Date.now(), text: task, completed: false}, ...taskList]
         setTaskList(updateTasklist);
         localStorage.setItem('data', JSON.stringify(updateTasklist))
          setTask('')     
      }
   
    setTaskList(JSON.parse(localStorage.getItem('data')))
    if(!task.trim().length) {
      alert("Input field is empty")
    }
    console.log(`Task added: ${task}`)
    
    }  
    useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem('data')) || [];
      setTaskList(savedTasks);
    }, []);
  
    const toggleTaskCompleate = (id) => {
     setTaskList(
       taskList.map((t) => 
      t.id === id ? {...t, compleated: !t.compleated} : t
    ) )  
    }
    
    const delateTask = (id) => {
    const delateItem = taskList.filter(t => t.id !== id);
    setTaskList(delateItem);
    localStorage.setItem('data', JSON.stringify(delateItem))
  
    }
    const filteredTasks = filter === 'all' ? taskList :
                         filter === 'remaining' ? taskList.filter(task => !task.compleated) :
                          taskList.filter(task => task.compleated);
  
  
    return (
      <div className='w-full  flex justify-center items-center'>
        <div className='max-w-md w-full p-4 rounded-lg flex flex-col bg-white '>
        <h1 className='w-full text-center mb-3 text-xl font-bold'>Todo</h1>
        <div className='flex gap-2 '>
          <input type="text" className='w-full h-40px bg-white px-2 text-sm py-2 rounded-lg outline-2' 
                 value={task}
                 required  
                 onChange={(e) => setTask(e.target.value)}/>
          <button className='px-4 py-2 bg-green-600 rounded-lg'
                  onClick={addTask}>Add</button>
        </div>
  
        <div className='flex gap-4 mt-4'>
          <button className={` px-4 py-2 rounded-lg cursor-pointer border-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-black'} `}
                  onClick={() => setFilter("all")}>
                  All</button>
          <button className={` px-4 py-2 rounded-lg cursor-pointer border-2 ${filter === 'remaining' ? 'bg-blue-500 text-white' : 'bg-white text-black'} `} 
                  onClick={() => setFilter("remaining")}>Remaining Task</button>
          <button className={` px-4 py-2 rounded-lg cursor-pointer border-2 ${filter === 'compleated' ? 'bg-blue-500 text-white' : 'bg-white text-black'} `}
                   onClick={() => setFilter("compleated")}
                  >Compleated</button>
        </div>
  
        <div className='w-full h-auto mt-4'>
          <ul className='w-full mt-3 flex flex-col gap-3 '>
            {filteredTasks.map((task) => {
              return (
                <li
                key={task.id}
                className="w-full h-auto bg-amber-200/60 px-3 py-2 flex gap-2 items-center justify-between rounded-lg break-words"
              >
                <div className="flex-1 text-wrap break-words text-lg overflow-y-auto">{task.text}</div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={task.compleated}
                    onChange={() => toggleTaskCompleate(task.id)}
                    className="cursor-pointer accent-green-400"
                  />
                <button onClick={() => delateTask(task.id)}>
                  <Trash2  size={25} color='red' />
                </button>
                </div>
                </li>
              )
            }
            )}
          </ul>
          {taskList.length === 0 && 
              <p className='text-xl text-red-500'>No task yet. Add some!</p>
          }
        </div>
  
        </div>
      </div>
    )
}

export default Todo