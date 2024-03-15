import Popover, { placementType } from "src/components/popover";
import css from "./header-user-2.module.scss";
import { FaGasPump } from "react-icons/fa6";
import InputSearch from "src/components/input-search";
import Button2, { button2Type } from "src/components/button-2";
import { FaRegSun } from "react-icons/fa";
import bnb from "imgs/scan-1.svg"

function HeaderUser2() {
    return (
        <div className={css.headerUser2}>
            <div className={css.container}>
                <div className={`${css.headerUser2__left} d-sm-0`}>
                    <span>BNB Price:</span>
                    <span>$566.11</span>
                    <span>
                        <Popover
                            className={css.headerUser2__popoverText}
                            content={`changes in the last 24 hours`}
                            placement={placementType.right}>
                            (-7.16%)
                        </Popover>
                    </span>
                    <span><FaGasPump /></span>
                    <span>Gas:</span>
                    <span>3 GWei</span>
                </div>
                <div className={css.headerUser2__right}>
                    <div className={css.input}>
                        <InputSearch placeholder={`Search by Address / Txn Hash / Block / Token / Domain Name`} />
                    </div>
                    <Button2
                        classname={`${css.headerUser2__sunButton} d-lg-0`}
                        type={button2Type.outline}>
                        <FaRegSun />
                    </Button2>
                    <Button2
                        classname={`${css.headerUser2__coinButton} d-lg-0`}
                        type={button2Type.outline}>
                        <img src={bnb} alt="bnb" />
                    </Button2>
                </div>
            </div>
        </div>
    )
}

export default HeaderUser2