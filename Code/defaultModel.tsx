export default function defaultModel() {
  const index = `
    import React from 'react';

    import { 
      Container, 
    } from './styles';
    
    export default function GdTools (){
      return (
        <Container>
        
        </Container>
      )
    }
  `;

  const styles = `
    import styled from 'styled-components/native';

    export const Container = styled.View`
      flex: 1;
    `;
  `;
  
  return index;
}