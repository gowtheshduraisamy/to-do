import TodoListItems from "./TodoListItems/TodoListItems"

const TodoList =(props)=>{
    const{list,deleteItem,triggerEdit}=props
    if(list.length<=0){
        return(
            <center>No Items to Display!!</center>
        )
    }
    return (
        <>
        {list.map((item,index)=> (<TodoListItems key={index} item={item} index={index} onDelete={deleteItem} onEdit={triggerEdit}/>))}
        </>
    )
}
export default TodoList