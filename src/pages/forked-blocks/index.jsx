import HeaderComponent2 from "src/components/header-component-2"
import css from "./forked-blocks.module.scss"
import Card from "src/components/card"
import Table from "src/components/table"
import Popover, { placementType } from "src/components/popover"
import CopyButton from "src/components/copy-button"

function ForkedBlocks() {

    const listCol = [
        {
            id: 1,
            header: `Height`
        },
        {
            id: 2,
            header: <Popover
                placement={placementType.top}
                content={`Click to show age format`}
                className='--text-blue'
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
            header: `Uncles`
        },
        {
            id: 5,
            header: `Validator`
        },
        {
            id: 6,
            header: `Gas Limit`
        },
        {
            id: 7,
            header: `Difficulty`
        },
        {
            id: 8,
            header: `Reward`
        },
        {
            id: 9,
            header: `ReorgDepth`
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                <span
                    key={`1-1`}
                    className="--text-blue"
                >
                    37131208
                </span>
                ,
                <Popover
                    key={`1-2`}
                    placement={placementType.top}
                    content={`40 hours ago`}
                >
                    2024-03-20 10:08:50
                </Popover>
                ,
                `217`
                ,
                `0`
                ,
                <div
                    key={`1-3`}
                    className="flex items-center gap-2"
                >
                    <Popover
                        placement={placementType.top}
                        content={`0x43h42432iy4io324uy324y32ui42u4i3y2ui43`}
                        className={'--text-blue --hover-yellow'}
                    >
                        Validator: Synclub
                    </Popover>
                    <CopyButton content={`131321313123`} />
                </div>
                ,
                `139,991,456`
                ,
                `0.000 TH`
                ,
                `0.06093 BNB`
                ,
                `1`
            ]
        }
    ]

    return (
        <div
            className={css.forkedBlocks}
        >
            <div className={css.container}>
                <HeaderComponent2 mainContent={
                    <div className="flex items-center gap-2">
                        Forked Blocks
                        <span
                            className={css.forkedBlocks__headerComponent}
                        >
                            Excluded blocks as a result of &quot;Chain Reorganizations&quot;
                        </span>
                    </div>
                } />
                <Card
                    className={css.forkedBlocks__card}
                >
                    <Table
                        headerLeftContent={`A total of 2,379 forked blocks found`}
                        listCol={listCol}
                        listRecord={listRecord}
                    />
                </Card>
            </div>
        </div>
    )
}

export default ForkedBlocks