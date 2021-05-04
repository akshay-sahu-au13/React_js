// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import List from './components/list';
import AddItem from './components/addItem';
function App() {

  const [todo, setTodo] = useState([]);
  const [newItem, setNewItem] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newItem)
    setTodo([
      ...todo,
      newItem
    ])
    setNewItem({todoItem:""})
  }

  const changeHandler = (e)=> {
    setNewItem({
      [e.target.name]: e.target.value
    })


  }
  return (
    <div className="container">
      <h1>To Do App</h1>
      <AddItem content={newItem} changeHandler={changeHandler} submitHandler={submitHandler} />
      <List list={todo} />
    </div>
  );
}

export default App;
