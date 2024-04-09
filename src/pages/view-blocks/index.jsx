import HeaderComponent2 from 'src/components/header-component-2';
import css from './view-block.module.scss';
import { HeaderComponent3 } from 'src/components/header-component-3';
import Card from 'src/components/card';
import Table, { tableRow } from 'src/components/table';
import Popover, { popoverPlacementType } from 'src/components/popover';
import CopyButton from 'src/components/copy-button';
import { useEffect, useRef, useState } from 'react';
import Process from './process';
import { apiStatus } from 'src/constants';
import { getListPaginatedBlocks } from 'src/services/explorer.services';
import {
	formatNumber,
	formatTimestamp,
	getTimeAgo,
	shortenHash,
} from 'src/utils';

function ViewBlocks() {
	const timeType = {
		'age': 'age',
		'dateTime': 'dateTime'
	}
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
	const timeRef = useRef(timeType.dateTime);
	const strDatetime = 'Date Time (UTC)';
	const strDateTimePopup = `Click to show Age format`;
	const strAge = 'Age';
	const strAgePopup = 'Click to show DateTime format';
	const [columnHeader, setColumnHeader] = useState(strDatetime);
	const [columnPopup, setColumnPopup] = useState(strDateTimePopup);
	const changeColClickHandle = () => {
		switch (columnHeader) {
			case strDatetime:
				setColumnHeader(strDatetime);
				setColumnPopup(strDateTimePopup);
				timeRef.current = timeType.dateTime;
				break;
			case strAge:
				setColumnHeader(strAge);
				setColumnPopup(strAgePopup);
				timeRef.current = timeType.age;
				break;
			default:
				break;
		}
	}

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
					<div onClick={changeColClickHandle}>
						{columnHeader}
					</div>
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
	]


	//table row
	const [limit, setLimit] = useState(tableRow);

	// fetch api get list block
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(100);
	const [fetchApiStatus, setFetchApiStatus] = useState(apiStatus.pending);
	const [listRecord, setListRecord] = useState([]); // list obj chứa jsx
	const fetchMainData = async (page, limit) => {
		try {
			if (fetchApiStatus === apiStatus.fetching) return;
			setFetchApiStatus(apiStatus.fetching);
			const resp = await getListPaginatedBlocks(page, limit);
			const data = JSON.parse(resp?.data?.data);
			const list = data?.result;
			genObjRecord(list);
			setTotalPage(data?.totalPage);
			setPage(page);
			setFetchApiStatus(apiStatus.fullfiled);
		} catch (error) {
			setFetchApiStatus(apiStatus.rejected);
		}
	};
	const renderTime = (item) => {
		switch (timeRef.current) {
			case timeType.dateTime:
				return <Popover
					key={`1-2`}
					placement={popoverPlacementType.top}
					content={getTimeAgo(item.timestamp).replace(
						'from ',
						'',
					)}
				>
					{formatTimestamp(item.timestamp)}
				</Popover>
			case timeType.age:
				return ``;
			default:
				break;
		}
	}
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
						{item.number}
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
							<span className='--text-blue --hover-yellow'>
								{shortenHash(item.miner)}
							</span>
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
		setListRecord(result);
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
	}

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
						listRecord={listRecord}
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
