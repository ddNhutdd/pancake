import HeaderComponent2 from 'src/components/header-component-2';
import css from './transaction-pending.module.scss';
import Card from 'src/components/card';
import Button2, { button2Type } from 'src/components/button-2';
import Table from 'src/components/table';
import { CiCircleQuestion } from "react-icons/ci";
import Popover, { popoverPlacementType } from 'src/components/popover';
import { IoIosSearch } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";
import { useState } from 'react';

function TransactionPending() {

    const listCol = [{
        id: 1,
        header: 'Txn Hash'
    },
    {
        id: 2,
        header: <div className='flex items-center justify-start gap-2'>
            Method
            <Popover
                className={`flex items-center justify-center`}
                placement={popoverPlacementType.top}
                content={<>
                    <span>43434324324321431431243432434</span>
                    <span>12434312432143</span>
                </>}
                classNamePopover={`flex items-center justify-center flex-col `}
            >
                <CiCircleQuestion />
            </Popover>
        </div>
    },
    {
        id: 3,
        header: <Popover
            className={`--text-blue`}
            placement={popoverPlacementType.top}
            content={`Unsort, click to sort`}>
            Nonce
        </Popover>
    },
    {
        id: 4,
        header: 'Last Seen'
    },
    {
        id: 5,
        header: <Popover
            className={`--text-blue`}
            placement={popoverPlacementType.top}
            content={`Unsort, click to sort`}>
            Gas Limit
        </Popover>
    },
    {
        id: 6,
        header: <Popover
            className={`--text-blue`}
            placement={popoverPlacementType.top}
            content={`Unsort, click to sort`}>
            Gas Price
        </Popover>
    },
    {
        id: 7,
        header: 'From'
    },
    {
        id: 8,
        header: 'To'
    },
    {
        id: 9,
        header: 'Amount'
    }]
    const listRecord = [
        {
            id: 1,
            cols: [
                <span
                    key={`1-1`}
                    className='--text-blue'>
                    0x02ebe1b59...
                </span>
                ,
                <Popover
                    key={`1-2`}
                    content={`Sign In`}
                    placement={popoverPlacementType.top}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        Sign In
                    </Button2>
                </Popover>
                ,
                `20`
                ,
                <Popover
                    key={`1-2`}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    20 secs ago
                </Popover>
                ,
                `41071`
                ,
                `3.5176 Gwei`
                ,
                <Popover
                    key={`1-2`}
                    className={`--text-blue --hover-yellow `}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    0xE53bFC41...De8FA6F6F
                </Popover>
                ,
                <Popover
                    key={`1-2`}
                    className={`--text-blue --hover-yellow `}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    0xE3bA0072...19D72BaF4
                </Popover>
                ,
                `0 BNB`
            ]
        },
        {
            id: 2,
            cols: [
                <span
                    key={`1-1`}
                    className='--text-blue'>
                    0x02ebe1b59...
                </span>
                ,
                <Popover
                    key={`1-2`}
                    content={`Sign In`}
                    placement={popoverPlacementType.top}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        Sign In
                    </Button2>
                </Popover>
                ,
                `20`
                ,
                <Popover
                    key={`1-2`}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    20 secs ago
                </Popover>
                ,
                `41071`
                ,
                `3.5176 Gwei`
                ,
                <Popover
                    key={`1-2`}
                    className={`--text-blue --hover-yellow `}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    0xE53bFC41...De8FA6F6F
                </Popover>
                ,
                <Popover
                    key={`1-2`}
                    className={`--text-blue --hover-yellow `}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    0xE3bA0072...19D72BaF4
                </Popover>
                ,
                `0 BNB`
            ]
        },
        {
            id: 3,
            cols: [
                <span
                    key={`1-1`}
                    className='--text-blue'>
                    0x02ebe1b59...
                </span>
                ,
                <Popover
                    key={`1-2`}
                    content={`Sign In`}
                    placement={popoverPlacementType.top}>
                    <Button2
                        type={button2Type.outlineSmall}
                        classname={css.customButton}>
                        Sign In
                    </Button2>
                </Popover>
                ,
                `20`
                ,
                <Popover
                    key={`1-2`}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    20 secs ago
                </Popover>
                ,
                `41071`
                ,
                `3.5176 Gwei`
                ,
                <Popover
                    key={`1-2`}
                    className={`--text-blue --hover-yellow `}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    0xE53bFC41...De8FA6F6F
                </Popover>
                ,
                <Popover
                    key={`1-2`}
                    className={`--text-blue --hover-yellow `}
                    content={`mar-20-2024 09:21:08 AM`}
                    placement={popoverPlacementType.top}>
                    0xE3bA0072...19D72BaF4
                </Popover>
                ,
                `0 BNB`
            ]
        }
    ]

    const [page, setPage] = useState(1);
    const [totalPage,] = useState(1);

    const pageChangeHandle = (page) => {
        console.log(page);
        setPage(page);
    }

    return (
        <div className={css.transactionPending}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Pending Transactions`} />
                <Card>
                    <div className={css.transactionPending__cardContent}>
                        <div className={css.transactionPending__cardHeader}>
                            <div>
                                <Popover
                                    placement={popoverPlacementType.right}
                                    content={`Click to see detail`}>
                                    <Button2 type={button2Type.outlineSmall} >
                                        <FaMountainSun />
                                        Pending Transaction Pool
                                    </Button2>
                                </Popover>
                            </div>
                            <div>
                                <Button2 type={button2Type.outlineSmall} >
                                    <IoIosSearch />
                                </Button2>
                            </div>
                        </div>

                        <Table
                            headerLeftContent={`A total of 260 pending txns found`}
                            listCol={listCol}
                            listRecord={listRecord}
                            fetching={false}
                            page={page}
                            totalPage={totalPage}
                            pageChangeHandle={pageChangeHandle}
                        />
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default TransactionPending