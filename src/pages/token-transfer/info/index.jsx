import css from './info.module.scss';
import { MdArrowOutward } from "react-icons/md";
import bnb from 'imgs/staking-2.png';

function Info() {
    return (
        <div className={css.info}>
            <div className={css.header}>
                Additional Info
            </div>
            <div className={css.info__record}>
                <div className={css.info__title}>
                    Status:
                </div>
                <div>
                    <span className='--text-success'>Success</span>
                    <span className='--text-gray'> (7 Block Confirmations)</span>
                </div>
            </div>
            <div className={css.info__line}></div>
            <div className={css.info__record}>
                <div className={css.info__title}>
                    Transaction Action:
                </div>
                <div>
                    <div>
                        <span className='--text-gray'>Tranfer: </span>
                        <span>1.8756.2365.147 </span>
                        <span className='inline-flex items-center'>
                            <img src={bnb} alt="bnb" />
                        </span>
                        <span className='--text-blue'> UCON</span>
                    </div>
                    <div>
                        <span className='--text-gray'>To </span>
                        <span className='--text-blue'>0x1131464465451317974</span>
                    </div>
                </div>
            </div>
            <div className={css.info__line}></div>
            <div className={css.info__record}>
                <div className={css.info__title}>
                    Transaction Fee:
                </div>
                <div>
                    <span>0.0000000424 BNB</span>
                    <span className='--text-gray'> ($0.03)</span>
                </div>
            </div>
            <div className={css.info__line}></div>
            <div className={css.info__record}>
                <div className={css.info__title}>
                    Gas Info:
                </div>
                <div>
                    <div>52,434 gas used from 78,651 limit </div>
                    <div className='--text-gray'>000000001 BNB (1 Gwei)</div>
                </div>
            </div>
            <div className={css.info__line}></div>
            <div className={css.info__record}>
                <div className={css.info__title}>
                    Nonce:
                </div>
                <div>
                    <span>18</span>
                    <span className='--text-gray'> (in the position 151)</span>
                </div>
            </div>
            <div className={css.info__line}></div>
            <div className={`${css.info__last} ${`--text-gray`}`}>
                <span className='--text-blue'>
                    See more details
                </span>
                <MdArrowOutward />
            </div>
        </div>
    )
}

export default Info