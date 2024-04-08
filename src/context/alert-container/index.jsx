import {createContext, useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import Alert from './alert';
import css from './alert-container.module.scss';

export const AlertContext = createContext();
export const alertType = {
	success: 'success',
	info: 'info',
	warning: 'warning',
	error: 'error',
	dark: 'dark',
};

const AlertContainer = (props) => {
	const {children} = props;
	const [alerts, setAlerts] = useState([]);

	const removeAlert = (index) => {
		setAlerts((alerts) => alerts.filter((_, i) => i !== index));
	};
	const showAlert = (type, message) => {
		const id = Math.random().toString(36).substring(2, 9);
		setAlerts((prev) => [...prev, {type, message, id}]);
		const timer = setTimeout(() => {
			setAlerts((prev) => prev.filter((alert) => alert.id !== id));
			clearTimeout(timer);
		}, 3000);
	};
	const renderAlert = (alert, index, dismis) => {
		let alertClass = '';
		switch (alert.type) {
			case 'success':
				alertClass = 'alertSuccess';
				break;
			case 'info':
				alertClass = 'alertInfo';
				break;
			case 'warning':
				alertClass = 'alertWarning';
				break;
			case 'error':
				alertClass = 'alertError';
				break;
			case 'dark':
				alertClass = 'alertDark';
				break;
			default:
				alertClass = 'alertSuccess';
				break;
		}
		return (
			<Alert
				className={alertClass}
				dismiss={() => dismis(index)}
			>
				{alert.message}
			</Alert>
		);
	};

	return (
		<AlertContext.Provider
			value={{
				success: (message) => showAlert(alertType.success, message),
				info: (message) => showAlert(alertType.info, message),
				warning: (message) => showAlert(alertType.warning, message),
				error: (message) => showAlert(alertType.error, message),
				dark: (message) => showAlert(alertType.dark, message),
			}}
		>
			{children}
			<div className={css.alertContainer}>
				{alerts.map((alert, index) => {
					return (
						<Fragment key={alert.id}>
							{renderAlert(alert, index, removeAlert)}
						</Fragment>
					);
				})}
			</div>
		</AlertContext.Provider>
	);
};

export default AlertContainer;

AlertContainer.propTypes = {
	children: PropTypes.node,
};
