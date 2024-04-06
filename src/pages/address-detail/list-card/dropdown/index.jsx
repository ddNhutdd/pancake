import css from './dropdown.module.scss';
import { IoInformationCircle } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Dropdown2, dropdown2TriggerType } from 'src/components/dropdown-2';
import Input3 from 'src/components/input-3';
import Popover, { popoverPlacementType } from 'src/components/popover';
import { FaSortDown } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import DropdownItem from './dropdown-item';
import { useState } from 'react';

const Dropdown = function () {
	//#region state
	const [showDropdown, setShowDropdown] = useState(false);
	//#endregion

	//#region raw data
	const listDropdownItem = [
		{
			id: 1,
			left: <div>
				<div className={css.dropdown__itemLeft}>
					<img src="https://bscscan.com/token/images/ethereum_32.png" alt="ethereum" />
					Binance-Peg ...  (ETH)
				</div>
				<div className={`--text-gray`}>
					0.00404291 ETH
				</div>
			</div>,
			right: <div>
				<div>
					$13.44
				</div>
				<div className={`--text-gray`}>
					@3,323.6243
				</div>
			</div>
		},
		{
			id: 2,
			left: <div>
				<div className={css.dropdown__itemLeft}>
					<img src="https://bscscan.com/token/images/ethereum_32.png" alt="ethereum" />
					Binance-Peg ...  (ETH)
				</div>
				<div className={`--text-gray`}>
					0.00404291 ETH
				</div>
			</div>,
			right: <div>
				<div>
					$13.44
				</div>
				<div className={`--text-gray`}>
					@3,323.6243
				</div>
			</div>
		},
		{
			id: 3,
			left: <div>
				<div className={css.dropdown__itemLeft}>
					<img src="https://bscscan.com/token/images/ethereum_32.png" alt="ethereum" />
					Binance-Peg ...  (ETH)
				</div>
				<div className={`--text-gray`}>
					0.00404291 ETH
				</div>
			</div>,
			right: <div>
				<div>
					$13.44
				</div>
				<div className={`--text-gray`}>
					@3,323.6243
				</div>
			</div>
		},
		{
			id: 4,
			left: <div>
				<div className={css.dropdown__itemLeft}>
					<img src="https://bscscan.com/token/images/ethereum_32.png" alt="ethereum" />
					Binance-Peg ...  (ETH)
				</div>
				<div className={`--text-gray`}>
					0.00404291 ETH
				</div>
			</div>,
			right: <div>
				<div>
					$13.44
				</div>
				<div className={`--text-gray`}>
					@3,323.6243
				</div>
			</div>
		}
	]
	//#endregion

	//#region function
	const renderListItemDropdown = () => listDropdownItem.map(item => <DropdownItem key={item.id} content={item} />);
	const dropdownToggle = () => setShowDropdown(state => !state);
	//#endregion

	//#region raw data
	const listDropdown = [
		{
			id: 1,
			content: (
				<div className='flex flex-col w-100'>
					<div>
						<Input3 placeholder={`Search for Token Name`} />
					</div>
					<div className={css.dropdown__mainContent}>
						<div className={css.dropdown__sort}>
							<div>
								BEP-20 Tokens (&gt;100)
							</div>
							<Popover
								placement={popoverPlacementType.top}
								content={`Click to sort`}
							>
								<FaSortDown />
								<FaSortUp />
							</Popover>
						</div>
						<div style={{marginTop:'23px'}}>
							{renderListItemDropdown()}
						</div>
					</div>
					<div className={css.dropdown__footer}>
						<FaWallet />
						View All holding
					</div>
				</div>
			)
		}
	]
	//#endregion

	return (
	<Dropdown2
		header={
			<div
				onClick={dropdownToggle}
				className={css.dropdown}
			>
				<div>
					{">$18.83"}
				</div>
				<div className='flex items-center --text-gray ml-1'>
					{"(>108 Tokens)"}
					<IoInformationCircle />
				</div>
				<div className='ml-a flex items-center'>
					<FaAngleDown />
				</div>
			</div>
		}
		list={listDropdown}
		allowItemHover={false}
		trigger={dropdown2TriggerType.runtime}
		show={showDropdown}
	/>	
)}

export default Dropdown;