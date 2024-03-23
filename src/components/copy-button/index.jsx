import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Popover, { popoverPlacementType } from '../popover';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import css from './copy-button.module.scss';

function CopyButton(props) {
    const { content } = props;

    const copyElement = useRef(null);
    const tickElement = useRef(null);
    const idTimeout = useRef();

    const onCopyCLickHandle = () => {
        clearTimeout(idTimeout.current);
        if (!copyElement || !tickElement) {
            return;
        }

        !copyElement.current.classList.contains('d-0') && copyElement.current.classList.add('d-0');
        tickElement.current.classList.remove('d-0');

        idTimeout.current = setTimeout(() => {
            copyElement.current.classList.remove('d-0');
            !tickElement.current.classList.contains('d-0') && tickElement.current.classList.add('d-0');

            clearTimeout(idTimeout);
        }, 3000);
    }

    return (
        <CopyToClipboard
            text={content}
            onCopy={onCopyCLickHandle}>
            <span className='inline-flex items-center ml-2'>
                <span
                    ref={copyElement} >
                    <Popover
                        className={`${css.customPopover} flex items-center`}
                        placement={popoverPlacementType.top}
                        content={`Copy`}>
                        <FaRegCopy />
                    </Popover>
                </span>
                <span ref={tickElement} className='d-0'>
                    <Popover
                        className={`${css.customPopover} flex items-center`}
                        placement={popoverPlacementType.top}
                        content={`Success`}>
                        <FaCheck />
                    </Popover>
                </span>
            </span>
        </CopyToClipboard >
    )
}

CopyButton.propTypes = {
    content: PropTypes.string
}

export default CopyButton