import Input2 from 'src/components/input-2';
import css from './modal-wallet-content.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button, { buttonClassesType } from 'src/components/button';
import { IoIosWarning } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { useTheme } from 'src/context/dark-theme';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRef } from 'react';
import useAlert from 'hooks/alert'
import { commonString } from 'src/constants';

function ModalWalletContent(props) {
    const { address, balance, disConnectHandle } = props;

    const { isDarkMode } = useTheme();
    const alert = useAlert();

    const inputAddressElement = useRef(null);

    const renderDarkTheme = () => {
        return isDarkMode ? css.dark : '';
    }
    const copyClickHandle = () => {
        alert.success(commonString.success);
    }

    return (
        <div className={`${css.modalWalletContent} ${renderDarkTheme()}`}>
            <div className={css.modalWalletContent__tabs}></div>
            <div className={css.modalWalletContent__address}>
                <label>Your Address</label>
                <Input2
                    ref={inputAddressElement}
                    value={address}
                    icon={<CopyToClipboard
                        onCopy={copyClickHandle}
                        text={inputAddressElement?.current?.value}>
                        <FaRegCopy />
                    </CopyToClipboard>
                    }
                />
            </div>
            <div className={css.modalWalletContent__warning}>
                <div className={css.modalWalletContent__left}>
                    <IoIosWarning />
                </div>
                <div className={css.modalWalletContent__right}>
                    <div>ETH Balance Low</div>
                    <NavLink>You need ETH for transaction fees.</NavLink>
                </div>
            </div>
            <div className={css.modalWalletContent__balace}>
                <div>ETH Balance</div>
                <div>{balance}</div>
            </div>
            <div className={css.modalWalletContent__action}>
                <Button type={buttonClassesType.outline} onClick={disConnectHandle} className='w-100'>Disconnect</Button>
            </div>
        </div >
    )
}

ModalWalletContent.propTypes = {
    balance: PropTypes.number,
    disConnectHandle: PropTypes.func,
    address: PropTypes.string
}

export default ModalWalletContent