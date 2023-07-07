import React from "react";
import { Overlay, ModalContainer, ButtonContainer } from "../ModalStyle";

const ModalConfirm = (props) => {
    const { onClose, onConfirm, children } = props;
    const onToggleModal = () => {
        onClose();
    };
    const onConfirmClick = () => {
        onConfirm();
    };
    return (
        <Overlay>
            <ModalContainer>
                <div>{children}</div>
                <ButtonContainer>
                    <button onClick={onToggleModal}>닫기</button>
                    <button onClick={onConfirmClick}>확인</button>
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalConfirm;
