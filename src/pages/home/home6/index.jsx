import css from "./home6.module.scss";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import React, { useState, useRef, useEffect } from "react";

function Home6() {
  const [showCount, setShowCount] = useState(0);

  const renderStyleMove = () => {
    if (showCount === 5) {
      return {
        transform: `translateX(${-100 * showCount}%)`,
        paddingRight: 0,
        paddingLeft: 30,
        margin: "-1px",
        width: "25%",
      };
    } else {
      return { transform: `translateX(${-100 * showCount}%)` };
    }
  };
  const preClickHandle = () => {
    setShowCount((c) => {
      const newc = c - 1;
      return newc < 0 ? c : newc;
    });
  };
  const nextClickHandle = () => {
    setShowCount((c) => {
      return c >= 5 ? c : c + 1;
    });
  };

  return (
    <div className={css.home6}>
      <div className={css.container}>
        <div className={css.home6__title}>
          <div>Featured</div>
          <div>News</div>
        </div>
        <div className={css.home6__content}>
          <div className={css.home6__prev}>
            <div onClick={preClickHandle} className={css.home6__button}>
              <GrFormPrevious />
            </div>
          </div>
          <div className={css.home6__show}>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-1.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [CoinDesk]</div>
                  <div className={css.home6__right}>Feb 23, 2024</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap Plans ‘Affiliates’ for Expansion; Cake Holders to
                  Benefit
                </div>
                <div className={css.home6__text}>
                  CAKE token holders will benefit from the success of affiliate
                  forks as they will receive native DEX tokens from affiliates,
                  if things go as planned.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-2.avif" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [Yahoo Finance]</div>
                  <div className={css.home6__right}>Feb 21, 2024</div>
                </div>
                <div className={css.home6__contact__title}>
                  Nemesis Downfall Announces Highly Anticipated Beta Launch on
                  PancakeSwap Gaming Marketplace
                </div>
                <div className={css.home6__text}>
                  Nemesis Downfall will release its highly anticipated beta
                  version exclusively on PancakeSwap's gaming marketplace
                  platform
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-3.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [Cointelegraph]</div>
                  <div className={css.home6__right}>Dec 28, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap seeks 300M CAKE token supply revamp
                </div>
                <div className={css.home6__text}>
                  Decentralized exchange (DEX) PancakeSwap is looking to slash
                  the maximum supply of its ecosystem token, CAKE, from 750
                  million to 450 million.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-4.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [CoinDesk]</div>
                  <div className={css.home6__right}>Dec 28, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap Proposes to Reduce CAKE Token Supply by 300
                  Million
                </div>
                <div className={css.home6__text}>
                  PancakeSwap floated a vote proposal to reduce the maximum
                  supply of CAKE from 750 million to 450 million. The voting
                  period began in early hours on Thursday and will last until
                  8:00 am UTC on Friday.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-5.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [Cointelegraph]</div>
                  <div className={css.home6__right}>Nov 23, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap implements new ‘Gauges’ voting system
                </div>
                <div className={css.home6__text}>
                  The decentralized exchange launched a new feature that allows
                  governance tokenholders to vote on which pools will receive
                  the most rewards.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-6.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [The Block]</div>
                  <div className={css.home6__right}>Nov 15, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap Launches Gaming Marketplace
                </div>
                <div className={css.home6__text}>
                  The decentralized exchange PancakeSwap has launched a gaming
                  marketplace. The new platform lets developers build, launch
                  and update games with web3 elements, such as cryptocurrency
                  and NFTs.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-7.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [Cointelegraph]</div>
                  <div className={css.home6__right}>Oct 30, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap adds portfolio manager function in partnership
                  with Bril
                </div>
                <div className={css.home6__text}>
                  Decentralized crypto exchange PancakeSwap now has portfolio
                  manager functionality, according to an Oct. 30 announcement.
                  The feature has been added in partnership with decentralized
                  finance (DeFi) protocol Bril Finance.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-8.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [Decrypt]</div>
                  <div className={css.home6__right}>Aug 31, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap Expands to Coinbase-Incubated Base Network
                </div>
                <div className={css.home6__text}>
                  PancakeSwap joins DeFi heavyweights like Uniswap, SushiSwap,
                  and 1inch launching on the buzzy layer-2 network Base.
                </div>
              </div>
            </div>
            <div style={renderStyleMove()} className={css.home6__slide}>
              <div className={css.home6__card}>
                <div className={css.home6__image}>
                  <img src="src/assets/imgs/homeBotSlide-9.jpg" alt="image" />
                </div>
                <div className={css.home6__contact}>
                  <div className={css.home6__left}>From [CoinDesk]</div>
                  <div className={css.home6__right}>Aug 10, 2023</div>
                </div>
                <div className={css.home6__contact__title}>
                  PancakeSwap Deploys on Ethereum Scaling Network Arbitrum in
                  Expansion Drive
                </div>
                <div className={css.home6__text}>
                  The decentralized exchange has joined several networks this
                  year in the search for new users and revenue streams.
                </div>
              </div>
            </div>
          </div>
          <div className={css.home6__next}>
            <div onClick={nextClickHandle} className={css.home6__button}>
              <MdNavigateNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home6;
