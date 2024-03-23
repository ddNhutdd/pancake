import HeaderComponent2 from 'src/components/header-component-2'
import css from './nft-top.module.scss'
import Table from 'src/components/table'
import Card from 'src/components/card';
import { CiCircleQuestion } from "react-icons/ci";
import Popover, { popoverPlacementType } from 'src/components/popover';
import bnb from 'imgs/staking-2.png'
import Pill, { pillTypes } from 'src/components/pill';
import HeaderTime from 'src/components/header-time';

function NftTop() {

    const listCol = [
        {
            id: 1,
            header: `#`
        },
        {
            id: 2,
            header: `Collection`
        },
        {
            id: 3,
            header: `Type`
        },
        {
            id: 4,
            header: <div className='flex items-center gap-1'>
                Volume
                <Popover
                    placement={popoverPlacementType.top}
                    content={`This column is updated every few hours instead of in real-time`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 5,
            header: <div className='flex items-center gap-1'>
                Change (%)
                <Popover
                    placement={popoverPlacementType.top}
                    content={`This column is updated every few hours instead of in real-time`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 6,
            header: <div className='flex items-center gap-1'>
                Sales
                <Popover
                    placement={popoverPlacementType.top}
                    content={`This column is updated every few hours instead of in real-time`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 7,
            header: <div className='flex items-center gap-1'>
                Min Price (24H)
                <Popover
                    placement={popoverPlacementType.top}
                    content={`Lowest 24 hour last sale price for NFTs in this token contract`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 8,
            header: <div className='flex items-center gap-1'>
                Max Price (24H)
                <Popover
                    placement={popoverPlacementType.top}
                    content={`Lowest 24 hour last sale price for NFTs in this token contract`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 9,
            header: <div className='flex items-center gap-1'>
                Transfers
                <Popover
                    placement={popoverPlacementType.top}
                    content={`This column is updated every few hours instead of in real-time`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 10,
            header: <div className='flex items-center gap-1'>
                Owners
                <Popover
                    placement={popoverPlacementType.top}
                    content={`This column is updated every few hours instead of in real-time`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        },
        {
            id: 10,
            header: <div className='flex items-center gap-1'>
                Total Assets
                <Popover
                    placement={popoverPlacementType.top}
                    content={`This column is updated every few hours instead of in real-time`}
                    className={`flex items-center`}
                >
                    <CiCircleQuestion />
                </Popover>
            </div>
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                `1`
                ,
                <Popover
                    key={`1-1`}
                    placement={popoverPlacementType.top}
                    content={`0x22h1h321h32jk1j32hj3h2kh321hk21hj32k`}
                    className={css.nftTop__colection}
                >
                    <img src={bnb} alt="bnb" />
                    Bomber Hero
                </Popover>
                ,
                <Pill
                    key={`1-2`}
                    type={pillTypes.white}
                >
                    BEP-721
                </Pill>
                ,
                `0.8742 BNB`
                ,
                <span
                    className='--text-success'
                    key={`1-3`}
                >
                    900.00%
                </span>
                ,
                `225`
                ,
                `0.0008 BNB`
                ,
                `0.2 BNB`
                ,
                `28,743,296`
                ,
                `1,159,243`
                ,
                `3,649`
            ]
        }
    ]
    const time = {
        h1: '1h',
        h6: '6h',
        h12: '12h',
        d1: '1d',
        d7: '7d',
        d30: '30d'
    }

    return (
        <div className={css.nftTop}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`Top NFTs`} />
                <HeaderTime list={time} />
                <Card>
                    <Table
                        headerLeftContent={`Showing the top 9 NFTs`}
                        listCol={listCol}
                        listRecord={listRecord}
                    />
                </Card>
            </div>
        </div>
    )
}

export default NftTop