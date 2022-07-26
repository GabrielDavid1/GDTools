//React
import React from "react";

//Types
import { Config } from "../../../../types/Funcs";
interface Props {
  config: Config;
}

export default function SvgView({ config }: Props) {
  const GetSvgIcon = (type: string | undefined) => {
    switch (type) {
      default:
        return (
          <div className="field-tab">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20%"
              viewBox="0 0 120 120"
              enableBackground="new 0 0 120 120"
            >
              <circle cx="60" cy="60.834" r="54.167" />
            </svg>
          </div>
        );
    }
  };
  return GetSvgIcon(config?.type);
}
