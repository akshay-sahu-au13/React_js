import React from 'react'

export default function Button(props) {
    const {label, Class} = props;
    return (
        <div>
            <button className={Class}>{label}</button>
        </div>
    )
}
