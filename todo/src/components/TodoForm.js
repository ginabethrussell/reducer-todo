import React from 'react';
import useForm from '../hooks/useForm';

export default function TodoForm(props) {
    const [formValue, handleChange, clearForm] = useForm();
    const { addTodos } = props;

    const submitTodo = (e) => {
        e.preventDefault();
        if (formValue !== ''){
            const newTodo = {
                item: formValue,
                completed: false,
                id: Date.now()
            }
            addTodos(newTodo, 'ADD_TODO');
            clearForm();
        } 
    }
    return(
        <form onClick={submitTodo}>
            <input type='text'
            name='todo'
            value={formValue}
            onChange={(e) => handleChange(e.target.value)}
            />
            <button type='submit'>Add Todo</button>
        </form>
    )
}