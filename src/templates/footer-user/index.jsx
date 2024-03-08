import React from "react";
import css from "./footer-user.module.scss";
import { NavLink } from "react-router-dom";
import { url } from "../../constants";
import logoTextLight from "src/assets/imgs/logo-text-light.svg";
import twitter from "src/assets/imgs/twitter.svg";
import telegram from "src/assets/imgs/telegram.svg";
import reddit from "src/assets/imgs/reddit.svg";
import instagram from "src/assets/imgs/instagram.svg";
import github from "src/assets/imgs/github.svg";
import dicord from "src/assets/imgs/discord.svg";
import youtube from "src/assets/imgs/youtube.svg";
import { MdLanguage } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Money from "../money/index";
import Button from "src/components/button";
import { buttonClassesType } from "../../components/button";
import SwitchTheme from "../../components/switch/switch-theme";
import { useTheme } from "src/context/dark-theme";

function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`${css["footer"]} w-100`}>
      <div className={`${css["footer__container"]}`}>
        <div className={`${css["footer__nav"]} row`}>
          <ul>
            <li>ECOSYSTEM</li>
            <li>
              <NavLink to={url.home}>Trade</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Earn</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Game</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>NFT</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Tokenomics</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Litepaper</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>CAKE Emission Projection</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Merchandise</NavLink>
            </li>
          </ul>
          <ul>
            <li>BUSINESS</li>
            <li>
              <NavLink to={url.home}>Farms And Syrup Pools</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>IFO</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>NFT Marketplace</NavLink>
            </li>
          </ul>
          <ul>
            <li>DEVELOPERS</li>
            <li>
              <NavLink to={url.home}>Contributing</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Github</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Bug Bounty</NavLink>
            </li>
          </ul>
          <ul>
            <li>SUPPORT</li>
            <li>
              <NavLink to={url.home}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Troubleshooting</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Documentation</NavLink>
            </li>
          </ul>
          <ul>
            <li>ABOUT</li>
            <li>
              <NavLink to={url.home}>Terms Of Service</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Brand Assets</NavLink>
            </li>
            <li>
              <NavLink to={url.home}>Careers</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className={css.footer__logo1}>
                <img
                  style={{ width: "160px" }}
                  className={`${css["header2__icon__image"]}`}
                  src={logoTextLight}
                  alt="React Logo"
                />
              </NavLink>
              <NavLink className={css.footer__logo2}>
                <img
                  style={{ width: "20px" }}
                  className={`${css["header2__icon__image"]}`}
                  src={`src/assets/imgs/pancakeswap-logo.png`}
                  alt="React Logo"
                />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`${css["footer__social"]} row`}>
          <NavLink to={url.home}>
            <img src={twitter} alt="twitter" />
          </NavLink>
          <NavLink to={url.home}>
            <img src={telegram} alt="telegram" />
          </NavLink>
          <NavLink to={url.home}>
            <img src={reddit} alt="reddit" />
          </NavLink>
          <NavLink to={url.home}>
            <img src={instagram} alt="instagram" />
          </NavLink>
          <NavLink to={url.home}>
            <img src={github} alt="github" />
          </NavLink>
          <NavLink to={url.home}>
            <img src={dicord} alt="dicord" />
          </NavLink>
          <NavLink to={url.home}>
            <img src={youtube} alt="youtube" />
          </NavLink>
        </div>
        <div
          className={`${css["footer__last"]} flex items-center justify-between`}
        >
          <div
            className={`${css["footer__left"]} flex items-center justify-between gap-2`}
          >
            <span>
              <SwitchTheme active={isDarkMode} change={toggleTheme} />
            </span>
            <span className="flex items-center justify-between gap-2 hover-p ml-2">
              <div className="flex items-center justify-between ">
                <MdLanguage style={{ fontSize: 30 }} />
              </div>
              <div>EN</div>
            </span>
          </div>
          <div
            className={`${css["footer__right"]} flex items-center justify-center gap-2`}
          >
            <div>
              <Money></Money>
            </div>
            <div>
              <Button isDark={isDarkMode} type={buttonClassesType.primaryThin}>
                <span>Buy Cake</span>
                <span>
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
