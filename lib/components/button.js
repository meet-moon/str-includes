import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className}
            type={props.type}
            name={props.name}
            value={props.value}
        >
            {props.children}
        </button>
    );
}

export default Button;