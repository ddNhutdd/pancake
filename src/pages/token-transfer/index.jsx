import HeaderComponent2 from 'src/components/header-component-2';
import css from './token-transfer.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import {CiCircleQuestion} from 'react-icons/ci';
import Popover, {
	popoverPlacementType,
	popoverTriggerType,
} from 'src/components/popover';
import Button2, {button2Type} from 'src/components/button-2';
import {IoEyeOutline} from 'react-icons/io5';
import {IoDocumentOutline} from 'react-icons/io5';
import CopyButton from 'src/components/copy-button';
import CirclePointRight from 'src/components/circle-point-right';
import bnb from 'imgs/staking-2.png';
import Info from './info';
import {useEffect, useState} from 'react';

function TokenTransfer() {
	const [showInfo, setShowInfo] = useState(false);

	const showInfoClickHandle = (ev) => {
		ev.stopPropagation();
		setShowInfo((s) => !s);
	};

	const listCol = [
		{
			id: 1,
			header: <CiCircleQuestion />,
		},
		{
			id: 2,
			header: `Txn Hash`,
		},
		{
			id: 3,
			header: (
				<div className={`flex items-center gap-1`}>
					Method
					<Popover
						placement={popoverPlacementType.top}
						className={`flex items-center`}
						content={
							<div>
								<div>
									Function excutive base on decode input data.
								</div>
								<div>
									For undifined function, method id is display
									instead
								</div>
							</div>
						}
					>
						<CiCircleQuestion />
					</Popover>
				</div>
			),
		},
		{
			id: 4,
			header: 'Block',
		},
		{
			id: 5,
			header: (
				<Popover
					placement={popoverPlacementType.top}
					content={`Click to show Age Format`}
					className={`--text-blue`}
				>
					Date Time (UTC)
				</Popover>
			),
		},
		{
			id: 6,
			header: 'From',
		},
		{
			id: 7,
			header: ``,
		},
		{
			id: 8,
			header: 'To',
		},
		{
			id: 9,
			header: 'Value',
		},
		{
			id: 10,
			header: 'Token',
		},
	];
	const listRecord = [
		{
			id: 1,
			cols: [
				<Popover
					key={`1-1`}
					classNamePopover={css.tokenTransfer__info}
					placement={popoverPlacementType.right}
					content={<Info />}
					trigger={popoverTriggerType.runtime}
					show={showInfo}
				>
					<Button2
						onClick={showInfoClickHandle}
						type={button2Type.outlineSmall}
					>
						<IoEyeOutline />
					</Button2>
				</Popover>,
				<span
					key={`1-2`}
					className='--text-blue'
				>
					0x4020fe29232b282...
				</span>,
				<Button2
					key={`1-3`}
					type={button2Type.outlineSmall}
					classname={`${css.tokenTransfer__method} --hover-yellow `}
				>
					Multicall
				</Button2>,
				<span
					key={`1-3`}
					className='--text-blue'
				>
					37209097
				</span>,
				<Popover
					key={`1-4`}
					placement={popoverPlacementType.top}
					content={`6 secs ago`}
				>
					2024-03-23 3:10:07
				</Popover>,
				<div
					key={`1-5`}
					className='flex items-center'
				>
					<Popover
						placement={popoverPlacementType.top}
						content={`Public tag: PancakeSwap V2: PIPI 58`}
						className={`flex items-center gap-1 --hover-yellow`}
					>
						<IoDocumentOutline />
						PancakeSwap V2: PIPI...
					</Popover>
					<CopyButton
						content={`0xaf7d07fdsa7fds7afd0s7fdfd5afd8sa`}
					/>
				</div>,
				<CirclePointRight key={`1-6`} />,
				<div
					key={`1-7`}
					className={`flex items-center`}
				>
					<Popover
						placement={popoverPlacementType.top}
						content={`0x81CC7b3C13232yuyuiyiuy21y34E4664d3f`}
						className={`--hover-yellow `}
					>
						0x81CC7b3C...4E4664d3f
					</Popover>
					<CopyButton
						content={`0x81CC7b3C13232yuyuiyiuy21y34E4664d3f`}
					/>
				</div>,
				<Popover
					key={`1-8`}
					placement={popoverPlacementType.top}
					content={`502,589,542.493797064`}
				>
					502,589,542.493797064
				</Popover>,
				<div
					key={`1-9`}
					className={`${css.tokenTransfer__token} --hover-yellow`}
				>
					<img
						src={bnb}
						alt='bnb'
					/>
					<span>Wrapped BNB</span>
					<span>(WBNB)</span>
				</div>,
			],
		},
	];

	useEffect(() => {
		const closePopoverInfo = setShowInfo.bind(null, false);
		document.addEventListener('click', closePopoverInfo);

		return () => {
			document.removeEventListener('click', closePopoverInfo);
		};
	}, []);

	return (
		<div className={css.tokenTransfer}>
			<div className={css.container}>
				<HeaderComponent2 mainContent='Token Transfers (BEP-20)' />
				<Card className={css.tokenTransfer__card}>
					<Table
						headerLeftContent={
							<>
								<div>
									More than 10,000,000 transactions found
								</div>
								<div>
									(Showing the last 10,000 records only)
								</div>
							</>
						}
						listCol={listCol}
						listRecord={listRecord}
					/>
				</Card>
			</div>
		</div>
	);
}

export default TokenTransfer;
