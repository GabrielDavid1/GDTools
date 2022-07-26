//Styled Components
import styled from 'styled-components';

//Types
import { Config } from '../../types/Funcs';

export const AppHeader = styled.div<Config>`
    display: flex;
    height: ${props => props.height};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: ${props => props.bgColor};
`;

export const AppBody = styled.div<Config>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height};
    background: ${props => props.bgColor};
`;

export const AppTab = styled.div<Config>`
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: ${props => props.height};
    background: ${props => props.bgColor};
`;