type tarea = {
    tarea: string
    borrartarea: ()=> void
}
 export const Tarea =({tarea,borrartarea}: tarea)=>{
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrartarea}>Borrar</button>

        </div>
    )
}