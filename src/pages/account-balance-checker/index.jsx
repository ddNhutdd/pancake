import ToolPage from 'src/components/tool-page';
import css from './account-balance-checker.module.scss';
import {dateFormat, url} from 'src/constants';
import HeaderComponent4 from 'src/components/header-component-4';
import Card from 'src/components/card';
import Button2, {button2Type} from 'src/components/button-2';
import {Dropdown2, dropdown2TriggerType} from 'src/components/dropdown-2';
import {useEffect, useState} from 'react';
import {FaAngleDown} from 'react-icons/fa6';
import Input3 from 'src/components/input-3';
import RadioButton from 'src/components/radio-button';
import {DateInput2} from 'src/components/date-input-2';
import {useDispatch} from 'react-redux';
import {setShowMenu} from 'src/redux/slices/headerComponent2';

function AccountBalanceChecker() {
	const optionList = [
		{
			id: 1,
			content: 'BNB',
		},
		{
			id: 2,
			content: `token (BEP20)`,
		},
	];

	const [showDropdown, setShowDropdown] = useState(false);
	const [dropdownOptionSelected, setDropdownOptionSelected] = useState(
		optionList[0],
	);
	const dropdownOptionChangeHandle = (selectedItem) =>
		setDropdownOptionSelected(selectedItem);
	const dispatch = useDispatch();

	const closeDropdownOption = () => setShowDropdown(false);
	const dropdownOptionToggle = (ev) => {
		ev.stopPropagation();
		setShowDropdown(true);
	};

	useEffect(() => {
		document.addEventListener('click', closeDropdownOption);
		dispatch(setShowMenu(true));

		return () => {
			document.removeEventListener('click', closeDropdownOption);
			dispatch(setShowMenu(false));
		};
	}, []);

	return (
		<ToolPage menuActive={url.accountBalanceChecker}>
			<HeaderComponent4
				title={`Account Balance Checker (BNB)`}
				content={`You can Lookup the Account (BNB) Historical Balance at a specific Block No or Date`}
			/>
			<Card className={css.accountBalanceChecker}>
				<div className={css.accountBalanceChecker__body}>
					<div className={css.accountBalanceChecker__input}>
						<div className={css.accountBalanceChecker__label}>
							Choose an option
						</div>
						<Dropdown2
							trigger={dropdown2TriggerType.runtime}
							header={
								<div
									className={
										css.accountBalanceChecker__dropdownOptionHeader
									}
									onClick={dropdownOptionToggle}
								>
									{dropdownOptionSelected.content}
									<FaAngleDown />
								</div>
							}
							list={optionList}
							onChange={dropdownOptionChangeHandle}
							show={showDropdown}
						/>
					</div>
					<div className={css.accountBalanceChecker__input}>
						<div className={css.accountBalanceChecker__label}>
							Account Address / Contract Address{' '}
							<span className='--text-danger'>*</span>
						</div>
						<Input3 />
					</div>
					<div className={css.accountBalanceChecker__input}>
						<div className={css.accountBalanceChecker__label}>
							Filter by:
						</div>
						<div className='flex items-center gap-2'>
							<RadioButton
								name={`filter`}
								id={`radio__id`}
							>
								Date
							</RadioButton>
							<RadioButton
								name={`filter`}
								id={`radio__block`}
							>
								Block Number
							</RadioButton>
						</div>
					</div>
					<div className={css.accountBalanceChecker__input}>
						<div className={css.accountBalanceChecker__label}>
							Date for the snapshot
						</div>
						<DateInput2
							format={dateFormat}
							placeholder={dateFormat}
						/>
					</div>
					<div className={css.accountBalanceChecker__input}>
						<div className={css.accountBalanceChecker__label}>
							Date for the snapshot
						</div>
						<Input3 placeholder={`Enter a Block No`} />
					</div>
				</div>
				<div className={css.accountBalanceChecker__footer}>
					<Button2 type={button2Type.primary}>Lookup</Button2>
					<Button2 type={button2Type.secondary}>Reset</Button2>
				</div>
			</Card>
		</ToolPage>
	);
}

export default AccountBalanceChecker;
