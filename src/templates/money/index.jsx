import React from "react";
import css from "./money.module.scss";

function Money() {
  return (
    <div className={`${css["money"]} flex items-center justify-center gap-1`}>
      <span className={`${css["money__image"]}`}>
        <img src="src/assets/imgs/pancakeswap-logo.png" />
      </span>
      <span>$3.107</span>
    </div>
  );
}

export default Money;
