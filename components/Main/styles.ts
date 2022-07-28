//Styled Components
import styled from 'styled-components';

//Types
import { Config } from '../../types/Funcs';

export const AppHeader = styled.div<Config>`
    display: flex;
    height: ${props => props.height};
    background: ${props => props.bgColor};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    overflow-x: ${ ( { isScrollX } ) => (isScrollX) ? 'scroll' : 'hidden'};
    overflow-y: ${ ( { isScrollY } ) => (isScrollY) ? 'scroll' : 'hidden'};
    gap: ${props => props.gap};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const AppBody = styled.div<Config>`
    display: flex;
    height: ${props => props.height};
    background: ${props => props.bgColor};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    overflow-x: ${ ( { isScrollX } ) => (isScrollX) ? 'scroll' : 'hidden'};
    overflow-y: ${ ( { isScrollY } ) => (isScrollY) ? 'scroll' : 'hidden'};
    gap: ${props => props.gap};
`;

export const AppTab = styled.div<Config>`
    display: flex;
    height: ${props => props.height};
    background: ${props => props.bgColor};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    overflow-x: ${ ( { isScrollX } ) => (isScrollX) ? 'scroll' : 'hidden'};
    overflow-y: ${ ( { isScrollY } ) => (isScrollY) ? 'scroll' : 'hidden'};
    gap: ${props => props.gap};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;