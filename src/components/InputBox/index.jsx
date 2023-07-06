const InputBox = () => {
  return (
    <>
      <h1>Input</h1>
      <div>
        <div>
          <span>이름</span>
          <input type="text" />
        </div>
        <div>
          <span>가격</span>
          <input type="text" />
        </div>
      </div>
      <input type="submit" value="저장" />
    </>
  );
};

export default InputBox;
