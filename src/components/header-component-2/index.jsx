import { useEffect, useState } from 'react';
import Button2, { button2Type } from '../button-2';
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from '../dropdown-2';
import css from './header-component-2.module.scss';
import PropTypes from 'prop-types';
import { FaAngleDown } from "react-icons/fa6";
import metamark from 'imgs/metamask.svg'
import { hasKey } from 'src/utils';
import Pill, { pillTypes } from '../pill';
import useMediaQuery from 'src/hooks/useMedia';

function HeaderComponent2(props) {
    const { mainContent } = props;
    const listDropdown = {
        buy: 'buy',
        play: 'play',
        gaming: 'gaming'
    }
    const showMenu = (dropdownName, ev) => {
        ev.stopPropagation();
        const newState = { ...showDropdown }
        for (const [key,] of Object.entries(newState)) {
            if (key === dropdownName) continue;
            newState[key] = false;
        }

        hasKey(newState, listDropdown.buy) ?
            newState[dropdownName] = !newState[dropdownName]
            :
            newState[dropdownName] = true;

        setShowDropdown(newState);
    }
    const buyList = [
        {
            id: 1,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.

                </div>
            </div>
        }
    ]
    const playList = [
        {
            id: 1,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.
                </div>
                <div className={css.headerComponent2__line}></div>
            </div>
        },
        {
            id: 2,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.

                </div>
                <div className={css.headerComponent2__line}></div>
            </div>
        },
        {
            id: 3,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.

                </div>
            </div>
        }
    ]
    const gamingList = [
        {
            id: 1,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.

                </div>
                <div className={css.headerComponent2__line}></div>
            </div>
        },
        {
            id: 2,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.

                </div>
                <div className={css.headerComponent2__line}></div>
            </div>
        },
        {
            id: 3,
            content: <div
                className={css.headerComponent2__dropdownItem}>
                <div className={css.headerComponent2__title}>
                    <img src={metamark} alt="metamark" />
                    <div>Meta Mask</div>
                </div>
                <div className={css.headerComponent2__main}>
                    Get Started With Crypto & Manage Your Web3 Everything.
                    <Pill
                        className={css.headerComponent2__main__pill}
                        type={pillTypes.blue}>
                        Try Now !
                    </Pill>
                </div>
                <div>
                    Ready to onboard to crypto on BNB Smart Chain? With MetaMask Portfolio, you&apos;re in control.

                </div>
            </div>
        }
    ]

    const [showDropdown, setShowDropdown] = useState({})
    const [alignDropdown, setAlignDropdown] = useState(dropdown2Align.right);
    const result = useMediaQuery()


    const dropdownBuyChangeHandle = (item) => { }
    const closeAllDropdown = () => setShowDropdown({})

    useEffect(() => {
        document.addEventListener('click', closeAllDropdown);
        return () => document.removeEventListener('click', closeAllDropdown);
    }, [])

    useEffect(() => {
        console.log('1', result, typeof result);
        if (result === 'width_576') {
            setAlignDropdown(dropdown2Align.left)

        } else {
            setAlignDropdown(dropdown2Align.right)
        }
    }, [result])

    return (
        <div className={css.headerComponent2}>
            <div className={css.headerComponent2__mainContent}>
                {mainContent}
                {
                    <div

                        className={css.headerComponent2__listDropdown}>
                        <div onClick={showMenu.bind(null, listDropdown.buy)}>
                            <Dropdown2
                                allowItemHover={false}
                                align={alignDropdown}
                                trigger={dropdown2TriggerType.runtime}
                                list={buyList}
                                header={<Button2
                                    classname={css.headerComponent2__dropdownHeader}
                                    type={button2Type.primarySmall}>
                                    Buy
                                    <FaAngleDown />
                                </Button2>}
                                show={showDropdown[listDropdown.buy]}
                                onChange={dropdownBuyChangeHandle}
                            />
                        </div>

                        <div onClick={showMenu.bind(null, listDropdown.play)}>
                            <Dropdown2
                                allowItemHover={false}
                                align={alignDropdown}
                                trigger={dropdown2TriggerType.runtime}
                                list={playList}
                                header={<Button2
                                    classname={css.headerComponent2__dropdownHeader}
                                    type={button2Type.primarySmall}>
                                    Play
                                    <FaAngleDown />
                                </Button2>}
                                show={showDropdown[listDropdown.play]}
                                onChange={dropdownBuyChangeHandle}
                            />
                        </div>

                        <div onClick={showMenu.bind(null, listDropdown.gaming)}>
                            <Dropdown2
                                allowItemHover={false}
                                align={dropdown2Align.right}
                                trigger={dropdown2TriggerType.runtime}
                                list={gamingList}
                                header={<Button2
                                    classname={css.headerComponent2__dropdownHeader}
                                    type={button2Type.primarySmall}>
                                    Gaming
                                    <FaAngleDown />
                                </Button2>}
                                show={showDropdown[listDropdown.gaming]}
                                onChange={dropdownBuyChangeHandle}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

HeaderComponent2.propTypes = {
    mainContent: PropTypes.node
};

export default HeaderComponent2