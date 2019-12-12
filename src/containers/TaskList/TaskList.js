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

    taskCheckHandler = (taskIndex) => {
        let auxList = this.state.taskList;
        auxList[taskIndex].done = !auxList[taskIndex].done;
        
        this.setState({
            taskList: auxList
        });
    }

    deleteTaskHandler = (taskIndex) => {
        let newList = this.state.taskList;
        newList.splice(taskIndex, 1);

        this.setState({
            taskList: newList
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
                                            <Task name={task.name} doDate={task.doDate} done={task.done} checked={() => this.taskCheckHandler(index)} key={this.state.taskList.length} delete={() => this.deleteTaskHandler(index)}/>
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