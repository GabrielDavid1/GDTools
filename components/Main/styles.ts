import styled from 'styled-components';
import theme from '../../theme';

export const AppHeader = styled.div`
    display: flex;
    background-color:red;
    height: 25%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const AppBody = styled.div`
    display: flex;
    height: 60%;
    background-color: blue;
`;

export const AppTab = styled.div`
    display: flex;
    flex-direction: row;
    height: 15%;
    background-color: green;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;