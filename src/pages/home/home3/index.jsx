import React from 'react';
import css from './home3.module.scss';
import {FaChevronRight} from 'react-icons/fa';
import {useTheme} from 'src/context/dark-theme';

function Home3() {
	const {isDarkMode} = useTheme();

	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};

	return (
		<div className={`${css['home3']} ${renderDarkTheme()}`}>
			<div className={css['container']}>
				<div className={css['home3__header']}>
					<div
						className={
							css['home3__header__image'] +
							` flex items-center justify-center mb-3`
						}
					>
						<img
							src='src/assets/imgs/image-30.svg'
							alt='logo'
						/>
					</div>
					<div className={css['home3__header__text']}>
						<span className={renderDarkTheme()}>Discover the</span>
						<span>Ecosystem</span>
					</div>
				</div>
				<div className={`${css['home3__card']} ${renderDarkTheme()}`}>
					<div className={css['home3__mainPic']}>
						<img
							src='src/assets/imgs/image-14.png'
							alt='logo'
						/>
					</div>
					<div className={css['home3__mainContent']}>
						<div className={css['home3__title']}>Trade</div>
						<div className={css['home3__list']}>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-15.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-15-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Swap
								</div>
								<div className={css['home3__list__text']}>
									Trade crypto instantly across multiple
									chains
								</div>
								<div className={`${css['home3__list__nav']}`}>
									<div>Trade Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-16.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-16-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Liquidity
								</div>
								<div className={css['home3__list__text']}>
									Fund liquidity pools, earn trading fees
								</div>
								<div className={css['home3__list__nav']}>
									<div>Add Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-17.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-17-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Bridge
								</div>
								<div className={css['home3__list__text']}>
									Seamlessly transfer assets across chains
								</div>
								<div className={css['home3__list__nav']}>
									<div>Bridge Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-18.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-18-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Perpetual
								</div>
								<div className={css['home3__list__text']}>
									Trade endlessly without expiration dates
								</div>
								<div className={css['home3__list__nav']}>
									<div>Trade Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-19.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-19-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Buy Crypto
								</div>
								<div className={css['home3__list__text']}>
									Buy crypto with your preferred currency and
									payment method
								</div>
								<div className={css['home3__list__nav']}>
									<div>Buy Now</div>
									<FaChevronRight />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={`${css['home3__card']} ${renderDarkTheme()}`}>
					<div className={css['home3__mainContent']}>
						<div className={css['home3__title']}>Trade</div>
						<div className={css['home3__list']}>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-20.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-20-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Farm
								</div>
								<div className={css['home3__list__text']}>
									Stake LP tokens, harvest CAKE
								</div>
								<div className={css['home3__list__nav']}>
									<div>Stake Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-21.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-21-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Pools
								</div>
								<div className={css['home3__list__text']}>
									Stake CAKE, earn various rewards
								</div>
								<div className={css['home3__list__nav']}>
									<div>Stake Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-22.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-22-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Liquid Staking
								</div>
								<div className={css['home3__list__text']}>
									Earn rewards while retaining asset
									flexibility
								</div>
								<div className={css['home3__list__nav']}>
									<div>Add Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-23.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-23-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Simple Staking
								</div>
								<div className={css['home3__list__text']}>
									Earn rewards hassle-free with single-sided
									staking
								</div>
								<div className={css['home3__list__nav']}>
									<div>Stake Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-24.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-24-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Position Manager
								</div>
								<div className={css['home3__list__text']}>
									Automate your PancakeSwap v3 liquidity
								</div>
								<div className={css['home3__list__nav']}>
									<div>Stake Now</div>
									<FaChevronRight />
								</div>
							</div>
						</div>
					</div>
					<div className={`${css['home3__mainPic']} ${css['right']}`}>
						<img
							src='src/assets/imgs/image-26.png'
							alt='logo'
						/>
					</div>
				</div>

				<div className={`${css['home3__card']} ${renderDarkTheme()}`}>
					<div className={css['home3__mainPic']}>
						<img
							src='src/assets/imgs/image-25.png'
							alt='logo'
						/>
					</div>
					<div className={css['home3__mainContent']}>
						<div className={css['home3__title']}>Game & NFT</div>
						<div className={css['home3__list']}>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-27.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-27-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Gaming Marketplace
								</div>
								<div className={css['home3__list__text']}>
									Play, Build and Connect on PancakeSwap
								</div>
								<div className={css['home3__list__nav']}>
									<div>Play Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-28.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-28-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									Prediction
								</div>
								<div className={css['home3__list__text']}>
									Forecast token prices within minutes
								</div>
								<div className={css['home3__list__nav']}>
									<div>Try Now</div>
									<FaChevronRight />
								</div>
							</div>
							<div className={css['home3__list__item']}>
								<div className={css['home3__list__image']}>
									<img
										src='src/assets/imgs/image-29.png'
										alt='15'
									/>
									<img
										src='src/assets/imgs/image-29-active.png'
										alt='15'
									/>
								</div>
								<div className={css['home3__list__name']}>
									NFT Marketplace
								</div>
								<div className={css['home3__list__text']}>
									Trade unique NFTs on BNB Chain
								</div>
								<div className={css['home3__list__nav']}>
									<div>Trade Now</div>
									<FaChevronRight />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home3;
