import { useState } from 'react';

export default function useForm (initialFormValues) {
    const [formValue, setFormValue] = useState(initialFormValues);

    const handleChange = (name, value) => {
        setFormValue({...formValue, [name]: value})
    }

    const clearForm = () => {
        setFormValue(initialFormValues);
    }

    return [formValue, handleChange, clearForm];
}