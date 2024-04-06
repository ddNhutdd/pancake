import HeaderComponent2 from 'src/components/header-component-2';
import css from './address-detail.module.scss';
import NoUser from 'src/assets/icons/no-user.icon.jsx'
import CopyButton from 'src/components/copy-button';
import QRButton from 'src/components/qr-button';
import ListCard from './list-card';
import TableAddress from './table-address';
import { useEffect, useState } from 'react';
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
import { FaListCheck } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { splitStringToDivs } from 'src/utils/utils';
import Loader from 'src/components/loader';
import {useParams} from 'react-router-dom';
import { apiStatus } from 'src/constants';
import { getAddressData, getExchangeRateBNBtoUSD } from 'src/services/explorer.services';

const AddressDetail = function () {
	//#region order hook
	const dispatch = useDispatch();
	const {
		addressnumber
	} = useParams();
	//#endregion

	//#region data
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
	//#endregion

	//#region state
	const [addressInfo, setAddressInfo] = useState();
	const [bnbToUsd, setBnbToUsd] = useState();
	const [fetchMainDataStatus, setFetchMainDataStatus] = useState(apiStatus.pending);
	//#endregion

	//#region function
	const fetchMainData = async () => {
		try {
			if(fetchMainDataStatus === apiStatus.fetching) return;
			setFetchMainDataStatus(apiStatus.fetching);

			const resp = await Promise.all([getAddressData(addressnumber), getExchangeRateBNBtoUSD()]) ;
			const dataInfo = JSON.parse(resp[0]?.data?.data);
			setAddressInfo(dataInfo);
			const dataExchange = resp[1]?.data?.data;
			setBnbToUsd(dataExchange);

			setFetchMainDataStatus(apiStatus.fullfiled);
		} catch (error) {
			console.log(error);
			setFetchMainDataStatus(apiStatus.rejected);
		}
	}
	const renderClassShowLoader = () => fetchMainDataStatus === apiStatus.fetching ? '' : 'd-0';
	const renderClassShowContent = () => fetchMainDataStatus === apiStatus.fullfiled ? '' : 'd-0';
	//#endregion

	//#region useEffect
	useEffect(()=>{
		dispatch(setShowMenu(true));
		fetchMainData();
		return () => {
			dispatch(setShowMenu(false));
		}
	}, [])
	useEffect(()=>{
		console.log(addressInfo);
		console.log(bnbToUsd);
	}, [addressInfo, bnbToUsd])
	//#endregion

	return(
		<div className={css.addressDetail}>
			<div className={`${css.container} ${renderClassShowContent()}`}>
				<HeaderComponent2 
					mainContent={
						<div className='flex items-center gap-1 flex-sm-wrap'>
							<div>
								<NoUser />
							</div>
							<div>
								Address
							</div>
							<div className={`${css.addressDetail__address}`}>
								{splitStringToDivs(addressnumber)}
							</div>
							<div className='flex items-center'>
								<CopyButton />
							</div>
							<div className='flex items-center'>
								<QRButton value={addressnumber} />
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
				<div className={`flex items-center justify-between mb-3 flex-sm-col gap-1`}>
					<div className='flex gap-1 flex-sm-col w-sm-100'>
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
					<div className='flex gap-1 flex-sm-col w-sm-100'>
						<div>
							<Button2 
								classname={`py-1`}
								type={button2Type.outlineSmall}
							>
								<FaRegStar />
							</Button2>
						</div>
						<Dropdown2
							trigger={dropdown2TriggerType.click}
							header={
								<Button2
									classname={`py-1`}
									type={button2Type.outlineSmall}
								>
									<FaListCheck />
									<IoChevronDownOutline />
								</Button2>
							}
							list={listDropdown}
							align={dropdown2Align.right}
						/>
						
					</div>
				</div>
				<ListCard content={addressInfo} bnbToUsd={bnbToUsd} />
				<TableAddress />
			</div>
			<div className={renderClassShowLoader()}>
				<Loader />
			</div>
		</div>
	)
}

export default AddressDetail;