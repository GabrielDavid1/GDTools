/* Framework Style Component */
import styled from 'styled-components';

interface Props {
  width:string;
  height:string;
  maxWidth: string;
  maxHeight: string;
}

const ImageArea = styled.img<Props>`
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
`;

export default ImageArea;