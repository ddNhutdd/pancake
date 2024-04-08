import HeaderComponent2 from 'src/components/header-component-2';
import css from './top-mints.module.scss';
import HeaderTime from 'src/components/header-time';
import Card from 'src/components/card';
import Table from 'src/components/table';
import Popover, {popoverPlacementType} from 'src/components/popover';
import bnb from 'imgs/staking-2.png';
import {HiOutlineCheckBadge} from 'react-icons/hi2';
import Pill, {pillTypes} from 'src/components/pill';
import Process from './process';

function TopMints() {
	const listTime = {
		m1: '1m',
		m3: '3m',
		m5: '5m',
		m15: '15m',
		m20: '20m',
		h1: '1h',
	};
	const listCol = [
		{
			id: 1,
			header: `#`,
		},
		{
			id: 2,
			header: `Collection`,
		},
		{
			id: 3,
			header: `Type`,
		},
		{
			id: 4,
			header: `Mints`,
		},
		{
			id: 5,
			header: `Unique Minters`,
		},
		{
			id: 6,
			header: `Total Owners`,
		},
		{
			id: 7,
			header: `Total Assets`,
		},
	];
	const listRecord = [
		{
			id: 1,
			cols: [
				`1`,
				<div
					key={`1-1`}
					className={`flex items-center gap-1`}
				>
					<Popover
						placement={popoverPlacementType.top}
						content={`0x432h42k42j4l321uo4u32io432j4kl32jk`}
						className={css.topMints__collection}
					>
						<img
							src={bnb}
							alt='bnb'
						/>
						Galxe OAT
					</Popover>
					<Popover
						placement={popoverPlacementType.top}
						className={`flex items-center gap-1`}
						content={
							<div className='flex items-center flex-col justify-center p-0'>
								<span>
									Repulic NEUTRAL: Some infomation on this
									token has
								</span>
								<span>
									been verified by BcsScan. Click for more
									info
								</span>
							</div>
						}
					>
						<HiOutlineCheckBadge />
					</Popover>
				</div>,
				<Pill
					key={`1-2`}
					type={pillTypes.white}
				>
					BEP-721
				</Pill>,
				<Process
					key={`1-3`}
					number={54}
					percent={80}
				/>,
				<Process
					key={`1-4`}
					number={54}
					percent={45}
				/>,
				`1,292,974`,
				`10,358,004`,
			],
		},
	];

	return (
		<div className={css.topMints}>
			<div className={css.container}>
				<HeaderComponent2 mainContent={`NFT Top Mints`} />
				<HeaderTime list={listTime} />
				<Card>
					<Table
						showHeader={false}
						showFooter={false}
						listCol={listCol}
						listRecord={listRecord}
					/>
				</Card>
			</div>
		</div>
	);
}

export default TopMints;
