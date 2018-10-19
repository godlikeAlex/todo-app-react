import React from 'react';
import ItemStatusFilter from './item-status-filter';

const SearchPanel = ()=>{
    return(
        <div>
            <input type='text' placeholder='Find the task' />
            <ItemStatusFilter />
        </div>
    )
};

export default SearchPanel;