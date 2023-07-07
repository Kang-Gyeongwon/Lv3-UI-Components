import React from "react";
import { MainButton, Title } from "./styled";

const BtnCollection = () => {
  return (
    <>
      <Title>Button</Title>
      <MainButton color="#9c88ff" size="basic">
        Large Primary Button
      </MainButton>
      <MainButton color="#9c88ff" size="medium">
        Medium
      </MainButton>
      <MainButton color="#9c88ff" size="small">
        Small
      </MainButton>
      <MainButton color="#00a8ff" size="basic">
        Large Negative Button
      </MainButton>
      <MainButton color="#00a8ff" size="medium">
        Medium
      </MainButton>
      <MainButton color="#00a8ff" size="small">
        Small
      </MainButton>
    </>
  );
};

export default BtnCollection;
