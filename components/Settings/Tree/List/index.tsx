//React
import React from "react";

//Contexts
import { useFuncs } from "../../../../contexts/Functionalities";

//Types
import { Funcs } from "../../../../types/Funcs";

interface Props {
  nodes: Funcs;
  inputName: string;
  children?: React.ReactNode;
}

export default function ElementList({ nodes, inputName, children }: Props) {
  const { 
    editNode, 
    deleteNode, 
    setSelected,
  } = useFuncs();

  const lengthNode = nodes?.children?.length;
  
  return (
    <div className="element-list">
      <div
        className="content"
        onClick={(e) => {
          if(e.detail === 1) {
            setSelected(nodes!!);
          }
        }}
      >
        {nodes.children !== undefined && nodes.children.length > 0 ? (
          <svg
            width="512px"
            height="512px"
            fill={nodes.color}
            viewBox="-62 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>i-down</title>
            <path d="M194 270L290 174 322 206 194 334 66 206 98 174 194 270Z" />
          </svg>
        ) : (
          <svg
            version="1.1"
            id="Layer_1"
            fill={nodes.color}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="12px"
            height="12px"
            viewBox="0 0 120 120"
          >
            <circle cx="60" cy="60.834" r="54.167" />
          </svg>
        )}

        <input
          type="text"
          value={inputName}
          disabled={nodes.isRoot}
          onKeyDown={(e) => e.key === "Enter"}
          onChange={(e) => editNode(nodes, e.target.value)}
        />

        <div className="actions">
          {(!nodes.isRoot && lengthNode === 0) && (
            <a onClick={() => deleteNode(nodes)}>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 18H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2zm3-15a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
