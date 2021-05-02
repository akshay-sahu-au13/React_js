import React from 'react';

const selectInput = (props) => {
    const { name, label, value, changeHandler } = props;
    return (
        <div className="form-grp">
            <label htmlFor={name}>{label} :</label>
            <input type="text" name={name} id={name} value={value} onChange={changeHandler} />
        </div>
    )
}