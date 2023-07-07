import React from "react";
import { MainButton } from "./styled";

const BtnCollection = ({ color, size, comment, icon }) => {
  return (
    <MainButton color={color} size={size}>
      {comment}
      {icon && (
        <img
          src={`/assets/ico-${icon}.svg`}
          alt={icon}
          id="btn-icon"
        />
      )}
    </MainButton>
  );
};

export default BtnCollection;
