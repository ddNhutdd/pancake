import HeaderComponent2 from 'src/components/header-component-2';
import css from './address-detail.module.scss';
import NoUser from 'src/assets/icons/no-user.icon.jsx';
import CopyButton from 'src/components/copy-button';
import QRButton from 'src/components/qr-button';
import ListCard from './list-card';
import TableAddress from './table-address';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowMenu } from 'src/redux/slices/headerComponent2';
import { NavLink } from 'react-router-dom';
import Pill, { pillTypes } from 'src/components/pill';
import { FiHash } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { FiTag } from 'react-icons/fi';
import Button2, { button2Type } from 'src/components/button-2';
import { FaRegStar } from 'react-icons/fa6';
import {
	Dropdown2,
	dropdown2Align,
	dropdown2TriggerType,
} from 'src/components/dropdown-2';
import { IoDocumentText } from 'react-icons/io5';
import { IoTimerOutline } from 'react-icons/io5';
import { TbUserCog } from 'react-icons/tb';
import { LuUserMinus2 } from 'react-icons/lu';
import { CiFlag1 } from 'react-icons/ci';
import { FaListCheck } from 'react-icons/fa6';
import { IoChevronDownOutline } from 'react-icons/io5';
import Loader from 'src/components/loader';
import { useParams } from 'react-router-dom';
import { addressDetailType, apiStatus, searchType } from 'src/constants';
import {
	getAddressData,
	getContractData,
	getDetailToken,
	getExchangeRateBNBtoUSD,
	getLatestTransactionsByAddress,
	search,
} from 'src/services/explorer.services';
import Empty from 'src/components/empty';

