import { Title, Form, InputlLabel, Inputs, SaveBtn } from "./styled";

const InputBox = () => {

  return (
    <>
      <Title>Input</Title>
      <Form>
        <div>
          <InputlLabel>이름</InputlLabel>
          <Inputs type="text" />
        </div>
        <div>
          <InputlLabel>가격</InputlLabel>
          <Inputs type="text" />
        </div>
        <SaveBtn type="submit" value="저장" />
      </Form>
    </>
  );
};

export default InputBox;
