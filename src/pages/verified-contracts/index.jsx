import HeaderComponent2 from 'src/components/header-component-2';
import css from './verified-contracts.module.scss';
import Card from 'src/components/card';
import Table from 'src/components/table';
import Button2, {button2Type} from 'src/components/button-2';
import {IoIosSearch} from 'react-icons/io';
import {
	Dropdown2,
	dropdown2Align,
	dropdown2TriggerType,
} from 'src/components/dropdown-2';
import Popover, {popoverPlacementType} from 'src/components/popover';
import {CiCircleQuestion} from 'react-icons/ci';
import CopyButton from 'src/components/copy-button';
import {IoDocumentOutline} from 'react-icons/io5';

function VerifiedContracts() {
	const listFilter = [
		{
			id: 1,
			content: '123123',
		},
		{
			id: 2,
			content: '123123',
		},
		{
			id: 3,
			content: '123123',
		},
	];
	const dropdownCh = (selectedItem, ev) => {
		selectedItem, ev;
	};
	const listCol = [
		{
			id: 1,
			header: `Address`,
		},
		{
			id: 2,
			header: `Contract Name`,
		},
		{
			id: 3,
			header: `Compiler`,
		},
		{
			id: 4,
			header: `Version`,
		},
		{
			id: 5,
			header: `Balance`,
		},
		{
			id: 6,
			header: `Txns`,
		},
		{
			id: 7,
			header: `Setting`,
		},
		{
			id: 8,
			header: `Verified`,
		},
		{
			id: 9,
			header: (
				<div className='flex items-center gap-2'>
					Audit
					<Popover
						placement={popoverPlacementType.top}
						content={`Smart contact audit and security`}
						className={`flex items-center`}
					>
						<CiCircleQuestion />
					</Popover>
				</div>
			),
		},
		{
			id: 10,
			header: (
				<div className='flex items-center gap-2'>
					Audit
					<Popover
						placement={popoverPlacementType.top}
						content={`Smart contact audit and security`}
						className={`flex items-center --text-blue`}
					>
						<CiCircleQuestion />
					</Popover>
				</div>
			),
		},
		{
			id: 11,
			header: `Similar Contract`,
		},
	];
	const listRecord = [
		{
			id: 1,
			cols: [
				<div
					key={`1-1`}
					className='flex items-center'
				>
					<Popover
						content={`0x18EFb381123213213213213213213dEbD4E5D`}
						placement={popoverPlacementType.top}
						className={`flex items-center --text-blue`}
					>
						<IoDocumentOutline />
						0x18EFb381...3dEbD4E5D
					</Popover>
					<CopyButton content={`123321`} />
				</div>,
				`CDFToken`,
				`Solidity(Json)`,
				`0.8.24`,
				`0 BNB`,
				`1`,
				``,
				`3/22/2024`,
				`-`,
				`-`,
				<Button2
					key={`1-2`}
					type={button2Type.outlineSmall}
					classname={css.verifiedContracts__search}
				>
					<IoIosSearch />
					Search
				</Button2>,
			],
		},
	];

	return (
		<div className={css.verifiedContracts}>
			<div className={css.container}>
				<HeaderComponent2 mainContent={`Verified Contracts`} />
				<Card className={css.verifiedContracts__card}>
					<div className={css.verifiedContracts__cardHeader}>
						<div className={css.verifiedContracts__cardLeft}>
							<Dropdown2
								header={
									<Button2 type={button2Type.outlineSmall}>
										Fitler by | abcabc
									</Button2>
								}
								trigger={dropdown2TriggerType.click}
								list={listFilter}
								align={dropdown2Align.left}
								onChange={dropdownCh}
							/>
						</div>
						<div className={css.verifiedContracts__cardRight}>
							<Dropdown2
								header={
									<Button2 type={button2Type.outlineSmall}>
										<IoIosSearch />
									</Button2>
								}
								trigger={dropdown2TriggerType.click}
								list={listFilter}
								align={dropdown2Align.right}
								onChange={dropdownCh}
							/>
						</div>
					</div>
					<Table
						listCol={listCol}
						listRecord={listRecord}
						headerLeftContent={`Showing the last 500 verified contracts source code`}
					/>
				</Card>
				<div className='flex justify-end'>
					Source Code
					<span className='--text-blue'>Terms of Usage.</span>
				</div>
			</div>
		</div>
	);
}

export default VerifiedContracts;
