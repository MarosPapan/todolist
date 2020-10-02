import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal } from 'react-responsive-modal';
import { Field, reduxForm } from 'redux-form';
import input from '../InputControl';

import { initEditingAction } from './actions';

import './style.scss';

const EditComponent = (props) => {

    console.log('Props v edite: ', props)

    const handleOnSubmit = (id) => () => {
        props.initEditingAction(id);
        props.onClose();
    };
    console.log("Props task id: ", props);
    return (
        <form onSubmit={handleOnSubmit(props.getTask.id)}>
            <div>
                <Modal
                    open={props.open}
                    onClose={props.onClose}
                >
                    <Field
                        name="task"
                        component={input}
                        type="text" 
                        placeholder="Update Task"/>

                    <button type="submit" className="btn btn-success">Save change</button>
                </Modal>
            </div>
        </form>
    )
}

const mapStateToProps= (state, props) => ({
    initialValues: {
        task: state.getTask.data.title
    },
    getTask: _.get(state, 'getTask', {}),
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        initEditingAction,
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(reduxForm({
    form: 'edit',
    enableReinitialize: true,
})(EditComponent));
