import React, {useEffect} from 'react';
import Tabs from './tabs/tabs';
import {getData} from '../services/apiService';
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = (props)=> {

    useEffect(async()=>{
        try {
           const data = await getData(props.current.period, props.current.precision);
           await props.onUpdateCurrent(props.current.period, props.current.precision, data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const getNewChart = async(period, precision)=> {
        try{
            const data = await getData(period, precision);
            await props.onUpdateCurrent(period, precision, data);
        }catch(error){
            console.log(error);
        }
    }

    const renderTooltip = ()=> {
        return(
            <>
            <span>Date/Time: {}</span>
            </>
        )
    }


    return(
        <div className="container wrapper">
            <Tabs clicked={(period, precision)=>getNewChart(period, precision)}/>
            <LineChart width={1200} height={600} data={props.data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="Close" stroke="#8884d8" dot={false}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="StartDate"/>
                <YAxis/>
                <Tooltip />
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
        onUpdateCurrent: (period, precision, data)=> dispatch(actions.updateCurrentPeriod(period, precision, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);