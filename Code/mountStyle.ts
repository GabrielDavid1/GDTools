//types
import { Funcs } from "../types/Funcs";

//Components
import getElementSettings from "./getElementSettings";
import getTypesSettings from "./getTypesSettings";

export default function mountStyle(element: Funcs) {
  const name = element.name+'';
  const ElementName = name.at(0)?.toUpperCase()+name.substring(1).replace(/ /g, "");

  const start = "export const "+ElementName+" = styled.View`";

  let acc = "";
  for (const column in element.config) {
    if (column !== "isScrollX" && column !== "isScrollY")
        acc += `${"\n"}${getTypesSettings(column)}:${getElementSettings(
          column,
          element.config
        )};`;
  }
  const end = "`;"+'\n';
  return start + acc + end;
}
