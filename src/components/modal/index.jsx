import css from './modal.module.scss';
import {IoClose} from 'react-icons/io5';
import PropTypes from 'prop-types';
import {useRef} from 'react';

function Modal(props) {
	const {
		show,
		setShow,
		title,
		content,
		showHeader,
		customCssContainer,
		customCssContent,
		customCssModal,
	} = props;

	const showModal = () => {
		return show ? css.show : '';
	};
	const closeClick = (ev) => {
		if (
			ev.currentTarget === overlayElement.current ||
			ev.currentTarget === closeElement.current
		) {
			overlayElement.current.classList.add(css.close);
			const idTimeout = setTimeout(() => {
				setShow(false);
				overlayElement.current.classList.remove(css.close);
				clearTimeout(idTimeout);
			}, 400);
		}
	};
	const modalClickHandle = (ev) => {
		ev.stopPropagation();
	};
	const renderShowHeader = () => {
		return showHeader ? '' : 'd-0';
	};

	const overlayElement = useRef(null);
	const closeElement = useRef(null);
	const modalElement = useRef(null);

	return (
		<div
			ref={overlayElement}
			onClick={closeClick}
			className={`${css.modal__overlay} ${showModal()} ${customCssContainer}`}
		>
			<div
				onClick={modalClickHandle}
				ref={modalElement}
				className={`${css.modal__modal} ${customCssModal}`}
			>
				<div className={`${css.modal__header} ${renderShowHeader()}`}>
					<div className={css.modal__title}>{title}</div>
					<div
						ref={closeElement}
						onClick={closeClick}
						className={css.modal__close}
					>
						<IoClose />
					</div>
				</div>
				<div className={`${css.modal__content} ${customCssContent}`}>
					{content}
				</div>
			</div>
		</div>
	);
}

Modal.defaultProps = {
	show: false,
	title: '',
	content: '',
	showHeader: true,
	customCssContainer: {},
	customCssContent: {},
	customCssModal: {},
};
Modal.propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func,
	title: PropTypes.node,
	content: PropTypes.node,
	showHeader: PropTypes.bool,
	customCssContainer: PropTypes.object,
	customCssContent: PropTypes.object,
	customCssModal: PropTypes.object,
};
export default Modal;
