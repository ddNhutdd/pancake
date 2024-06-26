import Card from 'src/components/card';
import css from 'src/pages/block-detail/block.module.scss';
import css2 from './overview.module.scss';
import CardCollapse from 'src/components/card-collapse';
import Popover, {
	popoverPlacementType,
	popoverTriggerType,
} from 'src/components/popover';
import { CiCircleQuestion } from 'react-icons/ci';
import CopyButton from 'src/components/copy-button';
import PillSquare, { pillSquareType } from 'src/components/pill-square';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { CiClock2 } from 'react-icons/ci';
import { FcFlashOn } from 'react-icons/fc';
import { FaCaretRight } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { HiPencil } from 'react-icons/hi2';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa6';
import { FaCubes } from 'react-icons/fa';
import { GrFilter } from 'react-icons/gr';
import TextArea from 'src/components/text-area';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown2, dropdown2TriggerType } from 'src/components/dropdown-2';
import Loader from 'src/components/loader';
import { apiStatus, commonString, transactionStatus, transactionType, url, urlParams } from 'src/constants';
import Empty from 'src/components/empty';
import { useParams } from 'react-router-dom';
import {
	getBlockDetail,
	getCurrentBlockNumber,
	getExchangeRateBNBtoUSD,
	getTransactionDetail,
} from 'src/services/explorer.services';
import { calcPercent, calcTimestamp, convertBnbToUsd, formatNumber, shortenHashWithPrefixSuffix } from 'src/utils';
import Loader2 from 'src/components/loader-2';
import ListTabs from 'src/components/list-tabs';
import Token from './token';

