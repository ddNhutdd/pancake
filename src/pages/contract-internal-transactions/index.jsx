import HeaderComponent2 from 'src/components/header-component-2';
import css from './contract-internal-transactions.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import Popover, { popoverPlacementType } from 'src/components/popover';
import CopyButton from 'src/components/copy-button';
import { useState } from 'react';
import CirclePointRight from 'src/components/circle-point-right';

function ContractInternalTransactions() {

    const listCol = [{
        id: 1,
        header: `Block`
    },
    {
        id: 2,
        header: <Popover
            placement={popoverPlacementType.top}
            content={`Click to show Age Format`}
            className='--text-blue '
        >
            Date Time (UTC)
        </Popover>
    },
    {
        id: 3,
        header: `Parent Txn Hash`
    },
    {
        id: 4,
        header: `Type`
    },
    {
        id: 5,
        header: `From`
    },
    {
        id: 6,
        header: <></>
    },
    {
        id: 7,
        header: `To`
    },
    {
        id: 8,
        header: `Value`
    }]
    const listRecord = [{
        id: 1,
        cols: [
            <span
                className='--text-blue'
                key={`1-1`}>
                37157756
            </span>
            ,
            <Popover
                key={`1-2`}
                placement={popoverPlacementType.top}
                content={`27 secs ago`}
            >
                2024-03-21 8:18:42
            </Popover>
            ,
            <span
                className='--text-blue'
                key={`1-3`}>
                0x04f86a203f4e6...
            </span>
            ,
            `call`
            ,
            <>
                <Popover
                    key={`1-4`}
                    className='--text-blue --hover-yellow'
                    placement={popoverPlacementType.top}
                    content={`123123`}>
                    BSC: Validator Set

                </Popover>
                <CopyButton content={`fdas`} />
            </>
            ,
            <CirclePointRight key={`1-5`} />
            ,
            <>
                <Popover
                    key={`1-4`}
                    className='--text-blue --hover-yellow'
                    placement={popoverPlacementType.top}
                    content={`123123`}>
                    null: fdasfdas
                </Popover>
                <CopyButton content={`fdas`} />
            </>
            ,
            `0.003395603284808546 BNB`
        ]
    }]

    const [page, setPage] = useState(1);
    const [totalItem] = useState(1);

    const pageChangeHandle = (page) => {
        (page);
        setPage(page)
    }

    return (
        <div className={css.contractInternalTransactions}>
            <div className={css.contractInternalTransactions__container}>
                <HeaderComponent2
                    mainContent={`Contract Internal Transactions`}
                />
                <Card className={css.contractInternalTransactions__card}>
                    <Table
                        listCol={listCol}
                        listRecord={listRecord}
                        headerLeftContent={<>
                            <div>
                                A total of 2,141,897,994 internal transactions found
                            </div>
                            <div>
                                (Showing the last 10k records only)
                            </div>
                        </>}
                        page={page}
                        totalPage={totalItem}
                        pageChangeHandle={pageChangeHandle}
                    />
                </Card>
            </div>
        </div>
    )
}

export default ContractInternalTransactions