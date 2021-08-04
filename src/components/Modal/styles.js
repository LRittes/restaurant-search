import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    rigth: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: rgb(78, 89, 131, 0.5);
    backdrop-filter: blur(5px);

    z-index: 999;
`;

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 500px;
    padding: 24px;
    background-color: #fff;
    box-shadow: 0 0 32px rgb(78, 89, 131, 0.2);
    border-radius: 8px; 
`;