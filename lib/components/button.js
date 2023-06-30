import React from 'react';

const Button = (props) => {
    return (
        <button className={className}
            type={props.type}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onClick={props.handleClick}
        >
            {props.children}
        </button>
    );
}

export default Button;