import {useContext} from 'react';
import {AlertContext} from 'src/context/alert-container';

const useAlert = () => {
	const context = useContext(AlertContext);

	if (!context) throw new Error('useAlert must be used within AlertProvider');

	return context;
};

export default useAlert;
