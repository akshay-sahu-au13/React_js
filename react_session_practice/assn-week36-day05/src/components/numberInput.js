import React from 'react';

const numberInput = (props) => {
    const { name, label, value, changeHandler } = props;
    return (
        <div className="form-grp">
            <label htmlFor={name}>{label} :</label>
            <input type="number" name={name} id={name} value={value} onChange={changeHandler} />
        </div>
    )
}

export default numberInput;