import { useState } from "react";
import Input from "./Input";

function AddTask({onNewTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="p-6 space-y-4 bg-slate-200 rounded-md shadow flex flex-col">
            <Input 
                type="text" 
                placeholder="Digite o título da tarefa." 
                value={title}
                onChange={(event)=> setTitle(event.target.value)}
            />

            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa." 
                value={description}
                onChange={(event)=> setDescription(event.target.value)}
            />
            <button 
                onClick={()=>{
                    if(!title.trim() || !description.trim()){
                        return alert("Preencha o título e a descrição da tarefa.")
                    }   
                    onNewTask(title.trim(), description.trim());
                    setTitle("");
                    setDescription("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md">
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;