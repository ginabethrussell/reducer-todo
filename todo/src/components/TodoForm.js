import React from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';

const TodoInput = styled.input`
    width: 70%;
    font-size: 18px;
`;
const AddButton = styled.button`
    font-size: 18px;  
`;

export default function TodoForm(props) {
    const [formValue, handleChange, clearForm] = useForm();
    const { dispatch, actions } = props;

    const submitTodo = (e) => {
        e.preventDefault();
        if (formValue !== ''){
            dispatch(actions.addTodo(formValue));
            clearForm();
        } 
    }
    
    return(
        <form className='add-todo-form' onClick={submitTodo}>
            <TodoInput type='text'
            name='todo'
            value={formValue}
            onChange={(e) => handleChange(e.target.value)}
            />
            <AddButton type='submit'>Add Todo</AddButton>
        </form>
    )
}