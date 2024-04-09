import Card from 'src/components/card';
import css from './settings.module.scss';
import Switch2 from 'src/components/switch-2';
import {useState} from 'react';
import {
	Dropdown2,
	dropdown2Align,
	dropdown2TriggerType,
} from 'src/components/dropdown-2';
import Button2, {button2Type} from 'src/components/button-2';
import {IoChevronDownOutline} from 'react-icons/io5';

function Settings() {
	const languageList = [
		{
			id: 1,
			content: 'fdsafd',
		},
		{
			id: 2,
			content: 'fdsafd',
		},
	];
	const dateTimeFormatList = [
		{
			id: 1,
			content: `1`,
		},
		{
			id: 2,
			content: `2`,
		},
		{
			id: 3,
			content: `3`,
		},
	];

	const [isAdvanceMode, setAdvanceMode] = useState(false);
	const [isRepublic, setIsRepublic] = useState(false);
	const [isHighlight, setIsHighlight] = useState(false);
	const [dateTimeFormatSelected, setDateTimeFormatSelected] = useState(
		dateTimeFormatList.at(0),
	);

	const dateTimeFormatChangeHandle = (item) => {
		setDateTimeFormatSelected(item);
	};

	return (
		<div className={css.settings}>
			<div className={css.container}>
				<div className={css.settings__header}>
					Site Settings
					<div className={css.settings__headerSmall}>
						This page allows you to customize your browsing
						experience on BscScan.
					</div>
				</div>
				<Card>
					<div className={css.settings__cardContent}>
						<div className={css.settings__record}>
							<div className={css.settings__left}>
								<div className={css.settings__title}>
									Advanced Mode
								</div>
								<div className={css.settings__text}>
									Show transactions and blocks details in
									full. Useful for developers to debug in
									single view. Will also display revert error
									messages from token contracts without an
									updated token info.
								</div>
								<div className={css.settings__small}>
									*Note: Caution recommended when interacting
									with error messages that direct you to
									perform additional steps or visit external
									sites
								</div>
							</div>
							<div className={css.settings__right}>
								<Switch2
									active={isAdvanceMode}
									setActive={setAdvanceMode}
								/>
							</div>
						</div>
						<div className={css.settings__line}></div>
						<div className={css.settings__record}>
							<div>
								<div className={css.settings__title}>
									Ignore Tokens with Poor Reputation
								</div>
								<div className={css.settings__text}>
									Hide all transactions of tokens that have
									been flagged by BscScan as Suspicious,
									Unsafe, Spam or Brand Infringement from
									being displayed on the site.
								</div>
								<div className={css.settings__small}>
									*Note: This is a Beta feature with ongoing
									improvements
								</div>
							</div>
							<div>
								<Switch2
									active={isRepublic}
									setActive={setIsRepublic}
								/>
							</div>
						</div>
						<div className={css.settings__line}></div>
						<div className={css.settings__record}>
							<div className={css.settings__left}>
								<div className={css.settings__title}>
									Address and Method Highlight
								</div>
								<div className={css.settings__text}>
									Highlight all occurrences of an address or
									method in a given page upon hover
								</div>
								<div className={css.settings__small}>
									*Note: This is a Beta feature
								</div>
							</div>
							<div className={css.settings__right}>
								<Switch2
									active={isHighlight}
									setActive={setIsHighlight}
								/>
							</div>
						</div>
						<div className={css.settings__line}></div>
						<div className={css.settings__record}>
							<div>
								<div className={css.settings__title}>
									Language
								</div>
								<div className={css.settings__text}>
									Choose desired language
								</div>
							</div>
							<div>
								<Dropdown2
									header={
										<>
											<div className={css.dropdownHeader}>
												{dateTimeFormatSelected.content}
												<IoChevronDownOutline />
											</div>
										</>
									}
									list={languageList}
									trigger={dropdown2TriggerType.click}
									align={dropdown2Align.right}
									onChange={dateTimeFormatChangeHandle}
								/>
							</div>
						</div>
						<div className={css.settings__line}></div>
						<div className={css.settings__record}>
							<div>
								<div className={css.settings__title}>
									Currency
								</div>
								<div className={css.settings__text}>
									Choose desired currency
								</div>
							</div>
							<div>
								<Dropdown2
									header={
										<>
											<div className={css.dropdownHeader}>
												{dateTimeFormatSelected.content}
												<IoChevronDownOutline />
											</div>
										</>
									}
									list={dateTimeFormatList}
									trigger={dropdown2TriggerType.click}
									align={dropdown2Align.right}
									onChange={dateTimeFormatChangeHandle}
								/>
							</div>
						</div>
						<div className={css.settings__line}></div>
						<div className={css.settings__record}>
							<div>
								<div className={css.settings__title}>
									Address Display
								</div>
								<div className={css.settings__text}>
									Choose desired address hash truncation
									format
								</div>
								<div className={css.settings__small}>
									*Note: Back truncation allows for finding
									address hash in page (CTRL+F)
								</div>
							</div>
							<div>
								<Dropdown2
									header={
										<>
											<div className={css.dropdownHeader}>
												{dateTimeFormatSelected.content}
												<IoChevronDownOutline />
											</div>
										</>
									}
									list={dateTimeFormatList}
									trigger={dropdown2TriggerType.click}
									align={dropdown2Align.right}
									onChange={dateTimeFormatChangeHandle}
								/>
							</div>
						</div>
						<div className={css.settings__line}></div>
						<div className={css.settings__record}>
							<div>
								<div className={css.settings__title}>
									Date Time Format
								</div>
								<div className={css.settings__text}>
									Select whether to display Date Time in UTC
									or local (UTC+7) time zone
								</div>
							</div>
							<div>
								<Dropdown2
									header={
										<>
											<div className={css.dropdownHeader}>
												{dateTimeFormatSelected.content}
												<IoChevronDownOutline />
											</div>
										</>
									}
									list={dateTimeFormatList}
									trigger={dropdown2TriggerType.click}
									align={dropdown2Align.right}
									onChange={dateTimeFormatChangeHandle}
								/>
							</div>
						</div>
					</div>

					<div className={css.settings__cardFooter}>
						<Button2 type={button2Type.primary}>
							Save Preferences
						</Button2>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default Settings;
