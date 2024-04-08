import css from './staking.module.scss';
import {useState} from 'react';
import GridCards from './grid-cards';
import ListItems from './list-items';
import {FaList} from 'react-icons/fa';
import {BsFillGrid3X2GapFill} from 'react-icons/bs';
import {useTheme} from 'context/dark-theme';

function Staking() {
	const actionType = {
		list: 'list',
		grid: 'grid',
	};
	const list = [
		{
			id: '1',
			image: 'src/assets/imgs/staking-1.png',
			token: 'CAKE',
			periods: [
				[30, 1.2, 1],
				[60, 1.3, 1.1],
				[90, 1.4, 1.3],
			],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
		{
			id: '2',
			image: 'src/assets/imgs/staking-2.png',
			token: 'CAKE',
			periods: [
				[30, 1.2, 1],
				[60, 1.3, 1.1],
				[90, 1.4, 1.3],
			],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
		{
			id: '3',
			image: 'src/assets/imgs/staking-3.png',
			token: 'CAKE',
			periods: [
				[30, 1.2, 1],
				[60, 1.3, 1.1],
				[90, 1.4, 1.3],
			],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
		{
			id: '4',
			image: 'src/assets/imgs/staking-1.png',
			token: 'CAKE',
			periods: [
				[30, 1.2, 1],
				[60, 1.3, 1.1],
				[90, 1.4, 1.3],
			],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
		{
			id: '5',
			image: 'src/assets/imgs/staking-1.png',
			token: 'CAKE',
			periods: [[30, 1.2, 1]],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
		{
			id: '6',
			image: 'src/assets/imgs/staking-2.png',
			token: 'CAKE',
			periods: [
				[30, 1.2, 1],
				[60, 1.3, 1.1],
				[90, 1.4, 1.3],
			],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
		{
			id: '7',
			image: 'src/assets/imgs/staking-3.png',
			token: 'CAKE',
			periods: [
				[30, 1.2, 1],
				[60, 1.3, 1.1],
				[90, 1.4, 1.3],
			],
			aprMin: '0.11',
			aprMax: '0.19',
			total: '40167.3',
			totalEstimate: '157267.55',
		},
	];

	const {isDarkMode} = useTheme();

	const [isShowType, setIsShowType] = useState(actionType.grid);

	const renderMainData = () => {
		return isShowType === actionType.grid ? (
			<GridCards list={list} />
		) : (
			<ListItems list={list} />
		);
	};
	const renderClassActiveAction = (action) => {
		return isShowType === action ? css.active : '';
	};
	const actionClickHandle = (action) => {
		setIsShowType(action);
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.staking} ${renderDarkTheme()}`}>
			<div className={css.staking__header}>
				<div className={css.staking__header__container}>
					<div className={css.staking__header__big}>
						Simple Staking
					</div>
					<div className={css.staking__header__small}>
						Single-Sided Simple Earn Staking
					</div>
				</div>
			</div>
			<div className={css.staking__content}>
				<div className={css.staking__content__container}>
					<div className={css.staking__content__actions}>
						<span
							onClick={actionClickHandle.bind(
								null,
								actionType.grid,
							)}
							className={`${renderClassActiveAction(actionType.grid)}`}
						>
							<BsFillGrid3X2GapFill />
						</span>
						<span
							onClick={actionClickHandle.bind(
								null,
								actionType.list,
							)}
							className={`${renderClassActiveAction(actionType.list)}`}
						>
							<FaList />
						</span>
					</div>
					<div className={css.staking__content__main}>
						{renderMainData()}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Staking;
