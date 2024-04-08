import Card from 'src/components/card';
import HeaderComponent4 from 'src/components/header-component-4';
import ToolPage from 'src/components/tool-page';
import {url} from 'src/constants';
import css from './unit-converter.module.scss';
import Input from './input';

function UnitConverter() {
	return (
		<ToolPage menuActive={url.unitConverter}>
			<HeaderComponent4
				title={`Unit Converter`}
				content={`BNB is often used in different denominations of its currency, such as Wei for interacting with smart contracts and Gwei for calculating gas prices. Use our Unit Converter to easily convert between them!`}
			/>
			<Card className={css.unitConverter}>
				<div>Enter any value</div>
				<div className='row'>
					<div className='col-7 p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									Wei (10<sup>-18</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7 p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									KWei (10<sup>-15</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7 p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									MWei (10<sup>-12</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7 p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									GWei (10<sup>-9</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7  p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									Szabo (10<sup>-6</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7 p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									Finney (10<sup>-3</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7  p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									BNB (10<sup>1</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7  p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									KBNB (10<sup>3</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7  p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									MBNB (10<sup>6</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7  p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									GBNB (10<sup>9</sup>)
								</span>
							}
						/>
					</div>
					<div className='col-7  p-0 my-1'>
						<Input
							classRightContent={css.unitConverter__rightInput}
							rightContent={
								<span>
									TBNB (10<sup>12</sup>)
								</span>
							}
						/>
					</div>
				</div>
			</Card>
		</ToolPage>
	);
}

export default UnitConverter;
