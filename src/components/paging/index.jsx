import PropTypes from 'prop-types';
import {useRef, useState} from 'react';
import css from './paging.module.scss';
import {FaArrowLeft} from 'react-icons/fa6';
import {FaArrowRight} from 'react-icons/fa6';

function Paging(props) {
	const {totalItems, pageSize, currentPage, onChange} = props;

	const totalPage = useRef(Math.ceil(totalItems / pageSize));
	const nextElement = useRef(null);
	const prevElement = useRef(null);

	const [currentPageInner, setCurrentPageInner] = useState(currentPage);

	const nextClickHandle = (ev) => {
		const element = ev.currentTarget;
		if (element.classList.contains(css.disable)) return;
		//
		let newPage = currentPageInner + 1;
		if (newPage > totalPage.current) return;
		//
		setCurrentPageInner(newPage);
		onChange(newPage);
	};
	const preClickHandle = (ev) => {
		const element = ev.currentTarget;
		if (element.classList.contains(css.disable)) return;
		//
		let newPage = currentPageInner - 1;
		if (newPage <= 0) return;
		setCurrentPageInner(newPage);
		onChange(newPage);
	};
	const renderClassNext = () => {
		if (!nextElement || !nextElement.current) {
			return;
		}
		if (currentPageInner === totalPage.current) {
			!nextElement.current.classList.contains(css.disable) &&
				nextElement.current.classList.add(css.disable);
		} else {
			nextElement.current.classList.remove(css.disable);
		}
	};
	const renderClassPrev = () => {
		if (!prevElement || !prevElement.current) {
			return;
		}
		if (currentPageInner === 1) {
			!prevElement.current.classList.contains(css.disable) &&
				prevElement.current.classList.add(css.disable);
		} else {
			prevElement.current.classList.remove(css.disable);
		}
	};

	return (
		<div className={css.paging}>
			<span
				className={`${css.disable} ${renderClassPrev()}`}
				ref={prevElement}
				onClick={preClickHandle}
			>
				<FaArrowLeft />
			</span>
			<span>{`Page ${currentPageInner} of ${totalPage.current}`}</span>
			<span
				ref={nextElement}
				onClick={nextClickHandle}
				className={renderClassNext()}
			>
				<FaArrowRight />
			</span>
		</div>
	);
}

Paging.defaultProps = {
	pageSize: 10,
	currentPage: 1,
	totalItems: 0,
	onChange: () => {},
};

Paging.propTypes = {
	totalItems: PropTypes.number,
	pageSize: PropTypes.number,
	currentPage: PropTypes.number,
	onChange: PropTypes.func,
};

export default Paging;
