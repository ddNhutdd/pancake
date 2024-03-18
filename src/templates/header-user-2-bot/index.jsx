import css from './header-user-2-bot.module.scss';
import logo from 'imgs/bsc-logo-light.svg';
import { LuUserCircle2 } from "react-icons/lu";
import Button2, { button2Type } from 'src/components/button-2';
import { FaBars } from "react-icons/fa6";
import { DropdownHeader3 } from 'src/components/dropdown-header-3';
import { MoreContent } from './more-content';
import { useRef, useState } from 'react';


function HeaderUser2Bot() {

    const list = [
        {
            id: 1,
            content: 'transactions',
            borderBottom: false,
        },
        {
            id: 2,
            content: 'transactions',
            borderBottom: false,
        },
        {
            id: 3,
            content: 'Validator',
            borderBottom: true,
        },
        {
            id: 4,
            content: 'Tokens',
            borderBottom: false,
        },
        {
            id: 5,
            content: 'NFTs',
            borderBottom: true,
        },
        {
            id: 6,
            content: 'Resources',
            borderBottom: false,
        },
        {
            id: 7,
            content: 'Developer',
            borderBottom: false,
        },
    ];

    const menus = useRef({
        blockChain: "BlockChain",
        validators: "Validators",
        tokens: "Tokens",
        nFTs: "NFTs",
        resources: "Resources",
        developers: "Developers",
        more: "More"
    })

    const [showMenuList, setShowMenuList] = useState(false);
    const [showMenus, setShowMenus] = useState({
        [menus.current.blockChain]: false,
        [menus.current.validators]: false,
        [menus.current.tokens]: false,
        [menus.current.nFTs]: false,
        [menus.current.resources]: false,
        [menus.current.developers]: false,
        [menus.current.more]: false
    });

    const barClickHandle = () => {
        setShowMenuList(s => !s);
    }
    const renderShowMenu = () => {
        return showMenuList ? css.show : '';
    }
    const menuCLickHandle = (menu) => {
        const newState = {
            [menus.current.blockChain]: false,
            [menus.current.validators]: false,
            [menus.current.tokens]: false,
            [menus.current.nFTs]: false,
            [menus.current.resources]: false,
            [menus.current.developers]: false,
            [menus.current.more]: false
        }

        setShowMenus(state => ({
            ...newState,
            [menu]: !state[menu]
        }))
    }

    return (
        <div className={css.headerUser2Bot}>
            <div className={css.container}>
                <div className={css.headerUser2Bot__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`${css.headerUser2Bot__menu} ${renderShowMenu()}`}>
                    <li>
                        <DropdownHeader3
                            notShowMenu={true}
                            header={`Home`}
                            list={[]}
                            cssHeader={css.headerUser2Bot__menu__custom} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.blockChain)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.blockChain]}
                            header={`BlockChain`}
                            list={list} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.validators)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.validators]}
                            header={`Validators`}
                            list={list} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.tokens)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.tokens]}
                            header={`Tokens`}
                            list={list} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.nFTs)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.nFTs]}
                            header={`NFTs`}
                            list={list} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.resources)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.resources]}
                            header={`Resources`}
                            list={list} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.developers)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.developers]}
                            header={`Developers`}
                            list={list} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.more)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.more]}
                            header={`More`}
                            menuWidthFull={true}
                            content={<MoreContent />} />
                    </li>
                </ul>
                <div className={css.headerUser2Bot__sign}>
                    <DropdownHeader3 header={<>
                        <LuUserCircle2 />
                        Sign In
                    </>}
                        notShowMenu={true}
                        cssHeader={css.headerUser2Bot__sign__custom}
                    />

                </div>
                <div className={css.headerUser2Bot__bar}>
                    <Button2 classname={css.headerUser2Bot__bar__custom}
                        onClick={barClickHandle}
                        type={button2Type.outline}>
                        <FaBars />
                    </Button2>
                </div>
            </div>
        </div>
    )
}

export default HeaderUser2Bot