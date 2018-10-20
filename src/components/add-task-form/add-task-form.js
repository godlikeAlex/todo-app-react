import React, { Component } from 'react';
import './add-task-form.css';

class AddTaskForm extends Component {
    render(){
        return(
            <form className="add-task-form">
                <input placeholder='Create a new task' />
                <button className="add-task-form__button" onClick={() => this.props.onItemAdded('Hello world')}>
                    Add item
                </button>
            </form>
        )
    }
}

export default AddTaskForm;