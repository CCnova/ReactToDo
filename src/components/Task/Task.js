import React from 'react';
import Aux from '../../hoc/Aux';

const task = (props) => { 

    return (
        <Aux>
            <td>{props.name}</td>
            <td>{props.doDate}</td>
        </Aux>
    );
};

export default task;