import { useState } from 'react';

export default function useForm (initialFormValues) {
    const [formValue, setFormValue] = useState(initialFormValues);

    const handleChange = (name, value) => {
        console.log(name, value);
        if (name === 'todo'){
            setFormValue({...formValue, [name]: formValue[name] + value});
        }else{
            setFormValue({...formValue, [name]: value})
        }
        
    }

    const clearForm = () => {
        setFormValue(initialFormValues);
    }

    return [formValue, handleChange, clearForm];
}