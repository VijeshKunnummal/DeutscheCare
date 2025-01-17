import React from 'react';
import moment from 'moment';

export const ShowTask = ({ tasklist, setTasklist, handleEdit }) => {
    // const tasks=[{id:"1001",name:"TASK A",time:"1:10:34 14th July"},
    // {id:"1001",name:"TASK A",time:"1:10:34 14th July"},
    // {id:"1001",name:"TASK A",time:"1:10:34 14th July"}];
    const handleDelete = (id) => {
        const updateTaskList = tasklist.filter(todo => todo.id !== id)
        setTasklist(updateTaskList);
    }

    return (

        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
            </div>

            <ul>
                {
                    tasklist.map((todo) => (

                        viewTaskReadOnly(todo)

                    ))
                }

            </ul>
        </section>
    )

    function viewTaskReadOnly(todo) {
        return <li key={todo.id}><p>
            <span className="name">{todo.name}</span>
            <span className="time">{todo.time}</span>
        </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
        </li>;
    }
}
