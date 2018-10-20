import React from 'react';

const Header = ({todo, done})=>{
    return(<div className='header'>
        <h1 className='header'>Todo Application </h1>
        <div className='header__counters'>
            <span>{todo} more todo</span>
            <span>{done} done</span>
        </div>
    </div>)
};

export default Header;