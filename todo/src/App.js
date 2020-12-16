import './App.css';
import React, {useReducer} from 'react';
import { initialTodos, reducer } from './reducers/reducer';
import actions from './actions/todoActions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-weight: normal;
  `
const Button = styled.button`
  font-weight: 18px;`
  ;
  
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const { addTodo, editTodo, clearTodo, completeTodo, deleteTodo } = actions;


  
  return (
    <div className="App">
      <TitleH1>ToDo List</TitleH1>
      <TodoForm dispatch={dispatch} actions={actions}/>
      <TodoList dispatch={dispatch} todos={todos} actions={actions}/>
      <Button onClick=''>Clear Completed</Button>
    </div>
  );
}

export default App;
