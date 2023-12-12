import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Axiostodolistfun(){
  let uuid=uuidv4()
    const[data,setdata]=useState('')

    const[todolist,settodolist]=useState([])

    const handle=(e)=>{
      setdata(e.target.value)
    }

    const handleget=async()=>{
      let items=await axios.get("http://localhost:3000/todoList")
  settodolist(items.data)

    }
useEffect(()=>{
  handleget()
},[])
    
const handlechange=async()=>{
 let body={
    id:uuid,
    task:data
  }
await axios.post('http://localhost:3000/todoList',body)
handleget()
}

const handledelete=async(deleteid)=>{
await axios.delete('http://localhost:3000/todoList/'+ deleteid)
handleget()
}
 
const handleupdate=async(index)=>{
let update=prompt('update ur list',todolist[index].task)
let boody={
  id:todolist[index].id,
  task:update
}
await axios.put('http://localhost:3000/todoList/'+todolist[index].id,boody)
handleget()
}
    return(
        <>
        <input  placeholder="add ur task" onChange={(e)=>handle(e)}/>
        <button onClick={handlechange}>add task</button> 
       {todolist.map((e,i)=>(
        <div key={i}>
          <span>{e.task}</span>
          <button onClick={()=>handleupdate(i)}>update</button>
          <button onClick={()=>handledelete(e.id)}>delete</button>
        </div>
       ))}
       </>
    )
}