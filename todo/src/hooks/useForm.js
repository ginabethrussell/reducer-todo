import { useState } from 'react';

export default function useForm () {
    const [formValue, setFormValue] = useState('');

    const handleChange = (newValue) => {
        setFormValue(newValue);
    }

    const clearForm = () => {
        setFormValue('');
    }
    
    return [formValue, handleChange, clearForm];
}