import Button from "../../../components/button";
import css from "./home7.module.scss";
import { useTheme } from "src/context/dark-theme";
import React from "react";

function Home7() {
  const { isDarkMode } = useTheme();

  return (
    <div className={css.home7}>
      <div className={css.container}>
        <div className={css.home7__content}>
          <div className={css.home7__text}>
            Join Everyone's Favorite DEX Now!
          </div>
          <Button isDark={isDarkMode}>Connect Wallet</Button>
          <img src="src/assets/imgs/cta-pancake.png" alt="cake" />
          <img src="src/assets/imgs/cta-pancake-big.png" alt="big cake" />
          <img src="src/assets/imgs/cta-rock-2.png" alt="rock" />
          <img src="src/assets/imgs/cta-rock.png" alt="rock 2" />
        </div>
      </div>
    </div>
  );
}

export default Home7;
