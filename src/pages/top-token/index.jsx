import HeaderComponent2 from 'src/components/header-component-2'
import css from './top-token.module.scss'
import Card from 'src/components/card'
import Table from 'src/components/table'
import Popover, { popoverPlacementType } from 'src/components/popover'
import { BsSortDown } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import Button2, { button2Type } from 'src/components/button-2'
import { IoIosSearch } from "react-icons/io";
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from 'src/components/dropdown-2'
import { MdInfoOutline } from "react-icons/md";
import { FaSortDown } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";

function TopToken() {

    const listCol = [
        {
            id: 1,
            header: `#`
        },
        {
            id: 2,
            header: `Token`
        },
        {
            id: 3,
            header: <Popover
                placement={popoverPlacementType.top}
                content={`Click for decending sort`}
                className={`--text-blue`}
            >
                Price
            </Popover>
        },
        {
            id: 4,
            header: <Popover
                placement={popoverPlacementType.top}
                content={`Click for decending sort`}
                className={`--text-blue`}
            >
                Change (%)
            </Popover>
        },
        {
            id: 5,
            header: <Popover
                placement={popoverPlacementType.top}
                content={`Click for decending sort`}
                className={`--text-blue`}
            >
                Volumn (24H)
            </Popover>
        },
        {
            id: 6,
            header:
                <div className='flex items-center gap-2'>
                    <BsSortDown />
                    <Popover
                        placement={popoverPlacementType.top}
                        content={`Click for decending sort`}
                        className={`--text-blue`}
                    >
                        Volumn (24H)
                    </Popover>
                    <Popover
                        placement={popoverPlacementType.top}
                        content={
                            <div className='flex flex-col p-0 items-center'>
                                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                        }
                        className={`--text-blue flex items-center justify-center`}
                    >
                        <CiCircleQuestion />
                    </Popover>
                </div>
        },
        {
            id: 7,
            header: <div className='flex items-center gap-1'>
                Onchain Market Cap
                <Popover
                    placement={popoverPlacementType.top}
                    className='flex items-center'
                    content={
                        <div className='flex flex-col p-0 items-center'>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    }
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 8,
            header: <Popover
                placement={popoverPlacementType.top}
                content={`Click for decending sort`}
                className={`--text-blue`}
            >
                Holder
            </Popover>
        }
    ]
    const listSearch = [
        {
            id: 1,
            content: <form key={`1-1`}>
                <button>fdas</button>
            </form>
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                `1`
                ,
                <div
                    key={`1-1`}
                    className={css.topToken__tokenCol}
                >
                    <img src={`src/assets/imgs/staking-2.png`} alt="staking" />
                    <span>Binance-Peg Ethereum Token</span>
                    <span>(WBNB)</span>
                    <Popover
                        placement={popoverPlacementType.right}
                        content={`Cross Chain`}
                        className={css.topToken__tokenCol__popover}
                    >
                        <MdInfoOutline />
                    </Popover>
                </div>
                ,
                <div
                    key={`1-2`}
                    className={css.topToken__priceCol}
                >
                    <Popover
                        placement={popoverPlacementType.top}
                        content={`$3,517.8939`}
                    >
                        $3,517.8939
                    </Popover>
                    <span>
                        6.024351 BNB
                    </span>
                </div>
                ,
                <div
                    key={`1-3`}
                    className={css.topToken__changeCol}
                >
                    <FaSortDown />
                    -0.04%
                </div>
                ,
                `$20,414,719,959.00`
                ,
                `$422,405,860,149.00`
                ,
                `$2,128,325,807.00`
                ,
                <div
                    key={`1-3`}
                    className={css.topToken__holderCol}
                >
                    <span>1,876,639</span>
                    <span>0.013%</span>
                </div>
            ]
        }
    ]

    return (
        <div className={css.topToken}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Token Tracker (BEP-20)`} />
                <Card className={css.topToken__card}>
                    <div className={css.topToken__cardHeader}>
                        <div className={css.topToken__cardLeft}>
                            A total of
                            {" "}
                            <span className={css['topToken--bold']}>1,366</span>
                            {" "}
                            Token Contracts found
                        </div>
                        <div className={css.topToken__cardLeft}>
                            <Dropdown2
                                header={
                                    <Button2
                                        classname={css.topToken__searchButton}
                                        type={button2Type.outlineSmall}>
                                        <IoIosSearch />
                                    </Button2>
                                }
                                list={listSearch}
                                align={dropdown2Align.right}
                                trigger={dropdown2TriggerType.click}
                            />
                        </div>
                    </div>
                    <Table
                        listCol={listCol}
                        listRecord={listRecord}
                        showPagingTop={false}
                    />
                </Card>
                <div className={css.topToken__bot}>
                    <HiOutlineLightBulb />
                    This page tracks key metrics of
                    <span>
                        BEP-20
                    </span>
                    tokens on BNB Smart Chain. Kindly take note that only updated tokens are listed.
                </div>
            </div >
        </div >
    )
}

export default TopToken