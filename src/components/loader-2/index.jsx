import css from './loader-2.module.scss';
import PropTypes from 'prop-types';

function Loader2(props) {
	const {style} = props;
	return (
		<div
			style={style}
			className={css.loader2}
		></div>
	);
}

Loader2.propTypes = {
	style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Loader2;
