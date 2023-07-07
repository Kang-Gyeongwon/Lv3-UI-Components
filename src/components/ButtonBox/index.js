import React from "react";
import { Title } from "./styled";
import BtnCollection from "../Shared/BtnCollection";

const ButtonBox = () => {
  const options = [
    { color: "#9c88ff", size: "basic", comment: "Large Primary Button" },
    { color: "#9c88ff", size: "medium", comment: "Medium" },
    { color: "#9c88ff", size: "small", comment: "Small" },
    { color: "#00a8ff", size: "basic", comment: "Large Negative Button" },
    { color: "#00a8ff", size: "medium", comment: "Medium" },
    { color: "#00a8ff", size: "small", comment: "Small" },
  ];
  return (
    <>
      <Title>Button</Title>
      {options.map((option) => {
        return (
          <BtnCollection
            color={option.color}
            size={option.size}
            comment={option.comment}
          />
        );
      })}
    </>
  );
};

export default ButtonBox;
