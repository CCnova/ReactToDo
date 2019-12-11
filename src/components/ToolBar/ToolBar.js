import React, { Component } from 'react';
import Button from './Button/Button';
import UserInput from './UserInput/UserInput';
import classes from './ToolBar.css';
import Aux from '../../hoc/Aux';

/* TO DO:

    Adicionar funcao de evento para o Button
    Adicionar layout para ficar alinhado os botoes
*/


class ToolBar extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            taskName: '',
            taskDate: '',
            taskNumber: 0,
        };
    }

    nameTyped= (event) => {
        let newTaskName = event.target.value;

        this.setState({
            taskName: newTaskName
        });
    }

    dateTyped = (event) => {
        let newTaskDate = event.target.value;

        this.setState({
            taskDate: newTaskDate
        });
    }

    getTaskIndex = (event) => {
        let newTaskIndex = event.target.value;

        this.setState({
            taskNumber: newTaskIndex
        });
    }

    userTypedHandler = (event, inputField) => {
        if (inputField === 'name') {
            this.nameTyped(event);
        } else if(inputField === 'date') {
            this.dateTyped(event);
        } else {
            this.getTaskIndex(event);
        }
    }

    addNewTaskHandler = () => { 
        let newTaskName = this.state.taskName;
        let newTaskDate = this.state.taskDate;

        this.props.toAdd(newTaskName, newTaskDate);
    };

    deleteTaskHandler = () => { 
        let delTaskNumber = this.state.taskNumber;

        this.props.toDelete(delTaskNumber);
    };

    render() {
        return(
            // <div className={classes.toolBar}>
            //     <ul className={"list-group list-group-horizontal ${classes.listSpace}"}>
            //         <li className={`list-group-item`}>
            //             <Button btText="Add" clicked={this.addNewTaskHandler}/>
            //         </li>
            //         <li className={`list-group-item`}>
            //             <Button btText="Delete" clicked={this.deleteTaskHandler}/>
            //         </li>
            //     </ul>
    
            //     <ul className={"list-group list-group-horizontal ${classes.listSpace}"}>
            //         <li className={"list-group-item"}>
            //             <UserInput onType={(event) => this.userTypedHandler(event, 'name')} inputName="Name"/>
            //         </li>
            //         <li className={"list-group-item"}>
            //             <UserInput onType={(event) => this.userTypedHandler(event, 'date')} inputName="Date"/>
            //         </li>
            //         <li className={"list-group-item"}>
            //             <UserInput onType={(event) => this.userTypedHandler(event, 'delete')} inputName="Number of task" />
            //         </li>
            //     </ul>
    
            // </div>

            <div className="d-flex justify-content-xl-center justify-content-lg-center justify-content-sm-center">
                <div>
                    <ul className={`list-group list-group-horizontal`}>
                        <li className={`list-group-item ${classes.borderless}`}>
                            <Button btText="Add" clicked={this.addNewTaskHandler} />
                        </li>
                        <li className={`list-group-item ${classes.borderless}`}>
                            <Button btText="Delete" clicked={this.deleteTaskHandler} />
                        </li>
                    </ul>
            
                    <ul className={"list-group"}>
                        <li className={`list-group-item ${classes.borderless}`}>
                            <UserInput onType={(event) => this.userTypedHandler(event, 'name')} inputName="Name" />
                        </li>
                        <li className={`list-group-item ${classes.borderless}`}>
                            <UserInput onType={(event) => this.userTypedHandler(event, 'date')} inputName="Date" />
                        </li>
                        <li className={`list-group-item ${classes.borderless}`}>
                            <UserInput onType={(event) => this.userTypedHandler(event, 'delete')} inputName="Number of task" />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default ToolBar;