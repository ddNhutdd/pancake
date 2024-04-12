import HeaderComponent2 from 'src/components/header-component-2';
import css from './view-block.module.scss';
import { HeaderComponent3 } from 'src/components/header-component-3';
import Card from 'src/components/card';
import Table, { tableRow } from 'src/components/table';
import Popover, { popoverPlacementType } from 'src/components/popover';
import CopyButton from 'src/components/copy-button';
import { useEffect, useRef, useState } from 'react';
import Process from './process';
import { apiStatus, headerTime, headerTimeDefault, headerTimePopup, headerTimePopupDefault, url, urlParams } from 'src/constants';
import { getListPaginatedBlocks } from 'src/services/explorer.services';
import {
	formatNumber,
	formatTimestamp,
	getTimeAgo,
	shortenHashWithPrefixSuffix,
} from 'src/utils';
import { NavLink } from 'react-router-dom';

function ViewBlocks() {
	const listCard = [
		{
			id: 1,
			main: `Network Utilization(24H)`,
			second: `4,729,185`,
			second_2: '(5.03%)',
		},
		{
			id: 2,
			main: `Pending Transactions (Last 1H)`,
			second: `173`,
			second_2: '(Average)',
		},
		{
			id: 3,
			main: 'Network Transactions Fee (24H)',
			second: `1,942.58 BNB`,
			second_2: '(33.22%)',
		},
		{
			id: 4,
			main: 'Avg. Transaction Fee (24h)',
			second: `1,942.58 BNB`,
			second_2: '(33.22%)',
		},
	];

	// change time column
	const timeRef = useRef(headerTimeDefault);
	const [columnHeader, setColumnHeader] = useState(headerTimeDefault);
	const [columnPopup, setColumnPopup] = useState(headerTimePopupDefault);
	const changeColClickHandle = () => {
		switch (columnHeader) {
			case headerTime.dateTime:
				setColumnHeader(headerTime.age);
				setColumnPopup(headerTimePopup.age);
				timeRef.current = headerTime.age;
				break;
			case headerTime.age:
				setColumnHeader(headerTime.dateTime);
				setColumnPopup(headerTimePopup.dateTime);
				timeRef.current = headerTime.dateTime;
				break;
			default:
				break;
		}
	};
	const listCol = [
		{
			id: 1,
			header: `Block`,
		},
		{
			id: 2,
			header: (
				<Popover
					className='--text-blue'
					placement={popoverPlacementType.top}
					content={columnPopup}
				>
					<div onClick={changeColClickHandle}>{columnHeader}</div>
				</Popover>
			),
		},
		{
			id: 3,
			header: `Txn`,
		},
		{
			id: 4,
			header: `Validator`,
		},
		{
			id: 5,
			header: `Gas Used`,
		},
		{
			id: 6,
			header: `Gas Limit`,
		},
		{
			id: 7,
			header: `Reward`,
		},
		{
			id: 8,
			header: `Burnt Fees (BNB)`,
		},
	];

	//table row
	const [limit, setLimit] = useState(tableRow);

	// fetch api get list block
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(100);
	const [fetchApiStatus, setFetchApiStatus] = useState(apiStatus.pending);
	const [mainData, setMainData] = useState([]); // list trả về từ api
	const fetchMainData = async (page, limit) => {
		try {
			if (fetchApiStatus === apiStatus.fetching) return;
			setFetchApiStatus(apiStatus.fetching);
			const resp = await getListPaginatedBlocks(page, limit);
			const data = JSON.parse(resp?.data?.data);
			const list = data?.result;
			setMainData(list);
			setTotalPage(data?.totalPage);
			setPage(page);
			setFetchApiStatus(apiStatus.fullfiled);
		} catch (error) {
			setFetchApiStatus(apiStatus.rejected);
		}
	};
	const renderTime = (item) => {
		switch (timeRef.current) {
			case headerTime.dateTime:
				return (
					<Popover
						key={`1-2`}
						placement={popoverPlacementType.top}
						content={getTimeAgo(item.timestamp).replace(
							'from ',
							'',
						)}
					>
						{formatTimestamp(item.timestamp)}
					</Popover>
				);
			case headerTime.age:
				return (
					<Popover
						key={`1-2`}
						placement={popoverPlacementType.top}
						content={formatTimestamp(item.timestamp)}
					>
						{getTimeAgo(item.timestamp).replace('from ', '')}
					</Popover>
				);
			default:
				break;
		}
	};
	const genObjRecord = (list) => {
		let result = [];
		result = list.map((item, index) => {
			return {
				id: index,
				cols: [
					<span
						key={`1-1`}
						className='--text-blue'
					>
						<NavLink
							className={`--link-no-underline`}
							to={url.blockDetail.replace(urlParams.blockNumber, item.number)}
						>
							{item.number}
						</NavLink>
					</span>,
					renderTime(item),
					<span
						key={`1-3`}
						className='--text-blue'
					>
						{item.totalTransactions}
					</span>,
					<div
						key={`1-4`}
						className='flex items-center '
					>
						<Popover
							key={`1-4`}
							placement={popoverPlacementType.top}
							content={item.miner}
						>
							<NavLink
								to={url.addressDetail.replace(urlParams.addressNumber, item.miner)}
								className='--text-blue --hover-yellow --link-no-underline'
							>
								{shortenHashWithPrefixSuffix(item.miner)}
							</NavLink>
						</Popover>
						<CopyButton content={item.miner} />
					</div>,
					<span key={`1-5`}>
						<Process
							number={formatNumber(item.gasUsed)}
							percent={formatNumber(
								(item.gasUsed / item.gasLimit) * 100,
								undefined,
								4,
							)}
						/>
					</span>,
					formatNumber(item.gasLimit),
					`--`,
					`--`,
				],
			};
		});
		return (result);
	};

	//paging
	const pageChangeHandle = (page) => {
		setPage(page);
		fetchMainData(page, limit);
	};

	// amount row change
	const showRowChangeHandle = (rows) => {
		setLimit(rows);
		fetchMainData(1, rows);
	};

	useEffect(() => {
		fetchMainData(1, limit);
	}, []);

	return (
		<div className={css.viewBlocks}>
			<div className={css.container}>
				<HeaderComponent2 mainContent={`Blocks`} />
				<HeaderComponent3 listCard={listCard} />
				<Card>
					<Table
						listCol={listCol}
						listRecord={genObjRecord(mainData)}
						page={page}
						totalPage={totalPage}
						pageChangeHandle={pageChangeHandle}
						fetching={fetchApiStatus === apiStatus.fetching}
						showRowChangeHandle={showRowChangeHandle}
					/>
				</Card>
			</div>
		</div>
	);
}

export default ViewBlocks;
