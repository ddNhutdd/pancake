import {useEffect, useState} from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import css from './date-input.module.scss';
import {FaRegCalendarAlt} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {formatDay} from 'src/utils';

export const DateInput = (props) => {
	const {format} = props;
	const [selectedDay, setSelectedDay] = useState();
	const [inputDate, setInputDate] = useState('');
	const [showCalendar, setShowCalendar] = useState(false);

	const renderClassShowCelendar = () => (showCalendar ? '' : 'd-0');
	const showCalendarHandle = (ev) => {
		ev.stopPropagation();
		setShowCalendar(true);
	};
	const calendarChangeHandle = (value) => {
		setInputDate(formatDay(format, value));
		setSelectedDay(value);
		setTimeout(() => {
			closeCalendar();
		}, 0);
	};

	const closeCalendar = () => setShowCalendar(false);

	useEffect(() => {
		document.addEventListener('click', closeCalendar);

		return () => {
			document.removeEventListener('click', closeCalendar);
		};
	}, []);

	return (
		<div
			onClick={showCalendarHandle}
			className={css.dateInput}
		>
			<div className={css.dateInput__left}>
				<FaRegCalendarAlt />
			</div>
			<input
				value={inputDate}
				onChange={() => {}}
				type='text'
			/>
			<div
				className={`${renderClassShowCelendar()} 
            ${css.dateInput__celendar}`}
			>
				<DayPicker
					mode='single'
					selected={selectedDay}
					onSelect={calendarChangeHandle}
				/>
			</div>
		</div>
	);
};

DateInput.propTypes = {
	format: PropTypes.string,
};
