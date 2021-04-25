import axios from 'axios';

export const getData = async(period, precision)=> {
    try {
    const data = await axios.get(`${process.env.REACT_APP_URL}&period=${period}&Precision=${precision}&${process.env.REACT_APP_PARAMS}`);
     data.data.forEach(obj => {
        let index = obj.StartDate.lastIndexOf('/2020');
        if (index != -1){
            obj.StartDate = obj.StartDate.substring(0, index);
        }
    });
    return data.data;
    } catch (error) {
        console.log(error);
    }
}

