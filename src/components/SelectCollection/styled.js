import styled from "styled-components";

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const StSelectContainer = styled.div`
    border: 3px solid lightblue;
    margin-top: 2rem;
    padding: 3rem 1rem;
    & > div {
        display: flex;
        gap: 20px;
        overflow: hidden;
    }
`;
