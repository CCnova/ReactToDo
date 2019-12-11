import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import classes from './TaskList.css';
import ToolBar from '../../components/ToolBar/ToolBar';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: [<Task name="Task1" doDate="Amanha" />],
        };
    }

    // newTask = <Task name="Task1" doDate="Amanha" />;
    // newTaskList = [this.newTask];

    deleteTask = (taskNumber) => {
        let newTaskList = this.state.taskList;

        newTaskList.splice(taskNumber - 1, 1);

        this.setState({
            taskList: newTaskList
        });
    }

    addTask = (newTaskName, newTaskDate) => {
        let newTask = <Task name={newTaskName} doDate={newTaskDate} />

        let newTaskList = this.state.taskList;
        newTaskList.push(newTask);

        this.setState({
            taskList: newTaskList
        });
    }

    render() {
        return (
            <div>
                
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Dates</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.taskList.map((task, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{task}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <ToolBar toDelete={this.deleteTask} toAdd={this.addTask}/>
               
               
                {/* <ul>
                    {this.state.taskList.map(task => {
                        return <li className={classes.taskEl}>{task}</li>;
                    })}
                </ul> */}
            </div>
        );
    }    
}

export default TaskList;