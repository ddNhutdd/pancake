import {useState} from 'react';
import {useRef} from 'react';

export const useForm = (submitCallback, initialValues) => {
	const [values, setValues] = useState(initialValues || {});
	const [errors, setErrors] = useState({});

	const runtimeErrors = useRef({});
	const allowValidate = useRef(false);

	const handleChange = (ev) => {
		ev.persist();
		if (ev.target.type === 'text' || ev.target.type === 'password') {
			handleChangeForTextOrPassword(ev);
		} else if (ev.target.type === 'checkbox') {
			handleChangeForCheckBox(ev);
		}
	};
	const handleChangeForTextOrPassword = (ev) => {
		const target = ev.target;
		setValues((state) => ({
			...state,
			[target.id]: target.value,
		}));
		if (allowValidate.current) {
			validate(target);
		}
	};
	const handleChangeForCheckBox = (ev) => {
		const target = ev.target;
		setValues((state) => ({
			...state,
			[target.id]: target.checked,
		}));
		if (allowValidate.current) {
			validate(target);
		}
	};
	const validate = (target) => {
		if (target.type === 'password' || target.type === 'text') {
			return validateForTextOrPassword(target);
		} else if (target.type === 'checkbox') {
			return validateForCheckbox(target);
		}
	};
	const addError = (err, id) => {
		const newState = {
			...runtimeErrors.current,
			[id]: err,
		};

		setErrors(newState);
		runtimeErrors.current = newState;
	};
	const removeError = (id) => {
		const newError = {...runtimeErrors.current};
		delete newError[id];
		setErrors(newError);
		runtimeErrors.current = newError;
	};
	const validateForTextOrPassword = (target) => {
		let valid = false;

		const maxArray = JSON.parse(target.dataset?.max || '[]');
		const minArray = JSON.parse(target.dataset?.min || '[]');
		const requireArray = JSON.parse(target.dataset?.require || '[]');
		const matchArray = JSON.parse(target.dataset?.asame || '[]');
		const regularArray = JSON.parse(target.dataset?.regular || '[]');
		const regularExpress = new RegExp(regularArray[0]);

		if (target.dataset.require && target.value.length <= 0) {
			addError(requireArray.at(1), target.id);
		} else if (
			target.dataset.min &&
			target.value.length < +minArray.at(0)
		) {
			addError(minArray.at(1), target.id);
		} else if (
			target.dataset.max &&
			target.value.length > +maxArray.at(0)
		) {
			addError(maxArray.at(1), target.id);
		} else if (
			target.dataset.asame &&
			target.value !== document.getElementById(matchArray?.at(0))?.value
		) {
			addError(matchArray.at(1), target.id);
		} else if (
			target.dataset.regular &&
			!regularExpress.test(target.value)
		) {
			addError(regularArray.at(1), target.id);
		} else {
			removeError(target.id);
			valid = true;
		}

		return valid;
	};
	const validateForCheckbox = (target) => {
		let valid = false;

		const requireArray = JSON.parse(target.dataset?.require || '[]');
		if (target.dataset.require && !target.checked) {
			addError(requireArray.at(1), target.id);
		} else {
			removeError(target.id);
			valid = true;
		}

		return valid;
	};
	const submitHandle = (ev) => {
		ev.preventDefault();
		allowValidate.current = true;
		let valid = true;
		Object.keys(values).forEach((item) => {
			const validElement = document.getElementById(item);
			valid &= validate(validElement);
		});
		if (!valid) return;
		submitCallback(values);
	};
	const register = (name) => {
		if (!Object.keys(values).find((item) => item === name)) {
			setValues((state) => ({
				...state,
				[name]: '',
			}));
		}
		return {
			onChange: handleChange,
			id: name,
		};
	};

	return [handleChange, errors, submitHandle, register];
};
