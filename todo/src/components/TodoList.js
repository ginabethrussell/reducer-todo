import React from 'react';
import Todo from './Todo';

export default function TodoList(props){
    const { todos, deleteTodos, editTodos, markComplete} = props;
    
    return (
        <div className='todo-list-wrapper'>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} deleteTodos={deleteTodos} markComplete={markComplete} editTodos={editTodos}/>
            ))}
        </div>
    )
}