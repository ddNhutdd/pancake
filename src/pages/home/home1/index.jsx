import React from "react";
import css from "./home1.module.scss";
import Home1Top from "./home1-top";
import Button from "src/components/button";
import videoSrc1 from "src/assets/videos/1.webm";
import videoSrc2 from "src/assets/videos/2.webm";
import videoSrc3 from "src/assets/videos/3.webm";
import videoSrc4 from "src/assets/videos/4.webm";
import videoSrc5 from "src/assets/videos/5.webm";
import videoSrc6 from "src/assets/videos/6.webm";
import { buttonClassesType } from "../../../components/button";
import { useTheme } from "src/context/dark-theme";

function Home1() {
  const { isDarkMode } = useTheme();

  const renderDarkTheme = () => {
    return isDarkMode ? css.dark : "";
  };
  const renderBotTheme = () => {
    return isDarkMode ? (
      <img src="src/assets/imgs/image-10-dark.svg" alt="back" />
    ) : (
      <img src="src/assets/imgs/image-10.svg" alt="back" />
    );
  };
  return (
    <div className={`${css["home1"]} ${renderDarkTheme()}`}>
      <div className={css["home1__container"]}>
        <div className={css["home1__top"]}>
          <Home1Top></Home1Top>
        </div>
        <div className={css["home1__bottom"]}>
          <div className={css["home1__bottom__left"]}>
            <div
              className={`${css["home1__bottom__title"]} ${renderDarkTheme()}`}
            >
              Everyone's{" "}
              <span className={css["home1__bottom__favorite"]}>Favorite</span>{" "}
              DEX
            </div>
            <div className={css["home1__bottom__smallTitle"]}>
              Trade, earn, and own crypto on the all-in-one multichain DEX
            </div>
            <div className={`flex items-center justify-start gap-3`}>
              <Button isDark={isDarkMode}>Connect Wallet</Button>
              <Button type={buttonClassesType.outline}>Trade Now</Button>
            </div>
          </div>
          <div className={css["home1__bottom__right"]}>
            <div className={css["home1__bottom__listVideo"]}>
              <div className={css["home1__bottom__video"]}>
                <video muted autoPlay loop controls={false}>
                  <source src={videoSrc1} type="video/webm" />
                </video>
              </div>
              <div className={css["home1__bottom__video"]}>
                <video muted autoPlay loop controls={false}>
                  <source src={videoSrc2} type="video/webm" />
                </video>
              </div>
              <div className={css["home1__bottom__video"]}>
                <video muted autoPlay loop controls={false}>
                  <source src={videoSrc3} type="video/webm" />
                </video>
              </div>
              <div className={css["home1__bottom__video"]}>
                <video muted autoPlay loop controls={false}>
                  <source src={videoSrc4} type="video/webm" />
                </video>
              </div>
              <div className={css["home1__bottom__video"]}>
                <video muted autoPlay loop controls={false}>
                  <source src={videoSrc5} type="video/webm" />
                </video>
              </div>
              <div className={css["home1__bottom__video"]}>
                <video muted autoPlay loop controls={false}>
                  <source src={videoSrc6} type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css["home1__background"]}>{renderBotTheme()}</div>
    </div>
  );
}

export default Home1;
