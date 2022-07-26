/* Framework Style Component */
import styled from 'styled-components';

/* Types */
import { Config } from '../../../../types/Funcs';

interface Props extends Config {
  isScrollX: boolean;
  isScrollY: boolean;
}

const Div = styled.div<Props>`
      background: ${(p) => p.bgColor};
      width: ${(p) => p.width};
      height: ${(p) => p.height};
      border: ${(p) => p.border};
      border-radius: ${(p) => p.borderRadius};
      opacity: ${(p) => p.opacity};
      z-index: ${(p) => p.zIndex};
      transform: ${(p) => p.transform};
      display: flex;
      flex-wrap: ${(p) => p.flexWrap};
      flex-direction: ${(p) => p.flexDirection};
      justify-content: ${(p) => p.justifyContent};
      align-items: ${(p) => p.alignItems};
      overflow-x: ${ ( { isScrollX } ) => (isScrollX) ? 'scroll' : 'hidden'};
      overflow-y: ${ ( { isScrollY } ) => (isScrollY) ? 'scroll' : 'hidden'};
`;

export default Div;