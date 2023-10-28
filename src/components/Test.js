import React from 'react'

function Test(props) {
    return (
        <div className='test'>
            <h1 className='test__text'>{props.str}</h1>
        </div>
    );
}

export default Test;