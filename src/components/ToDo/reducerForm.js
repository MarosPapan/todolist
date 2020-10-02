import _ from 'lodash'; 

import { ON_CHANGE, InitialFormState } from './constants';

export default (formState = InitialFormState, action = {}) => {
    if (action.type === ON_CHANGE){
        return{
            data: _.get(action, 'data', null)
        }
    }

    return formState;
}