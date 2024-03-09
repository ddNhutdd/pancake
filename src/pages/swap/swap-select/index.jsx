import React from "react";
import css from "./swap-select.module.scss";
import { FaCaretDown } from "react-icons/fa";
import {useTheme} from 'src/context/dark-theme';

function SwapSelect(props) {
  const { image, text } = props;
  const {isDarkMode} = useTheme();

  const renderDarkTheme = () => {
		return isDarkMode ? css.dark : '';
	}

  return (
    <div className={`${css.swapSelect} ${renderDarkTheme()}`}>
      <span>{image}</span>
      <span>{text}</span>
      <span>{<FaCaretDown />}</span>
    </div>
  );
}

SwapSelect.defaultProps = {
  image: "",
  text: "",
};

export default SwapSelect;
