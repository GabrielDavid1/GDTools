//Styled Components
import styled from 'styled-components';

//Types
import { Config } from '../../../../types/Funcs';

export const InputElement = styled.input<Config>`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.bgColor};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    font-size: ${(p) => p.fontSize};
    font-weight: ${(p) => p.fontWeight};
    font-family: ${(p) => p.fontFamily};
    margin-left: ${(p) => p.marginLeft};
    margin-right: ${(p) => p.marginRight};
    margin-top: ${(p) => p.marginTop};
    margin-bottom: ${(p) => p.marginBottom};
    outline:0;
`;