import PropTypes from 'prop-types';
import css from './item.module.scss';
import SectionPeriods from '../../section-periods';
import SectionRange from '../../section-range';
import SectionTotal from '../../section-total';
import SectionButtonInfo from '../../section-button-info';
import {useState} from 'react';
import SectionInfo from '../../section-info';
import Button from 'src/components/button';
import {useTheme} from 'context/dark-theme';

function Item(props) {
	const {content} = props;

	const {isDarkMode} = useTheme();

	const [isShowInfo, setIsShowInfo] = useState(false);

	const renderShowInfo = () => {
		return isShowInfo ? '' : 'd-0';
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.itemContainer} ${renderDarkTheme()}`}>
			<div className={`${css.item} `}>
				<div className={`${css.item__section} ${css.first}`}>
					<div className={`${css.item__section__left}`}>
						<img
							src={content.image}
							alt={content.image}
						/>
					</div>
					<div className={`${css.item__section__right}`}>
						<div>STAKE & EARN</div>
						<div>{content.token}</div>
					</div>
				</div>
				<div className={`${css.item__section} ${css.seconds}`}>
					<div className={`${css.item__section__title}`}>
						Stake Periods
					</div>
					<SectionPeriods periods={content.periods} />
				</div>
				<div className={`${css.item__section} ${css.three}`}>
					<div className={`${css.item__section__title}`}>APR</div>
					<SectionRange
						min={content.aprMin}
						max={content.aprMax}
					/>
				</div>
				<div className={`${css.item__section} ${css.fourth}`}>
					<div className={`${css.item__section__title}`}>
						Total Staked:
					</div>
					<SectionTotal
						total={content.total}
						token={content.token}
						totalEstimate={content.totalEstimate}
					/>
				</div>
				<div className={`${css.item__section} ${css.fifth}`}>
					<SectionButtonInfo
						isShowInfo={isShowInfo}
						setIsShowInfo={setIsShowInfo}
					/>
				</div>
			</div>
			<div className={`${css.item__info} ${renderShowInfo()}`}>
				<div className={`${css.item__info__left}`}>
					<SectionInfo
						isShowInfo={isShowInfo}
						periods={content.periods}
					/>
				</div>
				<div className={css.item__info__total}>
					<div className={css.item__info__total__title}>
						Total Staked:
					</div>
					<SectionTotal
						total={content.total}
						token={content.token}
						totalEstimate={content.totalEstimate}
					/>
				</div>
				<div className={`${css.item__info__right}`}>
					<div className={css.item__info__title}>
						<span>STAKE</span>
						<span>CAKE</span>
					</div>
					<Button
						isDark={isDarkMode}
						className='w-100'
					>
						Connect Wallet
					</Button>
				</div>
			</div>
		</div>
	);
}

Item.propTypes = {
	content: PropTypes.object,
};

export default Item;
