import HeaderComponent2 from 'src/components/header-component-2';
import css from './top-account.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import {BsSortDown} from 'react-icons/bs';
import Popover, {popoverPlacementType} from 'src/components/popover';
import CopyButton from 'src/components/copy-button';
import {IoDocumentOutline} from 'react-icons/io5';

function TopAccount() {
	const listCol = [
		{
			id: 1,
			header: `#`,
		},
		{
			id: 2,
			header: 'Address',
		},
		{
			id: 3,
			header: 'Name Tag',
		},
		{
			id: 4,
			header: (
				<div className='flex items-center gap-2'>
					<BsSortDown />
					Balance
				</div>
			),
		},
		{
			id: 5,
			header: `Percentage`,
		},
		{
			id: 6,
			header: `Txn Count`,
		},
	];
	const listRecord = [
		{
			id: 1,
			cols: [
				`1`,
				<div
					key={`1-1`}
					className='flex items-center gap-2'
				>
					<Popover
						placement={popoverPlacementType.top}
						content={`contract`}
						className={`flex items-center`}
					>
						<IoDocumentOutline />
					</Popover>
					<Popover
						placement={popoverPlacementType.top}
						content={`0x0000000000000000000001004`}
						className='--text-blue'
					>
						0x000...000001004
					</Popover>
					<CopyButton content={`123123`} />
				</div>,
				`BSC: Token Hub`,
				`152,386,509.38295844 BNB`,
				'--',
				`5,470,089`,
			],
		},
	];

	return (
		<div className={css.topAccount}>
			<div className={css.container}>
				<HeaderComponent2
					mainContent={`Top Accounts by BNB Balance `}
				/>

				<Card className={css.topAccount__card}>
					<Table
						listCol={listCol}
						listRecord={listRecord}
						headerLeftContent={
							<div className='flex items-start flex-col p-0'>
								<span className={css.topAccount__table__top}>
									More than{' '}
									<span className='--text-blue'>
										1,999,999 accounts found
									</span>{' '}
									(24,020,051.62 BNB)
								</span>
								<span className={css.topAccount__table__bot}>
									(Showing the last 10,000 top accounts only)
								</span>
							</div>
						}
					/>
				</Card>
			</div>
		</div>
	);
}

export default TopAccount;
