import css from './pill.module.scss';
import PropTypes from 'prop-types';

export const pillTypes = {
    blue: 'blue',
    white: 'white'
}

function Pill(props) {

    const { children, type } = props;

    const renderType = () => {
        switch (type) {
            case pillTypes.blue:
                return css.blue;
            case pillTypes.white:
                return css.white;
            default:
                return css.blue;
        }
    }

    return (
        <div className={`${css.pill} ${renderType()}`}>{children}</div>
    )
}

Pill.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(Object.values(pillTypes)),
};

Pill.defaultProps = {
    type: pillTypes.blue
};

export default Pill