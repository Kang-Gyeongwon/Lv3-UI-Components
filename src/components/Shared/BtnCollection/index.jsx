import React from "react";
import { MainButton } from "./styled";

const BtnCollection = ({ color, size, comment }) => {
  return (
    <MainButton color={color} size={size}>
      {comment}
    </MainButton>
  );
};

export default BtnCollection;
