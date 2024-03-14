import { useEffect, useState, useRef } from 'react';
import css from './header-user.module.scss';
import { IoIosClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosNotifications } from 'react-icons/io';
import Logo1 from '/src/assets/imgs/logo.svg';
import DropdownHeader, { dropdownHeaderAlignEnum } from '../../components/dropdown-header';
import DropdownHeader2, {
	dropdownItemAlignType,
} from '../../components/dropdown-header-2';
import Button, { buttonClassesType } from '../../components/button';
import { FaChevronDown } from 'react-icons/fa6';
import Money from '../money';
import { useTheme } from 'src/context/dark-theme';
import logoTextLight from 'src/assets/imgs/logo-text-light.svg';
import { useDispatch } from 'react-redux';
import {
	setPaddingTopPage,
	setPaddingValue,
} from '../../redux/slices/paddingTopPage';
import Modal from '../../components/modal';
import { useWeb3Modal, useDisconnect } from '@web3modal/ethers/react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import { truncatedWalletAddress } from 'src/utils';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { VscDebugDisconnect } from "react-icons/vsc";
import ModalWalletContent from './modal-wallet-content';
import Web3 from 'web3';


function Header() {
	const { isDarkMode } = useTheme();
	const dispatch = useDispatch();
	const { disconnect: disConnectWallet } = useDisconnect();
	const { open: openConnectWalletWeb3 } = useWeb3Modal();
	const { address, chainId, isConnected } = useWeb3ModalAccount()

	const threeDotMenuList = [
		{
			id: 1,
			content: 'Info',
		},
		{
			id: 2,
			content: 'IFO',
		},
		{
			id: 3,
			content: 'Affiliate Program',
		},
		{
			id: 4,
			content: 'Voting',
			borderBottom: true,
		},
		{
			id: 5,
			content: 'LeaderBoard',
			borderBottom: true,
		},
		{
			id: 6,
			content: 'Blogs',
			icon: <FaArrowRightFromBracket />,
		},
		{
			id: 7,
			content: 'Docs',
			icon: <FaArrowRightFromBracket />,
		},
	];
	const nftMenuList = [
		{
			id: 1,
			content: 'Overide',
		},
		{
			id: 2,
			content: 'Colection',
		},
		{
			id: 3,
			content: 'Activity',
		},
	];
	const gameMenuList = [
		{
			id: 1,
			content: 'Game Marketplace',
			icon: true,
		},
		{
			id: 2,
			content: 'Prediction (BETA)',
		},
		{
			id: 3,
			content: 'Lottery',
		},
		{
			id: 4,
			content: 'Bottery (BETA)',
		},
	];
	const earnList = [
		{
			id: 1,
			content: 'Farms',
		},
		{
			id: 2,
			content: 'Cake Staking',
		},
		{
			id: 3,
			content: 'Pool',
		},
		{
			id: 4,
			content: 'Position Manager',
		},
		{
			id: 5,
			content: 'Liquid Staking',
		},
		{
			id: 6,
			content: 'Simple Staking',
		},
	];
	const tradeMenu = [
		{
			id: 1,
			content: 'Swap',
		},
		{
			id: 2,
			content: 'Liquidity',
		},
		{
			id: 3,
			content: 'Pequetual',
			icon: <FaArrowRightFromBracket />,
		},
		{
			id: 4,
			content: 'Bride',
			icon: <FaArrowRightFromBracket />,
		},
		{
			id: 5,
			content: 'Limit (V2)',
		},
		{
			id: 6,
			content: 'Buy Crypto',
		},
		{
			id: 7,
			content: 'Trading Reward',
		},
	];
	const languageList = [
		{
			id: 1,
			content: 'العربية',
		},
		{
			id: 2,
			content: 'বাংলা',
		},
		{
			id: 3,
			content: 'English',
		},
		{
			id: 4,
			content: 'Deutsch',
		},
		{
			id: 5,
			content: 'Ελληνικά',
		},
		{
			id: 6,
			content: 'Español',
		},
		{
			id: 7,
			content: 'Suomalainen',
		},
		{
			id: 8,
			content: 'Filipino',
		},
		{
			id: 9,
			content: 'Français',
		},
		{
			id: 10,
			content: 'हिंदी',
		},
		{
			id: 11,
			content: 'Magyar',
		},
		{
			id: 12,
			content: 'Bahasa Indonesia',
		},
		{
			id: 13,
			content: 'Italiano',
		},
		{
			id: 14,
			content: '日本語',
		},
		{
			id: 15,
			content: '한국어',
		},
		{
			id: 16,
			content: 'Nederlands',
		},
		{
			id: 17,
			content: 'Polski',
		},
		{
			id: 18,
			content: 'Português (Brazil)',
		},
		{
			id: 19,
			content: 'Português',
		},
		{
			id: 20,
			content: 'Română',
		},
		{
			id: 21,
			content: 'Русский',
		},
		{
			id: 22,
			content: 'Svenska',
		},
		{
			id: 23,
			content: 'தமிழ்',
		},
		{
			id: 24,
			content: 'Türkçe',
		},
		{
			id: 25,
			content: 'Українська',
		},
		{
			id: 26,
			content: 'Tiếng Việt',
		},
		{
			id: 27,
			content: '简体中文',
		},
		{
			id: 28,
			content: '繁體中文',
		},
	];
	const listChain = [
		{
			id: 1,
			content: 'العربية',
			borderBottom: true,
		},
		{
			id: 2,
			content: 'বাংলা',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 3,
			content: 'English',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 4,
			content: 'Deutsch',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 5,
			content: 'Ελληνικά',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 6,
			content: 'Español',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
		{
			id: 7,
			content: 'Suomalainen',
			image: 'src/assets/imgs/arbitrumicon.png',
		},
	];
	const listWallerConnected = [{
		id: 1,
		content: 'Wallet',
		borderBottom: true,
		onClick: (ev) => {
			showModalWallet(ev);
		},
	},
	{
		id: 2,
		content: 'Disconnect',
		onClick: () => {
			disConnectWallet();
		},
		icon: <VscDebugDisconnect style={{ fontSize: 23 }} />
	}]

	const [isShowMenu, setIsShowMenu] = useState(true);
	const [isShowHeader1, setIsShowHeader1] = useState(true);
	const [isShowModalWallet, setIsShowModalWallet] = useState(false);
	const [walletAddress, setWalletAddress] = useState();
	const [balance, setBalance] = useState();
	const [, setUserChainId] = useState();

	const header = useRef(null);

	const onScrollHandle = () => {
		let lastScrollTop = 0;
		return function () {
			let currentScroll = document.documentElement.scrollTop;
			if (currentScroll > lastScrollTop && currentScroll > 40) {
				setIsShowMenu(false);
				dispatch(setPaddingTopPage(0));
			} else {
				setIsShowMenu(true);
				dispatch(setPaddingTopPage());
			}

			lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
		};
	};
	const renderShowMenu = function () {
		return isShowMenu ? {} : { top: '-170px' };
	};
	const closeHeader1Handle = () => {
		dispatch(setPaddingValue(57));
		setIsShowHeader1(false);
	};
	const renderClassShowHeader1 = () => {
		return isShowHeader1 ? '' : 'd-0';
	};
	const openConnectWallet = () => {
		if (walletAddress) {
			return;
		}
		openConnectWalletWeb3({ view: 'Networks' });
	}
	const renderTextButtonConnect = () => {
		return walletAddress ? truncatedWalletAddress(walletAddress) : <>Connect
			<span className={`${css.header2__buttonText}`}>
				Wallet
			</span></>
	}
	const showModalWallet = (ev) => {
		ev.stopPropagation();
		setIsShowModalWallet(true);
	};
	const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	};
	const renderLogoByTheme = () => {
		return isDarkMode ?
			<img
				className={`${css['header2__icon__image1']}`}
				src={logoTextLight}
				alt='React Logo'
			/>
			: <img
				className={`${css['header2__icon__image1']}`}
				src={Logo1}
				alt='React Logo'
			/>;
	};
	const getBalance = async (address) => {
		const web3 = new Web3('https://cloudflare-eth.com');
		const weiBalance = await web3.eth.getBalance(address);
		const balanceInEth = web3.utils.fromWei(weiBalance, 'ether');
		setBalance(balanceInEth);
	}
	const disConnectWalletHandle = () => {
		disConnectWallet();
		setIsShowModalWallet(false);
	}

	useEffect(() => {
		window.addEventListener('scroll', onScrollHandle());

		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const newHeight = entry.contentRect.height;
				dispatch(setPaddingValue(newHeight));
			}
		});
		observer.observe(header.current);

		return () => {
			window.removeEventListener('scroll', onScrollHandle());
			observer.disconnect();
		};
	}, []);
	useEffect(() => {
		if (isConnected) {
			setWalletAddress(address);
			setUserChainId(chainId);
			getBalance(address)
		} else {
			setWalletAddress(null);
			setUserChainId(null);
		}
	}, [isConnected])

	return (
		<div
			ref={header}
			style={renderShowMenu()}
			className={`${css['header']}`}
		>
			<div
				className={`${css['header1']}  ${renderClassShowHeader1()} flex w-100`}
			>
				<div
					className={`${css['header1__container']} grow-1 flex items-center justify-center`}
				>
					<div
						className={`${css['header1__content']} flex items-center justify-center w-md-100 pl-md-2`}
					>
						<div
							className={`${css['header1__imageContainer']} d-md-0`}
						>
							<img
								src={'/src/assets/imgs/header-warning.webp'}
								alt={'warning'}
							/>
						</div>
						<div className={`${css['header1__box']}`}>
							<span>PHISHING WARNING:</span>
							<span>please make sure you&lsquo;re visiting</span>
							<span> https://pancakeswap.finance</span>
							<span>- check the URL carefully.</span>
						</div>
					</div>
				</div>
				<div
					onClick={closeHeader1Handle}
					className={`${css['header1__close']} flex items-center justify-center hover-p`}
				>
					<IoIosClose />
				</div>
			</div>
			<div
				className={`${css['header2']
					} ${renderDarkTheme()} border-b-1 px-3 flex items-center justify-between`}
			>
				<div className={`${css['header2__left']} flex items-center`}>
					<div
						className={`${css['header2__icon']} flex align-center justify-between`}
					>
						<NavLink
							className={`flex align-center justify-between`}
							to='/'
						>
							{renderLogoByTheme()}
							<img
								className={css.header2__icon__image2}
								src={'src/assets/imgs/logo2.svg'}
								alt='logo'
							/>
						</NavLink>
					</div>
					<div
						className={`${css['header2__menu']} flex align-center ml-3`}
					>
						<DropdownHeader header={'Trade'} list={tradeMenu} />
						<DropdownHeader header={`Earn`} list={earnList} />
						<DropdownHeader header={`Game`} list={gameMenuList} />
						<DropdownHeader header={`NFT`} list={nftMenuList} />
						<DropdownHeader
							header={<HiOutlineDotsHorizontal />}
							list={threeDotMenuList}
						/>
					</div>
				</div>
				<div
					className={`${css['header2__right']} flex items-center justify-center`}
				>
					<div
						className={`${css['header2__money']} flex items-center justify-center px-3 gap-1`}
					>
						<Money></Money>
					</div>
					<div className='px-3'>
						<DropdownHeader2
							positionMenu={{
								top: '26px',
								right: '-103px',
								paddingTop: '18px',
							}}
							header={<MdLanguage />}
							list={languageList}
						/>
					</div>
					<div
						className='flex align-center items-center px-3 px-sm-1'
					>
						<IoSettingsSharp style={{ fontSize: '25px' }} />
					</div>
					<div className='flex align-center items-center px-3 px-sm-1'>
						<IoIosNotifications style={{ fontSize: '25px' }} />
					</div>
					<div
						className={`${css['header2__chain']} px-3 px-sm-1 relative`}
					>
						<DropdownHeader2
							positionMenu={{
								top: '26px',
								right: '-55px',
								paddingTop: '18px',
							}}
							dropdownItemAlign={dropdownItemAlignType.left}
							header={
								<>
									<div
										className={`${css['header2__chainImage']}`}
									>
										<img src='src/assets/imgs/polygonicon.png' />
									</div>
									<Button
										isDark={isDarkMode}
										style={{ paddingLeft: 35 }}
										type={buttonClassesType.secondThin}
									>
										<span
											className={`${css.header2__buttonText}`}
										>
											BNB Chain
										</span>
										<span style={{ fontSize: '1.2rem' }}>
											<FaChevronDown />
										</span>
									</Button>
								</>
							}
							list={listChain}
						/>
					</div>
					<div className='px-3 px-sm-1'>
						<DropdownHeader
							header={<Button
								onClick={openConnectWallet}
								isDark={isDarkMode}
								type={buttonClassesType.primaryThin}
							>
								{renderTextButtonConnect()}
							</Button>}
							list={listWallerConnected}
							align={dropdownHeaderAlignEnum.right}
							disabled={!walletAddress}
							headerHoverEffect={false}
						/>
					</div>
				</div>
			</div>
			<Modal
				show={isShowModalWallet}
				setShow={setIsShowModalWallet}
				title={`Your Wallet`}
				content={<ModalWalletContent disConnectHandle={disConnectWalletHandle} address={address} balance={Number(balance)} />}
			/>
		</div>
	);
}

export default Header;
