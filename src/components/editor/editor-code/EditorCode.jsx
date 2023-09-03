import React from "react";
import "./EditorCode.scss";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";

const EditorCode = ({ code }) => {
  const codeNumber = [...code.split("\n"), ""];

  return (
    <div className="editor-code-container">
      <ul className="editor-code-number">
        {codeNumber?.map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
      <Highlight className="editor-code javascript">{code}</Highlight>
    </div>
  );
};

export { EditorCode };
