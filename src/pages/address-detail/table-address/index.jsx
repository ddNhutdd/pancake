import ListTabs from 'src/components/list-tabs';
import css from './table-address.module.scss';
import { CiFilter } from "react-icons/ci";
import Button2, { button2Type } from 'src/components/button-2';
import { useEffect, useState } from 'react';
import Card from 'src/components/card';
import Table from 'src/components/table';
import { CiCircleQuestion } from "react-icons/ci";
import Popover, { popoverPlacementType, popoverTriggerType } from 'src/components/popover';
import { MdArrowRightAlt } from "react-icons/md";
import { FaSortAmountDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from 'src/components/dropdown-2';
import { IoChevronDownOutline } from "react-icons/io5";
import PillSquare, { pillSquareType } from 'src/components/pill-square';
import CopyButton from 'src/components/copy-button';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { splitStringToDivs } from 'src/utils/utils';

const TableAddress = function () {
	//#region function
	const popoverInfoToggle = () => setPopoverToggleShow(state => !state);
	//#endregion

	//#region state
	const [popoverToggleShow, setPopoverToggleShow] = useState(false); 
	//#endregion 

	//#region data
	const listTab = [
		{
			id: 1,
			content: `Transactions`
		},
		{
			id: 2,
			content: `Internal Transactions`
		}
	]
	
	const listCol = [
		{
			id: 1,
			header: <div className='flex items-center'>
				<CiCircleQuestion />
			</div> 
		},
		{
			id: 2,
			header: `Transaction Hash`
		},
		{
			id: 3,
			header: <div className='flex items-center gap-1'>
				<CiCircleQuestion />
				Method 
			</div>
		},
		{
			id: 4,
			header: `Block`
		},
		{
			id: 5,
			header: <Popover
				placement={popoverPlacementType.top}
				className={`--text-blue`}
				content={`Click to show age format`}
			>
				Date Time (UTC)
			</Popover>
		},
		{
			id: 6,
			header: `From`
		},
		{
			id: 7,
			header: ``
		},
		{
			id: 8,
			header: `To`
		},
		{
			id: 9,
			header: `Value`
		},
		{
			id: 10,
			header: <Popover
				placement={popoverPlacementType.top}
				className={`--text-blue`}
				content={`(Gas Price * Gas Used by Txns) in BNB`}
			>				
				Txn Fee
			</Popover>
		}
	]

	const listRecord = [
		{
			id: 1,
			cols: [
				<Popover
					trigger={popoverTriggerType.runtime}
					placement={popoverPlacementType.right}
					classNamePopover={css.table__popoverCustomContainer}
					show={popoverToggleShow}
					content={
						<div className={css.table__popoverCustom}>
							<div className={css.table__popoverCustom__header}>
								Additional Info
							</div>
							<div className={css.table__popoverCustom__record}>
								<div className={css.table__popoverCustom__title}>
									Status: 
								</div>
								<div className='flex items-start flex-col  gap-1 --text-success'>
									<div className='flex items-center gap-1'>
										<FaCheckCircle />
										Success
									</div>
									<div className='--text-gray'>
										(3488 Block Confirmations)
									</div>
								</div>
							</div>
							<div className={css.table__popoverCustom__line}></div>
							<div className={css.table__popoverCustom__record}>
								<div className={css.table__popoverCustom__title}>
									Transaction Fee:
								</div>
								<div>
									0 BNB <span className='--text-gray'> ($0.00)</span>
								</div>
							</div>
							<div className={css.table__popoverCustom__line}></div>
							<div className={css.table__popoverCustom__record}>
								<div className={css.table__popoverCustom__title}>
									Gas Info: 
								</div>
								<div>
									51,008 gas used from <div className='flex flex-wrap'>{splitStringToDivs(`9,223,372,036,854,775,807`)}</div> limit
								</div>
								<div className='--text-gray'>
									@ 0 BNB (0 BNB)
								</div>
							</div>
							<div className={css.table__popoverCustom__line}></div>
							<div className={css.table__popoverCustom__record}>
								<div className={css.table__popoverCustom__title}>
									Nonce:
								</div>
								<div>
									808068 <span className='--text-gray'>(in the position 123)</span>
								</div>
							</div>
							<div className={css.table__popoverCustom__line}></div>
							<div className={css.table__popoverCustom__record}>
								<NavLink className='flex items-center gap-1 --link-no-underline'>
									See more details 
									<span className='flex items-center --text-gray'>
										<MdArrowOutward />
									</span>
								</NavLink>
							</div>
						</div>
					}
				>
					<Button2 
						classname={css.table__buttonEys}
						onClick={popoverInfoToggle}
					>
						<IoEyeOutline />
					</Button2>
				</Popover>
				,
				<div>
					0xbc78ae369c431e5d9db30b7341e82a74a4b033f4fd9f3cc3edce9752a0ad5d1d
				</div>
				,
				<Popover
					placement={popoverPlacementType.top}
					content={'Deposit'}
				>
					<PillSquare
						type={pillSquareType.normal}
						className={`--hover-yellow ${css.table__dash}`}
					>
						Deposite
					</PillSquare>
				</Popover>
				,
				`37611665`
				,
				<Popover
					placement={popoverPlacementType.top}
					content={`13 secs ago`}
				>
					2024-04-06 3:18:33
				</Popover>
				,
				<div>
					<Popover
						placement={popoverPlacementType.top}
						content={`0xCc8E6d00C17eB431350C6c50d8b8F05176b90b11`}
						className={`--hover-yellow`}
					>
						<div>	
							0xCc8E6d00...176b90b11
						</div>
					</Popover>
					<CopyButton 
						content='0xCc8E6d00C17eB431350C6c50d8b8F05176b90b11'
					/>
				</div>
				,
				<PillSquare
					type={pillSquareType.yellow}
				>
					OUT
				</PillSquare>
				,
				<Popover
					placement={popoverPlacementType.top}
					className={`--hover-yellow`}
					content={<div className='flex items-center justify-center'>
						<span>
							BSC: Validator Set
						</span>
						<span>
							0xCc8E6d00C17eB431350C6c50d8b8F05176b90b11
						</span>
					</div>}
				>
					<IoDocumentTextOutline />
					BSC: Validator Set
				</Popover>
				,
				`0.02181819 BNB`
				,
				`0`
			]
		}
	]

	const listSearchItem = [
		{
			id: 1,
			content: <div className='flex items-center gap-1'>
				<FaCircle />
				View Completed Txns
			</div>
		},
		{
			id: 2,
			content: <div className='flex items-center gap-1'>
				<FaRegCircle />
				View Pending Txns
			</div>
		},
		{
			id: 3,
			content:
				<Popover
					placement={popoverPlacementType.top}
					content={`Option not available for this address`}
				>
					<div className='flex items-center gap-1 --text-gray'>
						<CiCircleAlert />
						View Failed Txns
					</div>
				</Popover>
			,
			lineBot: true,
			allowItemHover: false
		},
		{
			id: 4,
			content: <div className='flex items-center gap-1'>
				<FaLongArrowAltRight />
				View Outgoing Txns
			</div>
		},
		{
			id: 5,
			content: <div className='flex items-center gap-1'>
				<FaLongArrowAltLeft />
				View Incoming Txns
			</div>
		},
		{
			id: 6,
			content: <div className='flex items-center gap-1'>
				<GrArticle />
				View Contract Creation
			</div>
		}
	]
	//#endregion

	//#region state
	const [tabSelected, setTabSelected] = useState(listTab[0]);
	const [dropdownFilterShow, setDropdownFilterShow] = useState(false);
	//#endregion

	//#region function
	const dropdownFilterToggle = () => setDropdownFilterShow(state => !state);
	//#endregion

	return (
		<>
			<div className={css.table}>
				<div className={css.table__listTab}>
					<div>
						<ListTabs
							list={listTab}
							selectedItem={tabSelected}
							setSelectedItem={setTabSelected}
						/>
					</div>
					<div>
						<Button2 type={button2Type.outlineSmall}>
							<CiFilter />
							Advanced Filter
						</Button2>
					</div>
				</div>
				<Card className={css.table__card}>
					<div className={css.table__header}>
						<div className={css.table__header__left}>
							<FaSortAmountDown />
							Latest 25 from a total of 
							{" "}
							<Popover
								placement={popoverPlacementType.top}
								content={`Click to view full list`}
								className={`--text-blue`}
							>
								808,100 
							</Popover>
							{" "}
							transactions
						</div>
						<div className={css.table__header__right}>
							<Button2
								type={button2Type.outlineSmall}
							>
								<FaDownload />
								<span style={{whiteSpace: 'nowrap'}}>
									Download Page Data
								</span>
							</Button2>
							<Dropdown2
								list={listSearchItem}
								header={
									<Button2
										classname={`py-1`}
										type={button2Type.outlineSmall}
										onClick={dropdownFilterToggle}
									>
										<CiFilter />
										<IoChevronDownOutline />
									</Button2>
								}
								trigger={dropdown2TriggerType.runtime}
								show={dropdownFilterShow}
								align={dropdown2Align.right}
							/>
								
						</div>
					</div>
					<div>
						<Table
							listCol={listCol}
							showFooter={false}
							headerLeftContent={false}
							showPagingTop={false}
							listRecord={listRecord}
						/>
					</div>
					<div className={css.table__footer}>
						View all transactions 
						<MdArrowRightAlt />
					</div>
				</Card>
			</div>
		</>
)}

export default TableAddress;