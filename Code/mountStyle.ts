//types
import { Funcs } from "../types/Funcs";

//Components
import getElementSettings from "./getElementSettings";
import getElementType from "./getElementType";
import getTypesSettings from "./getTypesSettings";

export default function mountStyle(element: Funcs) {
  const name = element.name + "";
  const ElementNameUpper = name.at(0)?.toUpperCase() + name.substring(1).replace(/ /g, "");
  
  const start = "export const " + ElementNameUpper + " = styled" + getElementType(element?.type) + "`";

  let acc = "";
  for (const column in element.config) {
    if (
      column !== "isScrollX" &&
      column !== "isScrollY" &&
      column !== "pxBorder" &&
      column !== "typeBorder" &&
      column !== "colorBorder" &&
      column !== "boxShadow"
    )
      acc += `${"\n"}${getTypesSettings(
        column,
        element.type ? element.type : "div"
      )}:${getElementSettings(column, element.config)};`;
  }
  const end = "`;" + "\n";
  return start + acc + end;
}
