//React
import React from "react";

//Utils
import Elements from "../../utils/Elements";

//Contexts
import { useFuncs } from "../../contexts/Functionalities";

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
                selected.type === "main"   ||
                selected.type === "tab"    ||
                selected.type === "div"
              ) {
                addNode(name, type, config);
              }
            }}
          >
            {name}
          </a>
        );
      })}
    </section>
  );
}
