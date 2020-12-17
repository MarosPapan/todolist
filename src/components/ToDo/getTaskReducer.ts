import _ from 'lodash'; 

import { 
    INIT_GET_TASK, 
    InitialGetTaskState,
    GET_TASK_SUCCESS
 } from './constants';


export default (getTaskState = InitialGetTaskState, action = {}) => {
    const type = _.get(action, 'type', null);

    if(type === INIT_GET_TASK) {
        return {
            editing: true,
            id: _.get(action, 'id', null),
            data: []
        }
    }

    if (type === GET_TASK_SUCCESS) {
        return {
            ...getTaskState,
            editing: true, 
            data: _.get(action, 'payload', {})
        }
    }

    return getTaskState;
}
