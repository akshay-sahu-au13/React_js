import React from 'react';
import './Item.css';
import {connect} from 'react-redux';
import TodoAction from '../../actions';

function Item(props) {
console.log("Props from Item:::", props)
    const clickActions = (e) => {

        console.log(e.target);
        let op = e.target.innerText
        // console.log("OP==>",op)

        if (op === "Done") {
            console.log("Done pressed");
            props.dispatch(TodoAction.completedItem(props.item))
        } else if (op === "Delete") {
            console.log("Delete Pressed");
            props.dispatch(TodoAction.removeItem(props.item))
        } else {
            console.log("Edit Pressed")
        }
    }

    return (
        <div className="item">
            {props.item}
            <div className="options" onClick={clickActions}>
                <h6 className="edit">Edit</h6>
                <h6 className="done">Done</h6>
                <h6 className="delete">Delete</h6>
            </div>
        </div>
    )
}

const mapStateToProps = (storeData) => ({ ...storeData, todoList:storeData.todoList })

export default connect(mapStateToProps)(Item);
