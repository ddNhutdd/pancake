import React from "react";
import css from "./home.module.scss";
import Home1 from "./home1";

function Home() {
  return (
    <div className={css["home"]}>
      <Home1 />
    </div>
  );
}

export default Home;
