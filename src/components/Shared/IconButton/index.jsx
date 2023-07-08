import React from "react";
import Icon from "../Icon";
import { StIconButton } from "./styled";
import { iconList } from "../../../datas/iconData";

const IconButton = (props) => {
    const { onClick, icon } = props;
    const clickButton = () => {
        // props 함수
        //onClick();
        console.log("btn clicked!");
    };
    return (
        <StIconButton onClick={clickButton}>
            <Icon iconName={icon} />
        </StIconButton>
    );
};

export default IconButton;
