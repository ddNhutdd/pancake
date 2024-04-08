import css from './alert.module.scss';
import PropTypes from 'prop-types';
import {IoClose} from 'react-icons/io5';
import {FaCheckCircle} from 'react-icons/fa';
import {FaInfoCircle} from 'react-icons/fa';

function Alert(props) {
	const {children, dismiss, className} = props;

	const renderIcon = (classname) => {
		switch (classname) {
			case 'alertSuccess':
				return <FaCheckCircle />;
			case 'alertInfo':
				return <FaInfoCircle />;
			case 'alertWarning':
				return <FaInfoCircle />;
			case 'alertError':
				return <FaInfoCircle />;
			default:
				break;
		}
	};

	return (
		<div className={css.alert + ` ` + css[className]}>
			<span>{renderIcon(className)}</span>
			<span>{children}</span>
			<button
				className={css.alert__button}
				onClick={dismiss}
			>
				<IoClose />
			</button>
		</div>
	);
}

Alert.propTypes = {
	children: PropTypes.node,
	dismiss: PropTypes.func,
	className: PropTypes.string,
};

export default Alert;
