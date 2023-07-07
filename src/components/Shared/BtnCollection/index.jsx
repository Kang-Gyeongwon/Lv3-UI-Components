import React, { useState } from "react";
import { MainButton } from "./styled";

const BtnCollection = (props) => {
  const { color, reverseColor, size, comment, icon } = props;
  const [isClicked, setIsClicked] = useState(false);

  const onReverseColor = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onOpenAlert();
    }, 250);
  };

  const onOpenAlert = () => {
    if (comment === "Large Primary Button") {
      window.alert("버튼을 만들어보세요");
    }
    if (comment === "Large Negative Button") {
      window.prompt("어렵나요?");
    }
  };
  return (
    <MainButton
      color={color}
      reverseColor={reverseColor}
      onClick={onReverseColor}
      isClicked={isClicked}
      size={size}
    >
      {comment}
      {icon && <img src={`/assets/ico-${icon}.svg`} alt={icon} id="btn-icon" />}
    </MainButton>
  );
};

export default BtnCollection;
