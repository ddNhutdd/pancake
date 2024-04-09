import ToolPage from 'src/components/tool-page';
import css from './similar-contract-search.module.scss';
import {url} from 'src/constants';
import HeaderComponent4 from 'src/components/header-component-4';
import Card from 'src/components/card';
import Button2, {button2Type} from 'src/components/button-2';
import Input3 from 'src/components/input-3';
import {Dropdown2, dropdown2TriggerType} from 'src/components/dropdown-2';
import {useState} from 'react';
import {FaAngleDown} from 'react-icons/fa6';
import CheckBox from 'src/components/checkbox';
import {hasKey} from 'src/utils';

function SimilarContractSearch() {
	const similarList = [
		{
			id: 1,
			content: `Exact`,
		},
		{
			id: 2,
			content: `Similar`,
		},
	];
	const chainItemChangeHandle = (ev) => {
		const id = ev.target.id;
		const newState = {...chainsDropdownSelected};
		const isHasKey = hasKey(newState, id);
		if (isHasKey) {
			delete newState[id];
		} else {
			newState[id] = true;
		}
		setChainsDropdownSelected(newState);
	};
	const chainsList = [
		{
			id: 1,
			content: (
				<CheckBox
					onChange={chainItemChangeHandle}
					id={`Etherum`}
					text={`Etherum`}
				></CheckBox>
			),
		},
		{
			id: 2,
			content: (
				<CheckBox
					onChange={chainItemChangeHandle}
					id={`BTC`}
					text={`BTC`}
				></CheckBox>
			),
		},
		{
			id: 3,
			content: (
				<CheckBox
					onChange={chainItemChangeHandle}
					id={`USDT`}
					text={`USDT`}
				></CheckBox>
			),
		},
	];

	const [similarDropdownShow, setSimilarDropdownShow] = useState(false);
	const [similarDropdownSelected, setSimilarDropdownSelected] = useState(
		similarList[0],
	);
	const [chainsDropdownShow, setChainsDropdownShow] = useState(false);
	const [chainsDropdownSelected, setChainsDropdownSelected] = useState({});

	const similarDropdownChangeHandle = (item) => {
		setSimilarDropdownShow(false);
		setSimilarDropdownSelected(item);
	};
	const toggleSimilarDropdown = () => setSimilarDropdownShow((s) => !s);
	const toggleChainDropdown = () => setChainsDropdownShow((s) => !s);
	const renderHeaderChain = () => {
		const keys = Object.keys(chainsDropdownSelected)?.length;
		if (keys === 0) {
			return `Empty`;
		} else if (keys === 1) {
			return Object.keys(chainsDropdownSelected)[0];
		} else {
			return `${keys} items`;
		}
	};

	return (
		<ToolPage menuActive={url.similarContractsSearch}>
			<HeaderComponent4
				title={`Similar Contracts Searchs`}
				content={`Find other contracts with similar source code.`}
			/>
			<Card className={css.similarContractsSearch}>
				<div className={css.similarContractsSearch__body}>
					<div className={css.similarContractsSearch__input}>
						<label>
							Contract Address
							<span className='--text-danger'>*</span>
						</label>
						<div className='row'>
							<div className='col-6 pl-0 col-lg-12'>
								<Input3 placeholder={`0x..`}></Input3>
							</div>
							<div className='col-3 col-lg-12 pl-lg-0'>
								<Dropdown2
									trigger={dropdown2TriggerType.runtime}
									header={
										<div
											className={
												css.similarContractsSearch__dropdownHeader
											}
											onClick={toggleSimilarDropdown}
										>
											{similarDropdownSelected.content}
											<FaAngleDown />
										</div>
									}
									list={similarList}
									show={similarDropdownShow}
									onChange={similarDropdownChangeHandle}
								></Dropdown2>
							</div>
							<div className='col-3 col-lg-12 pl-lg-0'>
								<Dropdown2
									allowItemHover={false}
									trigger={dropdown2TriggerType.runtime}
									header={
										<div
											className={
												css.similarContractsSearch__dropdownHeader
											}
											onClick={toggleChainDropdown}
										>
											{renderHeaderChain()}
											<FaAngleDown />
										</div>
									}
									list={chainsList}
									show={chainsDropdownShow}
									onChange={() => {}}
								></Dropdown2>
							</div>
						</div>
					</div>
				</div>
				<div className={css.similarContractsSearch__footer}>
					<Button2 type={button2Type.primary}>Search</Button2>
					<Button2 type={button2Type.secondary}>Search</Button2>
				</div>
			</Card>
		</ToolPage>
	);
}

export default SimilarContractSearch;
