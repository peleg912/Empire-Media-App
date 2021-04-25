import React from 'react';

const Tab = (props)=> {
    return(
        <>
        <li className="nav-item" onClick={props.clicked}>
           <span className="nav-link">{props.period}{props.precision}</span>
        </li>
       </>
    )
}

export default Tab;