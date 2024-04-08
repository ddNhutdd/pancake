import Card from '../card';
import PropTypes from 'prop-types';
import css from './modal-2.module.scss';
import { useRef } from 'react';
import { IoClose } from "react-icons/io5";

function Modal2(props) {
    const {
        showHeader,
        showFooter,
        content,
        footer,
        classNameContent,
        classNameFooter,
        show,
        setShow,
        title
    } = props


    const modalElement = useRef(null);
    const overlayElement = useRef(null);

    const renderClassShowModal = () => {
        return show ? css.show : ''
    }
    const closeModal = () => {
        (modalElement, overlayElement);
        if (!modalElement || !overlayElement) {
            return;
        }

        !modalElement.current.classList.contains(css.modalOut) && modalElement.current.classList.add(css.modalOut);

        !overlayElement.current.classList.contains(css.fadeOut) && overlayElement.current.classList.add(css.fadeOut);

        const idTimeout = setTimeout(() => {
            setShow(false);
            modalElement.current.classList.remove(css.modalOut);
            overlayElement.current.classList.remove(css.fadeOut);
            clearTimeout(idTimeout);
        }, 399);

    }
    const renderClassShowHeader = () => {
        return showHeader ? '' : 'd-0'
    }
    const renderClassShowFooter = () => {
        return showFooter ? '' : 'd-0';
    }

    return (
        <div className={`${css.modal2} ${renderClassShowModal()}`}>
            <div ref={overlayElement} onClick={closeModal} className={css.overlay}>
                <div ref={modalElement} className={css.modal__container}>
                    <Card>
                        <div className={`${css.modal__header} ${renderClassShowHeader()}`}>
                            {title}
                            <div className={css.modal__header__close}>
                                <IoClose />
                            </div>
                        </div>
                        <div className={`${css.modal__content} ${classNameContent}`}>
                            {content}
                        </div>
                        <div className={`${css.modal__footer} ${renderClassShowFooter()} ${classNameFooter}`}>
                            {footer}
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
    show: PropTypes.bool,
    setShow: PropTypes.func,
    footer: PropTypes.node,
    classNameFooter: PropTypes.object,
    title: PropTypes.string
}

Modal2.defaultProps = {
    showHeader: true,
    showFooter: true,
    classNameContent: {},
    classNameFooter: {},
    title: `Title`
};
export default Modal2