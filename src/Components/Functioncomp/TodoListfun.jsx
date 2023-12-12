import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todolist.css'

export default function TodoListfun() {
    let uuidver = uuidv4()
    const [data, setdata] = useState('')

    //default list 
    const [todolist, settodolist] = useState([
        {
            id: 1,
            task: 'Walking'
        },
        {
            id: 2,
            task: 'Reading'
        }
    ])

    const handle = (e) => {
        setdata(e.target.value)
    }
    const handlechange = () => {
        settodolist([...todolist, { id: uuidver, task: data }])
    }

    const handledelete = (deleteid) => {
        let filtered = todolist.filter((del) => del.id != deleteid)
        settodolist(filtered)
    }
    const handleupdate = (i) => {
        let update = prompt('update ur task', todolist[i].task)
        let copy = [...todolist]
        copy[i].task = update
        settodolist(copy)
    }
    return (
        <div id="project">
            <h1 id='head'>DAILY WORK </h1>
            <div className="inputbox">
                <input className='input' type="text" placeholder="Tasks" onChange={(e) => handle(e)} />
                <button className="bt" onClick={handlechange}>Add task</button>
            </div>
            <br />
            {todolist.map((list, i) => (
                <div key={i} className="lists">
                    <input type="checkbox" />
                    <span className="items">{list.task}</span>
                    <button className="update" onClick={() => handleupdate(i)}>update</button>
                    <button className="delete" onClick={() => handledelete(list.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}