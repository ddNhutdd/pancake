import css from './home4.module.scss';
import {useCallback, useRef} from 'react';
import Button from 'src/components/button';
import {CiShare1} from 'react-icons/ci';
import MarqueeY from 'src/components/marquee-y';
import {useCountUp} from 'react-countup';
import MarqueeItem from './marquee-item';
import {BiAtom} from 'react-icons/bi';
import Marquee from '../../../components/marquee';
import {useTheme} from 'src/context/dark-theme';
import Theme2 from 'src/assets/theme/theme-2.theme.jsx';

function Home4() {
	const circulatingCountRef = useRef(null);
	const totalCountRef = useRef(null);
	const marketCountRef = useRef(null);
	const tokenCountRef = useRef(null);
	const currentCountRef = useRef(null);

	const marqueeLeftList = [
		{
			id: 1,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 2,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 3,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 4,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'van phuc'}
				/>
			),
		},
		{
			id: 5,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 6,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 8,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 9,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 10,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
		{
			id: 11,
			content: (
				<MarqueeItem
					icon={<BiAtom />}
					text={'dktech'}
				/>
			),
		},
	];
	const countConfig = {
		start: 0,
		duration: 5,
		separator: ',',
		enableScrollSpy: true,
		scrollSpyOnce: true,
		decimals: 0,
	};
	useCallback(
		useCountUp({
			ref: circulatingCountRef,
			end: 241617342,
			...countConfig,
		}),
		[],
	);
	useCallback(
		useCountUp({
			ref: totalCountRef,
			end: 385394617,
			...countConfig,
		}),
		[],
	);
	useCallback(
		useCountUp({
			ref: marketCountRef,
			end: 810,
			...countConfig,
		}),
		[],
	);
	useCallback(
		useCountUp({
			ref: tokenCountRef,
			end: 1197797879,
			...countConfig,
		}),
		[],
	);
	useCallback(
		useCountUp({
			ref: currentCountRef,
			end: 1.36,
			...countConfig,
			decimals: 2,
		}),
		[],
	);

	const {isDarkMode} = useTheme();

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css.home4} ${renderDarkTheme()}`}>
			<div className={css.container}>
				<div className={css.home4__top}>
					<h2
						className={`${css.home4__top__header} ${renderDarkTheme()}`}
					>
						Unlock the Full Potential of DeFi with
						<span className={renderDarkTheme()}> CAKE</span>
					</h2>
					<div
						className={`${css.home4__top__text} ${renderDarkTheme()}`}
					>
						Experience the power of community ownership, global
						governance, and explore infinite use cases within the
						PancakeSwap ecosystem
					</div>
					<div className={css.home4__top__action}>
						<Button>Buy CAKE</Button>
						<span>Learn</span>
						<CiShare1 />
					</div>
				</div>
				<div className={css.home4__mid}>
					<div className={css.home4__mid__left}>
						<div className={css.home4__mid__left__container}>
							<div
								className={`${css.home4__mid__title} ${renderDarkTheme()}`}
							>
								Partners
							</div>
							<div className={css.home4__marqueeYContainer}>
								<MarqueeY
									style={{height: '75%'}}
									list={marqueeLeftList}
								/>
							</div>
							<div className={css.home4__marqueeContainer}>
								<Marquee list={marqueeLeftList} />
							</div>
						</div>
					</div>
					<div className={css.home4__mid__center}>
						<img
							src='src/assets/imgs/pancakeswap-logo.png'
							alt='logo'
						/>
					</div>
					<div className={css.home4__mid__right}>
						<div className={css.home4__mid__right__container}>
							<div
								className={`${css.home4__mid__title} ${renderDarkTheme()}`}
							>
								Partners
							</div>
							<div className={css.home4__marqueeYContainer}>
								<MarqueeY
									style={{height: '75%'}}
									list={marqueeLeftList}
								/>
							</div>
							<div className={css.home4__marqueeContainer}>
								<Marquee list={marqueeLeftList} />
							</div>
						</div>
					</div>
					<div className={css.home4__mid__lineLeft}></div>
					<div className={css.home4__mid__lineRight}></div>
				</div>
				<div className={css.home4__bot}>
					<h2
						className={`${css.home4__bot__title} ${renderDarkTheme()}`}
					>
						CAKE{' '}
						<span className={`${renderDarkTheme()}`}>Figures</span>
					</h2>
					<div
						className={`${css.home4__bot__list} ${renderDarkTheme()}`}
					>
						<div className={css.home4__bot__item}>
							<div>Circulating Supply</div>
							<div ref={circulatingCountRef}></div>
						</div>
						<div className={css.home4__bot__item}>
							<div>Total supply</div>
							<div ref={totalCountRef}></div>
						</div>
						<div className={css.home4__bot__item}>
							<div>Market cap</div>
							<div>
								$<span ref={marketCountRef}></span> million
							</div>
						</div>
						<div className={css.home4__bot__item}>
							<div>Token Burn</div>
							<div ref={tokenCountRef}></div>
						</div>
						<div className={css.home4__bot__item}>
							<div>Current emissions</div>
							<div>
								<span ref={currentCountRef}></span>/block
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${css.home4__background} ${renderDarkTheme()}`}>
				<Theme2 />
			</div>
		</div>
	);
}

export default Home4;
