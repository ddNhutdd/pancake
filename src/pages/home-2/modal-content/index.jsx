import PropTypes from 'prop-types';
import RadioButton from 'src/components/radio-button';
import css from './modal-content.module.scss';
import {useState} from 'react';
import Button2, {button2Type} from 'src/components/button-2';

function ModalContent(props) {
	const {closeModal} = props;

	const [filterRadioChecked, setFilterRadioChecked] = useState(false);
	const filterRadioOnChangeHandle = (ev) => {
		setFilterRadioChecked(ev.target.checked);
	};

	return (
		<form className={css.modalContent}>
			<p className={css.modalContent__text}>
				Customize this card by selecting one of the options below.
			</p>
			<div className={`${css.modalContent__input} mb-2`}>
				<label className={css.modalContent__input__lable}>
					ADVANCED FILTER
				</label>
				<div className={css.modalContent__radioContainer}>
					<div className={css.modalContent__radio}>
						<RadioButton
							id={`filters`}
							name={`saveFilter`}
							checked={filterRadioChecked}
							onChange={filterRadioOnChangeHandle}
						>
							Saved Filters
						</RadioButton>
					</div>
				</div>
			</div>
			<div className={css.modalContent__input}>
				<label className={css.modalContent__input__lable}>PRESET</label>
				<div className={css.modalContent__radioContainer}>
					<div className={css.modalContent__radio}>
						<RadioButton
							id={`blocks`}
							name={`saveFilter`}
							checked={filterRadioChecked}
							onChange={filterRadioOnChangeHandle}
						>
							Lasted Blocks
						</RadioButton>
					</div>
					<div className={css.modalContent__radio}>
						<RadioButton
							id={`transactions`}
							name={`saveFilter`}
							checked={filterRadioChecked}
							onChange={filterRadioOnChangeHandle}
						>
							Lated Transactions
						</RadioButton>
					</div>
					<div className={css.modalContent__radio}>
						<RadioButton
							id={`contracts`}
							name={`saveFilter`}
							checked={filterRadioChecked}
							onChange={filterRadioOnChangeHandle}
						>
							Hot Contracts
						</RadioButton>
					</div>
					<div className={css.modalContent__radio}>
						<RadioButton
							id={`gluzzlers`}
							name={`saveFilter`}
							checked={filterRadioChecked}
							onChange={filterRadioOnChangeHandle}
						>
							Top Gluzzlers
						</RadioButton>
					</div>
				</div>
			</div>
			<div className={css.modalContent__footer}>
				<Button2
					classname={`py-2`}
					type={button2Type.secondary}
					onClick={closeModal}
				>
					Close
				</Button2>
				<Button2
					classname={`py-2`}
					type={button2Type.primary}
				>
					Save changes
				</Button2>
			</div>
		</form>
	);
}

ModalContent.propTypes = {
	closeModal: PropTypes.func,
};

export default ModalContent;
