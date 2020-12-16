import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import actions from './actions/todoActions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-weight: normal;
  `
const Button = styled.button`
  font-weight: 18px;
  padding: 5px 8px;
  text-transform: uppercase;`
  ;
  
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <TitleH1>ToDo List</TitleH1>
      <TodoForm dispatch={dispatch} actions={actions}/>
      <TodoList dispatch={dispatch} todos={state.todos} actions={actions}/>
      <Button onClick={() => dispatch(actions.clearTodo())}>Clear Completed</Button>
    </div>
  );
}

export default App;
