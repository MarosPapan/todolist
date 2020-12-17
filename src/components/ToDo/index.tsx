import React, { useState, useEffect, Fragment } from 'react';

import Loader from 'react-loader-spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import EditComponent from '../EditComponent';

import { 
    taskLoadsInitAction,
    formOnChangeAction,
    addtodoInitAction,
    initEditingAction,
    initGetTaskAction,
    initDeleteTaskAction,
    openModalAction,
    closeModalAction,
    initCompleteTaskAction,
} from './actions'

import './style.scss';


const mapStateToProps = (state) => {
    return {
        tasks: _.get(state, 'tasks', {}),
        mainform: _.get(state, 'mainform', ''),
        addToDo: _.get(state, 'addToDo', null),
        edit: _.get(state, 'edit', {}),
        getTask: _.get(state, 'getTask', {}),
        delete: _.get(state, 'delete', null),
        form: _.get(state, 'form', null),
        modal: _.get(state, 'modal', null),
        complete: _.get(state, 'complete', {}),
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        taskLoadsInitAction,
        formOnChangeAction,
        addtodoInitAction,
        initGetTaskAction,
        initDeleteTaskAction,
        openModalAction,
        closeModalAction,
        initEditingAction,
        initCompleteTaskAction,
    }, dispatch)
}

const ToDo = (props) => {

    const [formState, setForm] = useState('');

    useEffect(() => {
        props.taskLoadsInitAction(); 
    }, []);

    const handleForm = (e) => {
        setForm(e.target.value);
    };

    const handleOnSubmit = (e) => {
        //e.preventDefault()
        props.addtodoInitAction(formState);
    };

    const handleOnEdit = (e, id) => {
        e.preventDefault();
        props.initEditingAction(id);
        onCloseModal();
    };

    // const handleOnEdit = (task) => () => {
    //     let detailTask = _.find(props.tasks.data, (t) => {return t.id == task.id })
    //     console.log('Detail Task -> ', detailTask.title); 
    // };

    const handleOnDelete = (task) => () => {
        props.initDeleteTaskAction(task.id);
    }

    const onOpenModal = (task) => () => {
        props.openModalAction();
        props.initGetTaskAction(task.id)
    }

    const onCloseModal = () => {
        props.closeModalAction();
    };

    const taskCompleted = (task) => () => {
        task.completed = !task.completed;
        console.log("TASK COMPLETE: ", task.completed);
        props.initCompleteTaskAction(task.id, task.completed);
    }

    return (
        <div className="container">
            <EditComponent
                open={props.modal.open}
                onClose={onCloseModal}
                initValue={props.getTask.data.title}
                handleOnEdit={handleOnEdit}
            />
            <div id="task-container">
                <div id="form-wrapper">
                    <form id="form" onSubmit={handleOnSubmit}>
                        <div className="flex-wrapper">
                            <div style={{flex:6}}>
                                <input className="form-control" id="title" value={formState} type="text" name="title" placeholder="Add task..." onChange={handleForm}/>
                            </div>

                            <div style={{flex: 1}}>
                                <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                            </div>
                        </div>
                    </form>
                </div>

                <div id="list-wrapper">
                    <>
                        {(props.tasks.data && ! props.tasks.loaded) ? (
                            <Loader className="spinner-loader"
                                type="TailSpin"
                                color="#36d9b6"
                                height={100}
                                width={100}
                          />
                        ) : (
                            <>
                                {_.map(props.tasks.data, task => {
                                    return(
                                        <div key={task.id} className="task-wrapper flex-wrapper">
                                            <div style={{flex:7}} onClick={taskCompleted(task)}>
                                                {task.completed == false ? (
                                                    <p> {task.title} </p>
                                                ) : (
                                                    <strike> {task.title} </strike>
                                                )}
                                            </div>
                                            <div style={{flex:1}}>
                                                <button
                                                    onClick={onOpenModal(task)}
                                                    className="btn btn-sm btn-outline-info"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <div style={{flex:1}}>
                                                <button
                                                    onClick={handleOnDelete(task)} 
                                                    className="btn btn-sm btn-outline-dark"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                    </>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);