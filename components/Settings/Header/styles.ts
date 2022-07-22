import styled from 'styled-components';

interface Props {
  isActive:boolean;
}

export const Home = styled.a<Props>`
    background-color: ${(props) => props.isActive ? '#626262' : '#434141'};
`;

export const Details = styled.a<Props>`
    background-color: ${(props) => props.isActive ? '#434141' : '#626262'};
`;