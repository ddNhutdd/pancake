import css from './header-component.module.scss';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'src/context/dark-theme';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';


function HeaderComponent(props) {
	const { list } = props;
	const location = useLocation();
	const currentURL = location.pathname;

	const { isDarkMode } = useTheme();

	const contentElement = useRef(null);
	const containerElement = useRef(null);

	const [showScrollButtons, setShowScrollButtons] = useState(false);

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};
	const setStyleContainer = () => {
		return showScrollButtons ? { justifyContent: 'flex-start' } : {};
	};
	const renderShowButtonScroll = () => {
		return showScrollButtons ? 'd-b' : 'd-0';
	};
	const prevClickHandle = () => {
		containerElement.current.scrollBy({
			left: -40,
			behavior: 'smooth',
		});
	};
	const nextClickHandle = () => {
		containerElement.current.scrollBy({
			left: 40,
			behavior: 'smooth',
		});
	};
	const renderMenuItem = () => {
		if (!list || list.length <= 0) {
			return;
		}
		return list.map((item, index) => (<div key={index}>
			<NavLink className={`${css.headerComponent__item} ${setActive(item.url)}`}>{item.content}</NavLink>
		</div>))
	}
	const setActive = (value) => {
		return value === currentURL ? css.active : ''
	}

	useEffect(() => {
		// show button next or prev
		const observer = new ResizeObserver(() => {
			const contentWidth = contentElement.current.offsetWidth;
			const containerWidth = containerElement.current.offsetWidth;
			setShowScrollButtons(contentWidth > containerWidth);
		});
		observer.observe(containerElement.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className={`${css.headerComponent} ${renderDarkTheme()}`}>
			<div
				style={setStyleContainer()}
				ref={containerElement}
				className={css.headerComponent__content}
			>
				<button
					className={`${renderShowButtonScroll()} ${css.headerComponent__buttonScroll
						} ${css.prev}`}
					onClick={prevClickHandle}
				>
					<FaChevronLeft />
				</button>
				<button
					className={`${renderShowButtonScroll()} ${css.headerComponent__buttonScroll
						} ${css.next}`}
					onClick={nextClickHandle}
				>
					<FaChevronRight />
				</button>
				<div
					ref={contentElement}
					className={css.headerComponent__inner}
				>
					{renderMenuItem()}
				</div>
			</div>
		</div>
	);
}

HeaderComponent.defaultProps = {
	list: [],
}
HeaderComponent.propTypes = {
	list: PropTypes.array
}

export default HeaderComponent;
