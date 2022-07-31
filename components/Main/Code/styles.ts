//Styled Components
import styled from 'styled-components';

interface Props {
    isActive: boolean;
}

export const Tab = styled.a<Props>`
    color: ${props => (props.isActive ? '#c92396' : '#5b5b5b')};
    font-size: 0.7rem;
`;