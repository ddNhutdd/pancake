import HeaderComponent2 from 'src/components/header-component-2';
import css from './top-statics.module.scss';
import ListTabs from '../../components/list-tabs';
import Card from 'src/components/card';
import TopStaticsItem from './top-statics-item';
import {useState} from 'react';
import bnb from 'imgs/staking-2.png';
import {SiGoogledocs} from 'react-icons/si';
import Popover, {popoverPlacementType} from 'src/components/popover';

function TopStatics() {
	const listType = [
		{
			id: 1,
			content: 'Overview',
		},
		{
			id: 2,
			content: 'Transactions',
		},
		{
			id: 3,
			content: 'Tokens',
		},
		{
			id: 4,
			content: 'Network',
		},
		{
			id: 5,
			content: 'Hot Contracts',
		},
	];
	const listTime = [
		{
			id: 1,
			content: '1 Day',
		},
		{
			id: 2,
			content: '3 Days',
		},
		{
			id: 3,
			content: '7 Days',
		},
	];
	const listItem = [
		{
			id: 1,
			headerLeft: 'Transactions',
			headerRight: <span className='--text-blue'>View Top 20</span>,
			rows: [
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Binance: Hot Wallet 6
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<img
								src={bnb}
								alt='bnb'
							/>
							<div className='--text-gray'>150,016.08805193</div>
						</div>
					),
				},
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Binance: Hot Wallet 6
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<img
								src={bnb}
								alt='bnb'
							/>
							<div className='--text-gray'>150,016.08805193</div>
						</div>
					),
				},
				{
					leftTop: `Top Txn Count Sent`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Bybit: Hot Wallet
						</Popover>
					),
					rightTop: `Total Txn`,
					rightBot: (
						<span className='--text-gray'>150,016.08805193</span>
					),
				},
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Binance: Hot Wallet 6
						</Popover>
					),
					rightTop: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<SiGoogledocs />
							<span className='--text-blue'>
								BUSD-T Stablecoin
							</span>
						</div>
					),
					rightBot: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<img
								src={bnb}
								alt='bnb'
							/>
							<div className='--text-gray'>150,016.08805193</div>
						</div>
					),
				},
			],
		},
		{
			id: 2,
			headerLeft: 'Tokens',
			headerRight: <span className='--text-blue'>View Top 20</span>,
			rows: [
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							<div className='flex gap-1 items-center'>
								<img
									src={bnb}
									alt='bnb'
								/>
								<div className='--text-gray'>
									Binance: Hot Wallet 6
								</div>
							</div>
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<img
								src={bnb}
								alt='bnb'
							/>
							<div className='--text-gray'>150,016.08805193</div>
						</div>
					),
				},
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							<div className='flex gap-1 items-center'>
								<img
									src={bnb}
									alt='bnb'
								/>
								<div className='--text-gray'>
									Binance: Hot Wallet 6
								</div>
							</div>
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<img
								src={bnb}
								alt='bnb'
							/>
							<div className='--text-gray'>150,016.08805193</div>
						</div>
					),
				},
				{
					leftTop: `Top Txn Count Sent`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							<div className='flex gap-1 items-center'>
								<img
									src={bnb}
									alt='bnb'
								/>
								<div className='--text-gray'>
									Binance: Hot Wallet 6
								</div>
							</div>
						</Popover>
					),
					rightTop: `Total Txn`,
					rightBot: (
						<span className='--text-gray'>150,016.08805193</span>
					),
				},
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							<div className='flex gap-1 items-center justify-end'>
								<img
									src={bnb}
									alt='bnb'
								/>
								<div className='--text-gray'>
									Binance: Hot Wallet 6
								</div>
							</div>
						</Popover>
					),
					rightTop: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<SiGoogledocs />
							<span className='--text-blue'>
								BUSD-T Stablecoin
							</span>
						</div>
					),
					rightBot: (
						<div className='flex gap-1 items-center justify-end justify-sm-start'>
							<img
								src={bnb}
								alt='bnb'
							/>
							<div className='--text-gray'>150,016.08805193</div>
						</div>
					),
				},
			],
		},
		{
			id: 3,
			headerLeft: 'Network',
			headerRight: <span className='--text-blue'>View Top 20</span>,
			rows: [
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Binance: Hot Wallet 6
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='--text-gray'>150,016.08805193</div>
					),
				},
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Binance: Hot Wallet 6
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='--text-gray'>150,016.08805193</div>
					),
				},
			],
		},
		{
			id: 4,
			headerLeft: 'Validators',
			headerRight: ``,
			rows: [
				{
					leftTop: `Top BNB Sender`,
					leftBot: (
						<Popover
							placement={popoverPlacementType.top}
							content={`0x8894E0a0c962CB723c1976a4421c95949bE2D4E3`}
							className='--text-blue'
						>
							Binance: Hot Wallet 6
						</Popover>
					),
					rightTop: `Total BNB`,
					rightBot: (
						<div className='--text-gray'>150,016.08805193</div>
					),
				},
			],
		},
	];

	const [selectedType, setSelectedType] = useState(listType[0]);
	const [selectedTime, setSelectedTime] = useState(listTime[0]);

	const renderlistItem = () =>
		listItem.map((item) => (
			<div
				key={item.id}
				className={`col-6 col-lg-12`}
			>
				<TopStaticsItem content={item} />
			</div>
		));

	return (
		<div className={css.topStatics}>
			<div className={css.container}>
				<HeaderComponent2 mainContent={`Top Statistics`} />
				<div className='py-3'>
					<ListTabs
						selectedItem={selectedType}
						setSelectedItem={setSelectedType}
						list={listType}
					/>
				</div>
				<Card>
					<div className={`row`}>
						<div className={`col-6 col-sm-12`}>
							<ListTabs
								list={listTime}
								selectedItem={selectedTime}
								setSelectedItem={setSelectedTime}
							/>
						</div>
						<div
							className={`col-6 text-right col-sm-12 text-sm-left`}
						>
							24 Mar - 25 Mar
						</div>
						{renderlistItem()}
					</div>
				</Card>
			</div>
		</div>
	);
}

export default TopStatics;
