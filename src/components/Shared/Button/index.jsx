import React from 'react'
import { StyledButton } from './styled'

const Button = ({handleBtnClick, children, size, negative, icon, isIconRight}) => {
  const onBtnClick = () => {
    handleBtnClick !== undefined && handleBtnClick(); // 이벤트 함수가 전달되었을 시 실행
    alert('click!');
  }
  return (
    <StyledButton
      size={size}
      negative={negative}
      onClick={onBtnClick}
      isIconRight={isIconRight}
    >
      {children}
      {icon !== undefined && <i icon={icon}></i>}
  </StyledButton>
  )
}

export default Button