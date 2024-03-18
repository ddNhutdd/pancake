import Card from '../card';
import PropTypes from 'prop-types';
import css from './modal-2.module.scss';

function Modal2(props) {
    const {
        showHeader,
        showFooter,
        content,
        classNameContent,
        show,
        setShow
    } = props
    console.log(show);

    const renderClassShowModal = () => {
        return show ? css.show : ''
    }

    const closeModal = () => {
        setShow(false);
    }

    return (
        <div className={`${css.modal2} ${renderClassShowModal()}`}>
            <div onClick={closeModal} className={css.overlay}>
                <div className={css.modal__container}>
                    <Card>
                        <div className={css.modal__header}>
                            header
                        </div>
                        <div className={`${css.modal__content} ${classNameContent}`}>
                            {content}
                        </div>
                        <div className={css.modal__footer}>
                            footer
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

Modal2.propTypes = {
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    content: PropTypes.node,
    classNameContent: PropTypes.object,
    show: PropTypes.bool
}

Modal2.defaultProps = {
    showHeader: true,
    showFooter: true,
    classNameContent: {}
};
export default Modal2