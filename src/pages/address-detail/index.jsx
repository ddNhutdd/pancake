import HeaderComponent2 from 'src/components/header-component-2';
import css from './address-detail.module.scss';
import NoUser from 'src/assets/icons/no-user.icon.jsx'
import CopyButton from 'src/components/copy-button';
import QRButton from 'src/components/qr-button';
import ListCard from './list-card';
import Table from './table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowMenu } from 'src/redux/slices/headerComponent2';
import { NavLink } from 'react-router-dom';
import Pill, { pillTypes } from 'src/components/pill';
import { FiHash } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import Button2, { button2Type } from 'src/components/button-2';
import { FaRegStar } from "react-icons/fa6";
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from 'src/components/dropdown-2';
import { IoDocumentText } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";
import { TbUserCog } from "react-icons/tb";
import { LuUserMinus2 } from "react-icons/lu";
import { CiFlag1 } from "react-icons/ci";

const AddressDetail = function () {
	const dispatch = useDispatch();
	const listDropdown = [
		{
			id: 1,
			content: <div className='flex items-center gap-1'>
				<IoDocumentText/>
				Token Approvals 
				<div className={css.addressDetail__pill}>
					<Pill
						type={pillTypes.gray}
					>
						Beta
					</Pill>
				</div>
			</div>
		},
		{
			id: 2,
			content: <div className='flex items-center gap-1'>
				<IoTimerOutline/>
				Check Previous Balance
			</div>,
			lineBot: true

		},
		{
			id: 4,
			content: <div className='flex items-center gap-1'>
				<TbUserCog />
				Update Name Tag or Label
			</div>
		},
		{
			id: 5,
			content: <div className='flex items-center gap-1'>
				<LuUserMinus2 />
				Remove Name Tag
			</div>
		},
		{
			id: 6,
			content: <div className='flex items-center gap-1'>
				<CiFlag1 />
				Report/Flag Address
			</div>
		}
	]

	useEffect(()=>{
		dispatch(setShowMenu(true));

		return () => {
			dispatch(setShowMenu(false));
		}
	}, [])

	return(
		<div className={css.addressDetail}>
			<div className={css.container}>
				<HeaderComponent2 
					mainContent={
						<div className='flex items-center gap-1'>
							<div>
								<NoUser />
							</div>
							<div>
								Address
							</div>
							<div className={css.addressDetail__address}>
								0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01
							</div>
							<div className='flex items-center'>
								<CopyButton />
							</div>
							<div className='flex items-center'>
								<QRButton value={`0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01`} />
							</div>
						</div>
					}
				/>
				<div className={css.addressDetail__sponsored}>
					<div>
						Sponsored: 
							<img src="https://bscscan.com/images/gen/stake-4_20.png" alt="bscc" />
						Stake:
					</div>
					<div>
						200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals - Provably Fair.
					</div>
					<NavLink className={css['--link']}>
					 	Claim Bonus 
					</NavLink>
				</div>
				<div className={`flex items-center justify-between`}>
					<div className='flex gap-1'>
						<Pill type={pillTypes.gray}>
							<div className='flex items-center gap-1' style={{fontWeight: 400}}>
								<FiTag />
								Validator: Alan Turing
								<FiExternalLink />
							</div>
						</Pill>
						<Pill type={pillTypes.white}>
							<div className='flex items-center gap-1' style={{fontWeight: 400}}>
								<FiHash />
								Validators
							</div>
						</Pill>
					</div>
					<div className='flex gap-1'>
						<Button2 
							classname={`py-1`}
							type={button2Type.outlineSmall}
						>
							<FaRegStar />
						</Button2>
						<Dropdown2
							trigger={dropdown2TriggerType.click}
							header={
								<Button2
									classname={`py-1`}
									type={button2Type.outlineSmall}
								>
									fdas
								</Button2>
							}
							list={listDropdown}
							align={dropdown2Align.right}
						/>
						
					</div>
				</div>
				<ListCard />
				<Table />
			</div>
		</div>
	)
}

export default AddressDetail;