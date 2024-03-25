import css from "./more-content.module.scss";
import { AiOutlineSync } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiGasPump } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import { FiServer } from "react-icons/fi";
import { IoTrailSignOutline } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import Pill, { pillTypes } from "src/components/pill";
import { LiaFileSignatureSolid } from "react-icons/lia";
import { TbFilterCog } from "react-icons/tb";

export const MoreContent = () => {
    return (
        <div className={css.moreContent}>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Tools & Services
                </div>
                <div className={`${css.moreContent__record} ${css.text}`}>
                    Discover more of BscScan&apos;s tools and services in one place.
                </div>
            </div>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Tools
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <AiOutlineSync />
                    Unit Converter
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <BsDownload />
                    CSV Export
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <BiMoneyWithdraw />
                    Account Balance Checker
                </div>
            </div>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Explore
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <PiGasPump />
                    Gas Tracker
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <LuArrowRightLeft />
                    Dex Tracker
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <FiServer />
                    Node Tracer
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <AiOutlineSync />
                    Label Cloud
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <IoTrailSignOutline />
                    Sign Post
                </div>
            </div>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Explore
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <GoShieldLock />
                    Token Approlval
                    <Pill type={pillTypes.white}>
                        Beta
                    </Pill>
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <LiaFileSignatureSolid />
                    Verify Signature
                </div>
                <div data-header={`header`} className={css.moreContent__record}>
                    <TbFilterCog />
                    Advanced Filter
                    <Pill type={pillTypes.white}>
                        Beta
                    </Pill>
                </div>
            </div>
        </div>
    )
}
