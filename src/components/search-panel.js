import React from 'react';
import ItemStatusFilter from './item-status-filter/item-status-filter';

class SearchPanel extends React.Component{

    state = {
      filter: ''
    };

    filterTask = (e)=>{
        this.setState({
            filter:e.target.value
        });

        this.props.searchTask(this.state.filter);
    };

    render (){
        return(
            <div className='search-panel'>
                <input type='text' placeholder='Find the task' onChange={this.filterTask} value={this.state.filter} />
                <ItemStatusFilter />
            </div>
        );
    }
};

export default SearchPanel;