import _ from 'lodash'; 

import { 
    INIT_COMPLETE_TASK, 
    InitialCompleteTaskState,
    COMPLETE_TASK_SUCCESS
 } from './constants';


export default (completeTaskState = InitialCompleteTaskState, action = {}) => {
    const type = _.get(action, 'type', null);

    if(type === INIT_COMPLETE_TASK) {
        return {
            ...completeTaskState,
            id: _.get(action, 'id', null),
            complete: _.get(action, 'formData', null),
            data: []
        }
    }

    if (type === COMPLETE_TASK_SUCCESS) {
        return {
            ...completeTaskState,
            data: _.get(action, 'payload', {})
        }
    }

    return completeTaskState;
}