import React from 'react';

import TodoListItem from './todo-list-item';

class TaskList extends React.Component {

    render() {
        const { todos,onDeleted, onDone, onImportant } = this.props;
        const elementsTask = todos.map(item => {

            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list__item'>
                    <TodoListItem
                        {...itemProps}
                        onDeleted ={()=>onDeleted(id)}
                        onDone = {()=> onDone(id)}
                        onImportant = {()=> onImportant(id)}
                    />
                </li>
            );
        });
        return(
            <div>
                <h2><i className="fas fa-tasks"> </i> All tasks</h2>
                <ul className='task-list'>
                    {elementsTask}
                </ul>
            </div>)
    }
}

export default TaskList;
