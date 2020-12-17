import React from 'react';
import Todo from './Todo';

export default function TodoList(props){
    const { todos, dispatch, actions} = props;
    
    return (
        <div className='todo-list-wrapper'>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} dispatch={dispatch} actions={actions}/>
            ))}
        </div>
    )
}