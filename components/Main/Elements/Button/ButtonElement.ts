import styled from 'styled-components';

interface Props  {
    color:string;
    bgColor:string;
}

export const ButtonElement = styled.button`
  background-color: ${(props:Props) => props.bgColor};
  color: ${(props:Props) => props.color};
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:2px;
  cursor: pointer;
`;