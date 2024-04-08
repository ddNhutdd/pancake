import Card from 'src/components/card';
import css from './home-2.module.scss';
import Top from './top';
import TopCardContent from './top-card-content';
import CardContent from './card-content';
import { useState } from 'react';
import { BsBox } from 'react-icons/bs';
import { IoDocumentOutline } from 'react-icons/io5';
import { BiGasPump } from 'react-icons/bi';
import Popover, { popoverPlacementType, popoverTriggerType } from 'src/components/popover';
import Button2, { button2Type } from 'src/components/button-2';
import BlockRecord from './block-record';
import {
	getBlock,
	getLatestTransactions,
} from 'src/services/explorer.services.js';
import { useEffect } from 'react';
import { apiStatus, url, urlParams } from 'src/constants/index.js';
import { NavLink } from 'react-router-dom';

function Home2() {
	const listImage = {
		imageBox: <BsBox />,
		imageDoc: <IoDocumentOutline />,
		imageGas: <BiGasPump />,
	};
	const typeFilter = {
		block: 'block',
		transaction: 'transaction',
		contract: 'contract',
		guzzler: 'guzzler',
	};
	const card = {
		left: 'left',
		right: 'right',
	};

	// thông tin header và footer của card
	const [cardLeftTitle] = useState('Latest Blocks');
	const [cardRightTitle] = useState('Latest Transactions');
	const [cardLeftFooter] = useState('Latest Blocks');
	const [cardRightFooter] = useState('Latest Transactions');

	//dữ liệu từ api
	const [blockList, setBlockList] = useState([]);
	const [transactionList, setTransactionList] = useState([]);

	// render loại dữ liệu
	const [leftCardFilterType] = useState(typeFilter.block);
	const [rightCardFilterType] = useState(typeFilter.transaction);

	// set loading cho card
	const [fetchLeftCard, setFetchLeftCard] = useState(apiStatus.pending);
	const [fetchRightCard, setFetchRightCard] = useState(apiStatus.pending);

	/**
	 * tham số truyền vào để xác định card nào được load dữ liệu nào
	 * @param {card} ca
	 * @returns null
	 */
	const renderCardContent = (ca) => {
		const check =
			ca === card.left ? leftCardFilterType : rightCardFilterType;
		switch (check) {
			case typeFilter.block:
				if (!blockList || blockList.length <= 0) return;
				return blockList.map((item) => {
					if (item !== blockList.at(-1)) {
						return (
							<div key={item.id}>
								<BlockRecord content={item} />
								<div className={css.line}></div>
							</div>
						);
					} else {
						return (
							<BlockRecord
								key={item.id}
								content={item}
							/>
						);
					}
				});

			case typeFilter.transaction:
				if (!transactionList || transactionList.length <= 0) return;
				return transactionList.map((item) => {
					if (item !== transactionList.at(-1)) {
						return (
							<div key={item.id}>
								<BlockRecord content={item} />
								<div className={css.line}></div>
							</div>
						);
					} else {
						return (
							<BlockRecord
								key={item.id}
								content={item}
							/>
						);
					}
				});

			default:
				break;
		}
	};
	const caclAbsTimestamp = (t1, t2) => Math.abs(t1 - t2);
	const calcTimeCreate = (t1) => {
		const now = new Date().getTime();
		const result = caclAbsTimestamp(t1 * 1000, now);
		return Math.floor(result / 1000);
	};
	/**
	 * các hàm call api phải xác định card để có thể set state loading cho card đó
	 * @param {card} ca
	 * @returns null
	 */
	const fetchBlock = async (ca) => {
		try {
			setBlockList([]);
			if (!checkBeforeCallApi(ca)) return;
			const resp = await getBlock();
			const data = JSON.parse(resp.data.data);
			const result = [];
			for (const [index, itemData] of data.entries()) {
				if (index < 6) {
					result.push({
						id: index,
						image: listImage.imageBox,
						code: (
							<NavLink
								to={url.blockDetail.replace(
									urlParams.blockNumber,
									itemData.number,
								)}
								className={css.home2__link}
							>
								{itemData.number}
							</NavLink>
						),
						codeTime: calcTimeCreate(itemData.timestamp) + `s ago`,
						contentTop: (
							<div className='flex items-center gap-1'>
								<span>Validated By</span>{' '}
								<Popover
									trigger={popoverTriggerType.hover}
									placement={popoverPlacementType.top}
									content={itemData.miner}
								>
									<NavLink
										to={url.addressDetail.replace(urlParams.addressNumber, itemData.miner)}
										className={`--link-no-underline ${css['home2--threeDot']}`}
									>
										{itemData.miner}
									</NavLink>
								</Popover>
							</div>
						),
						contentBot: (
							<div>
								<Popover
									className={css['home2--blue']}
									placement={popoverPlacementType.top}
									content={`Transaction in this Block`}
								>
									{itemData.totalTransactions} txns
								</Popover>{' '}
								<span className={css['blockRecord--gray']}>
									in{' '}
									{caclAbsTimestamp(
										itemData.timestamp,
										data[index + 1].timestamp,
									)}{' '}
									secs
								</span>
							</div>
						),
						actions: (
							<Button2 type={button2Type.outlineSmall}>
								-- BNB
							</Button2>
						),
					});
				}
			}
			setCallStatusFullfiled(ca);
			setBlockList(result);
		} catch (error) {
			setCallStatusRejected(ca)(error);
		}
	};
	const fetchLatestTransactions = async (ca) => {
		try {
			setTransactionList([]);
			if (!checkBeforeCallApi(ca)) return;
			const resp = await getLatestTransactions();
			const data = JSON.parse(resp.data.data);
			const result = [];
			for (const [index, itemData] of data.entries()) {
				if (index < 6) {
					result.push({
						id: index,
						image: listImage.imageDoc,
						code: (
							<NavLink
								to={url.transactionDetail.replace(
									urlParams.transactionNumber,
									itemData.hash,
								)}
								className={css.home2__link}
							>
								<div className={css['home2--threeDot']}>
									{itemData.hash}
								</div>
							</NavLink>
						),
						codeTime: calcTimeCreate(itemData.timestamp) + `s ago`,
						contentTop: (
							<div>
								From{' '}
								<Popover
									trigger={popoverTriggerType.hover}
									placement={popoverPlacementType.top}
									content={itemData.from}
									className={`inline-flex items-center`}
								>
									<NavLink
										className={`${css.home2__link} ${css['home2--threeDot']}`}
										to={url.addressDetail.replace(urlParams.addressNumber, itemData.from)}
									>
										{itemData.from}
									</NavLink>
								</Popover>

							</div>
						),
						contentBot: (
							<div>
								To{' '}
								<Popover
									trigger={popoverTriggerType.hover}
									placement={popoverPlacementType.top}
									content={itemData.to}
									className={`inline-flex items-center`}
								>
									<NavLink
										className={`${css.home2__link} ${css['home2--threeDot']}`}
										to={url.addressDetail.replace(urlParams.addressNumber, itemData.to)}
									>
										{itemData.to}
									</NavLink>
								</Popover>
							</div>
						),
						actions: (
							<Button2 type={button2Type.outlineSmall}>
								0.5267 BNB
							</Button2>
						),
					});
				}
			}
			setCallStatusFullfiled(ca);
			setTransactionList(result);
		} catch (error) {
			setCallStatusRejected(ca)(error);
		}
	};
	const checkBeforeCallApi = (ca) => {
		if (ca === card.left) {
			if (fetchLeftCard === apiStatus.fetching) {
				return false;
			} else {
				setFetchLeftCard(apiStatus.fetching);
				return true;
			}
		} else {
			if (fetchRightCard === apiStatus.fetching) {
				return false;
			} else {
				setFetchRightCard(apiStatus.fetching);
				return true;
			}
		}
	};
	const setCallStatusFullfiled = (ca) => {
		switch (ca) {
			case card.left:
				setFetchLeftCard(apiStatus.fullfiled);
				break;
			case card.right:
				setFetchRightCard(apiStatus.fullfiled);
				break;
			default:
				break;
		}
	};
	const setCallStatusRejected = (ca) => {
		switch (ca) {
			case card.left:
				setFetchLeftCard(apiStatus.rejected);
				break;
			case card.right:
				setFetchRightCard(apiStatus.rejected);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		fetchBlock(card.left);
		fetchLatestTransactions(card.right);
	}, []);

	return (
		<div className={css.home2}>
			<Top />
			<div className={css.container}>
				<div className={css.home2__top}>
					<Card>
						<TopCardContent />
					</Card>
				</div>
				<div className={css.home2__left}>
					<Card>
						<CardContent
							title={cardLeftTitle}
							footerContent={cardLeftFooter}
							content={renderCardContent(card.left)}
							fetching={fetchLeftCard === apiStatus.fetching}
						/>
					</Card>
				</div>
				<div className={css.home2__right}>
					<Card>
						<CardContent
							title={cardRightTitle}
							footerContent={cardRightFooter}
							content={renderCardContent(card.right)}
							fetching={fetchRightCard === apiStatus.fetching}
						/>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Home2;
