//React
import React from "react";

//Components
import Div from "../components/Settings/ModelSetting/Div";
import AppContent from "../components/Settings/ModelSetting/AppContent";
import Input from "../components/Settings/ModelSetting/Input";
import Button from "../components/Settings/ModelSetting/Button";
import Text from "../components/Settings/ModelSetting/Text";
import Image from "../components/Settings/ModelSetting/Image";
import Svg from "../components/Settings/ModelSetting/Svg";

export default function GetSection(type: string | undefined) {
  switch (type) {
    case "div":
      return <Div title="Div" />;
    case "input":
      return <Input title="Input" />;
    case "button":
      return <Button title="Button" />;
    case "text":
      return <Text title="Text" />;
    case "scrollList":
      return <Div title="ScrollList" />;
    case "image":
      return <Image title="Image" />;
    case "svg":
      return <Svg title="Svg" />;
    default:
      return <AppContent title={type !== undefined ? type : ""} />;
  }
}
