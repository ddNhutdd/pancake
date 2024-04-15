import { useState } from 'react';
import css from './input.module.scss';
import PropTypes from 'prop-types';

export const type = {
	dec: 'Dec',
	hex: 'Hex',
};

const Input = function (props) {
	const {
		value
	} = props;

	const [selectedType, setSelectedType] = useState(type.dec);
	const renderClassDecActive = () =>
		selectedType === type.dec ? css.active : '';
	const renderClassHexActive = () =>
		selectedType === type.hex ? css.active : '';
	const decClickHandle = () => setSelectedType(type.dec);
	const hexClickHandle = () => setSelectedType(type.hex);

	return (
		<div className={css.input}>
			<div className={css.content}>
				{value}
			</div>
			<div className={css.input__button}>
				<div
					onClick={decClickHandle}
					className={`${css.input__button__item} ${renderClassDecActive()}`}
				>
					{type.dec}
				</div>
				<div
					onClick={hexClickHandle}
					className={`${css.input__button__item} ${renderClassHexActive()}`}
				>
					{type.hex}
				</div>
			</div>
		</div>
	);
};

Input.propTypes = {
	value: PropTypes.node
}

export default Input;