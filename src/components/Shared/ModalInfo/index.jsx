import React from "react";
import Button from "../Button";
import { Overlay, ModalContainer, ButtonContainer } from "../ModalStyle";

const ModalInfo = (props) => {
    const { onClose, children } = props;
    const onToggleModal = () => {
        onClose();
    };
    return (
        <Overlay onClick={onToggleModal}>
            <ModalContainer>
                <div>{children}</div>
                <ButtonContainer>
                    <Button onClick={onToggleModal}>닫기</Button>
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalInfo;
