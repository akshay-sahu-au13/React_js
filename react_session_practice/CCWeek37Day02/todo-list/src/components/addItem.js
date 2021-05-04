import React from 'react'

export default function AddItem(props) {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <input type="text" name="todoItem" value={props.content.todoItem} onChange={props.changeHandler} />
                <button className="btn" type="submit"> Add-Item</button>
            </form>
        </div>
    )
}
