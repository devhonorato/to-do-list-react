import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, onTaskCompleted, onDeleteTask}){
    const navigate = useNavigate();
    function onSeeDetails(task) {
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }
    return (
        <div className="bg-slate-200 p-6 rounded-md shadow">
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button 
                            onClick={() => onTaskCompleted(task.id)}
                            className={`w-full bg-slate-400 text-white p-2 rounded-md text-left ${task.isCompleted && "line-through"}`}>
                            {task.title}
                        </button>

                        <Button onClick={()=> onSeeDetails(task)}>
                            <ChevronRightIcon />
                        </Button>

                        <Button onClick={() => onDeleteTask(task.id)}>
                            <TrashIcon />
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;