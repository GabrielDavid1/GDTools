/* Framework Style Component */
import styled from 'styled-components';

/* Types */
import { Config } from '../../../../types/Funcs';

interface Props extends Config {
      boxShadowConverted: string;
}

const Div = styled.div<Props>`
      background: ${(p) => p.bgColor};
      width: ${(p) => p.width};
      height: ${(p) => p.height};
      border: ${(p) => p.border};
      box-shadow: ${(p) => p.boxShadowConverted};
      border-radius: ${(p) => p.borderRadius};
      transform: ${(p) => p.transform};
      display: flex;
      flex-wrap: ${(p) => p.flexWrap};
      flex-direction: ${(p) => p.flexDirection};
      justify-content: ${(p:any) => p.justifyContent};
      align-items: ${(p) => p.alignItems};
      gap: ${(p) => p.gap};
      margin-left: ${(p) => p.marginLeft};
      margin-right: ${(p) => p.marginRight};
      margin-top: ${(p) => p.marginTop};
      margin-bottom: ${(p) => p.marginBottom};
      position: ${(p) => p.position};
      overflow-x: ${ ( { isScrollX } ) => (isScrollX) ? 'scroll' : 'hidden'};
      overflow-y: ${ ( { isScrollY } ) => (isScrollY) ? 'scroll' : 'hidden'};
`;

export default Div;