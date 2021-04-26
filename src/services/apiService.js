import axios from 'axios';

export const getData = async(period, precision)=> {
    try {
        console.log(`${process.env.REACT_APP_URL}&period=${period}&Precision=${precision}&${process.env.REACT_APP_PARAMS}`);
    const data = await axios.get(`${process.env.REACT_APP_URL}&period=${period}&Precision=${precision}&${process.env.REACT_APP_PARAMS}`);
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

