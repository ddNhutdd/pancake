import Input2 from 'src/components/input-2';
import ccs from './modal-wallet-content.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'src/components/button';
import { IoIosWarning } from "react-icons/io";

function ModalWalletContent(props) {
    const { address, balance, disConnectHandle } = props;

    return (
        <div className={ccs.modalWalletContent}>
            <div className={ccs.modalWalletContent__tabs}></div>
            <div className={ccs.modalWalletContent__address}>
                <label>Your Address</label>
                <Input2 value={'0x91DF88c20E6618B4b51Fea275564A03D7d74DBf0'} icon={''} style={'light'} />
            </div>
            <div className={ccs.modalWalletContent__warning}>
                <div className={ccs.modalWalletContent__left}>
                    <IoIosWarning />
                </div>
                <div className={ccs.modalWalletContent__right}>
                    <div>ETH Balance Low</div>
                    <NavLink>You need ETH for transaction fees.</NavLink>
                </div>
            </div>
            <div className={ccs.modalWalletContent__balace}>
                <div>ETH Balance</div>
                <div>{balance}</div>
            </div>
            <div className={ccs.modalWalletContent__action}>
                <Button onClick={disConnectHandle} className='w-50'>Disconnect</Button>
            </div>
        </div>
    )
}

ModalWalletContent.propTypes = {
    balance: PropTypes.number,
    disConnectHandle: PropTypes.func,
    address: PropTypes.string
}

export default ModalWalletContent