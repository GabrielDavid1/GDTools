/* Framework Style Component */
import styled from 'styled-components';

interface Props {
  width:string;
  height:string;
}

const ImageArea = styled.img<Props>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default ImageArea;