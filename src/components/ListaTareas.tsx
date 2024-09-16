import { Tarea } from "./Tarea"

type ListaTareas ={
    listatareas:string[]
    borrartarea: (index:number)=>void

}
export const ListaTareas = ({listatareas ,borrartarea}:ListaTareas)=>{
    return (
        <div className="tasklist">
            { listatareas.map((tarea,index)=>(
                <Tarea key={index} tarea={tarea} borrartarea={()=>borrartarea(index)}></Tarea>

            )
            )}
        </div>
    )
}