const AddressDetail = function () {
	const dispatch = useDispatch();
	const { addressnumber, tokennumber } = useParams();

	const listDropdown = [
		{
			id: 1,
			content: (
				<div className='flex items-center gap-1'>
					<IoDocumentText />
					Token Approvals
					<div className={css.addressDetail__pill}>
						<Pill type={pillTypes.gray}>Beta</Pill>
					</div>
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className='flex items-center gap-1'>
					<IoTimerOutline />
					Check Previous Balance
				</div>
			),
			lineBot: true,
		},
		{
			id: 4,
			content: (
				<div className='flex items-center gap-1'>
					<TbUserCog />
					Update Name Tag or Label
				</div>
			),
		},
		{
			id: 5,
			content: (
				<div className='flex items-center gap-1'>
					<LuUserMinus2 />
					Remove Name Tag
				</div>
			),
		},
		{
			id: 6,
			content: (
				<div className='flex items-center gap-1'>
					<CiFlag1 />
					Report/Flag Address
				</div>
			),
		},
	];

	// render class show nội dung lên giao diện
	const renderClassShowLoader = () =>
		fetchMainDataStatus === apiStatus.fetching ? '' : 'd-0';
	const renderClassShowContent = () =>
		fetchMainDataStatus === apiStatus.fullfiled ? '' : 'd-0';
	const renderClassShowError = () => fetchMainDataStatus === apiStatus.rejected ? '' : 'd-0';
	const renderMoreContent = () => {
		switch (header) {
			case addressDetailType.contract:
			case addressDetailType.address:
				return (
					<>
						<div className={css.addressDetail__sponsored}>
							<div>
								Sponsored:
								<img
									src='https://bscscan.com/images/gen/stake-4_20.png'
									alt='bscc'
								/>
								Stake:
							</div>
							<div>
								200% Bonus, 75k Raffle, Best VIP Program, Instant
								Withdrawals - Provably Fair.
							</div>
							<NavLink className={css['--link']}>Claim Bonus</NavLink>
						</div>
						<div
							className={`flex items-center justify-between mb-3 flex-sm-col gap-1`}
						>
							<div className='flex gap-1 flex-sm-col w-sm-100'>
								<Pill type={pillTypes.gray}>
									<div
										className='flex items-center gap-1'
										style={{ fontWeight: 400 }}
									>
										<FiTag />
										Validator: Alan Turing
										<FiExternalLink />
									</div>
								</Pill>
								<Pill type={pillTypes.white}>
									<div
										className='flex items-center gap-1'
										style={{ fontWeight: 400 }}
									>
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
					</>
				);

			case addressDetailType.token:
				return (
					<div className='my-2'>
						<Pill
							type={pillTypes.white}
						>
							BEP-20
						</Pill>
					</div>

				);

			default:
				break;
		}
	}

	// main data
	const [fetchMainDataStatus, setFetchMainDataStatus] = useState(apiStatus.pending);
	const [bnbToUsd, setBnbToUsd] = useState();
	const [info, setInfo] = useState(); // thông tin chung, không bao gồm list transaction
	const [header, setHeader] = useState();
	const [listTransacitonInfo, setListTransactionInfo] = useState({});
	const [error, setError] = useState();
	const fetchMainDataForNotToken = async () => {
		try {
			if (fetchMainDataStatus === apiStatus.fetching) {
				return;
			}
			setFetchMainDataStatus(apiStatus.fetching);
			const resp = await Promise.all([getExchangeRateBNBtoUSD(), getData(), getLatestTransactionsByAddress(addressnumber)]);
			setBnbToUsd(resp[0]?.data?.data);
			setInfo(resp[1]);
			setListTransactionInfo(JSON.parse(resp[2]?.data?.data))
			setFetchMainDataStatus(apiStatus.fullfiled);
		} catch (error) {
			const errorMess = error?.response?.data?.message;
			setError(errorMess)
			setFetchMainDataStatus(apiStatus.rejected);
		}
	};
	// khi địa chỉ là addres number thì sẽ call api search để xác định xem địa chỉ address có phải là contract hay không ròi call api phù hợp
	const getData = async () => {
		const respSearch = await search(addressnumber);
		const dataSearch = JSON.parse(respSearch?.data?.data);
		const type = dataSearch?.type;
		let data;
		if (type === searchType.addressEoa) {
			setHeader(addressDetailType.address);
			const respAddress = await getAddressData(addressnumber);
			data = respAddress;
		} else if (type === searchType.addressContract) {
			setHeader(addressDetailType.contract);
			const respContract = await getContractData(addressnumber);
			data = respContract;
		}
		return JSON.parse(data?.data?.data);
	}
	// nếu địa chỉ url là token 
	const fetchMainDataForToken = async () => {
		try {
			if (fetchMainDataStatus === apiStatus.fetching) {
				return;
			}
			setFetchMainDataStatus(apiStatus.fetching);

			const resp = await getDetailToken(tokennumber);
			const data = JSON.parse(resp?.data?.data);
			setInfo(() => data);

			setFetchMainDataStatus(apiStatus.fullfiled);

		} catch (error) {
			setFetchMainDataStatus(apiStatus.rejected);
			console.log(error);
		}
	}

	// header
	const renderHeader = () => {
		switch (header) {
			case addressDetailType.contract:
				return (
					<>
						<div>
							{addressDetailType.contract}
						</div>
						<div className={`${css.addressDetail__address}`}>
							{addressnumber}
						</div>
						<div className='flex items-center'>
							<CopyButton content={addressnumber} />
						</div>
						<div className='flex items-center'>
							<QRButton value={addressnumber || ''} />
						</div>
					</>
				)

			case addressDetailType.address:
				return (
					<>
						<div>
							{addressDetailType.address}
						</div>
						<div className={`${css.addressDetail__address}`}>
							{addressnumber}
						</div>
						<div className='flex items-center'>
							<CopyButton content={addressnumber} />
						</div>
						<div className='flex items-center'>
							<QRButton value={addressnumber || ''} />
						</div>
					</>
				)

			case addressDetailType.token:
				return (
					<>
						<div>{addressDetailType.token}</div>
						<div style={{ fontSize: '15px' }} className='flex gap-1'>
							<span>
								{info?.tokenName}
							</span>
							<span className='--text-gray'>
								({info?.tokenSymbol})
							</span>
						</div>
					</>
				)

			default:
				return header;
		}
	}

	// useEffect
	useEffect(() => {
		if (addressnumber) {
			dispatch(setShowMenu(true));
			fetchMainDataForNotToken();
		}
		if (tokennumber) {
			setHeader(addressDetailType.token);
			fetchMainDataForToken();
		}
		return () => {
			dispatch(setShowMenu(false));
		};
	}, []);

	return (
		<div className={css.addressDetail}>
			<div className={`${css.container} ${renderClassShowContent()}`}>
				<HeaderComponent2
					mainContent={
						<div className='flex items-center gap-1 flex-sm-wrap'>
							<div>
								<NoUser />
							</div>
							{renderHeader()}
						</div>
					}
				/>
				{renderMoreContent()}
				<ListCard
					type={header}
					content={info}
					bnbToUsd={bnbToUsd}
				/>
				<TableAddress dataInitial={listTransacitonInfo} />
			</div>
			<div className={renderClassShowLoader()}>
				<Loader />
			</div>
			<div className={`flex flex-col justify-center items-center ${renderClassShowError()}`}>
				<Empty />
				<div>{error}</div>
			</div>
		</div>
	);
};

export default AddressDetail;
