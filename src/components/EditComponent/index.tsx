import React from 'react';
import _ from 'lodash';

import { connect} from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { Field, reduxForm } from 'redux-form';
import input from '../InputControl';

import './style.scss';

const EditComponent = (props) => {

    console.log("EditComponent PROPS: ",props)

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.onClose}
            >
                <form onSubmit={props.handleOnEdit}>
                    <Field
                        name="task"
                        component={input}
                        type="text" 
                        placeholder="Update Task"
                    />
                     <button type="submit" className="btn btn-success">Save change</button>
                </form>
            </Modal>
        </div>
    )
}

const mapStateToProps= (state) => ({
    initialValues: {
        task: state.getTask.data.title
    },
    getTask: _.get(state, 'getTask', {}),
})


export default connect(
    mapStateToProps,
)(reduxForm({
    form: 'edit',
    enableReinitialize: true,
})(EditComponent));
