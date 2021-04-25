import React from 'react';
import Tab from './tab';
import {connect} from 'react-redux';

const Tabs = (props)=> {
    return(
        <ul className="nav nav-tabs">
         {props.timePeriods.map((obj, index)=> {
            return(
                 <Tab
                 key={index}
                 period={obj.dispPeriod}
                 precision={obj.dispPrecision}
                 clicked={()=>props.clicked(obj.period, obj.precision)}/>)})}
         </ul>
      
        
    )
}


const mapStateToProps = (state)=> {
    return{
        timePeriods: state.timePeriods
    }
}

export default connect(mapStateToProps)(Tabs);