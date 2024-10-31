import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListSore } from './store/todoStore';
function App() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useRecoilState(todoListSore);
  // const [todoItems, setTodoItems] = useState([{
  //   id: 1,
  //   title: "Ayam Bakar",
  //   counter: 0
  // },
  // {
  //   id: 2,
  //   title: "Ayam Goreng",
  //   counter: 0
  // },
  // {
  //   id: 3,
  //   title: "Sate Ayam",
  //   counter: 0
  // }]);

  return (
    <div className="App">
      {todoList && todoList.map((todoItem, idx) => {
        return (
          <div key={todoItem.id} style={{padding: '16px', borderBottom: '1px solid #000'}}>
            <span>{todoItem.title}</span>
            <span style={{marginLeft: '16px'}}>{todoItem.counter}</span>
            <button onClick={() => {
              setTodoList(old => {
                const newTodoList = old.map(todo => {
                  const newTodo = {...todo}
                  if (newTodo.id === (idx+1)){
                    return {
                      ...newTodo,
                      counter: newTodo.counter += 1
                    }
                  }
                  return {...newTodo}
                })
                return newTodoList
              });
            }} style={{marginLeft: '8px'}}>+</button>
            <button onClick={() => navigate(`/detail/${todoItem.id}`)} style={{marginLeft: '8px'}}>Detail</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;