import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import "./todoapp.css";

function TodoApp() {

    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);
    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const AddTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false,

            }
            setTaskList([...tasklist, taskDetails]);

        }
    }

    const deletetask = (e, id) => {
        e.preventDefault();
        setTaskList(tasklist.filter((t) => t.id != id));
    }
    return (
        <div className="todo">
            <div className="d-flex">
                <input type="text" onChange={e => handleChange(e)} placeholder="task" className="me-2" />
                <button className="add" onClick={AddTask}><FontAwesomeIcon icon={faPlus} /></button>
                <button className="save"><FontAwesomeIcon icon={faSave} /></button>

            </div>

            {tasklist !== [] ?
                (
                    <ul>
                        {tasklist.map((t) => (
                            <li className="listitem">{t.value}
                                <Button className="delete" onClick={e => deletetask(e, t.id)}><FontAwesomeIcon icon={faTrash} className="" /></Button>
                            </li>
                        ))
                        }
                    </ul>
                )
                : null}

        </div>
    );
}

export default TodoApp;