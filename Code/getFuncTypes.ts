//types
import { Funcs } from "../types/Funcs";

export default function getFuncTypes(element: Funcs, param: string) {
  const name = element.name+'';

  const ElementNameUpper = name.at(0)?.toUpperCase()+name.substring(1).replace(/ /g, "");
  const ElementNameLower = name.at(0)?.toLowerCase() + name.substring(1).replace(/ /g, "");
  
  let sizeToSvg = element?.config?.width;
  
  //Img/Svg types dimension
  const havePercent = sizeToSvg?.indexOf("%");
  const havePx = sizeToSvg?.indexOf("px");
  const haveRem = sizeToSvg?.indexOf("rem");

  if (havePercent && havePx && haveRem) {
    if (havePercent > -1) sizeToSvg = sizeToSvg?.replace("%", "");
    if (havePx > -1) sizeToSvg = sizeToSvg?.replace("px", "");
    if (haveRem > -1) sizeToSvg = sizeToSvg?.replace("rem", "");
  }

  if (param === "last") {
      switch (element.type) {
      case "input":
        return `space<${ElementNameUpper} placeholder="${element?.config?.textContent}" autoCorrect={false} autoCapitalize="none" onChangeText={text => set${ElementNameUpper}(text)}/>`;
      case "image":
        return `space<${ElementNameUpper} source={./assets/${element?.config?.sourceImage}} />`;
      case "svg":
        return (element.mac !== 'tab') 
                  ? `space<FlatList name="${element?.config?.svgName}" size={${sizeToSvg}} color="${element?.config?.bgColor}" />` 
                  : `space<Screen name="GdTools" component={GdTools} options={{ tabBarIcon: ({ focused, color }) => ( <${ElementNameUpper} name="${element?.config?.svgName}" width={${sizeToSvg}} height={${sizeToSvg}} fill="${element?.config?.bgColor}" /> ) }} />`;
      case "div":
        return `</${ElementNameUpper}>`;
      case "text":
        return `</${ElementNameUpper}>`;
        case "scrollList":
          return `space<FlatList data={${ElementNameLower}} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} />`;
      default:
        return `space</${ElementNameUpper}>`;
      }
  }

  switch (element.type) {
    case "input":
      return `space<${ElementNameUpper} placeholder="${element?.config?.textContent}" autoCorrect={false} autoCapitalize="none" onChangeText={text => set${ElementNameUpper}(text)}/>`;
    case "text":
      return `space<${ElementNameUpper}>${element?.config?.textContent}</${ElementNameUpper}>`;
    case "image":
      return `space<${ElementNameUpper} source={./assets/${element?.config?.sourceImage}} />`;
    case "svg":
      return (element.mac !== 'tab') 
                ? `space<${ElementNameUpper} name="${element?.config?.svgName}" size={${sizeToSvg}} color="${element?.config?.bgColor}" />` 
                : `space<Screen name="GdTools" component={GdTools} options={{ tabBarIcon: ({ focused, color }) => ( <${ElementNameUpper} name="${element?.config?.svgName}" width={${sizeToSvg}} height={${sizeToSvg}} fill="${element?.config?.bgColor}" /> ) }} />`;
    case "button":
      return `space<${ElementNameUpper} onPress={() => console.log("${element?.config?.textContent}")}>${element?.config?.textContent}</${ElementNameUpper}>`;
    case "div": 
      return `space<${ElementNameUpper}>[children]</${ElementNameUpper}>`;
    case "scrollList":
      return `space<FlatList data={${ElementNameLower}} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} />`;
    default:
      return `<${ElementNameUpper}>[children]space</${ElementNameUpper}>`;
  }
}
