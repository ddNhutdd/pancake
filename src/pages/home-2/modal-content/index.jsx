//import PropTypes from 'prop-types'
import RadioButton from 'src/components/radio-button';
import css from './modal-content.module.scss';
import {useState} from 'react';

function ModalContent() {
	const [filterRadioChecked, setFilterRadioChecked] = useState(false);
	const filterRadioOnChangeHandle = (ev) => {
		setFilterRadioChecked(ev.target.checked);
	};

	return (
		<div className={css.modalContent}>
			<div className={css.modalContent__text}>
				Customize this card by selecting one of the options below.
			</div>
			<div className={css.modalContent__input}>
				<label>ADVANCED FILTER</label>
				<div className={css.modalContent__radioContainer}>
					<div className={css.modalContent__radio}>
						<RadioButton
							id={`test`}
							name={`saveFilter`}
							checked={filterRadioChecked}
							onChange={filterRadioOnChangeHandle}
						>
							Saved Filters
						</RadioButton>
					</div>
				</div>
			</div>
		</div>
	);
}

ModalContent.propTypes = {};

export default ModalContent;
