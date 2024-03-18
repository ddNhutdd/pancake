import css from './footer-user-2.module.scss';
import { BsTwitterX } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import bnbLight from "imgs/chain-bnb-light.svg"
import Button2, { button2Type } from 'src/components/button-2';
import metamask from "imgs/metamask.svg";
import Pill from 'src/components/pill';
import { CiShare1 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function FooterUser2() {
    return (
        <div className={css.footer}>
            <div className={css.container}>
                <div className={css.footer__top}>
                    <div className={css.footer__top__item}>
                        <BsTwitterX />
                        (Twitter)
                    </div>
                    <div className={css.footer__top__item}>
                        <BiArrowToTop />
                        Back To Top
                    </div>
                </div>
                <div className={css.footer__mid}>
                    <div className={css.footer__mid__item}>
                        <div className={css.footer__mid__row}>
                            <img src={bnbLight} alt="bnbLight" />
                            <span className={css.footer__header}>
                                Powered by BNB Beacon Chain
                            </span>
                        </div>
                        <div className={css.footer__mid__row}>
                            BscScan is a Block Explorer and Analytics Platform for BNB Smart Chain.
                        </div>
                        <div className={css.footer__mid__row}>
                            <Button2 type={button2Type.outlineSmall}>
                                <div>
                                    <img src={metamask} alt="metamask" />
                                    Add BSC Network
                                </div>
                            </Button2>
                        </div>
                    </div>
                    <div className={css.footer__mid__item}>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>
                            Company
                            <Pill>Stacking</Pill>
                        </div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>
                            Company
                            <CiShare1 />
                        </div>
                    </div>
                    <div className={css.footer__mid__item}>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>
                            Company
                            <Pill>Stacking</Pill>
                        </div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>
                            Company
                            <CiShare1 />
                        </div>
                    </div>
                    <div className={css.footer__mid__item}>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>
                            Company
                            <Pill>Stacking</Pill>
                        </div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>Company</div>
                        <div className={css.footer__mid__row}>
                            Company
                            <CiShare1 />
                        </div>
                    </div>
                </div>
                <div className={css.footer__bot}>
                    <div className={css.footer__bot__item}>
                        BscScan © 2024 (BSC-D) | ⛏ Built by Team <span className={css['footer__bot--blue']}>Etherscan</span> <span className={css.footer__bot__icon}><CiShare1 /></span>
                    </div>
                    <div className={css.footer__bot__item}>
                        Donations: <span className={css['footer__bot--blue']}>0x71c765...d8976f</span> <span className={`${css.footer__bot__icon} ${css['footer__bot--red']}`}><FaHeart /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterUser2