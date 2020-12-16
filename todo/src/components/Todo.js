import React, {useState, useEffect} from 'react';
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
const DueDateP = styled.p`
    margin: 0 10px 0 10px `;
const OverdueP = styled.p`
    color: crimson;
    text-transform: uppercase;
    margin: 0 10px 0 10px `;

export default function Todo(props) {
    const { todo, dispatch, actions } = props;
    const [isEditing, setIsEditing] = useState(false);

    const initialValues = {
        editedItem: '',
        dueDate: todo.completedBy
    }
    const [formValues, handleChange, clearForm] = useForm(initialValues);
    const [overdue, setOverdue] = useState(false);
    
    useEffect(() => {
    
        if (todo.completedBy !== '' && moment(todo.completedBy).format('LL') < moment(Date.now()).format('LL')){
            console.log('Overdue');
            setOverdue(true);
        }
        if (todo.completed === true){
            setOverdue(false);
        }
    }, [todo.completed, todo.completedBy])
    
    const editTodo = () => {
        setIsEditing(!isEditing);
    }

    const submitUpdate = (e)=> {
        e.preventDefault();
        console.log('formValues.dueDate', formValues.dueDate)
        if (formValues.editedItem !== ''){
            dispatch(actions.editTodo(todo.id, formValues.editedItem, formValues.dueDate || todo.completedBy));
            clearForm();
        }  
        setIsEditing(!isEditing);
    }
   
    return (
        <TodoDiv>  
            <TodoItemH3 onClick={() => dispatch(actions.toggleComplete(todo.id))} className={todo.completed ? 'strike-through' : null}>{todo.item}</TodoItemH3>
            <OverdueP>{overdue? `This item is past due!`: null}</OverdueP>
            <CompletedDateP>{todo.completed? `Completed: ${moment(todo.dateCompleted).format('LL')}`: null}</CompletedDateP>
            <DueDateP>{todo.completedBy !== ''? `Due: ${moment(todo.completedBy).format('LL')}`: null}</DueDateP>
            {isEditing? <div className='editTodo'>
                    <Input type='text' name='editedItem' value={formValues.editedItem} onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                    <input type='date' min={`${moment(new Date()).format('YYYY-MM-DD')}`} name='dueDate'value={formValues.dueDate} onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                    <Button onClick={submitUpdate}>Update</Button>
                </div>: null}
            {!isEditing? <Button onClick={() => editTodo() }>Edit</Button>: null}
           
            <Button onClick={() => dispatch(actions.deleteTodo(todo.id))}>Delete</Button>
           
        </TodoDiv>
    )
}