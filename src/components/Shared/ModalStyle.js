import styled from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    width: 600px;
    height: 400px;
    padding: 4rem 2rem;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        margin-right: 0.5rem;
        &:last-child {
            margin-right: 0;
        }
    }
`;
