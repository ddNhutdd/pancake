import React from "react";
import css from "./button.module.scss";

export const buttonClassesType = {
  primary: "primary",
  primaryThin: "primaryThin",
  secondThin: "secondaryThin",
  outline: "outline",
};

function Button(props) {
  const { type, children, style } = props;

  const getButtonClasses = (type) => {
    switch (type) {
      case buttonClassesType.primary:
        return "button-primary";

      case buttonClassesType.primaryThin:
        return "button-primaryThin";

      case buttonClassesType.secondThin:
        return "button-secondThin";

      case buttonClassesType.outline:
        return "button-outline";

      default:
        return "button-primary";
    }
  };

  return (
    <button style={style} className={`${css[getButtonClasses(type)]}`}>
      {children}
    </button>
  );
}

Button.propDefault = {
  type: buttonClassesType.primary,
};

export default Button;
