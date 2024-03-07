import React from "react";
import css from "./marquee-item.module.scss";

function MarqueeItem(props) {
  const { icon, text } = props;
  return (
    <div className={css.marqueeItem}>
      {icon} {text}
    </div>
  );
}

export default MarqueeItem;
