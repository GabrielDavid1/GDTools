//React
import React, { useState } from "react";

//Use Copy library
import useCopy from "use-copy";

//Components
import mountTabNav from "../../../../Code/mountTabNav";
import { useFuncs } from "../../../../contexts/Functionalities";

export default function TabCode() {
  const { funcs } = useFuncs();
  const [copied, copy, setCopied] = useCopy('');
  const [codeView, setCodeView] = useState(mountTabNav(funcs[0]));

  function handleClick () {
    copy();
    setTimeout(() => {
        setCopied(false);
    }, 3000);
  }
  mountTabNav(funcs[2]);
  return (
    <div className="codeBody">
      <div className="codeMain">
        <textarea value={codeView} disabled={true}></textarea>
      </div>
      <div className="copy">
        <div className="area" onClick={handleClick}>
          Copy
        </div>
        <div className="message">{copied && <p> Copied!! </p>}</div>
      </div>
    </div>
  );
}
