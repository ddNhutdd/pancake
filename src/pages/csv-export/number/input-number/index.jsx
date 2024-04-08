import css from './input-number.module.scss';
import {IoCubeOutline} from 'react-icons/io5';

export const InputNumber = () => {
	return (
		<div className={css.inputNumber}>
			<div className={css.inputNumber__left}>
				<IoCubeOutline />
			</div>
			<input type='number' />
		</div>
	);
};
