import css from './header-component-2.module.scss';
import PropTypes from 'prop-types';

function HeaderComponent2(props) {
    const { mainContent } = props;
    return (
        <div className={css.headerComponent2}>
            <div className={css.headerComponent2__mainContent}>
                {mainContent}
            </div>
        </div>
    )
}

HeaderComponent2.propTypes = {
    mainContent: PropTypes.node
};

export default HeaderComponent2