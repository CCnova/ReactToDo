import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: 'task1',
            doDate: 'amanha',
            done: false
        };
    }



    render() {
        return (
        <div>
            <h1>Nome: {this.state.titulo}</h1>
            <span>Data: {this.state.doDate}</span>
        </div>
        );
    }
}

export default Task;