//Styled Components
import styled from 'styled-components';

//Types
import { Config } from '../../../../types/Funcs';
interface Props  {
    color:string;
    bgColor:string;
}

export const ButtonElement = styled.button<Config>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:2px;
  cursor: pointer;
`;