import HeaderComponent2 from 'src/components/header-component-2'
import css from './view-block.module.scss'
import { HeaderComponent3 } from 'src/components/header-component-3'
import Card from 'src/components/card'
import Table from 'src/components/table'
import Popover, { popoverPlacementType } from 'src/components/popover'
import CopyButton from 'src/components/copy-button'
import { useState } from 'react'
import Process from './process'

function ViewBlocks() {

    const listCard = [
        {
            id: 1,
            main: `Network Utilization(24H)`,
            second: `4,729,185`,
            second_2: '(5.03%)'
        }
        ,
        {
            id: 2,
            main: `Pending Transactions (Last 1H)`,
            second: `173`,
            second_2: '(Average)'
        }
        ,
        {
            id: 3,
            main: 'Network Transactions Fee (24H)',
            second: `1,942.58 BNB`,
            second_2: '(33.22%)'
        }
        ,
        {
            id: 4,
            main: 'Avg. Transaction Fee (24h)',
            second: `1,942.58 BNB`,
            second_2: '(33.22%)'
        }
    ]
    const listCol = [
        {
            id: 1,
            header: `Block`
        },
        {
            id: 2,
            header: <Popover
                className='--text-blue'
                placement={popoverPlacementType.top}
                content={`31434312`}
            >
                Date Time (UTC)
            </Popover>
        },
        {
            id: 3,
            header: `Txn`
        },
        {
            id: 4,
            header: `Validator`
        },
        {
            id: 5,
            header: `Gas Used`
        }
        ,
        {
            id: 6,
            header: `Gas Limit`
        }
        ,
        {
            id: 7,
            header: `Reward`
        }
        ,
        {
            id: 8,
            header: `Burnt Fees (BNB)`
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                <span
                    key={`1-1`}
                    className='--text-blue'
                >
                    37158414
                </span>
                ,
                <Popover
                    key={`1-2`}
                    placement={popoverPlacementType.top}
                    content={`6 secs ago`}
                >
                    2024-03-21 8:52:25
                </Popover>
                ,
                <span
                    key={`1-3`}
                    className='--text-blue'
                >
                    185
                </span>
                ,
                <div
                    key={`1-4`}
                    className='flex items-center '
                >
                    <Popover
                        key={`1-4`}
                        placement={popoverPlacementType.top}
                        content={`6 secs ago`}
                    >
                        <span
                            className='--text-blue --hover-yellow'
                        >
                            Validator: Ciscox
                        </span>
                    </Popover>
                    <CopyButton content={`43214312`} />
                </div>
                ,
                <span
                    key={`1-5`}
                >
                    <Process
                        number={123321321}
                        percent={40}
                    />
                </span>
                ,
                `321321`
                ,
                `321321321`
                ,
                `123321`
            ]
        }
    ]

    const [page, setPage] = useState(1);
    const [totalPage] = useState(1);

    const pageChangeHandle = (page) => {
        console.log(page);
        setPage(page)
    }

    return (
        <div
            className={css.viewBlocks}
        >
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Blocks`} />
                <HeaderComponent3 listCard={listCard} />
                <Card>
                    <Table
                        listCol={listCol}
                        listRecord={listRecord}
                        page={page}
                        totalPage={totalPage}
                        pageChangeHandle={pageChangeHandle}
                    />
                </Card>
            </div>
        </div>
    )
}

export default ViewBlocks