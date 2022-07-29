//types
import { Config } from "../types/Funcs";

//Components
import getElementSettings from "./getElementSettings";
import getTypesSettings from "./getTypesSettings";

export default function mountStyle(element: Config) {
  const start = "export const Container = styled.View`";
  let acc = "";
  for (const column in element) {
    if (column !== "isScrollX" && column !== "isScrollY")
        acc += `${"\n"}${getTypesSettings(column)}:${getElementSettings(
          column,
          element
        )};`;
  }
  const end = "`;";
  return start + acc + end;
}
