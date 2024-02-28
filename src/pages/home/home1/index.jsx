import React from "react";
import css from "./home1.module.scss";
import Home1Top from "../home1-top";

function Home1() {
  return (
    <div className={css["home1"]}>
      <div className={css["home1__container"]}>
        <div className={css["home1__top"]}>
          <Home1Top></Home1Top>
        </div>
        <div className={css["home1__bottom"]}></div>
      </div>
      <div className={css["home1__background"]}></div>
    </div>
  );
}

export default Home1;
