import React from 'react';


const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.username} placeholder="please enter username."/>

        </div>
    )
};

export default userInput;