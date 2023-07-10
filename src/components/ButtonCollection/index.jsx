import React from "react";
import Button from "../Shared/Button";
import { Title, ButtonsWrapper } from "./styled";

const  ButtonCollection = () => {
    return (
        <>
            <Title>Button</Title>
            <ButtonsWrapper>
                <Button onClick={() => {}} negative={true} icon="notification" isIconRight={true}>
                    Large Button with Icon (right)
                </Button>
                <Button size="medium">Medium Button</Button>
                <Button size="small">Small Button</Button>
            </ButtonsWrapper>
            <ButtonsWrapper>
                <Button color="danger" onClick={() => {}} negative={true} icon="checkbox" isIconRight={false}>
                    Large Button with Icon (left)
                </Button>
                <Button color="danger" size="medium">
                    Medium Button
                </Button>
                <Button color="danger" size="small">
                    Small Button
                </Button>
            </ButtonsWrapper>
        </>
    );
}

export default ButtonCollection;
