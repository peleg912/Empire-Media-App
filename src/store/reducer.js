import * as actionType from './actions/actionTypes';

const initialState = {
   timePeriods: [
       {period: 1, precision: 'Minutes', dispPeriod:1, dispPrecision: 'Min'},
       {period: 5, precision: 'Minutes', dispPeriod:5, dispPrecision: 'Min'},
       {period: 1, precision: 'Hours', dispPeriod:1, dispPrecision: 'Hour'},
       {period: 24, precision: 'Hours', dispPeriod:1, dispPrecision: 'W'},
   ],
   current:  {period: 24, precision: 'Hours'} 
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case actionType.UPDATE_CURRENT_PERIOD:
            return{
                ...state,
                current:{
                    period: action.period,
                    precision: action.precision
                },
                data: action.data
            }
        
        default: return state;
    }
   
}


export default reducer;