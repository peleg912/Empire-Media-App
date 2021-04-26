import React, {useEffect} from 'react';
import Tabs from './tabs/tabs';
import {getData} from '../services/apiService';
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const Chart = (props)=> {

    //run when the page is loaded
    useEffect(()=>{
        async function fetchData() {
            let data = await getData(props.current.period, props.current.precision);
            await props.onUpdateCurrent(
                 props.current.period,
                 props.current.precision,
                 props.current.dispPeriod,
                 props.current.dispPrecision,
                  data);
          }
          try {
              fetchData();
          } catch (error) {
              alert(error);
          }
    }, []);

    //run whenever a tab is clicked
    const getNewChart = async(period, precision, dispPeriod, dispPrecision)=> {
        try{
            let data = await getData(period, precision);
            await props.onUpdateCurrent(period, precision, dispPeriod, dispPrecision, data);
        }catch(error){
            alert(error);
        }
    }


    return(
        <div className="container wrapper" style={{textAlign:"center"}}>
            <h1 style={{color:'white'}}>Apple stock</h1>
            <Tabs clicked={(period, precision, dispPeriod, dispPrecision)=>getNewChart(period, precision, dispPeriod, dispPrecision)}/>
            
            <LineChart width={1200} height={600} data={props.data} margin={{ top: 30, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="Close" stroke="#8884d8" dot={false} strokeWidth={1}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis xAxisId={0} dataKey="StartTime" hide="true"/>
                <XAxis xAxisId={1} dataKey="StartDate"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return{
        current: state.current,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onUpdateCurrent: (period, precision, dispPeriod, dispPrecision,data)=> dispatch(actions.updateCurrentPeriod(period, precision, dispPeriod, dispPrecision, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);