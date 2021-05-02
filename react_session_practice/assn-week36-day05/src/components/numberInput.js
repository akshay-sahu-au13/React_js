import React from 'react';

const NumberInput = (props) => {
    const { name, label, value, changeHandler } = props;
    return (
        <div className="form-grp">
            <label htmlFor={name}>{label} :</label>
            <input type="number" name={name} id={name} value={value} onChange={changeHandler} />
        </div>
    )
}

export default NumberInput;