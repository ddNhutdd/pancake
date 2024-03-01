import css from "src/components/dropdown-header/dropdown-header.module.scss";
import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export const dropdownHeaderAlignEnum = {
  left: "left",
  center: "center",
  right: "right",
};
function DropdownHeader(props) {
  const { header, list, align } = props;

  const renderBorder = function (value) {
    return value ? "border-b-1" : "";
  };
  const renderIcon = function (value) {
    return value ? <FaArrowRightFromBracket /> : "";
  };
  const renderListItem = function () {
    return list.map((item, index) => {
      return (
        <div
          key={item.id}
          className={`${
            css["headerMenu__item"]
          } hover-p flex align-center justify-between ${renderBorder(
            item.borderBottom
          )}`}
        >
          <div>{item.content}</div>
          {renderIcon(item.icon)}
        </div>
      );
    });
  };
  const renderAlign = function (value) {
    switch (value) {
      case dropdownHeaderAlignEnum.left:
        return { left: 0 };

      case dropdownHeaderAlignEnum.right:
        return { right: 0 };

      default:
        break;
    }
  };

  return (
    <div className={`${css["dropdownHeader"]} py-1`}>
      <div
        className={`${css["headerContainer"]} flex align-center justify-center p-3 select-none hover-p`}
      >
        {header}
      </div>
      <div className={css["headerMenuContainer"]}>
        <div
          style={renderAlign(align)}
          className={`${css["headerMenu"]} py-2  border-1`}
        >
          {renderListItem()}
        </div>
      </div>
    </div>
  );
}

DropdownHeader.defaultProps = {
  header: "test",
  list: [],
  align: dropdownHeaderAlignEnum.left,
};

export default DropdownHeader;
