//Styled Components
import styled from 'styled-components';

//Types
import { Config } from '../../../../types/Funcs';

export const InputElement = styled.input<Config>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '40px'};
    color: ${props => props.color || '#000'};
    border: ${props => props.border || '1px solid #000'};
    border-radius: ${props => props.borderRadius || '5px'};
    outline:0;
`;