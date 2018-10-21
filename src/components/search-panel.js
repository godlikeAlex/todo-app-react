import React from 'react';
import ItemStatusFilter from './item-status-filter/item-status-filter';

const SearchPanel = ()=>{
    return(
        <div className='search-panel'>
            <input type='text' placeholder='Find the task' />
            <ItemStatusFilter />
        </div>
    )
};

export default SearchPanel;