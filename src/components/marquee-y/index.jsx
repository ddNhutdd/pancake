import React from "react";
import css from "./marquee-y.module.scss";

function MarqueeY(props) {
  const { list, style } = props;
  const renderItem = () => {
    if (!list || list.length <= 0) return;
    return list.map((item) => (
      <div key={item.id + "value"} className={css.marqueeY__item}>
        {item.content}
      </div>
    ));
  };
  return (
    <div style={style} className={css.marqueeY}>
      <div className={css.marqueeY__slide}>{renderItem(1)}</div>
      <div className={css.marqueeY__slide}>{renderItem(2)}</div>
    </div>
  );
}

MarqueeY.defaultProps = {
  style: {},
};

export default MarqueeY;
