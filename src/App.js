import React, { useState } from 'react'
import './App.css';

function App() {
  const [todoItems, setItems] = useState([])
  const [input, setInput] = useState('')
  const deleteItem = (i) => {
    const temp = [...todoItems]
    temp.splice(i, 1)
    // console.log(temp)
    setItems(temp)
  }

  const editItem = (i) => {
    const temp = [...todoItems]
    temp.splice(i, 1, input)
    // console.log(temp)
    setItems(temp)
  }
  console.log(todoItems.length)
  return (
    <div>
      <h1>Todo App</h1>
      <input  onChange={(e) => setInput(e.target.value)} />
      <input type="button" onClick={() => setItems([...todoItems, input])} ></input>

      {

        todoItems.map((t, i) => {
          return <ul key={i}>({i}): {t} <form>Delete Item: <input type="button" onClick={() => deleteItem(i)} /> Edit Item: <input type="button" onClick={() => editItem(i)} /></form></ul> 
        })
      }
    </div >

  );
}

export default App;
