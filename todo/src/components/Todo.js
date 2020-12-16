import React, {useState} from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';

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

export default function Todo(props) {
    const { todo, deleteTodos, markComplete, editTodos } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [formValue, handleChange, clearForm] = useForm('');

    const editTodo = () => {
        setIsEditing(!isEditing);
    }

    const submitUpdate = ()=> {
        if (formValue !== ''){
            editTodos(todo.id, formValue, 'EDIT');
            clearForm();
        }  
        setIsEditing(!isEditing);
    }
   

    return (
        <TodoDiv>  
            <TodoItemH3 onClick={() => markComplete(todo.id, 'COMPLETED')} className={todo.completed ? 'strike-through' : null}>{todo.item}</TodoItemH3>
            {isEditing? <div className='editTodo'>
                    <Input type='text' name='edit' value={formValue} onChange={(e) => handleChange(e.target.value)}/>
                    <Button onClick={submitUpdate}>Update</Button>
                </div>: null}
            {!isEditing? <Button onClick={() => editTodo() }>Edit</Button>: null}
           
            <Button onClick={() => deleteTodos(todo.id, 'DELETE')}>Delete</Button>
        </TodoDiv>
    )
}