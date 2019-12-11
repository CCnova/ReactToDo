import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import ToolBar from '../../components/ToolBar/ToolBar';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: [],
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
        let newTask = {
            name: newTaskName,
            doDate: newTaskDate,
            done: false,
        };

        let newTaskList = this.state.taskList;
        newTaskList.push(newTask);

        this.setState({
            taskList: newTaskList
        });
    }

    render() {
        return (
            <div>
                
                <div className="card">
                    <div className="table-responsive">
                        <table className="table table-bordered">
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
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <Task name={task.name} doDate={task.doDate} key={this.state.taskList.length} />
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
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