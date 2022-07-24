/* Framework Style Component */
import styled from 'styled-components';

/* Tipagens */
import { Config } from '../../../../types/Funcs';

interface Props  extends Config{
  isActive?:boolean;
}

const Text = styled.p<Props>`
      background: ${(p) => p.bgColor};
      border: ${ ( { isActive } ) => isActive ? '1px solid blue' : 'none' };
      font-size: ${(p) => p.fontSize};
      font-weight: ${(p) => p.fontWeight};
      color: ${(p) => p.color};
      font-family: ${(p) => p.fontFamily};
      text-align: ${(p) => p.textAlign};
`;

export default Text;