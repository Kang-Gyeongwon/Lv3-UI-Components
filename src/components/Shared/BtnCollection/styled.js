import { styled } from "styled-components";

export const MainButton = styled.button`
  ${(props) => {
    const { size, color } = props;
    if (size === "basic") {
      return `
        width: 200px;
        height: 50px;
        background-color: white;
        border: 3px solid ${color}
      `;
    }
    if (size === "medium") {
      return `
        width: 130px;
        height: 45px;
        background-color: ${color};
      `;
    }
    if (size === "small") {
      return `
        width: 100px;
        height: 40px;
        background-color: ${color};
      `;
    }
  }};

  margin: 4.5px;
  border-radius: 8px;
  #btn-icon {
    width:20px;
    height: 20px;
    position:relative;
    top: 5px;
    left: 3px;
  }
`;
