import React from 'react';
import { Overlay, ModalContainer, ButtonContainer } from './styled';

const ModalInfo = (props) => {
  const {onClose, children} = props;
  const onToggleModal = () => {
    onClose();
  }
  return (
    <Overlay onClick={onToggleModal}>
      <ModalContainer>
          <div>{children}</div>
        <ButtonContainer>
          <button onClick={onToggleModal}>닫기</button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalInfo
