import Card from 'src/components/card';
import css from 'src/pages/block-detail/block.module.scss'
import css2 from './overview.module.scss';
import CardCollapse from 'src/components/card-collapse';
import Popover, { popoverPlacementType, popoverTriggerType } from 'src/components/popover';
import { CiCircleQuestion } from 'react-icons/ci';
import CopyButton from 'src/components/copy-button';
import PillSquare, { pillSquareType } from 'src/components/pill-square';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FcFlashOn } from "react-icons/fc";
import { FaCaretRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { GrFilter } from "react-icons/gr";
import TextArea from 'src/components/text-area';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from 'src/components/dropdown-2';
import Loader from 'src/components/loader';
import { apiStatus, transactionStatus } from 'src/constants';
import Empty from 'src/components/empty';
import { useParams } from 'react-router-dom';
import { getExchangeRateBNBtoUSD, getTransactionDetail, getTransactionReceiptEventLogs } from 'src/services/explorer.services';

const Overview = function () {
	const listInputDropdown = [
		{
			id: 1,
			content: 'Default view',
		},
		{
			id: 2,
			content: 'UTF-8'
		},
		{
			id: 3,
			content: 'Original'
		}
	]

	const {
		transactionnumber
	} = useParams();
	const [cardCollapseShow, setCardCollapseShow] = useState(false);
	const [inputDropdownShow, setInputDropdownShow] = useState(false);
	const [fetchMainDataStatus, setFetchMainDataStatus] = useState(apiStatus.pending);
	const [mainData, setMainData] = useState();
	const [exchangeBNBtoUSD, setExchangeBNBtoUSD] = useState();
	const [error, setError] = useState();

	const renderClassShowInfo_show = () => cardCollapseShow ? '' : 'd-0';
	const renderClassShowInfo_off = () => !cardCollapseShow ? '' : 'd-0';
	const renderClassFetching = () => fetchMainDataStatus === apiStatus.fetching ? '' : 'd-0';
	const renderClassContent = () => fetchMainDataStatus !== apiStatus.fetching && mainData && exchangeBNBtoUSD ? '' : 'd-0';
	const renderClassEmpty = () => fetchMainDataStatus !== apiStatus.fetching && (!mainData || !exchangeBNBtoUSD) ? '' : 'd-0';
	const convertBnbToUsd = (bnbAmount, exchangeRate) => {
		if (typeof bnbAmount !== 'number' || typeof exchangeRate !== 'number') {
		  	console.log('Số lượng BNB và tỷ giá hối đoái phải là số')
		}
	  
		if (bnbAmount < 0 || exchangeRate <= 0) {
			console.log('Số lượng BNB và tỷ giá hối đoái phải là số')
		}
	  
		const usdAmount = bnbAmount * exchangeRate;
		return usdAmount.toFixed(2);
	}
	const renderStatus = (status) => {
		switch (status) {
			case transactionStatus.success:
				return (<PillSquare 
					type={pillSquareType.green}
					className={css2.pillSquare__custom}
				> 
					<IoIosCheckmarkCircle />
					Success
				</PillSquare>)
		
			default:
				return (<PillSquare 
					type={pillSquareType.normal}
					className={css2.pillSquare__custom}
				> 
					Unknow
				</PillSquare>)
		}
	}
	const inputDropdownChange = () => {
		setInputDropdownShow(false);
	}
	const toggleInputDropdown = () => {
		setInputDropdownShow(state => !state);
	}
	const fetchMainData = async () => {
		try {
			if(fetchMainDataStatus === apiStatus.fetching) return;
			setFetchMainDataStatus(apiStatus.fetching);
			const resp = await Promise.all([fetchDetailTransaction(), fetchExchangeBNBtoUSD()]);
			setMainData(JSON.parse(resp[0]?.data?.data));
			setExchangeBNBtoUSD(+resp[1]?.data?.data);
			setFetchMainDataStatus(apiStatus.fullfiled);
		} catch (error) {
			const err = error?.response?.data?.message;
			console.log(error);
			setError(err);
			setFetchMainDataStatus(apiStatus.rejected)
		}
	}
	const fetchDetailTransaction = () => {
		return getTransactionDetail(transactionnumber);
	}
	const fetchExchangeBNBtoUSD = () => {
		return getExchangeRateBNBtoUSD();
	}

	useEffect(()=>{
		fetchMainData();
	}, [transactionnumber])

	return <div className={css.block}>
		<div
		 	className={`${css.block__content} ${renderClassContent()}`}
		>
			<Card className={css.block__card}>
				<div className={css.block__cardRecord}>
					<div className={css.block__left}>
						<Popover 
							placement={popoverPlacementType.top}
							trigger={popoverTriggerType.hover}
							content={
								<div className='flex flex-col'>
									<span>
										A TxHash or transaction hash is a unique 66- 
									</span>
									<span>
										character identifier that is generated whenever a 
									</span>
									<span>
										transaction is executed. 
									</span>
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
							placement={popoverPlacementType.top}
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
							content={<div className='flex flex-col items-center'>
								<span>
									A Status code indicating if the top-level call succeeded of
								</span>
								<span>
									failed (applicable for Post BYZANTIUM blocks only)
								</span>
							</div>}
						>
							{renderStatus(mainData?.transactionStatus)}
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
										Number of the block in which the transaction is    
									</span>
									<span>
										recorded. Block confirmations indicate how many
									</span>
									<span>
										blocks have been added since the transaction
									</span>
									<span>
										was produced.
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Block:
					</div>
					<div className={css.block__right}>
						<NavLink style={{textDecoration: 'none'}} className={`--text-blue`}>
							{mainData?.blockNumber}
						</NavLink>
						<Popover
							placement={popoverPlacementType.top}
							content={`Number of blocks validated since`}
						>
							<PillSquare
								type={pillSquareType.normal}
							>
								3 Block Confirmations
							</PillSquare>
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
										The date and time at which a transaction is 
									</span>
									<span>
										validated.
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Timestamp:
					</div>
					<div className={css.block__right}>
						<CiClock2 />
						9 secs ago (Apr-04-2024 02:00:07 AM +UTC)
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
										Highlighted events of the transaction. 
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
						<div>
							Function by
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={<div className='flex items-center flex-col'>
								<span>
									Validator: Defibit
								</span>
								<span>
									0xea0a6e3c511bbd10f4519ece37dc24887e11b55d
								</span>
							</div>}
							className={`--text-blue --hover-yellow`}
						>
							Validator: Defibit
						</Popover>
						<div>on</div>
						<Popover
							placement={popoverPlacementType.top}
							content={<div className='flex items-center flex-col'>
								<span>
									0xea0a6e3c511bbd10f4519ece37dc24887e11b55d
								</span>
							</div>}
							className={`--text-blue --hover-yellow`}
						>
							<div className='flex items-center gap-1'>
								<IoDocumentTextOutline />
								BSC: Validator Set
							</div>
						</Popover>
						<Popover
							placement={popoverPlacementType.top}
							content={<div className='flex items-center flex-col'>
								<span>
									Suggest Transaction Action
								</span>
							</div>}
							className={`--text-blue flex flex-items`}
						>
							<HiPencil />
						</Popover>
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
										Sponsored banner advertisement. 
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Sponsored:
					</div>
					<div className={css.block__right}>
						Advanties
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
										The sending party of the transaction.
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
						<div className={`--text-blue --hover-yellow ${css2['--breakWord']}`}>
							{mainData?.from}
						</div>
						<div>
							(Validator: Defibit)
						</div>
						<CopyButton
							content={mainData?.from}
						/>
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
										The receiving party of the transaction (could be a 
									</span>
									<span>
										contract address).
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						To:
					</div>
					<div style={{flexWrap: 'wrap'}} className={css.block__right}>
						<div>
							<IoDocumentTextOutline />
						</div>
						<div className={`--text-blue --hover-yellow ${css2['--breakWord']}`}>
							{mainData?.to}
						</div>
						<div>
							(BSC: Validator Set)
						</div>
						<CopyButton 
							content={mainData?.to}
						/>
						<div className={css2.check}>
							<IoIosCheckmarkCircle />
						</div>
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
										The value being transacted in BNB and fiat value.
									</span>
									<span>
										Note: You can click the fiat value (if available) to
									</span>
									<span>
										see historical value at the time of transaction.
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
							<img src="https://bscscan.com/assets/bsc/images/svg/logos/token-light.svg?v=24.3.4.0" alt="BNB Smart Chain Logo" />
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={<div className='flex flex-col items-center'>
								<span>
									The amount of BNB to be transferred to the recipient with
								</span>
								<span>
									the transaction
								</span>
							</div>}
						>
							{mainData?.value} BNB
						</Popover>
						<div className={`--text-gray`}>
							(${convertBnbToUsd(mainData?.value, exchangeBNBtoUSD)})
						</div>
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
										Amount paid to the validator for processing the 
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
						Transaction Fee:
					</div>
					<div className={css.block__right}>
						<Popover
							placement={popoverPlacementType.top}
							content={`Gas Price * Gas Used by Transaction`}
						>
							0 BNB
						</Popover>
						<div className='--text-gray'>
							($0.00)
						</div>
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
										Cost per unit of gas specified for the transaction,  
									</span>
									<span>
										in BNB and Gwei. The higher the gas price the
									</span>
									<span>
										higher chance of getting included in a block. 
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
							content={<div className='flex flex-col items-center'>
								<span>
									The price offered to the validator to purchase this amount
								</span>
								<span>
									of GAS (per GAS)
								</span>
							</div>}
						>
							0 BNB
						</Popover>
						<div className='--text-gray'>
							(0 BNB)
						</div>
					</div>
				</div>
			</Card>

			<CardCollapse
				show={cardCollapseShow}
				setShow={setCardCollapseShow}
				footer={
					<div className={css.block__cardCollapseRecord}>
						<div className={css.block__left}>
							More Details: 
						</div>
						<div className={`${css.block__right} --text-blue`}>
							<div className={`${renderClassShowInfo_off()} flex items-center`} >
								<FaPlus />
							</div> 
							<div className={`${renderClassShowInfo_show()} flex items-center`}>
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
					style={{paddingBottom: '0'}} 
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
											Maximum amount of gas allocated for the   
										</span>
										<span>
											transaction & the amount eventually used.
										</span>
										<span>
											Normal BNB transfers involve 21,000 gas units
										</span>
										<span>
											while contracts involve higher values.
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
								9,223,372,036,854,775,807
							</Popover>
							| 
							<Popover
								placement={popoverPlacementType.top}
								content={`The amount of GAS used by this specific transaction alone`}
							>
								51,008 (0%)
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
											Total amount of BNB burnt from this tx.  
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
											Other data related to this transaction.  
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
								1632582
							</PillSquare>
							<PillSquare
								type={pillSquareType.normal}
								className={`--bold  flex gap-1`}
							>
								<span className={`--text-gray`}> 
									Position In Block:
								</span>
								1632582
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
											Additional data included for this transaction. 
										</span>
										<span>
											Commonly used as part of contract interaction or
										</span>
										<span>
											as a message sent to the recipient. 
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
							style={{flexDirection: 'column'}} 
							className={css.block__right}
						>	
							<Popover
								placement={popoverPlacementType.top}
								content={
									<div className='flex flex-col items-center'>
										<span>
											The binary data that formed the input to the transaction,
										</span>
										<span>
											either the input data if it was a message call or the contract
										</span>
										<span>
											initialisation if it was a contract creation
										</span>
									</div>
								}
								className={css2['popover__custom']}
							>
								<Card className={css2.card__custom}>
									Function: deposit(address valAddr)

									MethodID: 0xf340fa01
									[0]:  0000000000000000000000002465176c461afb316ebc773c61faee85a6515daa
								</Card>
							</Popover>
							
							<div 
								className='w-100 flex justify-start gap-1 flex-wrap'
							>
								<div>
									<Dropdown2 
										trigger={dropdown2TriggerType.runtime}
										header={<PillSquare 
											className={css2.pillSquareButton}
											type={pillSquareType.normal}
											onClick={toggleInputDropdown}
										>
											
											View Input As
											<FaAngleDown />
										</PillSquare>}
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

			<Card className={css.block__card}>
				<div className={css.block__cardRecord}>
					<div className={css.block__left}>
						<Popover
							placement={popoverPlacementType.top}
							trigger={popoverTriggerType.hover}
							content={
								<div className='flex flex-col'>
									<span>
										Private note to keep track of the transaction. Only 
									</span>
									<span>
										viewable to BscScan's user who assign them.
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Private Note:
					</div>
					<div style={{flexDirection: 'column'}} className={css.block__right}>	
						<TextArea />
						<div className={`--text-gray`}>
							Tip: A private note (up to 100 characters) can be saved and is useful for transaction tracking. Please DO NOT store any passwords or private keys here.
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
			<div className='flex justify-center'>
				{error}
			</div>
		</div>
	</div>
}

export default Overview;