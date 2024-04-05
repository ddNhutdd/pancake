import HeaderComponent2 from 'src/components/header-component-2';
import css from './block.module.scss';
import Button2, { button2Type } from 'src/components/button-2';
import Card from 'src/components/card';
import { CiCircleQuestion } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import Popover, { popoverPlacementType, popoverTriggerType } from 'src/components/popover';
import CopyButton from 'src/components/copy-button';
import { NavLink } from 'react-router-dom';
import { VscLinkExternal } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'src/components/loader';
import { apiStatus } from 'src/constants';
import { getBlockDetail, getBlockReward } from 'src/services/explorer.services';
import { formatNumber } from 'src/utils';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import CardCollapse from 'src/components/card-collapse';
import Loader2 from 'src/components/loader-2';

const Block = function () {
	const { blocknumber } = useParams();

	const [fetchMainDataStatus, setFetchMainDataStatus] = useState(apiStatus.pending);
	const [mainData, setMainData] = useState();
	const [error, setError] = useState();
	const [showInfo, setShowInfo] = useState(false);
	const [rewardContent, setRewardContent] = useState();
	const [fetchRewardStatus, setFetchRewardStatus] = useState(apiStatus.pending);

	const renderClassShowFetching = () => fetchMainDataStatus === apiStatus.fetching ? '' : 'd-0';
	const renderClassShowInfo_show = () => showInfo ? '' : 'd-0';
	const renderClassShowInfo_off = () => !showInfo ? '' : 'd-0';
	const renderContent = () => {
		if (fetchMainDataStatus === apiStatus.fullfiled && mainData) {
			return <div className={css.block__content}>
		<Button2 
			classname={css.block__buttonOverview}
			type={button2Type.primarySmall}
		>
			Overview
		</Button2>
		<Card className={css.block__card}>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover 
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							<div className='flex flex-col'>
								<span>
									Also known as Block Number. The block height, 
								</span>
								<span>
									which indicates the length of the blockchain, 
								</span>
								<span>
									increases after the addition of the new block.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Block Height:
				</div>
				<div className={css.block__right}>
					{mainData?.number}
					<Popover
						placement={popoverPlacementType.top} 
						content={`View previous block`}
					>
						<Button2 classname={css.block__button} type={button2Type.outlineSmall}>
							<FaAngleLeft />
						</Button2>
					</Popover>
					<Popover
						placement={popoverPlacementType.top} 
						content={`You have reached the latest block`}
					>
						<Button2 classname={css.block__button} type={button2Type.outlineSmall}>
							<FaAngleRight />
						</Button2>
					</Popover>
				</div>
			</div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={`The date and time at which a block is validated.`}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Timestamp:
				</div>
				<div className={css.block__right}>
					<CiClock2 />
					{calcTimestamp(mainData?.timestamp)}
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
									The number of transactions in the block. Internal 
								</span>
								<span>
									transaction is transactions as a result of contract 
								</span>
								<span>
									execution that involves BNB value
								</span>	
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Transactions:
				</div>
				<div className={css.block__right}>
					<Popover
						content={`Click to view transactions`}
						placement={popoverPlacementType.top}
					>
						<NavLink className={css.block__right__link}>
							{mainData?.transactions?.length} transactions
						</NavLink>
					</Popover>
					in this block
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
									Validator who successfully included the block 
								</span>
								<span>
									onto the blockchain.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Validated By:
				</div>
				<div className={css.block__right}>	
					<Popover
						placement={popoverPlacementType.top}
						content={mainData?.miner}
						className='--text-blue'
					>
						Validator: BscScan
					</Popover>
					<CopyButton content={mainData?.miner} />
					in 3 secs
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
									For each block, the miner is rewarded with a finite  
								</span>
								<span>
									amount of BNB on top of the fees paid for all
								</span>
								<span>
									transactions in the block.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Block Reward:
				</div>
				<div className={css.block__right}>	
					{rewardContent}
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
									The amount of effort required to validate a new  
								</span>
								<span>
									block. The difficulty algorithm may adjust
								</span>
								<span>
									according to time.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Difficulty:
				</div>
				<div className={css.block__right}>	
					{mainData?.difficulty}
				</div>
			</div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							`Total difficulty of the chain until this block.`
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Total Difficulty:
				</div>
				<div className={css.block__right}>	
					{
						formatNumber(mainData?.totalDifficulty)
					}
				</div>
			</div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							<div className={`flex flex-col`}>
								<span>
									The block size is actually determined by the 
								</span>
								<span>
									block's gas limit.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Size:
				</div>
				<div className={css.block__right}>	
					{formatNumber(mainData?.size)} bytes
				</div>
			</div>
			<div className={css.block__line}></div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							<div className={`flex flex-col`}>
								<span>
									The total gas used in the block and its 
								</span>
								<span>
									percentage of gas filled in the block.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Gas Used:
				</div>
				<div className={css.block__right}>	
					{formatNumber(mainData?.gasUsed)}
					<span>
						(--%)
					</span>
				</div>
			</div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							<div className={`flex flex-col`}>
								<span>
									Total gas limit provided by all transactions in the 
								</span>
								<span>
									block.
								</span>
							</div>
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Gas Limit:
				</div>
				<div className={css.block__right}>	
					{formatNumber(mainData?.gasLimit)}
				</div>
			</div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							`Fees burnt by this block.`
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Burnt Fees:
				</div>
				<div className={css.block__right}>	
					🔥 0.003030564367962667 BNB 
					<Popover
						placement={popoverPlacementType.top}
						content={`Open fee burn transactions`}
					>
						<NavLink className={css.block__right__link}>
							<VscLinkExternal />
						</NavLink>
					</Popover>
				</div>
			</div>
			<div className={css.block__cardRecord}>
				<div className={css.block__left}>
					<Popover
						placement={popoverPlacementType.top}
						trigger={popoverTriggerType.hover}
						content={
							`Fees burnt by this block.`
						}
						className={css.block__question}
					>
						<CiCircleQuestion />
					</Popover>
					Extra Data:
				</div>
				<div className={css.block__right}>	
					<Card
						className={css.block__right__card}
					>
						{mainData?.extraData}
					</Card>
				</div>
			</div>
		</Card>
		<CardCollapse
			show={showInfo}
			setShow={setShowInfo}
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
			<div style={{paddingBottom: '0'}} className={css.block__card}>
				<div className={css.block__cardRecord}>
					<div className={css.block__left}>
						<Popover
							placement={popoverPlacementType.top}
							trigger={popoverTriggerType.hover}
							content={
								<div className='flex flex-col'>
									<span>
										The hash of the block header of the current 
									</span>
									<span>
										block. 
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Hash:
					</div>
					<div className={css.block__right}>	
						{mainData?.hash}
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
										The hash of the block from which this block was 
									</span>
									<span>
										generated, also known as its parent block.
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Parent Hash:
					</div>
					<div className={css.block__right}>	
						<NavLink className={css.block__link}>
							{mainData?.parentHash}
						</NavLink>
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
										The mechanism which Binance Javascript RLP 
									</span>
									<span>
										encodes an empty string.
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Sha3Uncles:
					</div>
					<div className={css.block__right}>	
						{mainData?.sha3Uncles}
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
										Block nonce is a value used during mining to 
									</span>
									<span>
										demonstrate proof of work for a block. 
									</span>
								</div>
							}
							className={css.block__question}
						>
							<CiCircleQuestion />
						</Popover>
						Nonce:
					</div>
					<div className={css.block__right}>	
						{mainData?.nonce}
					</div>
				</div>
				<div className={css.block__line}></div>
			</div>
		</CardCollapse>
	</div>
		} else if (fetchMainDataStatus === apiStatus.rejected) {
			return error;
		}  
	}
	const fetchInfo = async () => {
		try {
			if (fetchMainDataStatus === apiStatus.fetching) return;
			setFetchMainDataStatus(apiStatus.fetching);
			const response = await getBlockDetail(blocknumber);
			const data = JSON.parse(response?.data?.data); 
			setMainData(data);
			setFetchMainDataStatus(apiStatus.fullfiled);
		} catch (error) {
			console.log(error);
			setError(error?.response?.data?.message);
			setFetchMainDataStatus(apiStatus.rejected);
		}
	}
	const calcTimestamp = (timestamp) => {
		// Chuyển đổi timestamp sang Date
		const date = new Date(timestamp * 1000);
	  
		// Lấy thông tin thời gian
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		const ampm = hours >= 12 ? 'PM' : 'AM';
		const day = date.getDate();
		const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
		const year = date.getFullYear();
	  
		// Tính toán thời gian trôi qua
		const currentTime = Date.now();
		const timeDiff = currentTime - timestamp * 1000;
		const secondsAgo = Math.floor(timeDiff / 1000);
		const minutesAgo = Math.floor(secondsAgo / 60);
		const hoursAgo = Math.floor(minutesAgo / 60);
	  
		// Xác định đơn vị thời gian
		let timeUnit = 'seconds';
		let timeAmount = secondsAgo;
	  
		if (minutesAgo >= 1) {
		  timeUnit = 'minutes';
		  timeAmount = minutesAgo;
		}
	  
		if (hoursAgo >= 1) {
		  timeUnit = 'hours';
		  timeAmount = hoursAgo;
		}
	  
		// Định dạng chuỗi thời gian
		const formattedTime = `${timeAmount} ${timeUnit} ago`;
		const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm} +UTC`;
	  
		// Trả về chuỗi kết quả
		return `${formattedTime} (${formattedDate})`;
	}	 
	const fetchReward = async () => {
		try {
			if(fetchRewardStatus === apiStatus.fetching) return;
			setFetchRewardStatus(apiStatus.fetching);
			setRewardContent(<Loader2 />);
			const resp = await getBlockReward(blocknumber);
			console.log(resp);
			const data = JSON.parse(resp?.data?.data)?.blockReward;
			setRewardContent(data + ' BNB');
			setFetchRewardStatus(apiStatus.fullfiled);
		} catch (error) {
			console.log(error);
			setFetchRewardStatus(apiStatus.rejected)
			setRewardContent('Load data fail!')
		}
	}
	const fetchData = () => {
		fetchInfo();
		fetchReward();
	}

	useEffect(() => {
		fetchData();
	}, [])

	return (<div className={css.block}>
		<div className={css.container}>
			<HeaderComponent2
				mainContent={<div>
					Block
					<span className={`--text-gray ${css.block__header}`}>#{blocknumber}</span>
				</div>}
			/>
			{renderContent()}
			<div className={css.block__footer}>
					Blocks are batches of transactions linked via cryptographic hashes. Any tampering of a block would invalidate all following blocks as all subsequent hashes would change. Learn more about this page in our Knowledge Base.
			</div>
			<div className={renderClassShowFetching()}>
				<Loader />
			</div>
		</div>
	</div>)
}

export default Block;