import React from 'react';

const OptionInput = (props)=> {
    const { value, choice } = props;
    console.log("Option: ", value, choice)
    return (
        <option value={value} selected="false">{choice}</option>

    );
}

export default OptionInput;