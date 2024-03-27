import Popover, { popoverPlacementType } from "src/components/popover";
import css from "./header-user-2.module.scss";
import { FaGasPump } from "react-icons/fa6";
import InputSearch from "src/components/input-search";
import Button2 from "src/components/button-2";
import { FaRegSun } from "react-icons/fa";
import bnb from "imgs/scan-1.svg"
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from "src/components/dropdown-2";
import { LuMoonStar } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { BsBrightnessHigh } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "src/constants";

function HeaderUser2() {
    const listSetting = [
        {
            id: 1,
            content: <div className="flex items-center gap-1">
                <BsBrightnessHigh />
                Light
            </div>
        },
        {
            id: 2,
            content: <div className="flex items-center gap-1">
                <LuMoonStar />
                Dim
            </div>
        },
        {
            id: 3,
            content: <div className="flex items-center gap-1">
                <LuMoonStar />
                Dark
            </div>,
            lineBot: true
        },
        {
            id: 4,
            content: <div className="flex items-center gap-1" >
                <IoSettingsOutline />
                Site Settings
                <GoArrowRight />
            </div>
        }
    ]
    const listBnb = [
        {
            id: 1,
            content: 'Bsc Mainnet'
        },
        {
            id: 2,
            content: `opBNB Mainnet`,
            lineBot: true
        },
        {
            id: 3,
            content: `Bsc Testnet`
        },
        {
            id: 4,
            content: `opBNB Testnet`
        }
    ]

    const [showSettingDropdown, setShowSettingDropdown] = useState(false);
    const [showBnbDropdown, setShowBnbDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleSettingDropdown = (ev) => {
        ev.stopPropagation();
        setShowSettingDropdown(s => !s)
    };
    const toggleBnbDropdown = (ev) => {
        ev.stopPropagation();
        setShowBnbDropdown(s => !s)
    }
    const settingDropdownChangeHandle = (item) => {
        setShowSettingDropdown(false)
        if (item === listSetting[3]) {
            redirectPage()
        }
    }
    const redirectPage = () => navigate(url.settings)
    const closeAllDropdown = () => {
        setShowSettingDropdown(false);
        setShowBnbDropdown(false);
    }

    useEffect(() => {
        document.addEventListener('click', closeAllDropdown)

        return () => document.removeEventListener('click', closeAllDropdown)
    }, [])
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
                            placement={popoverPlacementType.right}>
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
                    <div className="flex gap-2">
                        <Dropdown2
                            align={dropdown2Align.right}
                            trigger={dropdown2TriggerType.runtime}
                            header={<Button2
                                onClick={toggleSettingDropdown}
                                classname={`${css.headerUser2__dropdownHeader} d-lg-0`}
                            >
                                <FaRegSun />
                            </Button2>}
                            list={listSetting}
                            onChange={settingDropdownChangeHandle}
                            show={showSettingDropdown}
                        />
                        <Dropdown2
                            align={dropdown2Align.right}
                            trigger={dropdown2TriggerType.runtime}
                            header={<Button2
                                onClick={toggleBnbDropdown}
                                classname={`${css.headerUser2__dropdownHeader} d-lg-0`}
                            >
                                <img src={bnb} alt="bnb" />
                            </Button2>}
                            list={listBnb}
                            show={showBnbDropdown}
                        ></Dropdown2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderUser2