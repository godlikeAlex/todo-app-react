import React from 'react';

class TodoListItem extends React.Component{

    render(){
        const {label,onDeleted, onDone,onImportant, important, done} = this.props;

        return(
            <span>
                {label}
                <span className='btnTask'>
                    <i className={important === true ? 'fas fa-fire important' : 'fas fa-fire'} onClick={onImportant}> </i>
                    <i className={done === true ? 'fas fa-check active' : 'fas fa-check'} onClick={onDone}> </i>
                    <i onClick={onDeleted} className="fas fa-trash-alt delete"> </i>
                </span>
            </span>
        )
    }
}


export default TodoListItem;