import React from 'react'

export default function dateInput(props) {
    const { name, label } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="date" name={name} id={name}/>
        </div>
    )
}
