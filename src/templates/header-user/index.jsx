import React from "react";
import css from "./header-user.module.scss";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import Logo1 from "/src/assets/imgs/logo.svg";
import DropdownHeader, {
  dropdownHeaderAlignEnum,
} from "../../components/dropdown-header";

function Header() {
  const threeDotMenuList = [
    {
      id: 1,
      content: "Info",
    },
    {
      id: 2,
      content: "IFO",
    },
    {
      id: 3,
      content: "Affiliate Program",
    },
    {
      id: 4,
      content: "Voting",
      borderBottom: true,
    },
    {
      id: 5,
      content: "LeaderBoard",
      borderBottom: true,
    },
    {
      id: 6,
      content: "Blogs",
      icon: true,
    },
    {
      id: 6,
      content: "Docs",
      icon: true,
    },
  ];
  const nftMenuList = [
    {
      id: 1,
      content: "Overide",
    },
    {
      id: 2,
      content: "Colection",
    },
    {
      id: 3,
      content: "Activity",
    },
  ];
  const gameMenuList = [
    {
      id: 1,
      content: "Game Marketplace",
      icon: true,
    },
    {
      id: 2,
      content: "Prediction (BETA)",
    },
    {
      id: 3,
      content: "Lottery",
    },
    {
      id: 4,
      content: "Bottery (BETA)",
    },
  ];
  const earnList = [
    {
      id: 1,
      content: "Farms",
    },
    {
      id: 2,
      content: "Cake Staking",
    },
    {
      id: 3,
      content: "Pool",
    },
    {
      id: 4,
      content: "Position Manager",
    },
    {
      id: 5,
      content: "Liquid Staking",
    },
    {
      id: 6,
      content: "Simple Staking",
    },
  ];
  const tradeMenu = [
    {
      id: 1,
      content: "Swap",
    },
    {
      id: 2,
      content: "Liquidity",
    },
    {
      id: 3,
      content: "Pequetual",
      icon: true,
    },
    {
      id: 4,
      content: "Bride",
      icon: true,
    },
    {
      id: 5,
      content: "Limit (V2)",
    },
    {
      id: 6,
      content: "Buy Crypto",
    },
    {
      id: 7,
      content: "Trading Reward",
    },
  ];

  return (
    <>
      <div className={`${css["header1"]} flex w-100`}>
        <div
          className={`${css["header1__container"]} grow-1 flex items-center justify-center`}
        >
          <div
            className={`${css["header1__content"]} flex items-center justify-center w-md-100 pl-md-2`}
          >
            <div className={`${css["header1__imageContainer"]} d-md-0`}>
              <img
                src={"/src/assets/imgs/header-warning.webp"}
                alt={"warning"}
              />
            </div>
            <div className={`${css["header1__box"]}`}>
              <span>PHISHING WARNING:</span>
              <span>please make sure you're visiting</span>
              <span> https://pancakeswap.finance</span>
              <span>- check the URL carefully.</span>
            </div>
          </div>
        </div>
        <div
          className={`${css["header1__close"]} flex items-center justify-center hover-p`}
        >
          <IoIosClose />
        </div>
      </div>
      <div
        className={`${css["header2"]} border-b-1 px-3 flex align-center justify-between`}
      >
        <div className={`${css["header2__left"]} flex align-center`}>
          <div
            className={`${css["header2__icon"]} flex align-center justify-between`}
          >
            <NavLink className={`flex align-center justify-between`} to="/">
              <img
                className={`${css["header2__icon__image"]}`}
                src={Logo1}
                alt="React Logo"
              />
              <img
                className="d-0"
                src={"src/assets/imgs/logo2.svg"}
                alt="logo"
              />
            </NavLink>
          </div>
          <div className={`${css["header2__menu"]} flex align-center ml-3`}>
            <div className={`${css["header2__menu__item"]}`}>
              <DropdownHeader header={"Trade"} list={tradeMenu} />
            </div>
            <div className={`${css["header2__menu__item"]}`}>
              <DropdownHeader header={`Earn`} list={earnList} />
            </div>
            <div className={`${css["header2__menu__item"]}`}>
              <DropdownHeader header={`Game`} list={gameMenuList} />
            </div>
            <div className={`${css["header2__menu__item"]}`}>
              <DropdownHeader header={`NFT`} list={nftMenuList} />
            </div>
            <div
              className={`${css["header2__menu__item"]} flex align-center justify-center`}
            >
              <DropdownHeader
                header={<HiOutlineDotsHorizontal />}
                list={threeDotMenuList}
              />
            </div>
          </div>
        </div>
        <div className={`${css["header2__right"]} flex`}>
          <div>
            <span className={`${css["header2__money__image"]}`}>
              <img src="src/assets/imgs/pancakeswap-logo.png" />
            </span>
            <span>$3.107</span>
          </div>
          <div>
            <MdLanguage />
          </div>
          <div>
            <IoSettingsSharp />
          </div>
          <div>
            <IoIosNotifications />
          </div>
          <div>BNB Chain</div>
          <div>connenct wallet</div>
        </div>
      </div>
    </>
  );
}

export default Header;
