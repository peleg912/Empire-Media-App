import React from 'react';

const Tab = (props)=> {
    return(
        <>
        <li className="nav-item" onClick={props.clicked} style={{cursor:'pointer'}}>
           <span className="nav-link active">{props.period}{props.precision}</span>
        </li>
       </>
    )
}

export default Tab;