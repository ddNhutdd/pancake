import ToolPage from 'src/components/tool-page';
import css from './token-supply-checker.module.scss';
import {dateFormat, url} from 'src/constants';
import HeaderComponent4 from 'src/components/header-component-4';
import Card from 'src/components/card';
import Input3 from 'src/components/input-3';
import RadioButton from 'src/components/radio-button';
import Button2, {button2Type} from 'src/components/button-2';
import {DateInput2} from 'src/components/date-input-2';

function TokenSupplyChecker() {
	return (
		<ToolPage menuActive={url.tokenSupplyChecker}>
			<HeaderComponent4
				title={`Token Supply Checker`}
				content={`You can look up the historical supply of a token (BEP-20) at a specific block number or date.`}
			/>
			<Card className={css.tokenSupplyChecker}>
				<div className={css.tokenSupplyChecker__body}>
					<div className={css.tokenSupplyChecker__input}>
						<label>
							Token Contract Address{' '}
							<span className='--text-danger'>*</span>
						</label>
						<Input3 placeholder={`0x...`}></Input3>
					</div>
					<div className={css.tokenSupplyChecker__input}>
						<label>Filter by:</label>
						<div className='flex items-center gap-2'>
							<RadioButton
								id={'radio__data'}
								name={'filter'}
							>
								Date
							</RadioButton>
							<RadioButton
								id={'radio__block'}
								name={'filter'}
							>
								Block Number
							</RadioButton>
						</div>
					</div>
					<div className={css.tokenSupplyChecker__input}>
						<label>Date for the snapshot</label>
						<DateInput2 format={dateFormat} />
					</div>
					<div className={css.tokenSupplyChecker__input}>
						<label>Block Number for the snapshot</label>
						<Input3></Input3>
					</div>
				</div>
				<div className={css.tokenSupplyChecker__footer}>
					<Button2 type={button2Type.primary}>Lookup</Button2>
					<Button2 type={button2Type.secondary}>Reset</Button2>
				</div>
			</Card>
		</ToolPage>
	);
}

export default TokenSupplyChecker;
