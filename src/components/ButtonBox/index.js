import React from "react";
import { Title } from "./styled";
import BtnCollection from "../Shared/BtnCollection";

const ButtonBox = () => {
  const optionsA = [
    {
      color: "#9c88ff",
      size: "basic",
      comment: "Large Primary Button",
      icon: "checkbox",
    },
    { color: "#9c88ff", size: "medium", comment: "Medium" },
    { color: "#9c88ff", size: "small", comment: "Small" },
  ];
  const optionsB = [
    {
      color: "#00a8ff",
      size: "basic",
      comment: "Large Negative Button",
      icon: "notification",
    },
    { color: "#00a8ff", size: "medium", comment: "Medium" },
    { color: "#00a8ff", size: "small", comment: "Small" },
  ];
  return (
    <>
      <Title>Button</Title>
      <div>
        {optionsA.map((optionA) => {
          return (
            <BtnCollection
              color={optionA.color}
              size={optionA.size}
              comment={optionA.comment}
              icon={optionA.icon}
            />
          );
        })}
      </div>
      <div>
        {optionsB.map((optionB) => {
          return (
            <BtnCollection
              color={optionB.color}
              size={optionB.size}
              comment={optionB.comment}
              icon={optionB.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default ButtonBox;
