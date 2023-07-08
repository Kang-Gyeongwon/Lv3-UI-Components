import React from "react";
import Button from "../Button";
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
                    <Button handleBtnClick={onToggleModal}>취소</Button>
                    <Button color="danger" handleBtnClick={onConfirmClick}>확인</Button>
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalConfirm;
