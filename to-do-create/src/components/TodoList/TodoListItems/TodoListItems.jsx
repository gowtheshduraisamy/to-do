import "./TodoListItems.css"
import { useState } from "react";

const TodoListItems=(props)=>
{
     const {item ,onDelete,onEdit,index}=props
    console.log(onEdit)
    const {title,priority,_id}=item;
     const [isChecked,setChecked]=useState(false)
    return (
        <>
            <div className={`item-card ${priority}`}>
                {isChecked ? (
                <span className="material-symbols-outlined pointer" onClick={()=>setChecked(false)}>check_box</span>

                ):(
                <span className="checkbox pointer" onClick={()=>setChecked(true)}/>
                )
                }
                <div className={`card-title ${isChecked?'strike':' '}`}>{title}</div>
                
                <div className="badge">{priority}</div>
                {/* edit button */}
                <span class="material-symbols-outlined pointer edit" onClick={()=>onEdit(item)} >edit</span>
                <span className="material-symbols-outlined pointer" onClick={()=>onDelete(_id)}>delete
                </span>
            </div>
        </>
    )
}
export default TodoListItems;
