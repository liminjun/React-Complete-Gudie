import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
           <p>UserName:</p>
           <p className="username">{props.username}</p>
           <p></p>
        </div>
    )
};

export default userOutput;