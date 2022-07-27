/* Framework Style Component */
import styled from 'styled-components';

/* Tipagens */
import { Config } from '../../../../types/Funcs';

const Text = styled.p<Config>`
      color: ${(p) => p.bgColor};
      font-size: ${(p) => p.fontSize};
      font-weight: ${(p) => p.fontWeight};
      font-family: ${(p) => p.fontFamily};
      text-align: ${(p) => p.textAlign};
      margin-left: ${(p) => p.marginLeft};
      margin-right: ${(p) => p.marginRight};
      margin-top: ${(p) => p.marginTop};
      margin-bottom: ${(p) => p.marginBottom};
`;

export default Text;