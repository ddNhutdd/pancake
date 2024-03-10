import Marquee, { MarqueeType } from "components/marquee";
import css from "./home2.module.scss";
import MarqueeItem from "./marquee-item";
import { useTheme } from "src/context/dark-theme";
import Theme1 from "src/assets/theme/theme-1.theme.jsx";


function Home2() {
  const listMarkquee = [
    {
      id: 1,
      content: (
        <MarqueeItem
          color={"#6991E5"}
          text={"Base"}
          icon={<img src="src/assets/imgs/baseicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 2,
      content: (
        <MarqueeItem
          color={"#D8A60A"}
          text={"BNB Chain"}
          icon={<img src="src/assets/imgs/bnbicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 3,
      content: (
        <MarqueeItem
          color={"#2E2E2E"}
          text={"op BNB Chain"}
          textColor={"#D8A60A"}
          icon={<img src="src/assets/imgs/bnbicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 4,
      content: (
        <MarqueeItem
          color={"#2E2E2E"}
          text={"Apptos"}
          icon={<img src="src/assets/imgs/aptosicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 5,
      content: (
        <MarqueeItem
          color={"#627AD8"}
          text={"Ethreum"}
          icon={<img src="src/assets/imgs/ethereumicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 6,
      content: (
        <MarqueeItem
          color={"#C4A0E7"}
          text={"Polygon zkEVM"}
          icon={<img src="src/assets/imgs/polygonicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 7,
      content: (
        <MarqueeItem
          color={"#686EA7"}
          text={"zkSync Era"}
          icon={<img src="src/assets/imgs/zksyncicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 8,
      content: (
        <MarqueeItem
          color={"#6E89AE"}
          text={"Arbitrum One"}
          icon={<img src="src/assets/imgs/arbitrumicon.png" alt="base" />}
        />
      ),
    },
    {
      id: 9,
      content: (
        <MarqueeItem
          color={"#74C2D2"}
          text={"Linea"}
          icon={<img src="src/assets/imgs/lineaicon.png" alt="base" />}
        />
      ),
    },
  ];

  const { isDarkMode } = useTheme();

  const renderDarkTheme = () => {
    return isDarkMode ? css.dark : "";
  };

  return (
    <div className={`${css["home2"]} ${renderDarkTheme()}`}>
      <div className={`${css["container"]}`}>
        <div className={`${css["home2__title1"]} ${renderDarkTheme()}`}>
          Shaping the Future of Decentralized Trading:
        </div>
        <div className={`${css["home2__title2"]} ${renderDarkTheme()}`}>
          PancakeSwap’s Unstoppable Expansion
        </div>
        <div className={`${css["home2__info"]} ${renderDarkTheme()}`}>
          <div className={`${css["home2__info__item"]}`}>
            <div className={`${css["home2__info__name"]}`}>Total Users:</div>
            <div className={`${css["home2__info__number"]}`}>1,348,104</div>
            <div className={`${css["home2__info__text"]}`}>
              in the last 30 days
            </div>
          </div>
          <div className={`${css["home2__info__item"]}`}>
            <div className={`${css["home2__info__name"]}`}>Total Trades:</div>
            <div className={`${css["home2__info__number"]}`}>16,525,706</div>
            <div className={`${css["home2__info__text"]}`}>
              in the last 30 days
            </div>
          </div>
          <div className={`${css["home2__info__item"]}`}>
            <div className={`${css["home2__info__name"]}`}>
              Total Value Locked:
            </div>
            <div className={`${css["home2__info__number"]}`}>
              $1,704,089,729
            </div>
            <div className={`${css["home2__info__text"]}`}>
              in the last 30 days
            </div>
          </div>
        </div>
        <div className={`${css["home2__marquee"]}`}>
          <Marquee
            type={MarqueeType.toLeft}
            speed={20}
            pauseOnHover={false}
            list={listMarkquee}
          />
        </div>
      </div>
      <div className={`${css["home2__imageLeft"]}`}>
        <img src="src/assets/imgs/image-11.png" alt="left" />
      </div>
      <div className={`${css["home2__imageRight"]}`}>
        <img src="src/assets/imgs/image-12.png" alt="right" />
      </div>
      <div className={`${css["home2__backgroundShape"]} ${renderDarkTheme()}`}>
        <Theme1 />
      </div>
    </div>
  );
}

export default Home2;
