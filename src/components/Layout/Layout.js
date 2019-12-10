import React from 'react';
import Aux from '../../hoc/Aux';
import TopBar from '../TopBar/TopBar';

const layout = (props) => { 
    return (<Aux>
        <TopBar />
        {props.children}
        <div>ToolBar</div>
    </Aux>);


};



export default layout;