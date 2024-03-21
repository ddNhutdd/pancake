import css from './card.module.scss';
import PropTypes from 'prop-types';

function Card(props) {
    const { children, className } = props;
    return (
        <div className={`${css.card} ${className}`}>{children}</div>
    )
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}

export default Card