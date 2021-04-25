import * as actionType from './actionTypes';

export const updateCurrentPeriod = (period, precision, data)=> {
    return {
        type: actionType.UPDATE_CURRENT_PERIOD,
        period: period,
        precision: precision,
        data: data
    };
};