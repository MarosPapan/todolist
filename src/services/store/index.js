import { props } from 'bluebird';
import React from 'react'; 
import { Provider } from 'react-redux';

import store from './store';

const Store = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
};

export default Store;