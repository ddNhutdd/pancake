import {NavLink} from 'react-router-dom';
import css from './home5.module.scss';
import React, {useEffect, useState, useRef} from 'react';
import TwitterIcon from 'src/assets/icons/twitter.icon.jsx';
import TelegramIcon from 'src/assets/icons/telegram.icon.jsx';
import DiscordIcon from 'src/assets/icons/discord.icon.jsx';
import InstagramIcon from 'src/assets/icons/instagram.icon.jsx';
import RedditIcon from 'src/assets/icons/reddit.icon.jsx';
import YoutubeIcon from 'src/assets/icons/youtube.icon.jsx';
import {FiBarChart2} from 'react-icons/fi';
import {CiHeart} from 'react-icons/ci';
import {CiShare1} from 'react-icons/ci';
import {useTheme} from 'src/context/dark-theme';

function Home5() {
	const {isDarkMode} = useTheme();

	const [showSlide, setShowSlide] = useState(1);

	const counterLong = useRef(5);
	const counter = useRef(counterLong.current);
	const slideCount = useRef(2);
	const showSliceRef = useRef(1);

	const renderStyleShowSlide = (value) => {
		return value === showSlide
			? {opacity: 1, zIndex: 5}
			: {opacity: 0, zIndex: -1};
	};
	const slidePageClickHandle = (value) => {
		setShowSlide(value);
		showSliceRef.current = value;
		counter.current = counterLong.current;
	};
	const renderClassShowActiveDot = (value) => {
		return value === showSlide ? css.active : '';
	};

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	useEffect(() => {
		const idInterval = setInterval(() => {
			if (counter.current <= 0) {
				counter.current = counterLong.current;
				showSliceRef.current += 1;
				if (showSliceRef.current > slideCount.current) {
					setShowSlide(1);
					showSliceRef.current = 1;
				} else {
					setShowSlide(showSliceRef.current);
				}
			}
			counter.current -= 1;
		}, 1000);

		return () => {
			clearInterval(idInterval);
		};
	}, []);

	return (
		<div className={`${css.home5} ${renderDarkTheme()}`}>
			<div className={`${css.container}`}>
				<div className={`${css.home5__card} ${renderDarkTheme()}`}>
					<div className={`${css.home5__header}`}>
						<div className={`${css.home5__title}`}>
							<span>Join our</span>
							<span>Community</span>
						</div>
						<div className={`${css.home5__smallTitle}`}>
							Together we can make the PancakeSwap community even
							stronger
						</div>
					</div>
					<div className={`${css.home5__mainContent}`}>
						<div className={`${css.home5__left}`}>
							<div className={`${css.home5__leftRecord}`}>
								<div
									className={`${css.home5__leftRecord__text}`}
								>
									Community Members
								</div>
								<div
									className={`${css.home5__leftRecord__number}`}
								>
									2.0M +
								</div>
							</div>
							<div className={`${css.home5__leftRecord}`}>
								<div
									className={`${css.home5__leftRecord__text}`}
								>
									Multilingual Communities
								</div>
								<div
									className={`${css.home5__leftRecord__number}`}
								>
									15 +
								</div>
							</div>
							<div className={`${css.home5__leftRecord}`}>
								<div
									className={`${css.home5__leftRecord__text}`}
								>
									Community Ambassadors
								</div>
								<div
									className={`${css.home5__leftRecord__number}`}
								>
									35 +
								</div>
							</div>
						</div>
						<div className={`${css.home5__right}`}>
							<div
								style={renderStyleShowSlide(1)}
								className={`${css.home5__right__slide1}`}
							>
								<div
									className={`${css.home5__right__slide1__header}`}
								>
									Top Tweet of the week
								</div>
								<div
									className={`${css.home5__right__slide1__image}`}
								>
									<img
										src='src/assets/imgs/pancakeswap-logo.png'
										alt='logo'
									/>
								</div>
								<div
									className={`${css.home5__right__slide1__title}`}
								>
									PancakeSwap🥞Ev3ryone's Favourite D3X
								</div>
								<div
									className={`${css.home5__right__slide1__info}`}
								>
									<div
										className={`${css.home5__right__slide1__info__item}`}
									>
										@PancakeSwap
									</div>
									<div
										className={`${css.home5__right__line}`}
									></div>
									<div
										className={`${css.home5__right__slide1__info__item}`}
									>
										Feb 7
									</div>
									<div
										className={`${css.home5__right__line}`}
									></div>
									<div
										className={`${css.home5__right__slide1__info__item}`}
									>
										<CiHeart />
										<div>1.1k</div>
									</div>
									<div
										className={`${css.home5__right__line}`}
									></div>
									<div
										className={`${css.home5__right__slide1__info__item}`}
									>
										<FiBarChart2 />
										<div>99.2k</div>
									</div>
								</div>
								<div
									className={`${css.home5__right__slide1__text}`}
								>
									🐲 Step into the Dragon Lunar Lottery at
									PancakeSwap! Chase a treasure of 16,000 CAKE
									& an additional $3,880 in USDT prizes! ✨ 🧧
									Join the celebration:
									https://app.questn.com/event/869387113325449247
								</div>
								<NavLink
									className={`${css.home5__right__slide1__nav}`}
								>
									Web link
									<CiShare1 />
								</NavLink>
							</div>
							<div
								style={renderStyleShowSlide(2)}
								className={`${css.home5__right__slide2}`}
							>
								<div
									className={`${css.home5__right__slide2__header}`}
								>
									Latest Blog Post
								</div>
								<div
									className={`${css.home5__right__slide2__img}`}
								></div>
								<div
									className={`${css.home5__right__slide2__data}`}
								>
									2024-03-01
								</div>
								<div
									className={`${css.home5__right__slide2__text}`}
								>
									Unlock 10% Trading Fee Rebate: Join the
									First-Ever Trading Reward Program for veCAKE
									Holders!
								</div>
							</div>
							<div className={`${css.home5__right__paging}`}>
								<div
									onClick={slidePageClickHandle.bind(null, 1)}
									className={`${
										css.home5__right__paging__item
									} ${renderClassShowActiveDot(1)}`}
								></div>
								<div
									onClick={slidePageClickHandle.bind(null, 2)}
									className={`${
										css.home5__right__paging__item
									} ${renderClassShowActiveDot(2)}`}
								></div>
							</div>
						</div>
					</div>
					<div className={`${css.home5__footer}`}>
						<NavLink className={`${css.home5__footer__item}`}>
							<div className={`${css.home5__footer__container}`}>
								<TwitterIcon />
							</div>
						</NavLink>
						<NavLink className={`${css.home5__footer__item}`}>
							<div className={`${css.home5__footer__container}`}>
								<TelegramIcon />
							</div>
						</NavLink>
						<NavLink className={`${css.home5__footer__item}`}>
							<div className={`${css.home5__footer__container}`}>
								<DiscordIcon />
							</div>
						</NavLink>
						<NavLink className={`${css.home5__footer__item}`}>
							<div className={`${css.home5__footer__container}`}>
								<InstagramIcon />
							</div>
						</NavLink>
						<NavLink className={`${css.home5__footer__item}`}>
							<div className={`${css.home5__footer__container}`}>
								<RedditIcon />
							</div>
						</NavLink>
						<NavLink className={`${css.home5__footer__item}`}>
							<div className={`${css.home5__footer__container}`}>
								<YoutubeIcon />
							</div>
						</NavLink>
					</div>
				</div>
			</div>
			<div className={`${css.home5__imageLeft}`}>
				<img
					src='src/assets/imgs/image-36.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-37.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-38.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-39.png'
					alt='image'
				/>
			</div>
			<div className={`${css.home5__imageRight}`}>
				<img
					src='src/assets/imgs/image-31.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-32.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-33.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-34.png'
					alt='image'
				/>
				<img
					src='src/assets/imgs/image-35.png'
					alt='image'
				/>
			</div>
		</div>
	);
}

export default Home5;
