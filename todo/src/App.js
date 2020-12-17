import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import actions from './actions/todoActions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-weight: normal;
  font-size: 4rem;
  width: 100%;
  padding: 16px 16px;
  color: #918EF4;
  margin-bottom: 0;
  `;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  `;
const Button = styled.button`
  width: 200px;
  font-size: 1.8rem;
  font-weight: normal;
  padding: 8px 8px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #FAFAFA;
  color: #000;
  cursor: pointer;
`;

  
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const saveTodos = (e) => {
    e.preventDefault();
    window.localStorage.setItem('todos', JSON.stringify(state.todos) )
  }
  return (
    <div className="App">
      <TitleH1>ToDo List</TitleH1>
      <TodoForm dispatch={dispatch} actions={actions}/>
      <TodoList dispatch={dispatch} todos={state.todos} actions={actions}/>
      
      <ButtonDiv>
        <Button onClick={() => dispatch(actions.clearTodo())}>Clear Completed</Button>
        <Button onClick={saveTodos}>Save Updates</Button>
      </ButtonDiv>
    </div>
  );
}

export default App;
