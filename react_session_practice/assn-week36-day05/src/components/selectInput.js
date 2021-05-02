import React from 'react';
import OptionInput from './optionInput';
const SelectInput = (props) => {
    const { name, label, value, clickHandler, choices  } = props;
    console.log(choices)
    return (
        <div className="form-grp">
            <label htmlFor={name}>{label} :</label>
            <select name={name} id={name}>
                {
                
                    choices.map((choice) => {
                        console.log(choice)
                        return <OptionInput value={choice} choice={choice} />
                    })
                
                }
            </select>
        </div>
    )
}

export default SelectInput;
