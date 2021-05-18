import React from 'react'
import './Item.css'
function Item(props) {
    return (
        <div className="item">
            {props.item}
            <div className="options">
                <h6 className="edit">Edit</h6>
                <h6 className="done">Done</h6>
                <h6 className="delete">Delete</h6>
            </div>
        </div>
    )
}

export default Item
