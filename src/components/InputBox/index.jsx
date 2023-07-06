import React, { useState } from "react";
import { Title, Form, InputlLabel, Inputs, SaveBtn } from "./styled";

const InputBox = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    price: 0,
  });

  const onInputData = (e) => {
    const newOnlyNumber = e.target.value.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formmet = e.target.name === "price" ?
     newOnlyNumber : e.target.value
    setFormValue({
      ...formValue,
      [e.target.name]: formmet,
    });
  };

  const onAdd = () => {
    formValue.title === null || formValue.price === null
      ? window.alert("이름과 가격 모두 입력해주세요.")
      : window.alert(`name: ${formValue.title}, price: ${formValue.price}`);
    setFormValue({
      title: "",
      price: 0,
    });
  };
  return (
    <>
      <Title>Input</Title>
      <Form>
        <div>
          <InputlLabel>이름</InputlLabel>
          <Inputs
            onChange={onInputData}
            name="title"
            value={formValue.title}
            type="text"
          />
        </div>
        <div>
          <InputlLabel>가격</InputlLabel>
          <Inputs
            onChange={onInputData}
            name="price"
            value={formValue.price}
            type="text"
          />
        </div>
        <SaveBtn onClick={onAdd} type="submit" value="저장" />
      </Form>
    </>
  );
};

export default InputBox;
