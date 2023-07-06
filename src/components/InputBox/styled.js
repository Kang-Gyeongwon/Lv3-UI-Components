import { styled } from "styled-components";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
`

export const InputlLabel = styled.span`
  font-size: 14.8px;
  margin-right: 3px;
`;
export const Inputs = styled.input`
  width: 200px;
  height: 40px;
  outline: none;
  border-radius: 8px;
  padding: 0 0.5em;
  border: 1px solid #f1c40f;
  margin-right: 3px;
`;

export const SaveBtn = styled.input`
  width: 100px;
  height: 40px;
  background-color: #f1c40f;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
