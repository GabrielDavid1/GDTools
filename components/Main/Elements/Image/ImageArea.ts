/* Framework Style Component */
import styled from 'styled-components';

//Types
import { Config } from '../../../../types/Funcs';

const ImageArea = styled.img<Config>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: ${(p) => p.marginLeft};
  margin-right: ${(p) => p.marginRight};
  margin-top: ${(p) => p.marginTop};
  margin-bottom: ${(p) => p.marginBottom};
`;

export default ImageArea;