import Card from 'src/components/card';
import css from './transactions.module.scss';
import { TbBulb } from 'react-icons/tb';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import Popover, {
	popoverPlacementType,
} from 'src/components/popover';
import Table, { tableRow } from 'src/components/table';
import { CiCircleQuestion } from 'react-icons/ci';
import HeaderComponent2 from 'src/components/header-component-2';
import Button2, { button2Type } from 'src/components/button-2';
import CopyButton from 'src/components/copy-button';
import { useEffect, useRef, useState } from 'react';
import CirclePointRight from 'src/components/circle-point-right';
import { apiStatus, headerTime, headerTimeDefault, headerTimePopup, headerTimePopupDefault, url, urlParams } from 'src/constants';
import { getListPaginatedTransactions } from 'src/services/explorer.services';
import { formatNumber, formatTimestamp, getTimeAgo, shortenHashWithPrefix, shortenHashWithPrefixSuffix } from 'src/utils';
import { NavLink } from 'react-router-dom';

function Transactions() {

	// show time toggle 
	const [headerTimeTable, setHeaderTimeTable] = useState(headerTimeDefault);
	const headerTimeTableRuntime = useRef(headerTimeDefault);
	const [headerTimeTablePopup, setHeaderTimeTablePopup] = useState(headerTimePopupDefault);
	const headerTimeClickHandle = () => {
		switch (headerTimeTable) {
			case headerTime.age:
				setHeaderTimeTable(headerTimeTableRuntime.current = headerTime.dateTime);
				setHeaderTimeTablePopup(headerTimePopup.dateTime);
				setMainDataObj(renderMainDataObj(mainData.current));
				break;
			case headerTime.dateTime:
				setHeaderTimeTable(headerTimeTableRuntime.current = headerTime.age);
				setHeaderTimeTablePopup(headerTimePopup.age);
				setMainDataObj(renderMainDataObj(mainData.current));
				break;
			default:
				break;
		}

	}
	const listCol = [
		{
			id: 2,
			header: 'Txn Hash',
		},
		{
			id: 3,
			header: (
				<div className='flex items-center gap-1'>
					Method
					<div className='flex items-center'>
						<Popover
							placement={popoverPlacementType.right}
							content={
								<div className='flex flex-col'>
									<div>
										Function executed based on decoded input data.
									</div>
									<div>
										For unidentified functions, method ID is displayed
									</div>
									<div>
										instead
									</div>
								</div>
							}
						>
							<CiCircleQuestion />
						</Popover>
					</div>
				</div >
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
					content={headerTimeTablePopup}
					className={css['transactions--blue']}
				>
					<div onClick={headerTimeClickHandle}>
						{headerTimeTable}
					</div>
				</Popover>
			),
		},
		{
			id: 6,
			header: `From`,
		},
		{
			id: 7,
			header: ``,
		},
		{
			id: 8,
			header: `To`,
		},
		{
			id: 9,
			header: `Value`,
		},
		{
			id: 10,
			header: (
				<Popover
					placement={popoverPlacementType.top}
					content={`(Gas price * Gas used by Txns) in Bnb`}
					className={css['transactions--blue']}
				>
					Txn Fee
				</Popover>
			),
		},
	];

	// page 
	const rowLimit = useRef(tableRow);
	const showRowHandleChange = (item) => {
		rowLimit.current = item;
		console.log('run showRowHandleChange with row limit ', rowLimit.current);
		fetchMainData(1, rowLimit.current);
	}
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(20);
	const pageChangeHandle = (page) => fetchMainData(page, rowLimit.current);

	// fetch list transaction 
	const [fetchMainDataStatus, setFetchMainDataStatus] = useState(apiStatus.pending);
	const [mainDataObj, setMainDataObj] = useState([]); // main data có chứa jsx
	const mainData = useRef([]);
	const fetchMainData = async (page, limit) => {
		try {
			if (fetchMainDataStatus === apiStatus.fetching) return;
			setFetchMainDataStatus(apiStatus.fetching);
			const resp = await getListPaginatedTransactions(page, limit);
			const data = JSON.parse(resp?.data?.data);
			setTotalPages(data?.totalPage);
			setPage(data?.page);
			setMainDataObj(renderMainDataObj(data?.result));
			mainData.current = data?.result;
			setFetchMainDataStatus(apiStatus.fullfiled);
		} catch (error) {
			setFetchMainDataStatus(apiStatus.rejected);
		}
	}
	const renderCellTime = (timestamp) => {
		if (headerTimeTableRuntime.current === headerTime.age) {
			return <Popover
				placement={popoverPlacementType.top}
				content={formatTimestamp(timestamp)}
			>
				{getTimeAgo(timestamp)}
			</Popover>
		} else if (headerTimeTableRuntime.current === headerTime.dateTime) {
			return <Popover
				placement={popoverPlacementType.top}
				content={getTimeAgo(timestamp)}
			>
				{formatTimestamp(timestamp)}
			</Popover>
		}
	}
	const renderMainDataObj = (list) => {
		return list.map((item, index) => {
			return (
				{
					id: index,
					cols: [
						<NavLink
							key={`a3`}
							to={url.transactionDetail.replace(urlParams.transactionNumber, item.hash)}
							className={css['--link-no-underline']}
						>
							{shortenHashWithPrefix(item.hash)}
						</NavLink>,
						<Popover
							key={`a2`}
							placement={popoverPlacementType.top}
							content={`Deposite`}
						>
							<Button2
								type={button2Type.outlineSmall}
								classname={css.customButton2}
							>
								Deposite
							</Button2>
						</Popover>,
						<NavLink
							key={`a4`}
							to={url.blockDetail.replace(urlParams.blockNumber, item.blockNumber)}
							className={css['--link-no-underline']}
						>
							{item.blockNumber}
						</NavLink>,
						renderCellTime(item.timestamp)
						,
						<>
							<Popover
								content={
									item.from
								}
								placement={popoverPlacementType.top}
								key={`a5`}
								className={css['transactions--blue']}
							>
								<NavLink
									className={`--link-no-underline`}
									to={url.addressDetail.replace(urlParams.addressNumber, item.from)}
								>
									<Button2
										type={button2Type.outlineSmall}
										classname={css.customButton3}
									>
										{shortenHashWithPrefixSuffix(item.from)}
									</Button2>
								</NavLink>
							</Popover>
							<CopyButton content={item.from} />
						</>
						,
						<CirclePointRight key={`a4`} />,
						<>
							<Popover
								content={
									item.to
								}
								placement={popoverPlacementType.top}
								key={`a5`}
								className={css['transactions--blue']}
							>
								<NavLink
									className={`--link-no-underline`}
									to={url.addressDetail.replace(urlParams.addressNumber, item.to)}
								>
									<Button2

										type={button2Type.outlineSmall}
										classname={css.customButton3}
									>
										{shortenHashWithPrefixSuffix(item.to)}
									</Button2>
								</NavLink>
							</Popover>
							<CopyButton content={item.to} />
						</>,
						formatNumber(item.value, undefined, 5) + ' BNB',
						'0',
					],
				}
			)
		})
	}

	useEffect(() => {
		fetchMainData(1, rowLimit.current);
	}, []);

	return (
		<div className={css.transactions}>
			<div className={css.container}>
				<HeaderComponent2 mainContent={`Transactions`} />
				<div className={css.transactions__content}>
					<div className={css.transactions__item}>
						<Card>
							<div className={`${css.transactions__item__row}`}>
								TRANSACTIONS (24H)
							</div>
							<div className={css.transactions__item__row}>
								<span
									className={
										css['transactions__item--hoverBlue']
									}
								>
									4,160,032
								</span>{' '}
								<span
									className={css['transactions__item--green']}
								>
									(2.68%)
								</span>
							</div>
						</Card>
						<span className={css.transactions__item__arrow}>
							<HiMiniArrowUpRight />
						</span>
					</div>
					<div className={css.transactions__item}>
						<Card>
							<div className={css.transactions__item__row}>
								TRANSACTIONS (24H)
							</div>
							<div className={css.transactions__item__row}>
								<span
									className={
										css['transactions__item--hoverBlue']
									}
								>
									4,160,032
								</span>{' '}
								<span
									className={
										css['transactions__item--hoverBlue']
									}
								>
									(2.68%)
								</span>
							</div>
						</Card>
						<span className={css.transactions__item__arrow}>
							<HiMiniArrowUpRight />
						</span>
					</div>
					<div className={css.transactions__item}>
						<Card>
							<div className={css.transactions__item__row}>
								TRANSACTIONS (24H)
							</div>
							<div className={css.transactions__item__row}>
								<Popover
									className={
										css['transactions__item--hoverBlue']
									}
									placement={popoverPlacementType.top}
									content={`1.4564564645645 BNB`}
								>
									4,160,032
								</Popover>{' '}
								<span
									className={css['transactions__item--red']}
								>
									(2.68%)
								</span>
							</div>
						</Card>
						<span className={css.transactions__item__arrow}>
							<HiMiniArrowUpRight />
						</span>
					</div>
					<div className={css.transactions__item}>
						<Card>
							<div className={css.transactions__item__row}>
								TRANSACTIONS (24H)
							</div>
							<div className={css.transactions__item__row}>
								<Popover
									content={`0.13212456789 USD`}
									className={
										css['transactions__item--hoverBlue']
									}
									placement={popoverPlacementType.top}
								>
									4,160,032
								</Popover>{' '}
								<span
									className={css['transactions__item--red']}
								>
									(2.68%)
								</span>
							</div>
						</Card>
						<span className={css.transactions__item__arrow}>
							<HiMiniArrowUpRight />
						</span>
					</div>
					<div className={css.transactions__item__table}>
						<Card>
							<Table
								listCol={listCol}
								listRecord={mainDataObj}
								headerLeftContent={
									<>
										<div>
											More than 5,506,373,037 transactions
											found
										</div>
										<div>
											(Showing the last 500k records)
										</div>
									</>
								}
								page={page}
								totalPage={totalPages}
								pageChangeHandle={pageChangeHandle}
								showRowChangeHandle={showRowHandleChange}
								fetching={fetchMainDataStatus === apiStatus.fetching}
							/>
						</Card>
					</div>
					<div className={css.transactions__last}>
						<TbBulb />A transaction is a cryptographically signed
						instruction that changes the blockchain state. Block
						explorers track the details of all transactions in the
						network. Learn more about transactions in our{' '}
						<span className={css['transactions--blue']}>
							Knowledge Base.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Transactions;
