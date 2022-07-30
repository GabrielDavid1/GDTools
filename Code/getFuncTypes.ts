//types
import { Funcs } from "../types/Funcs";

export default function getFuncTypes(element: Funcs, param: string) {
  const name = element.name+'';
  const ElementName = name.at(0)?.toUpperCase()+name.substring(1).replace(/ /g, "");

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
        return `<${ElementName} placeholder="${element?.config?.textContent}" autoCorrect={false} autoCapitalize="none" onChangeText={text => set${ElementName}(text)}/>space`;
      case "image":
        return `<${ElementName} source={./assets/${element?.config?.sourceImage}} />space`;
      case "svg":
        return `<${ElementName} name="${element?.config?.svgName}" size={${sizeToSvg}} color="${element?.config?.bgColor}" />space`;
      case "div":
        return `</${ElementName}>`;
      case "text":
        return `</${ElementName}>`;
      default:
        return `space</${ElementName}>`;
      }
  }

  switch (element.type) {
    case "input":
      return `<${ElementName} placeholder="${element?.config?.textContent}" autoCorrect={false} autoCapitalize="none" onChangeText={text => set${ElementName}(text)}/>space`;
    case "text":
      return `space<${ElementName}>${element?.config?.textContent}</${ElementName}>`;
    case "image":
      return `space<${ElementName} source={./assets/${element?.config?.sourceImage}} />`;
    case "svg":
      return `space<${ElementName} name="${element?.config?.svgName}" size={${sizeToSvg}} color="${element?.config?.bgColor}" />`;
    case "button":
      return `space<${ElementName} onPress={() => console.log("${element?.config?.textContent}")}>${element?.config?.textContent}</${ElementName}>`;
    case "div": 
      return `space<${ElementName}>[children]</${element.name}>`;
    default:
      return `<${ElementName}>[children]space</${element.name}>`;
  }
}
