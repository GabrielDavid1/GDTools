//Styled Components
import styled from 'styled-components';

//Types
import { Config } from '../../../../types/Funcs';

export const ButtonElement = styled.button<Config>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(p) => p.marginLeft};
  margin-right: ${(p) => p.marginRight};
  margin-top: ${(p) => p.marginTop};
  margin-bottom: ${(p) => p.marginBottom};
  font-size: ${(props) => props.fontSize};
  border-radius:2px;
  cursor: pointer;
`;