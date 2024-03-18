import css from './card.module.scss';
import PropTypes from 'prop-types';

function Card(props) {
    const { children } = props;
    return (
        <div className={css.card}>{children}</div>
    )
}

Card.propTypes = {
    children: PropTypes.node
}

export default Card