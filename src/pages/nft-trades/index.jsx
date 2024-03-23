import HeaderComponent2 from 'src/components/header-component-2';
import css from './nft-trades.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import Button2, { button2Type } from 'src/components/button-2';
import { CiCircleQuestion } from "react-icons/ci";
import Popover, { popoverPlacementType } from 'src/components/popover';
import { LuEye } from "react-icons/lu";
import cake from 'imgs/staking-1.png'
import CopyButton from 'src/components/copy-button';
import Pill, { pillTypes } from 'src/components/pill';
import ntf from 'imgs/nft-placeholder.svg';
import { Dropdown2, dropdown2TriggerType } from 'src/components/dropdown-2';
import { CiGrid41 } from "react-icons/ci";
import { useState } from 'react';
import Input3 from 'src/components/input-3';
import { IoIosSearch } from "react-icons/io";

function NftTrades() {

    const listCol = [
        {
            id: 1,
            header: <CiCircleQuestion />
        },
        {
            id: 2,
            header: `Transaction Info`
        },
        {
            id: 3,
            header: `Block`
        },
        {
            id: 4,
            header: <Popover
                placement={popoverPlacementType.top}
                content={`Click to show Age Format`}
                className={`--text-blue`}
            >
                Date Time (UTC)
            </Popover>
        },
        {
            id: 5,
            header: `Action`
        },
        {
            id: 6,
            header: `Price`
        },
        {
            id: 7,
            header: `Market`
        },
        {
            id: 8,
            header: `Buyer`
        },
        {
            id: 9,
            header: `Type`
        },
        {
            id: 10,
            header: `Item`
        }
    ]
    const listRecord = [
        {
            id: 1,
            cols: [
                <Button2
                    key={`1-1`}
                >
                    <LuEye />
                </Button2>
                ,
                <Popover
                    key={`1-2`}
                    placement={popoverPlacementType.top}
                    classNamePopover={`flex items-center justify-center flex-col`}
                    content={<>
                        <span>0x90c5bb6da24j23l43214j31k43jk123sjd</span>
                        <span>4j31k43jk123sjd</span>
                    </>}
                    className={`--text-blue`}
                >
                    0x90c5bb6da24...
                </Popover>
                ,
                <span
                    key={`1-3`}
                    className='--text-blue'
                >
                    37215376
                </span>
                ,
                <Popover
                    key={`1-4`}
                    placement={popoverPlacementType.top}
                    content={`11 mins ago`}
                >
                    2024-03-23 8:24:23
                </Popover>
                ,
                <span
                    className='--text-success'
                    key={`1-5`}
                >
                    Bought
                </span>
                ,
                `0.0038 BNB ($2.10)`
                ,
                <div
                    key={`1-6`}
                    className={css.nftTrades__market}
                >
                    <Popover
                        placement={popoverPlacementType.top}
                        content={`cake`}
                    >
                        <img src={cake} alt="cake" />
                    </Popover>
                    PancakeSwap
                </div>
                ,
                <>
                    <Popover
                        placement={popoverPlacementType.top}
                        content={`0x25F6a226D7FE3Da79F8e408689785c77C45E34F3`}
                        className={`--text-blue`}
                    >
                        0x25F6a226...7C45E34F3
                    </Popover>
                    <CopyButton content='0x25F6a226D7FE3Da79F8e408689785c77C45E34F3' />
                </>
                ,
                <Pill key={`1-7`} type={pillTypes.white}>BEP-721</Pill>
                ,
                <div
                    key={`1-8`}
                    className={css.nftTrades__items}
                >
                    <div className={css.nftTrades__items__left}>
                        <img src={ntf} alt="ntf" />
                    </div>
                    <div className={css.nftTrades__items__right}>

                        <Popover
                            placement={popoverPlacementType.top}
                            content={`Bomber Hero#181094`}
                            className={css.nftTrades__items__right__top}
                        >
                            Bomber Hero#181094
                        </Popover>

                        <Popover
                            placement={popoverPlacementType.top}
                            content={<>
                                <span>0x90c5bb6da247e0384d640ed3e61c848e0e83e3d0005158a812b98ff9587b0fb4</span>
                                <span>Bomber hero</span>
                            </>}
                            className={`--text-gray`}
                            classNamePopover={`flex flex-col justify-center items-center`}
                        >
                            Bomber hero
                        </Popover>
                    </div>
                </div >
            ]
        }
    ]
    const listSearchDropdown = [
        {
            id: 1,
            content: <>
                <CiGrid41 />
                All Marketplace
            </>
        },
        {
            id: 2,
            content: <div className={`${css.nftTrades__dropdownSearchItem}`}>
                <img src={cake} alt="cake" />
                Pancake
            </div>
        },
        {
            id: 3,
            content: <div className={`${css.nftTrades__dropdownSearchItem}`}>
                <img src={ntf} alt="ntf" />
                BCS Scan
            </div>
        }
    ];

    const [showDropdownSearch, setShowDropdownSearch] = useState(false);
    const [dropdownSearchSelected, setDropdownSearchSelected] = useState(listSearchDropdown[0].content.props.children.at(-1));
    const dropdownClickHandle = () => {
        setShowDropdownSearch(s => !s)
    }
    const searchDropdownChangeHandle = (item) => {
        setDropdownSearchSelected(item?.content?.props?.children?.at(-1))
    }
    const renderHeaderSearchContent = () =>
        dropdownSearchSelected === listSearchDropdown[0].content.props.children.at(-1) ? '' : dropdownSearchSelected

    return (
        <div className={css.nftTrades}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`NFT Trades`} />
                <Card className={css.nftTrades__card}>
                    <div className={css.nftTrades__header}>
                        <div onClick={dropdownClickHandle} className={css.nftTrades__left}>
                            <Dropdown2
                                header={
                                    <Button2 classname={css.nftTrades__card__button} type={button2Type.outlineSmall}>
                                        <CiGrid41 />
                                        All Marketplace: {renderHeaderSearchContent()}
                                    </Button2>
                                }
                                trigger={dropdown2TriggerType.runtime}
                                list={listSearchDropdown}
                                show={showDropdownSearch}
                                onChange={searchDropdownChangeHandle}
                            />
                        </div>
                        <div className={css.nftTrades__right}>

                            <Input3
                                placeholder={`Search by token address`}
                            />
                            <span className={css.nftTrades__right__icon}><IoIosSearch /></span>
                        </div>
                    </div>
                    <Table
                        headerLeftContent={<>
                            <div>More than 100,000 records found</div>
                            <div>(Showing last 100k records)</div>
                        </>}
                        listCol={listCol}
                        listRecord={listRecord}
                    />
                </Card>
            </div>
        </div>
    )
}

export default NftTrades