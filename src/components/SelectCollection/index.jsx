import React from "react";
import SelectBox from "../Shared/SelectBox";
import { Title, StSelectContainer } from "./styled";

function SelectContainer() {
    // * SelectBox 임시 데이터
    const OPTIONS = [
        { value: "apple", name: "사과" },
        { value: "banana", name: "바나나" },
        { value: "orange", name: "오렌지" },
        { value: "kiwi", name: "키위" },
        { value: "blueberry", name: "블루베리" },
    ];

    return (
        <StSelectContainer>
            <Title>Select</Title>
            <SelectBox options={OPTIONS} defaultValue="banana" />
        </StSelectContainer>
    );
}

export default SelectContainer;
