import React from 'react';
import {typeData} from "./App";

type TasksType = {
    data: typeData
}

const Tasks = (props: TasksType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            {props.data.tasks.map((dat) => {
                return (
                    <div>
                        <input type="checkbox" checked={dat.isDone}/>{dat.title}
                    </div>
                )
            })}
            <ul>
                {props.data.students.map((stud) => {
                    return (
                        <li>
                            {stud}
                        </li>
                    )
                })}
            </ul>

        </div>
    );
};

export default Tasks;
