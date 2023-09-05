import "./EditorCode.scss";
import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import classNames from "classnames";

const EditorCode = ({ code, hash, hashs, onMouseUpHash, onSubmitHash }) => {
  const codeRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  console.log(hash, hashs);

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUpHash);

    return () => document.removeEventListener("mouseup", onMouseUpHash);
  }, [code]);

  return (
    <div className={classNames("editor-code-container", { disabled: hash })}>
      <ul className="editor-code-number">
        {code.split("\n")?.map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
      <div className="editor-code">
        <pre className="javascript">
          <code ref={codeRef}>{code}</code>
        </pre>
        {hash && (
          <div className="editor-modal">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="댓글을 입력하세요"
            />
            <span onClick={() => onSubmitHash(value)}>추가</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { EditorCode };
