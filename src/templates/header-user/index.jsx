import React from "react";
import css from "./header-user.module.scss";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Header() {
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
      <div className={`${css["header2"]} px-3`}>
        <div className={`${css["header2__left"]}`}>
          <div className={`${css["header2__icon"]}`}>
            <NavLink to="/">
              <img src={"/src/assets/imgs/header-icon-1.png"} alt="logo" />
              <img src={"/src/assets/imgs/header-icon-2.png"} alt="logo" />
            </NavLink>
          </div>
          <div className={`${css["header2__menu"]}`}>
            <div className={`${css["header2__menu__item"]}`}>
              <NavLink to="/">Trade</NavLink>
            </div>
            <div className={`${css["header2__menu__item"]}`}>
              <NavLink to="/">Earn</NavLink>
            </div>
            <div className={`${css["header2__menu__item"]}`}>
              <NavLink to="/">Game</NavLink>
            </div>
            <div className={`${css["header2__menu__item"]}`}>
              <NavLink to="/">NFT</NavLink>
            </div>

            <div className={`${css["header2__menu__item"]}`}>
              <HiOutlineDotsHorizontal />
            </div>
          </div>
        </div>
        <div className={`${css["header2__right"]}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Header;
