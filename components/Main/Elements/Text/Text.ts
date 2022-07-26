/* Framework Style Component */
import styled from 'styled-components';

/* Tipagens */
import { Config } from '../../../../types/Funcs';

const Text = styled.p<Config>`
      background: ${(p) => p.bgColor};
      border: ${(p) => p.border};
      font-size: ${(p) => p.fontSize};
      font-weight: ${(p) => p.fontWeight};
      color: ${(p) => p.color};
      font-family: ${(p) => p.fontFamily};
      text-align: ${(p) => p.textAlign};
`;

export default Text;