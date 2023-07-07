import React, { useState } from "react";
import { MainButton } from "./styled";

const BtnCollection = ({ color, reverseColor, size, comment, icon }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onReverseColor = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
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
