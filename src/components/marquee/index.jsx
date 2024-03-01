import css from "./marquee.module.scss";
import PropTypes from "prop-types";

export const MarqueeType = {
  toLeft: "toLeft",
  toRight: "toRight",
};
function Marquee(props) {
  const { type, speed, pauseOnHover, list } = props;

  const styleToLeft = {
    animationName: css["move_marqueeToLeft"],
    animationDuration: speed + "s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };
  const styleToRight = {
    animationName: css["move_marqueeToRight"],
    animationDuration: speed + "s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };

  const renderStyle = function () {
    switch (type) {
      case MarqueeType.toLeft:
        return styleToLeft;
      case MarqueeType.toRight:
        return styleToRight;
      default:
        return styleToLeft;
    }
  };
  const renderItem = function () {
    if (!list || list.length <= 0) return;
    return list.map((item) => (
      <div className={css["marquee__item"]} key={item.id}>
        {item.content}
      </div>
    ));
  };
  const renderPause = function () {
    return pauseOnHover ? css["pause"] : "";
  };

  return (
    <div className={`${css["marquee__container"]} ${renderPause()}`}>
      <div style={renderStyle()} className={css["marquee__slice"]}>
        {renderItem()}
      </div>
      <div style={renderStyle()} className={css["marquee__slice"]}>
        {renderItem()}
      </div>
      <div style={renderStyle()} className={css["marquee__slice"]}>
        {renderItem()}
      </div>
    </div>
  );
}

Marquee.defaultProps = {
  type: MarqueeType.toLeft,
  speed: 16,
  pauseOnHover: false,
  list: [],
};
Marquee.prototype = {
  type: PropTypes.string,
  speed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  list: PropTypes.array,
};

export default Marquee;
