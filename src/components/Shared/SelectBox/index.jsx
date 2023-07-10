import React from "react";
import { StSelectBox } from "./styled";

const SelectBox = (props) => {
    const { options, isHidden, defaultValue } = props;

    // SelectBox onChange 이벤트 함수
    const onChangeValue = (e) => {
        console.log(e.target.value);
    }

    return (
    <StSelectBox onChange={onChangeValue}>
        {options.map((option) => {
            return (<option
                key={option.value}
                value={option.value}
                selected={defaultValue === option.value}
            >
                {option.name}
            </option>)
        })}
    </StSelectBox>
    );
};

export default SelectBox;
