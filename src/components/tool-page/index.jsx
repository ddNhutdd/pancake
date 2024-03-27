import { url } from 'src/constants';
import HeaderComponent2 from '../header-component-2';
import css from './tool-page.module.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import Button2, { button2Type } from '../button-2';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';

function ToolPage(props) {
    const { menuActive, children } = props;

    const navigate = useNavigate();
    const [isShowMenuToolInMoble, setIsShowMenuToolInMoble] = useState(false);

    const menuList = [
        {
            id: 1,
            header: `CSV Export`,
            url: url.csvExport
        },
        {
            id: 2,
            header: `Unit Converter`,
            url: url.unitConverter
        },
        {
            id: 3,
            header: `Account Balance Checker`,
            url: url.accountBalanceChecker
        },
        {
            id: 4,
            header: `Token Supply Checker`,
            url: url.tokenSupplyChecker
        },
        {
            id: 5,
            dash: true
        },
        {
            id: 6,
            header: `Similar Contract Search`,
            url: url.similarContractsSearch
        },
        {
            id: 7,
            header: `Vyper Online Compiler`
        },
        {
            id: 8,
            header: `Bytecode to Opcode`
        },
        {
            id: 9,
            header: `Broadcast Transaction`
        },
        {
            id: 10,
            dash: true
        },
        {
            id: 11,
            header: <div className='flex items-center justify-between'>
                Code Reader
                <MdArrowOutward />
            </div>
        },
        {
            id: 12,
            header: <div className='flex items-center justify-between'>
                Token Approvals
                <MdArrowOutward />
            </div>
        },
        {
            id: 13,
            header: <div className='flex items-center justify-between'>
                Verify Signatures
                <MdArrowOutward />
            </div>
        },
        {
            id: 14,
            header: <div className='flex items-center justify-between'>
                Contract Diff Checker
                <MdArrowOutward />
            </div>
        },
    ]

    const renderListMenu = () => menuList.map(item => {
        if (item.header) return (
            <li
                onClick={redirectPage.bind(null, item.url)}
                className={`${css.toolPage__menuItem} ${renderClassMenuActive(item.url)}`}
                key={item.id}>
                {item.header}
            </li>
        )
        if (item.dash) return (
            <div
                className={css.toolPage__line}
                key={item.id}></div>
        )
    })
    const renderClassMenuActive = (url) => menuActive === url ? css.active : '';
    const redirectPage = (url) => navigate(url);
    const toggleMenu = () => setIsShowMenuToolInMoble(state => !state);
    const renderClassShowMenuInMoble = () => isShowMenuToolInMoble ? css.toolPage__menuMoble : '';

    return (
        <div className={css.toolPage}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Tools`} />
                <div className='pt-3 row'>
                    <div className='col-2 border-r-1 border-r-sm-0  col-lg-4 col-sm-12'>
                        <Button2
                            onClick={toggleMenu}
                            classname={`d-0 d-sm-b ${css.toolPage__menuButton}`}
                            type={button2Type.outline}
                        >
                            <FaBars />
                            Tool Menu
                        </Button2>
                        <ul className={`${css.toolPage__menu} ${renderClassShowMenuInMoble()}`}>
                            {renderListMenu()}
                        </ul>
                    </div>
                    <div className='col-10 col-lg-8 col-sm-12'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

ToolPage.propTypes = {
    mainContent: PropTypes.node,
    menuActive: PropTypes.string,
    children: PropTypes.node
};

export default ToolPage