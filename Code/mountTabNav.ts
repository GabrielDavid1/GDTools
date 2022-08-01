//Types
import { Funcs } from "../types/Funcs";

//Contexts
import { useCodes } from "../contexts/Codes";

//Code
import defaultModel from "./defaultModel";

export default function mountTabNav(element: Funcs) {
  const { codeTab } = useCodes();

  let codeTabView = defaultModel("tab");
  let codeTabElements = codeTab;

  let sizeToSvg = element?.config?.height;
  const bgColor = element?.config?.bgColor;

  if (sizeToSvg && bgColor) {
    const havePercent = sizeToSvg?.indexOf("%");
    const havePx = sizeToSvg?.indexOf("px");
    const haveRem = sizeToSvg?.indexOf("rem");

    if (havePercent && havePx && haveRem) {
      if (havePercent > -1) sizeToSvg = sizeToSvg?.replace("%", "");
      if (havePx > -1) sizeToSvg = sizeToSvg?.replace("px", "");
      if (haveRem > -1) sizeToSvg = sizeToSvg?.replace("rem", "");
    }

    codeTabView = codeTabView.replace("[bgColor]", "'" + bgColor + "'");
    codeTabView = codeTabView.replace("[height]", sizeToSvg?.toString());

    codeTabElements = codeTabElements.replace("<TabNav>", "");
    codeTabElements = codeTabElements.replace("</TabNav>", "");
    codeTabElements = codeTabElements.replace(/space/gi, "\n");

    codeTabView = codeTabView.replace('[children]', codeTabElements);

    return codeTabView;
  }
}
