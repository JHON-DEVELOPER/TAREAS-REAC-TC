import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp =()=>{
    
    const [nuevatarea, setnuevatarea] =useState<string>('')
    const [listatareas, setListaTareas] =useState<string[]>([])
    
    const handleAddTask =() => {
        if(nuevatarea.trim() === "")return
        setListaTareas(tareaanteriores=> [...tareaanteriores, nuevatarea] )
        setnuevatarea("")

    }

    const handleborrartarea =(index:number)=>{
        setListaTareas(tareas =>tareas.filter((_,i) => i !== index))
    }
    
    return (
        <div>
            <h1>Lista De Tareas</h1>
            <div>
                <input 
                type="text"
                value={nuevatarea}
                onChange={(e) =>setnuevatarea(e.target.value)}
                placeholder=" Nueva Tarea"

                 />
                 <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
        <ListaTareas listatareas={listatareas} borrartarea={handleborrartarea}></ListaTareas>   
        </div>
    )
}
