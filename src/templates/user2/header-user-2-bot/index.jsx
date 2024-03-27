import css from './header-user-2-bot.module.scss';
import logo from 'imgs/bsc-logo-light.svg';
import { LuUserCircle2 } from "react-icons/lu";
import Button2, { button2Type } from 'src/components/button-2';
import { FaBars } from "react-icons/fa6";
import { DropdownHeader3 } from 'src/components/dropdown-header-3';
import { MoreContent } from './more-content';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from 'src/constants';
import { useLocation } from 'react-router-dom';
import Pill, { pillTypes } from 'src/components/pill';

function HeaderUser2Bot() {
    const redirectPage = (page, ev) => {
        // close menu
        closeMenu(ev.currentTarget)

        // redirec page
        navigate(page);
        return;
    }
    const listBlockchain = [
        {
            id: 1,
            content: 'transactions',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.transactions),
            url: url.transactions
        },
        {
            id: 2,
            content: 'Transactions Pending',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.transactionsPending),
            url: url.transactionsPending
        },
        {
            id: 3,
            content: 'Contract Internal Transactions',
            borderBottom: true,
            onClick: redirectPage.bind(null, url.contractInternalTransactions),
            url: url.contractInternalTransactions
        },
        {
            id: 4,
            content: 'View Blocks',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.viewBlock),
            url: url.viewBlock
        },
        {
            id: 5,
            content: 'Forked Blocks',
            borderBottom: true,
            onClick: redirectPage.bind(null, url.forkedBlocks),
            url: url.forkedBlocks
        },
        {
            id: 6,
            content: 'Top Account',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.topAccount),
            url: url.topAccount
        },
        {
            id: 7,
            content: 'Verified Contracts',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.verifiedContracts),
            url: url.verifiedContracts
        },
    ];
    const listValidators = [
        {
            id: 1,
            content: 'Validators Leaderboard',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.validatorsLeaderboard),
            url: url.validatorsLeaderboard
        },
        {
            id: 2,
            content: 'View Validators Set Info',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.setInfo),
            url: url.setInfo
        },
    ]
    const listTokens = [
        {
            id: 1,
            content: 'Top Token',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.topToken),
            url: url.topToken
        },
        {
            id: 2,
            content: 'Token Transfer',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.tokenTransfer),
            url: url.tokenTransfer
        },
    ]
    const listNft = [
        {
            id: 1,
            content: 'Top NFTs',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.nftTop),
            url: url.nftTop
        },
        {
            id: 2,
            content: 'Top Mints',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.topMint),
            url: url.topMint
        },
        {
            id: 3,
            content: 'NFTs trade',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.nftTrades),
            url: url.nftTrades
        },
    ]
    const listResources = [
        {
            id: 1,
            content: 'Chart & stats',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.charts),
            url: url.charts
        },
        {
            id: 2,
            content: 'Top Statics',
            borderBottom: false,
            onClick: redirectPage.bind(null, url.topStatics),
            url: url.topStatics
        },
    ]
    const listDeveloper = [
        {
            id: 1,
            content: 'API plans',
            borderBottom: false,
            url: ``
        },
        {
            id: 2,
            content: 'API Document',
            borderBottom: true,
            url: ``
        },
        {
            id: 3,
            content: <div className='flex gap-1'>
                Code Reader
                <Pill type={pillTypes.white}>Beta</Pill>
            </div>,
            borderBottom: true,
            url: ``
        },
        {
            id: 4,
            content: `Verify Contract`,
            borderBottom: false,
            url: ``
        },
        {
            id: 5,
            content: `Similar Contract Search`,
            borderBottom: false,
            url: ``
        },
        {
            id: 6,
            content: `Contract Diff Checker`,
            borderBottom: true,
            url: ``
        },
        {
            id: 7,
            content: `Vyper Online Compiler`,
            borderBottom: false,
            url: ``
        },
        {
            id: 8,
            content: `Bytecode to Opcode`,
            borderBottom: false,
            url: ``
        },
        {
            id: 9,
            content: `Broadcast Transaction`,
            borderBottom: false,
            url: ``
        }
    ]

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
    const navigate = useNavigate();
    const location = useLocation();

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
    const setActive = () => {
        const blueClass = '--text-blue';
        const allHeaders = document.querySelectorAll('[data-header]');
        const allRootMenu = document.querySelectorAll('[data-header-parent="parent-header"]');
        const allHeadersArray = Array.from(allHeaders);
        const allRootMenuArray = Array.from(allRootMenu);

        // clear active
        allHeadersArray.forEach(item => item?.classList?.remove(blueClass));
        allRootMenuArray.forEach(item => {
            item?.querySelector('[data-header-parent-title="title"]')?.classList?.remove(blueClass)
        });

        // set active base current url
        const currentHeader = allHeadersArray?.find(item => item.dataset.header === location.pathname)
        currentHeader?.classList?.add(blueClass);
        const currentHeaderParent = currentHeader?.closest('[data-header-parent="parent-header"]')?.querySelector('[data-header-parent-title="title"]');
        currentHeaderParent?.classList?.add(blueClass);
    }
    const closeMenu = (subItem) => {
        const currentContainer = subItem?.closest("[data-header-parent='parent-header']")?.querySelector("[data-menu='menuContainer']");
        if (!currentContainer) return;
        currentContainer.style.display = 'none';

        setShowMenuList(false)

        const idTimeout = setTimeout(() => {
            currentContainer.style.display = '';
            clearTimeout(idTimeout)
        }, 0);
    }

    useEffect(() => {
        setActive();
    }, [location])

    return (
        <div className={css.headerUser2Bot}>
            <div className={css.container}>
                <div
                    onClick={redirectPage.bind(null, url.home2)}
                    className={css.headerUser2Bot__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`${css.headerUser2Bot__menu} ${renderShowMenu()}`}>
                    <li onClick={redirectPage.bind(null, url.home2)}>
                        <DropdownHeader3
                            notShowMenu={true}
                            header={<div data-header={url.home2}>Home</div>}
                            list={[]}
                            cssHeader={css.headerUser2Bot__menu__custom}
                        />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.blockChain)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.blockChain]}
                            header={`BlockChain`}
                            list={listBlockchain} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.validators)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.validators]}
                            header={`Validators`}
                            list={listValidators} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.tokens)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.tokens]}
                            header={`Tokens`}
                            list={listTokens} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.nFTs)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.nFTs]}
                            header={`NFTs`}
                            list={listNft} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.resources)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.resources]}
                            header={`Resources`}
                            list={listResources} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.developers)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.developers]}
                            header={`Developers`}
                            list={listDeveloper} />
                    </li>
                    <li onClick={menuCLickHandle.bind(null, menus.current.more)}>
                        <DropdownHeader3
                            showMenu={showMenus[menus.current.more]}
                            header={`More`}
                            menuWidthFull={true}
                            content={<MoreContent redirectPage={redirectPage} />} />
                    </li>
                </ul>
                <div
                    onClick={redirectPage.bind(null, url.login)}
                    className={css.headerUser2Bot__sign}>

                    <DropdownHeader3
                        header={<>
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