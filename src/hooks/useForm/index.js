import {useState, useRef} from 'react';

export const useForm = (submitCallback, initialValues) => {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const allowValidate = useRef(false);

    const handleChange = (ev) => {
        ev.persist()
        const target = ev.target;
        setValues(state => ({
            ...state,
            [target.id]: target.value
        }))
        if(allowValidate.current) {
            validate(target)
        }
    }
    const validate = (target) => {
        let valid = false;

        const maxArray = JSON.parse(target.dataset?.max || '[]');
        const minArray = JSON.parse(target.dataset?.min || '[]');
        const requireArray = JSON.parse(target.dataset?.require || '[]') ;
        const matchArray = JSON.parse(target.dataset?.asame || '[]')  ;
        const regularArray = JSON.parse(target.dataset?.regular || '[]') ; 
        const regularExpress =  new RegExp(regularArray[0]);

        if (target.dataset.require && target.value.length <= 0) {
            setErrors(state => ({
                ...state, 
                [target.id]: requireArray.at(1)
            }))
        } else if(target.dataset.min && target.value.length < +minArray.at(0)) {
            setErrors(state=> ({
                ...state,
                [target.id]: minArray.at(1)
            }))
        } else if (target.dataset.max && target.value.length > +maxArray.at(0)) {
            setErrors(state => ({
                ...state, 
                [target.id]: maxArray.at(1)
            }))
        } else if (target.dataset.asame && target.value !== document.getElementById(matchArray?.at(0))?.value) {
            setErrors(state => ({
                ...state, 
                [target.id]: matchArray.at(1)
            }))
        } else if (target.dataset.regular && !regularExpress.test(target.value) ) {
            setErrors(state => ({
                ...state, 
                [target.id]: regularArray.at(1)
            }))
        }
        else {
            const newError = {...errors};
            delete newError[target.id];
            setErrors(newError);
            valid = true;
        }

        return valid;
    }
    const submitHandle = (ev) => {
        ev.preventDefault();
        allowValidate.current = true;
        let valid = true;
        Object.keys(values).forEach(item => {
            const validElement = document.getElementById(item);
            valid &= validate(validElement);
        })
        if(!valid) return;
        submitCallback(values);
    }
    const register = (name) => {
        if(!Object.keys(values).find(item => item === name)) {
            setValues(state => ({
                ...state,
                [name]: ''
            }))
        }

        return {
            onChange: handleChange,
            id: name
        }
    }

    return [handleChange, errors, submitHandle, register];
}