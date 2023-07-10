import React from "react";
import { StSelectBox } from "./styled";

const SelectBox = (props) => {
    const { options, defaultValue } = props;

    // SelectBox onChange 이벤트 함수
    const onChangeValue = (e) => {
        console.log(e.target.value);
    }

    return (
    <StSelectBox onChange={onChangeValue} defaultValue={defaultValue}>
        {options.map((option, idx) => {
            return (<option
                key={idx}
                value={option.value}
            >
                {option.name}
            </option>)
        })}
    </StSelectBox>
    );
};

export default SelectBox;
