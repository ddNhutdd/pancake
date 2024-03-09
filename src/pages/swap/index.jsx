import HeaderComponent from '../../components/header-component';
import FooterComponent from '../../components/footer-component';
import css from './swap.module.scss';
import {GiCash} from 'react-icons/gi';
import {FaChartBar} from 'react-icons/fa';
import {FaFire} from 'react-icons/fa6';
import {IoSettingsSharp} from 'react-icons/io5';
import {VscHistory} from 'react-icons/vsc';
import {GrRotateRight} from 'react-icons/gr';
import SwapSelect from './swap-select';
import Input from 'src/components/input';
import {FaRegCopy} from 'react-icons/fa';
import {IoPencil} from 'react-icons/io5';
import Button from 'src/components/button';
import {VscArrowSwap} from 'react-icons/vsc';
import {FaArrowsRotate} from 'react-icons/fa6';
import {FaArrowDown} from 'react-icons/fa';
import {HiOutlineArrowsUpDown} from 'react-icons/hi2';
import {useTheme} from 'src/context/dark-theme';
import {HeaderComponentList1} from "src/constants/header-component-list-1.jsx";

function Swap() {

	const {isDarkMode} = useTheme();

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	}

	return (
		<>
			<HeaderComponent list={HeaderComponentList1} />
			<div  className={`${css.swap} ${renderDarkTheme()}`}>
				<div className={css.swap__container}>
					<div className={css.swap__content}>
						<div className={css.swap__card}>
							<div className={css.swap__cardTop}>
								<div className={css.swap__header}>Swap</div>
								<div className={css.swap__text}>
									Trade tokens in an instant
								</div>
								<div className={css.swap__list}>
									<div className={css.swap__listItem}>
										<GiCash />
									</div>
									<div className={css.swap__listItem}>
										<FaChartBar />
									</div>
									<div className={css.swap__listItem}>
										<FaFire />
									</div>
									<div className={css.swap__listItem}>
										<IoSettingsSharp />
									</div>
									<div className={css.swap__listItem}>
										<VscHistory />
									</div>
									<div className={css.swap__listItem}>
										<GrRotateRight />
									</div>
								</div>
							</div>
							<div className={css.swap__cardBot}>
								<div className={css.swap__select}>
									<SwapSelect
										image={
											<img src='src/assets/imgs/bnbicon.png' />
										}
										text={`BNB`}
									/>
								</div>
								<div className={css.swap__input}>
									<Input />
								</div>
								<div className={css.swap__button}>
									<button>
										<span>
											<FaArrowDown />
										</span>
										<span>
											<HiOutlineArrowsUpDown />
										</span>
									</button>
								</div>
								<div
									className={`${css.swap__select}`}
								>
									<SwapSelect
										image={
											<img src='src/assets/imgs/bnbicon.png' />
										}
										text={`BNB`}
									/>
									<span>
										<FaRegCopy />
									</span>
								</div>
								<div className={css.swap__input}>
									<Input />
								</div>
								<div className={css.swap__info}>
									<div className={css.swap__infoItem}>
										<div className={css.swap__left}>
											Price
										</div>
										<div className={css.swap__right}>
											1 CAKE2367166670{' '}
											<span>
												<VscArrowSwap />
											</span>{' '}
											BNB{' '}
											<span>
												<FaArrowsRotate />
											</span>
										</div>
									</div>
									<div className={css.swap__infoItem}>
										<div className={css.swap__left}>
											Slippage Tolerance <IoPencil />
										</div>
										<div
											className={`${css.swap__right} ${css['swap__right--bold']}`}
										>
											0.5%
										</div>
									</div>
								</div>
								<div className={css.swap__action}>
									<Button isDark={isDarkMode} style={{width: '100%'}}>
										Connect Wallet
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<FooterComponent />
			</div>
		</>
	);
}

export default Swap;
