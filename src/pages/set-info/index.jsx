import HeaderComponent2 from 'src/components/header-component-2';
import css from './set-info.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import Popover, { placementType } from 'src/components/popover';
import Button2, { button2Type } from 'src/components/button-2';
import { FiUser } from "react-icons/fi";

function SetInfo() {

    const listCol = [
        {
            id: 1,
            header: <Popover
                placement={placementType.top}
                content={`Click to show Age format`}
                className='--text-blue'
            >
                Date Time (UTC)
            </Popover>
        },
        {
            id: 2,
            header: `Block`
        },
        {
            id: 3,
            header: `Validators`
        },
        {
            id: 4,
            header: 'Total Voting Power'
        },
        {
            id: 5,
            header: 'Total Jailed'
        },
        {
            id: 6,
            header: 'Total Incoming'
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                <Popover
                    key={`1-1`}
                    placement={placementType.top}
                    content="1 mins ago"
                >
                    2024-03-22 7:13:00
                </Popover>
                ,
                <span
                    key={`1-2`}
                    className='--text-blue'
                >
                    37185200
                </span>
                ,
                <Button2
                    key={`1-3`}
                    type={button2Type.outlineSmall}
                    classname={css.setInfo__buttonUser}
                >
                    <FiUser />
                    40
                </Button2>
                ,
                `22,714,042.1072785 BNB`
                ,
                `0`
                ,
                `415.92641089712861015 BNB`
            ]
        }
    ]

    return (
        <div className={css.setInfo}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Validators Set Info`} />
                <Card className={css.setInfo__card}>
                    <Table
                        headerLeftContent={`Showing 25 of total 1873674 snapshots (taken at per minute intervals)`}
                        listRecord={listRecord}
                        listCol={listCol}
                    />
                </Card>
            </div>
        </div>
    )
}

export default SetInfo