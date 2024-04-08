import Popover, { popoverPlacementType } from 'src/components/popover';
import css from './log-record.module.scss';
import CopyButton from 'src/components/copy-button';
import { Dropdown2, dropdown2Align, dropdown2TriggerType } from 'src/components/dropdown-2';
import { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import PillSquare, { pillSquareType } from 'src/components/pill-square';
import { CiFilter } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import Input from './input';

const LogRecord = function (props) {
	const {
		content
	} = props;
	(content);
	const addressDropdownList = [
		{
			id: 1,
			content: <>
				<CiFilter />
				Matches Topic0 (Advanced Filter)
			</>
		}
	]
	const topicsDropdownList = [
		{
			id: 1,
			content:'code'
		},
		{
			id: 2,
			content: 'decode'
		}
	]

	const [showAddressDropdown, setShowAddressDropdown] = useState();
	const [showTopicsDropdown, setShowTopicsDropdown] = useState();
	const [topicsDropdownSelected, setTopicsDropdownSelected] = useState(topicsDropdownList[0]);

	const toggleAddressDropdown = () => {
		setShowAddressDropdown(state => !state);
	}
	const addressDropdownChangeHandle = () => {
		setShowAddressDropdown(false);
	}
	const toggleTopicsDropdown = () => {
		setShowTopicsDropdown(state => !state);
	}
	const topicsDropdownChangeHandle = (item) => {
		setTopicsDropdownSelected(item)
		setShowTopicsDropdown(false);
	}
	const renderTopics = (topics) => {
		const length = topics?.length;
		if (length === 1) {
			return (
				<div 
						style={{flexWrap: 'wrap'}} 
						className='flex items-center gap-1'
					>
						<PillSquare
							type={pillSquareType.normal}
						>
							0
						</PillSquare>
						<div className={css['logRecord--wordBreak']}>
							{topics[0]}
						</div>
					</div>
			);
		} else if (length === 2) {
			return (
				<>
					<div 
						style={{flexWrap: 'wrap'}} 
						className='flex items-center gap-1'
					>
						<PillSquare
							type={pillSquareType.normal}
						>
							0
						</PillSquare>
						<div className={css['logRecord--wordBreak']}>
							{topics[0]}
						</div>
					</div>
					<div 
						style={{flexWrap: 'wrap'}}  className='flex items-center gap-1'
					>
						<PillSquare
							type={pillSquareType.normal}
							className={css.topic__pillSquare__custom}
						>
							1: from
						</PillSquare>
						<div>
							<Dropdown2
								trigger={dropdown2TriggerType.runtime}
								onChange={topicsDropdownChangeHandle}
								list={topicsDropdownList}
								show={showTopicsDropdown}
								header={
									<div 
										onClick={toggleTopicsDropdown}
										className={css.logRecord__address__dropdownHeader}
									>
										{topicsDropdownSelected?.content}
										<FaAngleDown />
									</div>
								}
							/>
						</div>
						<div style={{fontSize: '15px'}} className='flex items-center'>
							<FaLongArrowAltRight />
						</div>
						<div className={css['logRecord--wordBreak']}>
							{topics[1]}
						</div>
					</div>
				</>
			)
		}
	}

	return (
		<div className={css.logRecord}>
			<div className={css.logRecord__left}>
				<div className={css.logRecord__circle}>
					{content.logIndex}
				</div>
			</div>
			<div className={css.logRecord__right}>
				<div className={css.logRecord__row}>
					<div className={`${css.logRecord__row__left} ${css['logRecord--black']}`}>
						Address
					</div>
					<div style={{flexWrap: 'wrap'}} className={css.logRecord__row__right}>
						<Popover
							placement={popoverPlacementType.top}
							content={<div className='flex items-center flex-col'>
								<span>	
									BSC: System Reward
								</span>
								<span>
									({content.address})
								</span>
							</div>}
							className={`--text-blue --hover-yellow ${css.logRecord__address_popover}`}
						>
							BSC: System Reward
						</Popover>
						<CopyButton
							content={content.address}
						/>
						<div>
							<Dropdown2
								trigger={dropdown2TriggerType.runtime}
								list={addressDropdownList}
								show={showAddressDropdown}
								header={<div 	
									className={css.logRecord__address__dropdownHeader}
									onClick={toggleAddressDropdown}
									>
										<GrSearch />
										<FaAngleDown />
								</div>}
								onChange={addressDropdownChangeHandle}
								align={dropdown2Align.right}
							/>
						</div>
					</div>
				</div>
				<div className={css.logRecord__row}>
					<div className={css.logRecord__row__left}>
						Name
					</div>
					<div style={{flexWrap:'wrap'}} className={`${css.logRecord__row__right} ${`--text-gray`}`}>
						<div>
							receiveDeposit (index_topic_1
						</div>
						<div className='--text-success'>
							address
						</div>
						<div className='--text-danger flex'>
							from
							<div className='--text-gray'>
								,
							</div>
						</div>
						<div className='--text-success'>
							uint256
						</div>
						<div className='--text-danger'>
							amount
						</div>
						<div>
							)
						</div>
						<Popover
							placement={popoverPlacementType.top}
							content={`View source code`}
							className={`--text-blue`}
						>
							View Source
						</Popover>
					</div>
				</div>
				<div className={css.logRecord__row}>
					<div className={css.logRecord__row__left}>
						Topics
					</div>
					<div 
						style={{flexDirection:'column', alignItems:'flex-start'}} 
						className={css.logRecord__row__right}
					>
						{renderTopics(content.topics)}
					</div>
				</div>
				<div className={css.logRecord__row}>
					<div className={css.logRecord__row__left}>
						Data
					</div>
					<div className={css.logRecord__row__right}>
						<Input value={content.data} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogRecord;