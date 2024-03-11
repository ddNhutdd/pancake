import { NavLink } from "react-router-dom";
import css from "./footer-component.module.scss";
import { CiShare1 } from "react-icons/ci";
import Theme3 from "src/assets/theme/theme-3.theme.jsx";
import { useTheme } from "src/context/dark-theme";

function FooterComponent() {
  const { isDarkMode } = useTheme();

  const renderDarkTheme = () => {
    return isDarkMode ? css.dark : "";
  };

  return (
    <div className={`${css.footerComponent} ${renderDarkTheme()}`}>
      <div className={css.footerComponent__left}>
        <NavLink>
          Bridge assets to BNB Chain <CiShare1></CiShare1>
        </NavLink>
      </div>
      <div className={css.footerComponent__right}>
        <div className={css.footerComponent__dailog}>Need help ?</div>
        <Theme3 />
        <img src="src/assets/imgs/image-40.png" alt="helper" />
      </div>
    </div>
  );
}

export default FooterComponent;
