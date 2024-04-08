import css from './input.module.scss';
import {useTheme} from 'src/context/dark-theme';

function Input() {
	const {isDarkMode} = useTheme();

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.input} ${renderDarkTheme()}`}>
			<div className={`${css.inputContainer} `}>
				<input type='text' />
				<div className={css.inputInfo}>test</div>
			</div>
			<div className={css.inputError}>test</div>
		</div>
	);
}

export default Input;
