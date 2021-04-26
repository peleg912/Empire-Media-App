import axios from 'axios';

export const getData = async(period, precision)=> {
    try {
    // const data= await axios.get(`${process.env.REACT_APP_URL}${period}&Precision=${precision}&${process.env.REACT_APP_PARAMS}`);
    const data = await axios.get(`https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`);
     data.data.forEach(obj => {
        let index = obj.StartDate.lastIndexOf('/');
        let index_ = obj.StartTime.lastIndexOf(':');
        if (index && index_ !== -1){
            obj.StartDate = obj.StartDate.substring(0, index);
            obj.StartTime = obj.StartTime.substring(0, index_).concat(obj.StartTime.slice(index_+3));
        }
    });
    return data.data;
    } catch (error) {
        console.log(error);
    }
}

