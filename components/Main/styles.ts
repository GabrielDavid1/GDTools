//Styled Components
import styled from 'styled-components';

export const AppHeader = styled.div`
    display: flex;
    height: 25%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background:red;
`;

export const AppBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background:green;
`;

export const AppTab = styled.div`
    display: flex;
    flex-direction: row;
    height: 15%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background:purple;
`;