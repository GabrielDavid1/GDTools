//React
import React from "react";

//Use Copy library
import useCopy from "use-copy";

interface Props {
    codeView: string;
}

export default function StyleCode({ codeView }: Props) {
  const [copied, copy, setCopied] = useCopy(codeView);

  function handleClick () {
    copy();
    setTimeout(() => {
        setCopied(false);
    }, 3000);
  }

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
