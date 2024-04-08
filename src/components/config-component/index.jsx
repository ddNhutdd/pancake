import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getPaddingTop} from '../../redux/slices/paddingTopPage';
import PropTypes from 'prop-types';

function ConfigComponent(props) {
	const {children} = props;

	const location = useLocation();
	const paddingTop = useSelector(getPaddingTop);

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [location]);

	return <div style={{paddingTop}}>{children}</div>;
}

ConfigComponent.propTypes = {
	children: PropTypes.node,
};

export default ConfigComponent;
