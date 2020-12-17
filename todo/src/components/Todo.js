import React, {useState, useEffect} from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import moment from 'moment';

const TodoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    margin: 10px;
    border: 1px solid #306BAC;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #918EF4;
    box-shadow: -5px 0px 5px 0px rgba(50, 50, 50, 0.75);`;
    

const TodoItemH3 = styled.h3`
    font-weight: normal;
    font-size: 2.4rem;
    margin-left: 20px;
    margin-right: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #fff`;

const Button = styled.button`
    font-size: 1.8rem;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    width: 75px`;

const Input = styled.input`
    font-size: 1.8rem;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    background-color: #FAFAFA;
    `;

const CompletedDateP = styled.p`
    margin-right: 10px;
    font-size: 1.4rem;
    color: #fff;
`;

const DueDateP = styled.p`
    margin: 0 10px 0 10px;
    font-size: 1.4rem;
    color: #fff;
`;

const OverdueP = styled.p`
    color: crimson;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 10px 0 10px;
 `;

export default function Todo(props) {
    const { todo, dispatch, actions } = props;
    const [isEditing, setIsEditing] = useState(false);

    const initialValues = {
        editedItem: '',
        dueDate: ''
    }
    const [formValues, handleChange, clearForm] = useForm(initialValues);
    const [overdue, setOverdue] = useState(false);
    
    useEffect(() => {
        if (moment(todo.completedBy).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')){
            setOverdue(true);
        }else {
            setOverdue(false);
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
        let newDueDate = '';
        if (formValues.dueDate !== ''){
            newDueDate = formValues.dueDate;
        }else {
            newDueDate = todo.completedBy;
        }
        let newTodo = '';
        if (formValues.editedItem !== ''){
            newTodo = formValues.editedItem;
        }else {
            newTodo = todo.item;
        }
        dispatch(actions.editTodo(todo.id, newTodo, newDueDate));
        clearForm();
        
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
                    <Input type='date' min={`${moment(new Date()).format('YYYY-MM-DD')}`} name='dueDate'value={formValues.dueDate} onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                    <Button onClick={submitUpdate}>Update</Button>
                </div>: null}
            {!isEditing? <Button onClick={() => editTodo() }>Edit</Button>: null}
           
            <Button onClick={() => dispatch(actions.deleteTodo(todo.id))}>Delete</Button>
           
        </TodoDiv>
    )
}