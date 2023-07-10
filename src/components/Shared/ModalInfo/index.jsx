import React from "react";
import { Overlay, ModalContainer, ButtonContainer } from "../ModalStyle";
import IconButton from "../IconButton";

const ModalInfo = (props) => {
    const { onClose, children } = props;
    const onToggleModal = () => {
        onClose();
    };
    return (
        <Overlay onClick={onToggleModal}>
            <ModalContainer>
                <div>{children}</div>
                <IconButton onClick={onToggleModal} icon="cancel" />
            </ModalContainer>
        </Overlay>
    );
};

export default ModalInfo;
