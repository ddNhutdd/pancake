import React, { useState } from "react";
import css from "./home1-top.module.scss";
import Button from "src/components/button";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Home1Top() {
  const [totalItems, setTotalItems] = useState(5);
  const [showItem, setShowItem] = useState(0);

  const renderTotalItems = function () {
    const listDot = [];
    for (let i = 0; i < totalItems; i++) {
      listDot.push(
        <div
          onClick={dotClickHandle.bind(null, i)}
          className={`${css["dot"]} ${setDotActive(i)}`}
          key={i}
        ></div>
      );
    }
    return listDot;
  };
  const setDotActive = function (value) {
    return value === showItem ? css["active"] : "";
  };
  const dotClickHandle = function (value) {
    setShowItem(value);
  };
  const showSlider = function (value) {
    return value === showItem ? "" : "d-0";
  };

  return (
    <div className={css["home1Top"]}>
      <div
        className={`${css["home1top__item"]} fadeIn ${
          css["home1top__slider1"]
        } ${showSlider(0)}`}
      >
        <div className={`${css["home1top__slider1__left"]}`}>
          <div className={`flex items-center justify-st rt gap-1 mb-2`}>
            <div className={`${css["home1top__slider1__image1"]}`}>
              <img src="src/assets/imgs/pancakeswap-logo.png" alt="logo" />
            </div>
            <div className={`${css["home1top__slider1__text1"]}`}>
              PancakeSwap
            </div>
            <div className={`${css["home1top__slider1__image2"]}`}>
              <img
                className={`${css["home1top__slider1__image1"]}`}
                src="src/assets/imgs/image-1.png"
                alt="generate"
              />
            </div>
          </div>
          <div className={`${css["home1top__slider1__text2"]} mb-4`}>
            Nemesis Downfall Now Live on PancakeSwap Gaming Marketplace
          </div>
          <div className={`flex items-center justify-start gap-2`}>
            <Button>
              <span>Play Now</span>
              <span>
                <HiMiniArrowTopRightOnSquare />
              </span>
            </Button>
            <div>Learn More</div>
          </div>
        </div>
        <div className={`${css["home1top__slider1__right"]}`}>
          <div className={`${css["home1top__slider__right__image1"]}`}>
            <img src="src/assets/imgs/image-2.png" alt="background" />
          </div>
          <div className={`${css["home1top__slider__right__image2"]}`}>
            <img src="src/assets/imgs/image-3.png" alt="background" />
          </div>
        </div>
      </div>
      <div
        className={`${css["home1top__item"]} ${
          css["home1top__slider2"]
        } ${showSlider(1)} fadeIn`}
      >
        <div className={`${css["home1top__slider2__left"]}`}>
          <div className={`flex items-center justify-st rt gap-1 mb-2`}>
            <div className={`${css["home1top__slider2__image1"]}`}>
              <img src="src/assets/imgs/pancakeswap-logo.png" alt="logo" />
            </div>
            <div className={`${css["home1top__slider2__text1"]}`}>
              PancakeSwap
            </div>
          </div>
          <div className={`${css["home1top__slider2__text2"]} mb-4`}>
            Be Our Top 100 Traders and Earn a 3% Trading Fee Rebate!
          </div>
          <div
            className={`${css["home1top__slider2__text3"]} flex items-center justify-start gap-2`}
          >
            <div>Join Now</div>

            <HiMiniArrowTopRightOnSquare style={{ fontSize: 25 }} />
          </div>
        </div>
        <div className={`${css["home1top__slider2__right"]}`}>
          <div className={`${css["home1top__slider__right__image1"]}`}>
            <img src="src/assets/imgs/image-4.png" alt="background" />
          </div>
          <div className={`${css["home1top__slider__right__image2"]}`}>
            <img src="src/assets/imgs/image-5.png" alt="background" />
          </div>
        </div>
      </div>
      <div
        className={`${css["home1top__item"]} ${
          css["home1top__slider3"]
        } ${showSlider(2)} fadeIn`}
      >
        <div className={`${css["home1top__slider3__left"]}`}>
          <div className={`flex items-center justify-st rt gap-1 mb-2`}>
            <div className={`${css["home1top__slider3__image1"]}`}>
              <img src="src/assets/imgs/pancakeswap-logo.png" alt="logo" />
            </div>
            <div className={`${css["home1top__slider3__text1"]}`}>
              PancakeSwap
            </div>
          </div>
          <div
            data-text="PancakeSwap Gaming Marketplace"
            className={`${css["home1top__slider3__text2"]} mb-4`}
          >
            PancakeSwap Gaming Marketplace
          </div>

          <div
            className={`${css["home1top__slider3__text3"]} flex items-center justify-start gap-2`}
          >
            <div>Join Now</div>

            <HiMiniArrowTopRightOnSquare style={{ fontSize: 25 }} />
          </div>
        </div>
        <div className={`${css["home1top__slider3__right"]}`}>
          <div className={`${css["home1top__slider__right__image1"]}`}>
            <img src="src/assets/imgs/image-7.webp" alt="background" />
          </div>
          <div className={`${css["home1top__slider__right__image2"]}`}>
            <img src="src/assets/imgs/image-8.webp" alt="background" />
          </div>
        </div>
      </div>
      <div
        className={`${css["home1top__item"]} ${
          css["home1top__slider4"]
        } ${showSlider(3)} fadeIn`}
      >
        slider4
      </div>
      <div
        className={`${css["home1top__item"]} ${
          css["home1top__slider5"]
        } ${showSlider(4)} fadeIn`}
      >
        slider5
      </div>
      <div className={css["home1top__paging"]}>{renderTotalItems()}</div>
    </div>
  );
}

export default Home1Top;
