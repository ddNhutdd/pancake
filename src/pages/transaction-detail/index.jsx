import HeaderComponent2 from 'src/components/header-component-2';
import css from 'src/pages/block-detail/block.module.scss';
import css2 from './transaction-detail.module.scss';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setShowMenu} from 'src/redux/slices/headerComponent2';
import Button2, {button2Type} from 'src/components/button-2';
import {FaAngleLeft} from 'react-icons/fa6';
import {FaAngleRight} from 'react-icons/fa6';
import {NavLink} from 'react-router-dom';
import ListTabs from 'src/components/list-tabs';
import {
	Dropdown2,
	dropdown2Align,
	dropdown2TriggerType,
} from 'src/components/dropdown-2';
import {FaListCheck} from 'react-icons/fa6';
import {IoChevronDownOutline} from 'react-icons/io5';
import Overview from './overview';
import Log from './log';
import State from './state';
import Loader2 from 'src/components/loader-2';
import {getTransactionReceiptEventLogs} from 'src/services/explorer.services';
import {useParams} from 'react-router-dom';
import {apiStatus} from 'src/constants';

const TransactionDetail = function () {
	const {transactionnumber} = useParams();
	const listDropdown = [
		{
			id: 1,
			content: 'Geth Debug Trace',
		},
		{
			id: 2,
			content: 'Geth Debug Trace_2',
		},
	];

	const dispatch = useDispatch();
	const [showDropdown, setShowDropdown] = useState(false);
	const [listTab, setListTab] = useState([
		{
			id: 1,
			content: 'Overview',
		},
		{
			id: 2,
			content: (
				<div>
					<Loader2 />
				</div>
			),
		},
		{
			id: 3,
			content: 'State',
		},
	]);
	const [selectedTab, setSelectedTab] = useState(listTab[0]);
	const [fetchListLogsStatus, setFetchListLogsStatus] = useState(
		apiStatus.pending,
	);
	const [listLogs, setListLogs] = useState([]);
	const [error, setError] = useState();

	const toggleDropdown = () => setShowDropdown((state) => !state);
	const dropdownChange = () => {
		setShowDropdown(false);
	};
	const renderContent = () => {
		switch (selectedTab.content) {
			case listTab[0].content:
				return <Overview />;
			case listTab[1].content:
				return (
					<Log
						list={listLogs}
						status={fetchListLogsStatus}
						error={error}
					/>
				);
			case listTab[2].content:
				return <State />;
			default:
				break;
		}
	};
	const fetchLog = async () => {
		try {
			if (fetchListLogsStatus === apiStatus.fetching) return;
			setFetchListLogsStatus(apiStatus.fetching);
			const resp =
				await getTransactionReceiptEventLogs(transactionnumber);
			const data = JSON.parse(resp?.data?.data);
			setListLogs(data);
			const length = data.length || 0;
			setListTab([
				{
					id: 1,
					content: 'Overview',
				},
				{
					id: 2,
					content: <div>Logs ({length})</div>,
				},
				{
					id: 3,
					content: 'State',
				},
			]);
			setFetchListLogsStatus(apiStatus.fullfiled);
		} catch (error) {
			error;
			const err = error?.response?.data?.message;
			setError(err);
			setListTab([
				{
					id: 1,
					content: 'Overview',
				},
				{
					id: 2,
					content: <div>Logs (0)</div>,
				},
				{
					id: 3,
					content: 'State',
				},
			]);
			setFetchListLogsStatus(apiStatus.rejected);
		}
	};

	useEffect(() => {
		dispatch(setShowMenu(true));
		fetchLog();
	}, []);

	return (
		<div className={css.block}>
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
					Sponsored: img - <NavLink>Harambe Token Presale:</NavLink>
					The first A.I powered hedged fund with 100% APY! Get in
					early.
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
				{renderContent()}
				<div>
					A transaction is a cryptographically signed instruction that
					changes the blockchain state. Block explorers track the
					details of all transactions in the network. Learn more about
					transactions in our Knowledge Base.
				</div>
			</div>
		</div>
	);
};

export default TransactionDetail;
