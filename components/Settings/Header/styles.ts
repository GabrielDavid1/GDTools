import styled from 'styled-components';

interface Props {
  isActive:boolean;
}

export const Home = styled.a<Props>`
    background-color: ${(props) => props.isActive ? '#626262' : '#494949'};
`;

export const Details = styled.a<Props>`
    background-color: ${(props) => props.isActive ? '#494949' : '#626262'};
`;