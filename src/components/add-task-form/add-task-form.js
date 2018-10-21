import React, { Component } from 'react';
import './add-task-form.css';

class AddTaskForm extends Component {

    state = {
        label : ''
    };

    onLabelChange = (e)=>{
        this.setState({
            label : e.target.value
        });
    };

    submit = (e) =>{
      e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label : ''
        });
    };

    render(){
        return(
            <form className="add-task-form" onSubmit={this.submit}>
                <input onChange={this.onLabelChange}
                       placeholder='Create a new task'
                       value={this.state.label}/>
                <button className="add-task-form__button">
                    Add item
                </button>
            </form>
        )
    }
}

export default AddTaskForm;