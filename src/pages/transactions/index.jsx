import Card from 'src/components/card';
import css from './transactions.module.scss';
import { TbBulb } from "react-icons/tb";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Popover, { placementType, triggerType } from 'src/components/popover';
import Table from 'src/components/table';
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import HeaderComponent2 from 'src/components/header-component-2';
import Button2, { button2Type } from 'src/components/button-2';
import InfoTransaction from './info-transaction';
import { GoArrowRight } from "react-icons/go";
import CopyButton from 'src/components/copy-button';
import { useEffect, useState } from 'react';

function Transactions() {

    const [showInfo, setShowInfo] = useState({});
    const [page, setPage] = useState(1);
    const [totalPages] = useState(20);

    const showInfoClickHandle = (value, ev) => {
        ev.stopPropagation();
        const oldValue = showInfo[value];
        const newValue = !oldValue;

        const newObj = {
            [value]: newValue
        }

        setShowInfo(newObj)
    }
    const closeAllInfo = () => {
        setShowInfo({});
    }
    const pageChangeHandle = (page) => {
        setPage(page)
    }

    const listCol = [
        {
            id: 1,
            header: <CiCircleQuestion />
        },
        {
            id: 2,
            header: 'Txn Hash'
        },
        {
            id: 3,
            header: <div className='flex items-center gap-1'>
                Method
                <div className='flex items-center' >
                    <CiCircleQuestion />
                </div>
            </div>
        },
        {
            id: 4,
            header: 'Block'
        },
        {
            id: 5,
            header: <Popover
                placement={placementType.top}
                content={`Click to show datetime format`}
                className={css['transactions--blue']} >
                Age
            </Popover >
        },
        {
            id: 6,
            header: `From`
        }
        ,
        {
            id: 7,
            header: ``
        }
        ,
        {
            id: 8,
            header: `To`
        }
        ,
        {
            id: 9,
            header: `Value`
        }
        ,
        {
            id: 10,
            header: <Popover
                placement={placementType.top}
                content={`(Gas price * Gas used by Txns) in Bnb`}
                className={css['transactions--blue']}>
                Txn Fee
            </Popover>
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                <Popover
                    key={`a1`}
                    trigger={triggerType.runtime}
                    placement={placementType.right}
                    content={<InfoTransaction />}
                    classNamePopover={css.customPopover}
                    id={`1`}
                    show={showInfo[`a1`]}
                >
                    <Button2
                        onClick={showInfoClickHandle.bind(null, 'a1')}
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        <MdOutlineRemoveRedEye />
                    </Button2>
                </Popover>
                ,
                <span key={`a3`} className={css['transactions--blue']}>
                    0x46b45d6230550
                </span>
                ,
                <Popover
                    key={`a2`}
                    placement={placementType.top}
                    content={`Deposite`}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton2}>
                        Deposite
                    </Button2>
                </Popover>
                ,
                <span key={`a4`} className={css['transactions--blue']}>
                    37100493
                </span>
                ,
                `7 secs ago`
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        0x123456...185
                    </Button2>
                    <CopyButton content='0x123456...185' />
                </span>
                ,
                <span key={`a4`} className={css.rightArrow}>
                    <GoArrowRight />
                </span>
                ,
                <span key={`a5`} className={css['transactions--blue']}>

                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        BSC: Validator Set
                    </Button2>
                    <CopyButton content='BSC: Validator Set' />
                </span>
                ,
                '0.063841559 BNB'
                ,
                '0'
            ]
        },
        {
            id: 2,
            cols: [
                <Popover
                    key={`a1`}
                    trigger={triggerType.runtime}
                    placement={placementType.right}
                    content={<InfoTransaction />}
                    classNamePopover={css.customPopover}
                    id={`1`}
                    show={showInfo[`a2`]}
                >
                    <Button2
                        onClick={showInfoClickHandle.bind(null, 'a2')}
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        <MdOutlineRemoveRedEye />
                    </Button2>
                </Popover>
                ,
                <span key={`a3`} className={css['transactions--blue']}>
                    0x46b45d6230550
                </span>
                ,
                <Popover
                    key={`a2`}
                    placement={placementType.top}
                    content={`Deposite`}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton2}>
                        Deposite
                    </Button2>
                </Popover>
                ,
                <span key={`a4`} className={css['transactions--blue']}>
                    37100493
                </span>
                ,
                `7 secs ago`
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        0x123456...185
                    </Button2>
                    <CopyButton content='0x123456...185' />
                </span>
                ,
                <span key={`a4`} className={css.rightArrow}>
                    <GoArrowRight />
                </span>
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        BSC: Validator Set
                    </Button2>
                    <CopyButton content='BSC: Validator Set' />
                </span>
                ,
                '0.063841559 BNB'
                ,
                '0'
            ]
        },
        {
            id: 3,
            cols: [
                <Popover
                    key={`a1`}
                    trigger={triggerType.runtime}
                    placement={placementType.right}
                    content={<InfoTransaction />}
                    classNamePopover={css.customPopover}
                    id={`1`}
                    show={showInfo[`a3`]}
                >
                    <Button2
                        onClick={showInfoClickHandle.bind(null, 'a3')}
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        <MdOutlineRemoveRedEye />
                    </Button2>
                </Popover>
                ,
                <span key={`a3`} className={css['transactions--blue']}>
                    0x46b45d6230550
                </span>
                ,
                <Popover
                    key={`a2`}
                    placement={placementType.top}
                    content={`Deposite`}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton2}>
                        Deposite
                    </Button2>
                </Popover>
                ,
                <span key={`a4`} className={css['transactions--blue']}>
                    37100493
                </span>
                ,
                `7 secs ago`
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        0x123456...185
                    </Button2>
                    <CopyButton content='0x123456...185' />
                </span>
                ,
                <span key={`a4`} className={css.rightArrow}>
                    <GoArrowRight />
                </span>
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        BSC: Validator Set
                    </Button2>
                    <CopyButton content='BSC: Validator Set' />
                </span>
                ,
                '0.063841559 BNB'
                ,
                '0'
            ]
        },
        {
            id: 4,
            cols: [
                <Popover
                    key={`a1`}
                    trigger={triggerType.runtime}
                    placement={placementType.right}
                    content={<InfoTransaction />}
                    classNamePopover={css.customPopover}
                    id={`1`}
                    show={showInfo[`a4`]}
                >
                    <Button2
                        onClick={showInfoClickHandle.bind(null, 'a4')}
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        <MdOutlineRemoveRedEye />
                    </Button2>
                </Popover>
                ,
                <span key={`a3`} className={css['transactions--blue']}>
                    0x46b45d6230550
                </span>
                ,
                <Popover
                    key={`a2`}
                    placement={placementType.top}
                    content={`Deposite`}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton2}>
                        Deposite
                    </Button2>
                </Popover>
                ,
                <span key={`a4`} className={css['transactions--blue']}>
                    37100493
                </span>
                ,
                `7 secs ago`
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        0x123456...185
                    </Button2>
                    <CopyButton content='0x123456...185' />
                </span>
                ,
                <span key={`a4`} className={css.rightArrow}>
                    <GoArrowRight />
                </span>
                ,
                <span key={`a5`} className={css['transactions--blue']}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton3}>
                        BSC: Validator Set
                    </Button2>
                    <CopyButton content='BSC: Validator Set' />
                </span>
                ,
                '0.063841559 BNB'
                ,
                '0'
            ]
        },
    ]

    useEffect(() => {
        document.addEventListener('click', closeAllInfo);

        return () => {
            document.removeEventListener('click', closeAllInfo);
        }
    }, [])

    return (
        <div className={css.transactions}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Transactions`} />
                <div className={css.transactions__content}>
                    <div className={css.transactions__item}>
                        <Card>
                            <div
                                className={`${css.transactions__item__row}`}>
                                TRANSACTIONS (24H)
                            </div>
                            <div className={css.transactions__item__row}>
                                <span className={css['transactions__item--hoverBlue']}>
                                    4,160,032
                                </span>
                                {" "}
                                <span className={css['transactions__item--green']}>(2.68%)</span>
                            </div>
                        </Card>
                        <span className={css.transactions__item__arrow}>
                            <HiMiniArrowUpRight />
                        </span>
                    </div>
                    <div className={css.transactions__item}>
                        <Card>
                            <div className={css.transactions__item__row}>
                                TRANSACTIONS (24H)
                            </div>
                            <div className={css.transactions__item__row}>
                                <span className={css['transactions__item--hoverBlue']}>
                                    4,160,032
                                </span>
                                {" "}
                                <span className={css['transactions__item--hoverBlue']}>
                                    (2.68%)
                                </span>
                            </div>
                        </Card>
                        <span className={css.transactions__item__arrow}>
                            <HiMiniArrowUpRight />
                        </span>
                    </div>
                    <div className={css.transactions__item}>
                        <Card>
                            <div className={css.transactions__item__row}>
                                TRANSACTIONS (24H)
                            </div>
                            <div className={css.transactions__item__row}>
                                <Popover
                                    className={css['transactions__item--hoverBlue']}
                                    placement={placementType.top}
                                    content={`1.4564564645645 BNB`}>
                                    4,160,032
                                </Popover>
                                {" "}
                                <span className={css['transactions__item--red']}>
                                    (2.68%)
                                </span>
                            </div>
                        </Card>
                        <span className={css.transactions__item__arrow}>
                            <HiMiniArrowUpRight />
                        </span>
                    </div>
                    <div className={css.transactions__item}>
                        <Card>
                            <div className={css.transactions__item__row}>
                                TRANSACTIONS (24H)
                            </div>
                            <div className={css.transactions__item__row}>
                                <Popover
                                    content={`0.13212456789 USD`}
                                    className={css['transactions__item--hoverBlue']}
                                    placement={placementType.top}>
                                    4,160,032
                                </Popover>
                                {" "}
                                <span className={css['transactions__item--red']}>
                                    (2.68%)
                                </span>
                            </div>
                        </Card>
                        <span className={css.transactions__item__arrow}>
                            <HiMiniArrowUpRight />
                        </span>
                    </div>
                    <div className={css.transactions__item__table}>
                        <Card>
                            <Table
                                listCol={listCol}
                                listRecord={listRecord}
                                headerLeftContent={
                                    <>
                                        <div>
                                            More than 5,506,373,037 transactions found
                                        </div>
                                        <div>
                                            (Showing the last 500k records)
                                        </div>
                                    </>
                                }
                                page={page}
                                totalPage={totalPages}
                                pageChangeHandle={pageChangeHandle}
                            />
                        </Card>
                    </div>
                    <div className={css.transactions__last}>
                        <TbBulb />
                        A transaction is a cryptographically signed instruction that changes the blockchain state. Block explorers track the details of all transactions in the network. Learn more about transactions in our
                        {" "}
                        <span className={css['transactions--blue']}>
                            Knowledge Base.
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Transactions