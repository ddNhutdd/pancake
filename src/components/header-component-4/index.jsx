import css from './header-component-4.module.scss';
import PropTypes from 'prop-types';

function HeaderComponent4(props) {
    const { title, content } = props;

    return (
        <div className={css.headerComponent4}>
            <div className={css.headerComponent4__title}>
                {title}
            </div>
            <div className={css.headerComponent4__content}>
                {content}
            </div>
        </div>
    )
}

HeaderComponent4.propTypes = {
    title: PropTypes.node,
    content: PropTypes.node,
};

export default HeaderComponent4