//React
import React from "react";

//Utils
import Elements from "../../utils/Elements";

//Contexts
import { useFuncs } from "../../contexts/Functionalities";

//Svg Icons
import Github from "/assets/svg/github.svg";
import Linkedin from "/assets/svg/linkedin.svg";
import Whatsapp from "/assets/svg/whatsapp.svg";

export default function Side() {
  const { selected, addNode } = useFuncs();
  return (
    <section className="side-area">
      {Elements.map(({ name, type, config }, index) => {
        return (
          <a
            key={index}
            className="block"
            onClick={() => {
              if (
                selected.type === "header" ||
                selected.type === "main" ||
                selected.type === "div"
              ) {
                addNode(name, type, config);
              } else if (selected.type === "scrollList" && selected.children) {
                (selected.children.length === 0 && type === "div") && addNode(name, type, config);
              } else if (selected.type === "tab" && selected.children) {
                (type === "svg") && addNode(name, type, config);
              }
            }}
          >
            {name}
          </a>
        );
      })}
      <div className="information"> 
        <div> <a href="https://github.com/GabrielDavid1/GDTools" rel="noreferrer" target="_blank"><Github width={15} /></a> </div>
        <div> <a href="https://www.linkedin.com/in/gabrieldavidsilva/" rel="noreferrer" target="_blank"><Linkedin fill="#fff" width={15} /></a> </div>
        <div> <a href="https://wa.me/554898479145" rel="noreferrer" target="_blank"><Whatsapp width={15} /></a> </div>
      </div>
    </section>
  );
}
