//Types
import { Funcs } from "../types/Funcs";

//Components
import getFuncTypes from "./getFuncTypes";
import mountStyle from "./mountStyle";

export default function convertAppContents() {
  const element = [
    {
      id: "0",
      name: "Header",
      type: "header",
      color: "#fab68a",
      isRoot: true,
      config: {
        width: "100%",
        height: "25%",
        bgColor: "#f8f8f8",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        isScrollX: false,
        isScrollY: false,
        gap: "0px",
      },
      children: [],
    },
    {
      id: "1",
      name: "Main",
      type: "main",
      children: [
        {
          id: "3",
          name: "numero 3",
          type: "div",
          color: "#fab68a",
          isRoot: true,
          config: {
            width: "100%",
            height: "25%",
            bgColor: "#f8f8f8",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            isScrollX: false,
            isScrollY: false,
            gap: "0px",
          },
          children: [
            {
                id: "5",
                name: "numero 5",
                type: "div",
                color: "#fab68a",
                isRoot: true,
                config: {
                  width: "100%",
                  height: "25%",
                  bgColor: "#f8f8f8",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  isScrollX: false,
                  isScrollY: false,
                  gap: "0px",
                },
                children: [],
            },
          ],
        },
        {
            id: "4",
            name: "numero 4",
            type: "div",
            color: "#fab68a",
            isRoot: true,
            config: {
              width: "100%",
              height: "25%",
              bgColor: "#f8f8f8",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              isScrollX: false,
              isScrollY: false,
              gap: "0px",
            },
            children: [
                {
                    id: "6",
                    name: "numero 6",
                    type: "div",
                    color: "#fab68a",
                    isRoot: true,
                    config: {
                      width: "100%",
                      height: "25%",
                      bgColor: "#f8f8f8",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      isScrollX: false,
                      isScrollY: false,
                      gap: "0px",
                    },
                    children: [],
                  },
            ],
          },
      ],
      color: "#ff15f1",
      isRoot: true,
      config: {
        bgColor: "#dfdfdf",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        isScrollX: false,
        isScrollY: false,
        gap: "0px",
      },
    },
    {
      id: "2",
      name: "Tab Nav",
      type: "tab",
      children: [],
      color: "#b59de9",
      isRoot: true,
      config: {
        bgColor: "#c4c4c4",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        isScrollX: false,
        isScrollY: false,
        gap: "0px",
      },
    },
  ];


  let resultFunction = '';
  
  function add (element:Funcs, source:Funcs) {
    if (element?.children !== undefined && source?.children !== undefined) {
        
    }
  }

  //return result;
}