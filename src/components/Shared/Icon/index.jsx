import React from "react";
import { iconList } from "../../../datas/iconData";

// Button 내 들어가는 아이콘 컴포넌트
const Icon = (props) => {
    const { iconName } = props;
    return <i>{iconList.map((item) => iconName === item.name && item.icon())}</i>;
};

export default Icon;
