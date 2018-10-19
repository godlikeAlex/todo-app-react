import React, { Component } from 'react';

class ItemStatusFilter extends Component {
    render(){
        return(
            <div className='button-group'>
                <div className="all btn">All</div>
                <div className='active btn'>Active</div>
                <div className="done btn">Done</div>
            </div>
        )
    }
}

export default ItemStatusFilter;