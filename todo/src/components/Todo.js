import React, {useState} from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import moment from 'moment';

const TodoDiv = styled.div`
    width: 85%;
    display: flex;
    align-items: center`;

const TodoItemH3 = styled.h3`
    font-weight: normal;
    font-size: 18px;
    margin-right: auto`;

const Button = styled.button`
    font-size: 18px;`;

const Input = styled.input`
    font-size: 18px;`;

const CompletedDateP = styled.p`
    margin-right: 10px`;

export default function Todo(props) {
    const { todo, dispatch, actions } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [formValue, handleChange, clearForm] = useForm('');

    const editTodo = () => {
        setIsEditing(!isEditing);
    }

    const submitUpdate = (e)=> {
        e.preventDefault();
        if (formValue !== ''){
            dispatch(actions.editTodo(todo.id, formValue));
            clearForm();
        }  
        setIsEditing(!isEditing);
    }
   
    return (
        <TodoDiv>  
            <TodoItemH3 onClick={() => dispatch(actions.toggleComplete(todo.id))} className={todo.completed ? 'strike-through' : null}>{todo.item}</TodoItemH3>
            <CompletedDateP>{todo.completed? `Completed: ${moment(todo.dateCompleted).format('LL')}`: null}</CompletedDateP>
            {isEditing? <div className='editTodo'>
                    <Input type='text' name='edit' value={formValue} onChange={(e) => handleChange(e.target.value)}/>
                    <Button onClick={submitUpdate}>Update</Button>
                </div>: null}
            {!isEditing? <Button onClick={() => editTodo() }>Edit</Button>: null}
           
            <Button onClick={() => dispatch(actions.deleteTodo(todo.id))}>Delete</Button>
        </TodoDiv>
    )
}