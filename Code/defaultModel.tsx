export default function defaultModel(type:string) {
  const ImportsBase = "import React, { useState } from 'react';\nimport { \n[imports]\n} from './styles';";

  const styles = "import styled from 'styled-components/native';"+'\n\n'
                 +"import { TouchableOpacity } from 'react-native';"+'\n\n'
                 +"import { Entypo, Ionicons, Foundation, AntDesign, Foundation, Fontisto, Octicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';"+'\n\n'
                 +"export const Container = styled.View`flex: 1;`;\n export const Header = styled.View`\nwidth:100%\nheight:25%\nbackground-color:'#f8f8f8'\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`\nexport const Main= styled.View`background-color:'#dfdfdf'\nwidth:100%\nheight:100%\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`\nexport const TabNav= styled.View`background-color:'#c4c4c4'\nwidth:100%\nheight:15%\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`;\n";

  const variables = "";

  const render = `\nexport default function GdTools () {
   [variables]
   return (
     <Container>
       [children]
     </Container>
   )
}`;

  const FullCode = `${ImportsBase}\n${render}`;

  switch (type) {
    case "Imports": return ImportsBase;
    case "render": return render;
    case "variables": return variables;
    case "full": return FullCode;
    default: return styles;
  }
}

