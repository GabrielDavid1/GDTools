//React
import React from "react";

//Types
import { Config } from "../../../../types/Funcs";
interface Props {
  config: Config;
}

//Svg Icons
import Books from "/assets/svg/books.svg";
import Car from "/assets/svg/car.svg";
import Circle from "/assets/svg/newCircle.svg";
import Delete from "/assets/svg/delete.svg";
import Gear from "/assets/svg/gear.svg";
import Graph from "/assets/svg/graph.svg";
import Home from "/assets/svg/home.svg";
import Map from "/assets/svg/map.svg";
import NewDown from "/assets/svg/newDown.svg";
import NewPage from "/assets/svg/newpage.svg";
import Papers from "/assets/svg/papers.svg";
import Profile from "/assets/svg/profile.svg";

export default function SvgView({ config }: Props) {
  const GetSvgIcon = (type: string | undefined) => {
      switch (type) {
        case "books":
          return (
            <Books
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "car":
          return (
            <Car
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "circle":
          return (
            <Circle
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "delete":
          return (
            <Delete
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "gear":
          return (
            <Gear
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "graph":
          return (
            <Graph
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "home":
          return (
            <Home
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "map":
          return (
            <Map
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "newDown":
          return (
            <NewDown
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "newpage":
          return (
            <NewPage
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "papers":
          return (
            <Papers
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        case "profile":
          return (
            <Profile
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          );
        default:
        return (
          <div className="field-tab">
            <Circle
              width={config?.width}
              height={config?.height}
              fill={config?.bgColor}
            />
          </div>
        );
      }
  };
  return GetSvgIcon(config?.svgName);
}
