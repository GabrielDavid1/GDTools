export default function defaultModel(type:string) {
  const Imports = `
    import React from 'react';

    import { 
      Container, 
    } from './styles';
  `;

  const styles = "import styled from 'styled-components/native';"+'\n'+"export const Container = styled.View`flex: 1;`;\n export const Header = styled.View`\n'width:100%\nheight:25%\nbackground-color:#f8f8f8\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`\nexport const Main= styled.View`background-color:#dfdfdf\nwidth:100%\nheight:100%\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`\nexport const TabNav= styled.View`background-color:#c4c4c4\nwidth:100%\nheight:15%\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`;\n";

  const render = `
    export default function GdTools (){
      return (
        <Container>
          [children]
        </Container>
      )
    }
  `;

  switch (type) {
    case "Imports": return Imports;
    case "render": return render;
    default: return styles;
  }
}