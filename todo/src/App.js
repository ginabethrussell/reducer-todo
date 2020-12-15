import './App.css';
import React, {useReducer} from 'react';
import {initialTodos, reducer} from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const addTodos = (newTodo, action) => {
    console.log('adding', newTodo, action);
    dispatch({type: action, payload: newTodo})
  }
  const deleteTodos = (todoId, action) => {
    console.log(todoId, action);
    dispatch({ type: action, payload: todoId });
  }
  const markComplete = (todoId, action) => {
    console.log(todoId, action);
    dispatch({ type: action, payload: todoId });
  }
  const editTodos = (todoId, newItem, action) =>{
    dispatch({type: action, payload: {todoId: todoId, newItem: newItem}})
  }
  const clearCompletedTodos = () => {
    dispatch({type: "CLEAR"})
  }
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList deleteTodos={deleteTodos} markComplete={markComplete} editTodos={editTodos} clearCompletedTodos={clearCompletedTodos} todos={todos} />
      <TodoForm addTodos={addTodos} />
      <button onClick={clearCompletedTodos}>Clear Completed</button>
    </div>
  );
}

export default App;
