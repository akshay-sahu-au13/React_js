import React from 'react';
import optionInput from './optionInput';
const selectInput = (props) => {
    const { name, label, value, clickHandler, choices  } = props;
    return (
        <div className="form-grp">
            <label htmlFor={name}>{label} :</label>
            <select name={name} id={name}>
                {
                
                    choices.map((choice) => {
                        return <optionInput value={choice} choice={choice} />
                    })
                
                }
            </select>
        </div>
    )
}

export default selectInput;
