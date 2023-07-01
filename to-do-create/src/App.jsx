import { nanoid } from 'nanoid'
import './App.css'
import NewItem from './components/NewItem/NewItem'
import TodoList from './components/TodoList/TodoList'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'

const App=()=> {

  const [list,setList]=useState([])
  const[editState,setEditState]=useState({})
  console.log(list);

  useEffect(()=>{
    console.log('effect')
    fetch("http://localhost:4000/api/v2/todo")
    .then((res)=>res.json())
    .then((json)=>{
      setList(json.reverse())
      console.log(json)})
      .catch(()=>console.log('Network error'))
  },[editState])
  

  const triggerEdit=(item)=>
  {
      setEditState(item);
  }


  //add
  const addItem=(item)=>{
  console.log( item);
    // setList((prev)=>[item,...prev])
    fetch('http://localhost:4000/api/v2/todo',
    {
      method:'POST',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json'
      },
      body:JSON.stringify(item)
      }).then((res)=>{
        res.json().then(json=>{
          setList((prev)=>[json.data, ...prev])
        })
      })
  }




//delete
  const deleteItem=(id)=>{
    console.log(id)
   // console.log(id)
    fetch('http://localhost:4000/api/v2/todo/'+id, {
  method: 'DELETE',
})
.then(()=>{console.log("deleted");
toast.success("deleted successfully");
const filteredList=list.filter((item)=>item.id !== id)
setList([...filteredList])
setEditState({})
}) // or res.json()

}



  //update
  const editItem=(updatedItem)=>
  {
    // const updatedList=list.map((item)=>item.id==updatedItem.id?updatedItem:item)
    // setList([...updatedList])
    fetch('http://localhost:4000/api/v2/todo/'+updatedItem._id,
    {
      method:'PUT',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json'
      },
      body:JSON.stringify(updatedItem)
      }).then(()=>{
        console.log("updated")
        setEditState({})
      })
       toast.success("Inserted Successfully");
  }



  return(
    <div className="app">
    <h1 className="title">To-Do List</h1>
     <NewItem addItem={addItem} editState={editState} editItem={editItem}/>
    <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit}/>
    </div>
  )
  }

  export default App

