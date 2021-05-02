import React from 'react';

const optionInput = (props)=> {
    const { value, choice } = props;
    return (
        <option value={value}>{choice}</option>

    );
}