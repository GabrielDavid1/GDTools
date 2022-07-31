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
        return `space<${ElementNameUpper} name="${element?.config?.svgName}" size={${sizeToSvg}} color="${element?.config?.bgColor}" />`;
      case "div":
        return `</${ElementNameUpper}>`;
      case "text":
        return `</${ElementNameUpper}>`;
      default:
        return `space</${ElementNameUpper}>`;
      }
  }

  switch (element.type) {
    case "input":
      return `<${ElementNameUpper} placeholder="${element?.config?.textContent}" autoCorrect={false} autoCapitalize="none" onChangeText={text => set${ElementNameUpper}(text)}/>`;
    case "text":
      return `space<${ElementNameUpper}>${element?.config?.textContent}</${ElementNameUpper}>`;
    case "image":
      return `space<${ElementNameUpper} source={./assets/${element?.config?.sourceImage}} />`;
    case "svg":
      return `space<${ElementNameUpper} name="${element?.config?.svgName}" size={${sizeToSvg}} color="${element?.config?.bgColor}" />`;
    case "button":
      return `space<${ElementNameUpper} onPress={() => console.log("${element?.config?.textContent}")}>${element?.config?.textContent}</${ElementNameUpper}>`;
    case "div": 
      return `space<${ElementNameUpper}>[children]</${element.name}>`;
    case "scrollList":
      return `space<${ElementNameUpper} data={${ElementNameLower}} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} />`;
    default:
      return `<${ElementNameUpper}>[children]space</${element.name}>`;
  }
}
