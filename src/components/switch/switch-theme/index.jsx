import React from "react";
import css from "./switch-theme.module.scss";
import moondark from "src/assets/imgs/moon.svg";
import sundark from "src/assets/imgs/sun.svg";
import PropTypes from "prop-types";
import sunactive from "src/assets/imgs/sunactive.svg";
import moonactive from "src/assets/imgs/moonactive.svg";

function SwitchTheme(props) {
  const { active, change } = props;

  const renderActive = function () {
    return active ? css["active"] : "";
  };
  const switchClickHandle = function () {
    change((s) => !s);
  };
  const renderRingContent = function () {
    return active ? (
      <img src={moonactive} alt="moon active" />
    ) : (
      <img src={sunactive} alt="sun active" />
    );
  };

  return (
    <div onClick={switchClickHandle} className={css["switchThemeContainer"]}>
      <div
        className={`${css["switchThemeContainer__item"]} ${css["switchThemeContainer__left"]}`}
      >
        <img src={sundark} alt="sun" />
      </div>
      <div
        className={`${css["switchThemeContainer__item"]} ${css["switchThemeContainer__right"]}`}
      >
        <img src={moondark} alt="moon" />
      </div>
      <div
        className={
          css["switchThemeContainer__ringContainer"] + ` ${renderActive()}`
        }
      >
        <div className={css["switchThemeContainer__ring"]}>
          {renderRingContent()}
        </div>
      </div>
    </div>
  );
}

SwitchTheme.defaultProps = {
  active: false,
};
SwitchTheme.propTypes = {
  active: PropTypes.bool,
  change: PropTypes.func,
};

export default SwitchTheme;
