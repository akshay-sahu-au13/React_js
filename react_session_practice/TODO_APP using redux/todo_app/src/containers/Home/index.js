import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TodoAction from '../../actions'
import Item from '../Item';

function Home(props) {
    console.log("Props from Home: ", props)
    console.log("Todo list Home: ", props.todoList)

    const handleChange = (e) => {
        console.log(e.target)
        props.dispatch(TodoAction.enterItem(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log(e.target[0].value)
        props.dispatch(TodoAction.todolist(e.target[0].value))

    }

    return (
        <div className="home">
      
            <div className="add-todo">
                <h1>ToDo List</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="todo" id="todo" value={props.todoItem} onChange={handleChange} placeholder="Enter an item"/>
                    <button type="submit">Add Item</button>
                </form>
            </div>
            <div className="todo-list">
                {
                    props.todoList.map((item, id) => {
                        return <Item key={id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (storeData) => ({...storeData,todoList: storeData.todoList })

export default connect(mapStateToProps)(Home);
