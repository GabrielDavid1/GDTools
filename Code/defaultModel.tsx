export default function defaultModel() {
  const Imports = `
    import React from 'react';

    import { 
      Container, 
    } from './styles';
  `;

  const render = `
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
  return Imports;
}