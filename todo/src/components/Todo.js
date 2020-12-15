import React, {useState} from 'react';
import useForm from '../hooks/useForm';


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
        <div className='todo'>  
            <h3 onClick={() => markComplete(todo.id, 'COMPLETED')} className={todo.completed ? 'strike-through' : null}>{todo.item}</h3>
            {isEditing? <div className='editTodo'>
                    <input type='text' name='edit' value={formValue} onChange={(e) => handleChange(e.target.value)}/>
                    <button onClick={submitUpdate}>Update</button>
                </div>: null}
            {!isEditing? <button onClick={() => editTodo() }>Edit</button>: null}
           
            <button onClick={() => deleteTodos(todo.id, 'DELETE')}>Delete</button>
        </div>
    )
}