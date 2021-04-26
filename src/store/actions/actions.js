import * as actionType from './actionTypes';

export const updateCurrentPeriod = (period, precision, dispPeriod, dispPrecision, data)=> {
    return {
        type: actionType.UPDATE_CURRENT_PERIOD,
        period: period,
        precision: precision,
        dispPeriod: dispPeriod,
        dispPrecision: dispPrecision,
        data: data
    };
};