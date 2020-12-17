import React from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    `;

const TodoInput = styled.input`
    width: 50%;
    padding: 8px;
    font-size: 1.8rem;
    margin-right: 16px;
    background-color: #FAFAFA;
`;

const DateDiv = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;`;

const DateLabel = styled.label`
    font-size: 1.8rem;
    color: #000;
    margin-right: 8px`;

const DateInput = styled.input`
    padding: 5px;
    font-size: 1.8rem;
    margin-right: 8px;
    background-color: #FAFAFA;
`;
const AddButton = styled.button`
    width: 125px;
    margin-left: auto;
    font-size: 1.8rem;
    font-weight: normal;
    padding: 8px 8px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #FFF;
    color: #000;
    cursor: pointer;
    background-color: #FAFAFA;
    ` ;


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
        <Form onSubmit={submitTodo}>
            <TodoInput type='text'
            name='todo'
            value={formValues.todo}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <DateDiv>
                <DateLabel htmlFor='date'>Date Due: </DateLabel>
                <DateInput type='date'
                id='date'
                name='dueDate'
                value={formValues.dueDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
            </DateDiv>
            <AddButton type='submit'>Add Todo</AddButton>
        </Form>
    )
}