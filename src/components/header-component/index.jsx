import css from "./header-component.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { url } from "src/constants";
import { useTheme } from "src/context/dark-theme";

function HeaderComponent() {
  const { isDarkMode } = useTheme();

  const contentElement = useRef(null);
  const containerElement = useRef(null);

  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const renderDarkTheme = () => {
    return isDarkMode ? css.dark : "";
  };
  const renderShowButtonScroll = () => {
    return showScrollButtons ? "d-b" : "d-0";
  };
  const prevClickHandle = () => {
    containerElement.current.scrollBy({
      left: -40,
      behavior: "smooth",
    });
  };
  const nextClickHandle = () => {
    containerElement.current.scrollBy({
      left: 40,
      behavior: "smooth",
    });
  };
  const setStyleContainer = () => {
    return showScrollButtons ? { justifyContent: "flex-start" } : {};
  };

  useEffect(() => {
    const checkOverflow = () => {
      const contentWidth = contentElement.current.offsetWidth;
      const containerWidth = containerElement.current.offsetWidth;
      setShowScrollButtons(contentWidth > containerWidth);
    };
    window.addEventListener("resize", checkOverflow);
    checkOverflow();
    window.addEventListener("onload", checkOverflow);
    checkOverflow();
    return () => {
      window.removeEventListener("resize", checkOverflow);
      window.removeEventListener("onload", checkOverflow);
      checkOverflow();
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        className={`${renderShowButtonScroll()} ${
          css.headerComponent__buttonScroll
        } ${css.prev}`}
        onClick={prevClickHandle}
      >
        {"<"}
      </button>
      <button
        className={`${renderShowButtonScroll()} ${
          css.headerComponent__buttonScroll
        } ${css.next}`}
        onClick={nextClickHandle}
      >
        {">"}
      </button>
      <div
        ref={containerElement}
        style={setStyleContainer()}
        className={`${css.headerComponent} ${renderDarkTheme()}`}
      >
        <div ref={contentElement} className={css.headerComponent__content}>
          <NavLink
            to={url.swap}
            className={`${css.headerComponent__item} ${css.active}`}
          >
            Swap
          </NavLink>
          <NavLink className={css.headerComponent__item}>Liquidity</NavLink>
          <NavLink className={css.headerComponent__item}>
            Perpetual <CiShare1 style={{ fontWeight: 600 }} />
          </NavLink>
          <NavLink className={css.headerComponent__item}>
            Bridge <CiShare1 />
          </NavLink>
          <NavLink className={css.headerComponent__item}>Limit (V2)</NavLink>
          <NavLink className={css.headerComponent__item}>Buy Crypto</NavLink>
          <NavLink className={css.headerComponent__item}>
            Trading Reward
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
