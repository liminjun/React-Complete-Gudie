import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h3>hello world.</h3>
            <p onClick={props.click}> I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;