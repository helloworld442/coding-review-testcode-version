import React, { useEffect } from "react";
import "./EditorCode.scss";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

const EditorCode = ({ code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  return (
    <div className="editor-code-container">
      <ul className="editor-code-number">
        {code.split("\n")?.map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
      <pre className="editor-code javascript">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export { EditorCode };
