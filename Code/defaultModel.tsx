export default function defaultModel(type:string) {
  const ImportsBase = "import React, { useState } from 'react';\nimport { FlatList } from 'react-native';\nimport { \n[imports]\n} from './styles';";

  const styles = "import styled from 'styled-components/native';"+'\n\n'
                 +"import { TouchableOpacity } from 'react-native';"+'\n\n'
                 +"import { Entypo, Ionicons, Foundation, AntDesign, Foundation, Fontisto, Octicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';"+'\n\n'
                 +"export const Container = styled.View`flex: 1;`;\n export const Header = styled.View`\nwidth:100%\nheight:25%\nbackground-color:'#f8f8f8'\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`\nexport const Main= styled.View`background-color:'#dfdfdf'\nwidth:100%\nheight:100%\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`\nexport const TabNav= styled.View`background-color:'#c4c4c4'\nwidth:100%\nheight:15%\nflex-direction:row\njustify-content:center\nalign-items:center\ngap:0px\n`;\n";

  const variables = "";

  const render = `\nexport default function GdTools () {
   //variables
   \n
   return (
     <Container>
       [children]
     </Container>
   );
}`;

  const tabNav = `
  import React from 'react';\n
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n
  import { Platform } from 'react-native';\n

  import GdTools from '../screens/Home';\n

  const { Navigator, Screen } = createBottomTabNavigator();\n

  export function AppTabRoutes() {
      return (
          <Navigator 
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#6C0AB9',
              tabBarInactiveTintColor: '#9B9B9B',
              tabBarShowLabel: false,
              tabBarStyle: {
                  paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                  height: [height],
                  backgroundColor: [bgColor],
              }
            }}
          >
          [children]
          </Navigator>
      )
  }
  `;

  const FullCode = `${ImportsBase}\n${render}`;

  switch (type) {
    case "Imports": return ImportsBase;
    case "render": return render;
    case "variables": return variables;
    case "full": return FullCode;
    case "tab": return tabNav;
    default: return styles;
  }
}

