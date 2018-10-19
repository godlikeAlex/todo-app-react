import React, { Component } from 'react';
import './add-task-form.css';

class AddTaskForm extends Component {
    render(){
        return(
            <div className="add-task-form">
                <div className="add-task-form__button" onClick={() => this.props.onItemAdded('Hello world')}>
                    Add item
                </div>
            </div>
        )
    }
}

export default AddTaskForm;