import _ from 'lodash';

import { 
    OPEN_MODAL,
    CLOSE_MODAL,
    initModalState,
 } from './constants';

export default (modalState = initModalState, action = {}) => {
    const type = _.get(action, 'type', null);

    if (type === OPEN_MODAL){
        return {
            open: true,
        }
    }

    if (type === CLOSE_MODAL){
        return{
            open: false,
        }
    }

    return modalState;
};