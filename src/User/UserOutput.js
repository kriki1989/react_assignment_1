import React from 'react';
import './User.css'

const userOutput = ( props ) => {

    return (
        <div className="UserOutput">
            <p onClick={props.click}>Hello {props.username}</p>
            <p>I'm building React!</p>
        </div>
    );

}

export default userOutput;