import React from 'react';
import './User.css'

const userInput = ( props ) => {

    return (
        <input
        className="UserInput"
        style={props.style}
        type="text"
        onChange= {props.change}
        value={props.username} />
    );

}

export default userInput;