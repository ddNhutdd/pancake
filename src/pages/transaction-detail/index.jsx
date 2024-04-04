import HeaderComponent2 from 'src/components/header-component-2';
import css from 'src/pages/block-detail/block.module.scss';
import css2 from './transaction-detail.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowMenu } from 'src/redux/slices/headerComponent2';
import Button2, { button2Type } from 'src/components/button-2';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import ListTabs from 'src/components/list-tabs';
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from 'src/components/dropdown-2';
import { FaListCheck } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import Overview from './overview';

const TransactionDetail = function () {
	const listTab = [
		{
			id:1,
			content: 'Overview'
		},
		{
			id: 2,
			content: 'Logs (4)'
		},
		{
			id: 3,
			content: 'State'
		}
	]
	const listDropdown = [
		{
			id: 1,
			content: 'Geth Debug Trace',

		},
		{
			id: 2,
			content: 'Geth Debug Trace_2'
		}
	]

	const dispatch = useDispatch();
	const [selectedTab, setSelectedTab] = useState(listTab[0]);
	const [showDropdown, setShowDropdown] = useState(false);
	

	
	const toggleDropdown = () =>  setShowDropdown(state => !state);
	const dropdownChange = () => {
		setShowDropdown(false)
	}
	

	useEffect(() => {
		dispatch(setShowMenu(true))
	}, [])

	return(<div className={css.block}>
		<div className={css.container}>
			<HeaderComponent2 
				mainContent={
					<div className={`flex items-center gap-2`}>
						Transaction Details
						<div className={`flex items-center gap-1`}>
							<Button2 classname={`${css.block__button}`}>
								<FaAngleLeft />
							</Button2>
							<Button2 classname={css.block__button}>
								<FaAngleRight />
							</Button2>
						</div>
					</div>
				}
			/>
			<div className='pt-3 pb-3'>
				Sponsored: img -
				{" "} 
				<NavLink>
					Harambe Token Presale: 
				</NavLink>
				The first A.I powered hedged fund with 100% APY! Get in early.
			</div>
			<div className='w-100 flex items-center justify-between mb-4'>
				<div>
					<ListTabs 
						list={listTab}
						selectedItem={selectedTab}
						setSelectedItem={setSelectedTab}
					/>
				</div>
				<div>
					<Dropdown2 
						header={
							<Button2 
								type={button2Type.outline}
								classname={css2.buttonDropdown} 
								onClick={toggleDropdown}
								
							>
								<FaListCheck />
								<IoChevronDownOutline />
							</Button2>
						}
						list={listDropdown}
						trigger={dropdown2TriggerType.runtime}
						show={showDropdown}
						align={dropdown2Align.right}
						onChange={dropdownChange}
					/>
				</div>
			</div>
			<Overview />
			<div>
				A transaction is a cryptographically signed instruction that changes the blockchain state. Block explorers track the details of all transactions in the network. Learn more about transactions in our Knowledge Base.
			</div>
		</div>
	</div>)
}

export default TransactionDetail;