import { combineReducers } from 'redux';

import taskReducer from '../../components/ToDo/reducer';
import formReducer from '../../components/ToDo/reducerForm';
import addToDoReducer from '../../components/ToDo/addToDoReducer';
import getTaskReducer from '../../components/ToDo/getTaskReducer';
import editReducer from '../../components/ToDo/editReducer';
import deleteReducer from '../../components/ToDo/deleteReducer';
import { reducer as reduxEditFormReducer } from 'redux-form';
import modalReducer from '../../components/ToDo/modalReducer';
import completeReducer from '../../components/ToDo/completeTaskReducer';


export default combineReducers({
    tasks: taskReducer,
    mainform: formReducer,
    addToDo: addToDoReducer,
    getTask: getTaskReducer, 
    edit: editReducer,
    delete: deleteReducer,
    form: reduxEditFormReducer,
    modal: modalReducer,
    complete: completeReducer,
});
