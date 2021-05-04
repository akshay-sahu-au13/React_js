import React from 'react'

export default function Item(props) {
    console.log("Props from Item", props.item)

    return (
        <div className="item">
            <span>{props.item}</span>
        </div>
    )
}