const Overview = function () {
	// dropdown tĩnh chưa làm
	const listInputDropdown = [
		{
			id: 1,
			content: 'Default view',
		},
		{
			id: 2,
			content: 'UTF-8',
		},
		{
			id: 3,
			content: 'Original',
		},
	];
	const [inputDropdownShow, setInputDropdownShow] = useState(false);
	const inputDropdownChange = () => {
		setInputDropdownShow(false);
	};
	const toggleInputDropdown = () => {
		setInputDropdownShow((state) => !state);
	};

	// lấy param từ địa chỉ
	const { transactionnumber } = useParams();

	// card collape
	const [cardCollapseShow, setCardCollapseShow] = useState(false);

	// call api get thông tin về transactions
	const [fetchMainDataStatus, setFetchMainDataStatus] = useState(
		apiStatus.pending,
	);
	const [blockInfo, setBlogInfo] = useState();
	const [fetchBlockInfoStatus, setFetchBlockInfoStatus] = useState(
		apiStatus.pending,
	);
	const [exchangeBNBtoUSD, setExchangeBNBtoUSD] = useState();
	const [type, setType] = useState(); // transaction type, transaction có nhiều loại, các loại khác nhau sẽ hiển thị data khác nhau
	const [currentBlock, setCurrentBlock] = useState();
	const [mainData, setMainData] = useState();
	const [error, setError] = useState();
	const fetchMainData = async () => {
		try {
			if (fetchMainDataStatus === apiStatus.fetching) return;
			setFetchMainDataStatus(apiStatus.fetching);
			const resp = await Promise.all([
				getTransactionDetail(transactionnumber),
				getExchangeRateBNBtoUSD(),
				getCurrentBlockNumber(),
			]);
			setMainData(JSON.parse(resp[0]?.data?.data));
			setType(JSON.parse(resp[0]?.data?.data)?.type)
			setExchangeBNBtoUSD(+resp[1]?.data?.data);
			setCurrentBlock(+resp[2]?.data?.data);
			setFetchMainDataStatus(apiStatus.fullfiled);

			// call api get blockInfo
			fetchBlockInfo(JSON.parse(resp[0]?.data?.data).blockNumber);
		} catch (error) {
			const err = error?.response?.data?.message;
			error;
			setError(err);
			setFetchMainDataStatus(apiStatus.rejected);
		}
	};
	const fetchBlockInfo = async (blockId) => {
		try {
			if (fetchBlockInfoStatus === apiStatus.fetching) return;
			setFetchBlockInfoStatus === apiStatus.fetching;
			const resp = await getBlockDetail(blockId);
			const data = JSON.parse(resp?.data?.data);
			setBlogInfo(data.timestamp);
			setFetchBlockInfoStatus(apiStatus.fullfiled);
		} catch (error) {
			setFetchBlockInfoStatus(apiStatus.rejected);
		}
	};

	// list tab cho transaction type là 2 (transfer)
	const listTabTransfer = [
		{
			id: 1,
			content: 'All Transfers'
		},
		{
			id: 2,
			content: 'Net Transfers'
		}
	]
	const [tabTransferSelected, setTabTransferSelected] = useState(listTabTransfer.at(0));
	const tabTransferChangeHandle = (selectedTab) => {
		setTabTransferSelected(selectedTab);
	}
	const renderClassShowTab = (tabName) => {
		return tabTransferSelected.content === tabName ? '' : 'd-0';
	}

	// render cho giao dien
	const renderClassShowInfo_show = () => (cardCollapseShow ? '' : 'd-0');
	const renderClassShowInfo_off = () => (!cardCollapseShow ? '' : 'd-0');
	const renderClassFetching = () =>
		fetchMainDataStatus === apiStatus.fetching ? '' : 'd-0';
	const renderClassContent = () =>
		fetchMainDataStatus !== apiStatus.fetching &&
			mainData &&
			exchangeBNBtoUSD
			? ''
			: 'd-0';
	const renderClassEmpty = () =>
		fetchMainDataStatus !== apiStatus.fetching &&
			(!mainData || !exchangeBNBtoUSD)
			? ''
			: 'd-0';
	const renderStatus = (status) => {
		switch (status) {
			case transactionStatus.success:
				return (
					<PillSquare
						type={pillSquareType.green}
						className={css2.pillSquare__custom}
					>
						<IoIosCheckmarkCircle />
						Success
					</PillSquare>
				);

			default:
				return (
					<PillSquare
						type={pillSquareType.normal}
						className={css2.pillSquare__custom}
					>
						Unknow
					</PillSquare>
				);
		}
	};
	const renderClassTimeStampFetching = () =>
		fetchBlockInfoStatus === apiStatus.fetching ? '' : 'd-0';
	const renderClassTimeStamp = () => fetchBlockInfoStatus !== apiStatus.fetching ? '' : 'd-0';
	const renderTransactionAction = () => {
		switch (type) {
			case transactionType.transfer:
				return (
					<>
						<div>
							<FaCaretRight />
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={`0xf340fa01 | Deposit`}
						>
							<PillSquare type={pillSquareType.normal}>
								{commonString.transfer}
							</PillSquare>
						</Popover>
						<div>Function by</div>
						<Popover
							placement={popoverPlacementType.top}
							content={mainData?.from}

						>
							<NavLink
								to={url.addressDetail.replace(urlParams.addressNumber, mainData?.from)}
								className={`--link-no-underline --hover-yellow`}
							>
								{shortenHashWithPrefixSuffix(mainData?.from)}
							</NavLink>
						</Popover>
						<div>on</div>
						<Popover
							placement={popoverPlacementType.top}
							content={mainData?.to}
						>
							<NavLink
								to={url.addressDetail.replace(urlParams.addressNumber, mainData?.to)}
								className={`--link-no-underline --hover-yellow`}
							>
								{shortenHashWithPrefixSuffix(mainData?.to)}
							</NavLink>
						</Popover>
						<Popover
							placement={popoverPlacementType.top}
							content={
								<div className='flex items-center flex-col'>
									<span>Suggest Transaction Action</span>
								</div>
							}
							className={`--text-blue flex flex-items`}
						>
							<HiPencil />
						</Popover>
					</>
				)
			default:
				return (
					<>
						<div>
							<FaCaretRight />
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={`0xf340fa01 | Deposit`}
						>
							<PillSquare type={pillSquareType.normal}>
								Deposit
							</PillSquare>
						</Popover>
						<div>Function by</div>
						<Popover
							placement={popoverPlacementType.top}
							content={
								<div className='flex items-center flex-col'>
									<span>Validator: Defibit</span>
									<span>
										0xea0a6e3c511bbd10f4519ece37dc24887e11b55d
									</span>
								</div>
							}
							className={`--text-blue --hover-yellow`}
						>
							Validator: Defibit
						</Popover>
						<div>on</div>
						<Popover
							placement={popoverPlacementType.top}
							content={
								<div className='flex items-center flex-col'>
									<span>
										0xea0a6e3c511bbd10f4519ece37dc24887e11b55d
									</span>
								</div>
							}
							className={`--text-blue --hover-yellow`}
						>
							<div className='flex items-center gap-1'>
								<IoDocumentTextOutline />
								BSC: Validator Set
							</div>
						</Popover>
						<Popover
							placement={popoverPlacementType.top}
							content={
								<div className='flex items-center flex-col'>
									<span>Suggest Transaction Action</span>
								</div>
							}
							className={`--text-blue flex flex-items`}
						>
							<HiPencil />
						</Popover>
					</>
				)
		}
	}
	const renderPrivateNote = () => {
		switch (type) {
			case transactionType.transfer:
				return 'd-0';
			default:
				break;
		}
	}
	const renderTransactionColapse = () => {
		switch (type) {
			case transactionType.transfer:
				return (
					<>
						<CardCollapse
							show={cardCollapseShow}
							setShow={setCardCollapseShow}
							footer={
								<div className={css.block__cardCollapseRecord}>
									<div className={css.block__left}>More Details:</div>
									<div className={`${css.block__right} --text-blue`}>
										<div
											className={`${renderClassShowInfo_off()} flex items-center`}
										>
											<FaPlus />
										</div>
										<div
											className={`${renderClassShowInfo_show()} flex items-center`}
										>
											<FiMinus />
										</div>
										<div className={renderClassShowInfo_off()}>
											Click to show more
										</div>
										<div className={renderClassShowInfo_show()}>
											Click to show less
										</div>
									</div>
								</div>
							}
						>
							<div
								style={{ paddingBottom: '0' }}
								className={css.block__card}
							>
								<div className={css.block__cardRecord}>
									<div className={css.block__left}>
										<Popover
											placement={popoverPlacementType.top}
											trigger={popoverTriggerType.hover}
											content={
												<div className='flex flex-col'>
													<span>
														Maximum amount of gas allocated
														for the
													</span>
													<span>
														transaction & the amount
														eventually used.
													</span>
													<span>
														Normal BNB transfers involve
														21,000 gas units
													</span>
													<span>
														while contracts involve higher
														values.
													</span>
												</div>
											}
											className={css.block__question}
										>
											<CiCircleQuestion />
										</Popover>
										Gas Limit & Usage by Txn:
									</div>
									<div className={css.block__right}>
										<Popover
											placement={popoverPlacementType.top}
											content={`The amount of GAS	supplied for this transaction to happer`}
										>
											{formatNumber(mainData?.gas)}
										</Popover>
										|
										<Popover
											placement={popoverPlacementType.top}
											content={`The amount of GAS used by this specific transaction alone`}
										>
											{formatNumber(mainData?.transactionTransferEvent?.gasUsed)} ({formatNumber(calcPercent(mainData?.gas, mainData?.transactionTransferEvent?.gasUsed), undefined, 2)} %)
										</Popover>
									</div>
								</div>
								<div className={css.block__cardRecord}>
									<div className={css.block__left}>
										<Popover
											placement={popoverPlacementType.top}
											trigger={popoverTriggerType.hover}
											content={
												<div className='flex flex-col'>
													<span>
														Total amount of BNB burnt from
														this tx.
													</span>
												</div>
											}
											className={css.block__question}
										>
											<CiCircleQuestion />
										</Popover>
										Burnt Fees:
									</div>
									<div className={css.block__right}>
										🔥 0.003197900301341202 BNB ($1.86)
									</div>
								</div>
								<div className={css.block__line}></div>
								<div className={css.block__cardRecord}>
									<div className={css.block__left}>
										<Popover
											placement={popoverPlacementType.top}
											trigger={popoverTriggerType.hover}
											content={
												<div className='flex flex-col'>
													<span>
														Other data related to this
														transaction.
													</span>
												</div>
											}
											className={css.block__question}
										>
											<CiCircleQuestion />
										</Popover>
										Other Attributes:
									</div>
									<div className={css.block__right}>
										<PillSquare
											type={pillSquareType.normal}
											className={`--bold  flex gap-1`}
										>
											<span className={`--text-gray`}>
												Nonce:
											</span>
											{mainData?.nonce}
										</PillSquare>
										<PillSquare
											type={pillSquareType.normal}
											className={`--bold  flex gap-1`}
										>
											<span className={`--text-gray`}>
												Position In Block:
											</span>
											{mainData?.transactionIndex}
										</PillSquare>
									</div>
								</div>
								<div className={css.block__cardRecord}>
									<div className={css.block__left}>
										<Popover
											placement={popoverPlacementType.top}
											trigger={popoverTriggerType.hover}
											content={
												<div className='flex flex-col'>
													<span>
														Additional data included for
														this transaction.
													</span>
													<span>
														Commonly used as part of
														contract interaction or
													</span>
													<span>
														as a message sent to the
														recipient.
													</span>
												</div>
											}
											className={css.block__question}
										>
											<CiCircleQuestion />
										</Popover>
										Input Data:
									</div>
									<div
										style={{ flexDirection: 'column' }}
										className={css.block__right}
									>
										<Popover
											placement={popoverPlacementType.top}
											content={
												<div className='flex flex-col items-center'>
													<span>
														The binary data that formed the
														input to the transaction,
													</span>
													<span>
														either the input data if it was
														a message call or the contract
													</span>
													<span>
														initialisation if it was a
														contract creation
													</span>
												</div>
											}
											className={css2['popover__custom']}
										>
											<Card className={css2.card__custom}>
												{mainData?.data}
											</Card>
										</Popover>

										<div className='w-100 flex justify-start gap-1 flex-wrap'>
											<div>
												<Dropdown2
													trigger={
														dropdown2TriggerType.runtime
													}
													header={
														<PillSquare
															className={
																css2.pillSquareButton
															}
															type={pillSquareType.normal}
															onClick={
																toggleInputDropdown
															}
														>
															View Input As
															<FaAngleDown />
														</PillSquare>
													}
													list={listInputDropdown}
													show={inputDropdownShow}
													onChange={inputDropdownChange}
												/>
											</div>
											<div>
												<PillSquare
													className={css2.pillSquareButton}
													type={pillSquareType.normal}
												>
													<FaCubes />
													Decode Input Data
												</PillSquare>
											</div>
											<div>
												<PillSquare
													className={css2.pillSquareButton}
													type={pillSquareType.normal}
												>
													<GrFilter />
													View Input As
												</PillSquare>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardCollapse>
					</>
				)

			default:
				break;
		}
	}
	const renderPrivateData = () => {
		switch (type) {
			case transactionType.transfer:
				return (
					<>
						<div className={css.block__cardRecord}>
							<div className={css.block__left}>
								<Popover
									placement={cardRecordPopupPlacement}
									trigger={popoverTriggerType.hover}
									content={
										<div className='flex flex-col'>
											<span>
												The sending party of the
												transaction.
											</span>
										</div>
									}
									className={css.block__question}
								>
									<CiCircleQuestion />
								</Popover>
								From:
							</div>
							<div className={css.block__right}>
								<div
									className={`--text-blue --hover-yellow ${css2['--breakWord']}`}
								>
									<NavLink
										className={`--link-no-underline`}
										to={url.addressDetail.replace(
											urlParams.addressNumber,
											mainData?.from,
										)}
									>
										{mainData?.transactionTransferEvent?.senderAddress}
									</NavLink>
								</div>
								<CopyButton content={mainData?.from} />
							</div>
						</div>
						<div className={css.block__cardRecord}>
							<div className={css.block__left}>
								<Popover
									placement={cardRecordPopupPlacement}
									trigger={popoverTriggerType.hover}
									content={
										<div className='flex flex-col'>
											<span>
												The receiving party of the
												transaction (could be a
											</span>
											<span>contract address).</span>
										</div>
									}
									className={css.block__question}
								>
									<CiCircleQuestion />
								</Popover>
								Interacted With (To):
							</div>
							<div
								style={{ flexWrap: 'wrap' }}
								className={css.block__right}
							>
								<div>
									<IoDocumentTextOutline />
								</div>
								<div
									className={`--text-blue --hover-yellow ${css2['--breakWord']}`}
								>
									{mainData?.to}
								</div>
								<CopyButton content={mainData?.to} />
								<div className={css2.check}>
									<IoIosCheckmarkCircle />
								</div>
							</div>
						</div>
						<div className={css.block__line}></div>
						<div className={css.block__cardRecord}>
							<div className={css.block__left}>
								<Popover
									placement={cardRecordPopupPlacement}
									trigger={popoverTriggerType.hover}
									content={
										<div className='flex flex-col'>
											<span>
												List of BEP-20 tokens transferred in the
											</span>
											<span>
												transaction.
											</span>
										</div>
									}
									className={css.block__question}
								>
									<CiCircleQuestion />
								</Popover>
								BEP-20 Tokens Transferred:
							</div>
							<div className={css.block__right}>
								<div>
									<div className='mb-2'>
										<ListTabs
											list={listTabTransfer}
											selectedItem={tabTransferSelected}
											onChange={tabTransferChangeHandle}
										/>
									</div>
									<div
										className={`flex items-center gap-1 flex-wrap ${renderClassShowTab(listTabTransfer.at(0).content)}`}
									>
										<FaCaretRight />
										<div className='--light-bold'>
											From
										</div>
										<div>
											<Popover
												placement={popoverPlacementType.top}
												content={mainData?.from}
											>
												<NavLink
													to={url.addressDetail.replace(urlParams.addressNumber, mainData?.from)}
													className={`--link-no-underline --hover-yellow`}
												>
													{shortenHashWithPrefixSuffix(mainData?.from)}
												</NavLink>
											</Popover>

										</div>
										<div className='--light-bold'>
											To
										</div>
										<div>
											<Popover
												placement={popoverPlacementType.top}
												content={mainData?.to}
											>
												<NavLink
													to={url.addressDetail.replace(urlParams.addressNumber, mainData?.to)}
													className={`--link-no-underline --hover-yellow`}
												>
													{shortenHashWithPrefixSuffix(mainData?.to)}
												</NavLink>
											</Popover>

										</div>
										<div className='--light-bold'>
											For
										</div>
										<div>
											{mainData?.transactionTransferEvent?.convertedAmount}
										</div>
										<Token
											to={mainData?.to}
											tokenName={mainData?.transactionTransferEvent?.tokenName
											}
											tokenSymbol={mainData?.transactionTransferEvent?.tokenSymbol}
										/>
									</div>
									<div className={renderClassShowTab(listTabTransfer.at(1).content)}>
										<div className='flex items-center gap-1 flex-wrap'>
											<Popover
												placement={popoverPlacementType.top}
												content={mainData?.transactionTransferEvent?.senderAddress}
											>
												<NavLink
													className={`--link-no-underline --hover-yellow`}
												>
													{shortenHashWithPrefixSuffix(mainData?.transactionTransferEvent?.senderAddress)}
												</NavLink>
											</Popover>
											<div className='--light-bold'>
												send
											</div>
											<div>
												{mainData?.transactionTransferEvent?.convertedAmount}
											</div>
											<Token
												to={mainData?.to}
												tokenName={mainData?.transactionTransferEvent?.tokenName
												}
												tokenSymbol={mainData?.transactionTransferEvent?.tokenSymbol}
											/>
										</div>
										<div className='flex items-center gap-1 flex-wrap'>
											<Popover
												placement={popoverPlacementType.top}
												content={mainData?.transactionTransferEvent?.recipientAddress}
											>
												<NavLink
													className={`--link-no-underline --hover-yellow`}
												>
													{shortenHashWithPrefixSuffix(mainData?.transactionTransferEvent?.recipientAddress)}
												</NavLink>
											</Popover>
											<div className='--light-bold'>
												send
											</div>
											<div>
												{mainData?.transactionTransferEvent?.convertedAmount}
											</div>
											<Token
												to={mainData?.to}
												tokenName={mainData?.transactionTransferEvent?.tokenName
												}
												tokenSymbol={mainData?.transactionTransferEvent?.tokenSymbol}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={css.block__line}></div>
						<div className={css.block__cardRecord}>
							<div className={css.block__left}>
								<Popover
									placement={cardRecordPopupPlacement}
									trigger={popoverTriggerType.hover}
									content={
										<div className='flex flex-col'>
											<span>
												The value being transacted in BNB
												and fiat value.
											</span>
											<span>
												Note: You can click the fiat value
												(if available) to
											</span>
											<span>
												see historical value at the time of
												transaction.
											</span>
										</div>
									}
									className={css.block__question}
								>
									<CiCircleQuestion />
								</Popover>
								Value:
							</div>
							<div className={css.block__right}>
								<div className={css2.imageContainer}>
									<img
										src='https://bscscan.com/assets/bsc/images/svg/logos/token-light.svg?v=24.3.4.0'
										alt='BNB Smart Chain Logo'
									/>
								</div>
								<Popover
									placement={popoverPlacementType.top}
									content={
										<div className='flex flex-col items-center'>
											<span>
												The amount of BNB to be transferred
												to the recipient with
											</span>
											<span>the transaction</span>
										</div>
									}
								>
									{mainData?.value} BNB
								</Popover>
								<div className={`--text-gray`}>
									($
									{convertBnbToUsd(
										mainData?.value,
										exchangeBNBtoUSD,
									)}
									)
								</div>
							</div>
						</div>
						<div className={css.block__cardRecord}>
							<div className={css.block__left}>
								<Popover
									placement={cardRecordPopupPlacement}
									trigger={popoverTriggerType.hover}
									content={
										<div className='flex flex-col'>
											<span>
												Amount paid to the validator for
												processing the
											</span>
											<span>transaction.</span>
										</div>
									}
									className={css.block__question}
								>
									<CiCircleQuestion />
								</Popover>
								Transaction Fee:
							</div>
							<div className={css.block__right}>
								<Popover
									placement={popoverPlacementType.top}
									content={`Gas Price * Gas Used by Transaction`}
								>
									{mainData?.gasPriceBNB * mainData?.transactionTransferEvent?.gasUsed} BNB
								</Popover>
								<div className='--text-gray'>
									(${convertBnbToUsd(mainData?.gasPriceBNB * mainData?.transactionTransferEvent?.gasUsed, exchangeBNBtoUSD)})
								</div>
							</div>
						</div>
						<div className={css.block__cardRecord}>
							<div className={css.block__left}>
								<Popover
									placement={cardRecordPopupPlacement}
									trigger={popoverTriggerType.hover}
									content={
										<div className='flex flex-col'>
											<span>
												Cost per unit of gas specified for
												the transaction,
											</span>
											<span>
												in BNB and Gwei. The higher the gas
												price the
											</span>
											<span>
												higher chance of getting included in
												a block.
											</span>
										</div>
									}
									className={css.block__question}
								>
									<CiCircleQuestion />
								</Popover>
								Gas Price:
							</div>
							<div className={css.block__right}>
								<Popover
									placement={popoverPlacementType.top}
									content={
										<div className='flex flex-col items-center'>
											<span>
												The price offered to the validator
												to purchase this amount
											</span>
											<span>of GAS (per GAS)</span>
										</div>
									}
								>
									{mainData?.gasPriceGwei} Gwei
								</Popover>
								<div className='--text-gray'>
									({mainData?.gasPriceBNB} BNB)
								</div>
							</div>
						</div>
					</>
				)

			default:
				return (
					<>
					</>
				)
		}
	}
	const [cardRecordPopupPlacement,] = useState(popoverPlacementType.right);

	// useEffect
	useEffect(() => {
		fetchMainData();
	}, [transactionnumber]);

	return (
		<div className={`${css.block} pb-0`}>
			<div className={`${css.block__content} ${renderClassContent()}`}>
				<Card className={css.block__card}>
					<div className={css.block__cardRecord}>
						<div className={css.block__left}>
							<Popover
								placement={cardRecordPopupPlacement}
								trigger={popoverTriggerType.hover}
								content={
									<div className='flex flex-col'>
										<span>
											A TxHash or transaction hash is a
											unique 66-
										</span>
										<span>
											character identifier that is
											generated whenever a
										</span>
										<span>transaction is executed.</span>
									</div>
								}
								className={css.block__question}
							>
								<CiCircleQuestion />
							</Popover>
							Transaction Hash:
						</div>
						<div className={css.block__right}>
							<div className={css2['--breakWord']}>
								{transactionnumber}
							</div>
							<CopyButton
								content={transactionnumber}
								popupContent={`Copy TxHash to clipboard`}
							/>
						</div>
					</div>
					<div className={css.block__cardRecord}>
						<div className={`${css.block__left} mt-1`}>
							<Popover
								placement={cardRecordPopupPlacement}
								trigger={popoverTriggerType.hover}
								content={
									<div className='flex flex-col'>
										<span>
											The status of the transaction.
										</span>
									</div>
								}
								className={css.block__question}
							>
								<CiCircleQuestion />
							</Popover>
							Status:
						</div>
						<div className={css.block__right}>
							<Popover
								placement={popoverPlacementType.top}
								content={
									<div className='flex flex-col items-center'>
										<span>
											A Status code indicating if the
											top-level call succeeded of
										</span>
										<span>
											failed (applicable for Post
											BYZANTIUM blocks only)
										</span>
									</div>
								}
							>
								{renderStatus(mainData?.transactionStatus)}
							</Popover>
						</div>
					</div>
					<div className={css.block__cardRecord}>
						<div className={css.block__left}>
							<Popover
								placement={cardRecordPopupPlacement}
								trigger={popoverTriggerType.hover}
								content={
									<div className='flex flex-col'>
										<span>
											Number of the block in which the
											transaction is
										</span>
										<span>
											recorded. Block confirmations
											indicate how many
										</span>
										<span>
											blocks have been added since the
											transaction
										</span>
										<span>was produced.</span>
									</div>
								}
								className={css.block__question}
							>
								<CiCircleQuestion />
							</Popover>
							Block:
						</div>
						<div className={css.block__right}>
							<NavLink
								style={{ textDecoration: 'none' }}
								className={`--text-blue`}
							>
								{mainData?.blockNumber}
							</NavLink>
							<Popover
								placement={popoverPlacementType.top}
								content={`Number of blocks validated since`}
							>
								<PillSquare type={pillSquareType.normal}>
									{currentBlock - mainData?.blockNumber} Block
									Confirmations
								</PillSquare>
							</Popover>
						</div>
					</div>
					<div className={css.block__cardRecord}>
						<div className={css.block__left}>
							<Popover
								placement={cardRecordPopupPlacement}
								trigger={popoverTriggerType.hover}
								content={
									<div className='flex flex-col'>
										<span>
											The date and time at which a
											transaction is
										</span>
										<span>validated.</span>
									</div>
								}
								className={css.block__question}
							>
								<CiCircleQuestion />
							</Popover>
							Timestamp:
						</div>
						<div className={css.block__right}>
							<div
								className={`flex items-center gap-1 ${renderClassTimeStamp()}`}
							>
								<CiClock2 />
								{calcTimestamp(blockInfo)}
							</div>
							<div className={renderClassTimeStampFetching()}>
								<Loader2 style={{ borderTopColor: 'black' }} />
							</div>
						</div>
					</div>
					<div className={css.block__line}></div>
					<div className={css.block__cardRecord}>
						<div className={css.block__left}>
							<Popover
								placement={cardRecordPopupPlacement}
								trigger={popoverTriggerType.hover}
								content={
									<div className='flex flex-col'>
										<span>
											Highlighted events of the
											transaction.
										</span>
									</div>
								}
								className={css.block__question}
							>
								<FcFlashOn />
							</Popover>
							Transaction Action:
						</div>
						<div className={css.block__right}>
							{renderTransactionAction()}
						</div>
					</div>
					<div className={css.block__line}></div>
					{renderPrivateData()}
				</Card>
				{renderTransactionColapse()}
				<Card className={`${css.block__card} ${renderPrivateNote()}`}>
					<div className={css.block__cardRecord}>
						<div className={css.block__left}>
							<Popover
								placement={popoverPlacementType.top}
								trigger={popoverTriggerType.hover}
								content={
									<div className='flex flex-col'>
										<span>
											Private note to keep track of the
											transaction. Only
										</span>
										<span>
											viewable to BscScan&apos;s user who
											assign them.
										</span>
									</div>
								}
								className={css.block__question}
							>
								<CiCircleQuestion />
							</Popover>
							Private Note:
						</div>
						<div
							style={{ flexDirection: 'column' }}
							className={css.block__right}
						>
							<TextArea />
							<div className={`--text-gray`}>
								Tip: A private note (up to 100 characters) can
								be saved and is useful for transaction tracking.
								Please DO NOT store any passwords or private
								keys here.
							</div>
						</div>
					</div>
				</Card>
			</div>
			<div className={renderClassFetching()}>
				<Loader />
			</div>
			<div className={renderClassEmpty()}>
				<Empty />
				<div className='flex justify-center'>{error}</div>
			</div>
		</div>
	);
};

export default Overview;
