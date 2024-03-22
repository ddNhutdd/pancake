import HeaderComponent2 from 'src/components/header-component-2';
import css from './validators-leaderboard.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import Popover, { placementType } from 'src/components/popover';
import CopyButton from 'src/components/copy-button';

function ValidatorsLeaderboard() {

    const listCol = [
        {
            id: '1',
            header: `Rank`
        },
        {
            id: 2,
            header: `Address`
        },
        {
            id: 3,
            header: <div className={`flex items-center ${css.validatorsLeaderboard__header}`}>
                <div className='relative'>
                    <span>
                        <FaSortUp />
                    </span>
                    <span>
                        <FaSortDown />
                    </span>
                </div>
                Voting Power
            </div>
        },
        {
            id: 4,
            header: <div className={`flex items-center ${css.validatorsLeaderboard__header}`}>
                <div className='relative'>
                    <span>
                        <FaSortUp />
                    </span>
                    <span>
                        <FaSortDown />
                    </span>
                </div>
                First Block
            </div>
        },
        {
            id: 5,
            header: <div className={`flex items-center ${css.validatorsLeaderboard__header}`}>
                <div className='relative'>
                    <span>
                        <FaSortUp />
                    </span>
                    <span>
                        <FaSortDown />
                    </span>
                </div>
                Last Block
            </div>
        },
        {
            id: 6,
            header: <div className={`flex items-center ${css.validatorsLeaderboard__header}`}>
                <div className='relative'>
                    <span>
                        <FaSortUp />
                    </span>
                    <span>
                        <FaSortDown />
                    </span>
                </div>
                1 Day
            </div>
        },
        {
            id: 7,
            header: <div className={`flex items-center ${css.validatorsLeaderboard__header}`}>
                <div className='relative'>
                    <span>
                        <FaSortUp />
                    </span>
                    <span>
                        <FaSortDown />
                    </span>
                </div>
                7 Days
            </div>
        },
        {
            id: 8,
            header: <div className={`flex items-center ${css.validatorsLeaderboard__header}`}>
                <div className='relative'>
                    <span>
                        <FaSortUp />
                    </span>
                    <span>
                        <FaSortDown />
                    </span>
                </div>
                30 Days
            </div>
        },
        {
            id: 9,
            header: `Active`
        }

    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                `# 63`
                ,
                <div
                    key={`1-1`}
                    className='flex items-center'
                >
                    <Popover
                        placement={placementType.top}
                        content={`0xfe6e72b223f6d6cf4edc6bff92f30e84b8258249`}
                        className={`--text-blue`}
                    >
                        0xfe6e72b...
                    </Popover>
                    <CopyButton content={`0xfe6e72b223f6d6cf4edc6bff92f30e84b8258249`} />
                </div>
                ,
                `-`
                ,
                <span key={`1-2`} className={`--text-blue`}>22381309</span>
                ,
                <span key={`1-3`} className={`--text-blue`}>25957406</span>
                ,
                `447`
                ,
                `447`
                ,
                `447`
                ,
                <span
                    key={`1-4`}
                    className={css['validatorsLeaderboard--red']}>
                    No
                </span>
            ]
        }
    ]

    return (
        <div className={css.validatorsLeaderboard}>
            <div className={css.validatorsLeaderboard__container}>
                <HeaderComponent2
                    mainContent={`Validators Top Leaderboard (Blocks Validated)`}
                />
                <Card className={css.validatorsLeaderboard__card} >
                    <Table
                        headerLeftContent={`Showing 1 to 25 of 63 validators found`}
                        listCol={listCol}
                        listRecord={listRecord}
                    />
                </Card>
            </div>
        </div>
    )
}

export default ValidatorsLeaderboard