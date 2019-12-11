import React from 'react';

/* To Do:

    Adicionar metodo para clique
    
*/

const button = (props) => { 
    return (
        <button onClick={props.clicked}>{props.btText}</button>
    );
};

export default button;