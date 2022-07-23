/* Framework Style Component */
import styled from 'styled-components';

/* Tipagens */
import { Config } from '../../../../types/Funcs';

const Div = styled.div<Config>`
      background: ${(p) => p.bgColor};
      width: ${(p) => p.width};
      height: ${(p) => p.height};
      border: ${(p) => p.border};
      box-shadow: ${(p) => p.boxShadow};
      border-radius: ${(p) => p.borderRadius};
      opacity: ${(p) => p.opacity};
      z-index: ${(p) => p.zIndex};
      transform: ${(p) => p.transform};
      display: flex;
      justify-content: center;
      align-items: center;
`;

export default Div;