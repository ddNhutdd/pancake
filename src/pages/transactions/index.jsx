import Card from 'src/components/card';
import css from './transactions.module.scss';
import { TbBulb } from "react-icons/tb";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Popover, { placementType } from 'src/components/popover';
import Table from 'src/components/table';
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Transactions() {

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
                content={`Click to show datetime format`}>
                Age
            </Popover>
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
                placement={placementType.left}
                content={`(Gas price * Gas used by Txns) in Bnb`}>
                Txn Fee
            </Popover>
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                <MdOutlineRemoveRedEye key={`a`} />,
                `0x46b45d6230550`,
                'Deposite',
                '37100493',
                `7 secs ago`,
                `0x123456...185 copy`,
                'right',
                'BSC: Validator Set',
                '0.063841559 BNB',
                '0'
            ]
        },
        {
            id: 1,
            cols: [
                <MdOutlineRemoveRedEye key={`a`} />,
                `0x46b45d6230550`,
                'Deposite',
                '37100493',
                `7 secs ago`,
                `0x123456...185 copy`,
                'right',
                'BSC: Validator Set',
                '0.063841559 BNB',
                '0'
            ]
        },
        {
            id: 1,
            cols: [
                <MdOutlineRemoveRedEye key={`a`} />,
                `0x46b45d6230550`,
                'Deposite',
                '37100493',
                `7 secs ago`,
                `0x123456...185 copy`,
                'right',
                'BSC: Validator Set',
                '0.063841559 BNB',
                '0'
            ]
        },
        {
            id: 1,
            cols: [
                <MdOutlineRemoveRedEye key={`a`} />,
                `0x46b45d6230550`,
                'Deposite',
                '37100493',
                `7 secs ago`,
                `0x123456...185 copy`,
                'right',
                'BSC: Validator Set',
                '0.063841559 BNB',
                '0'
            ]
        },
    ]

    return (
        <div className={css.transactions}>
            <div className={css.container}>
                <div className={css.transactions__header}>
                    Transactions
                </div>
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
                            <Table listCol={listCol} listRecord={listRecord} />
                        </Card>
                    </div>
                    <div>
                        <TbBulb />
                        A transaction is a cryptographically signed instruction that changes the blockchain state. Block explorers track the details of all transactions in the network. Learn more about transactions in our
                        <span>
                            Knowledge Base.
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Transactions