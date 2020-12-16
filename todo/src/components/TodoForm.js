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

const initialFormValues = {
    todo: '',
    dueDate: ''
}
export default function TodoForm(props) {
    const [formValues, handleChange, clearForm] = useForm(initialFormValues);
    const { dispatch, actions } = props;

    const submitTodo = (e) => {
        e.preventDefault();
        if (formValues.todo !== ''){
            dispatch(actions.addTodo(formValues.todo, formValues.dueDate));
            clearForm();
        } 
    }
 
    return(
        <form className='add-todo-form' onSubmit={submitTodo}>
            <TodoInput type='text'
            name='todo'
            value={formValues.todo}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <input type='date'
            name='dueDate'
            value={formValues.dueDate}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <AddButton type='submit'>Add Todo</AddButton>
        </form>
    )
}