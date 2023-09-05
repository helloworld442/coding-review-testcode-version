import React, { useEffect, useRef, useState } from "react";
import "./EditorCode.scss";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import classNames from "classnames";

const EditorCode = ({ code, hgTag, hgTags, onChange, onSubmit }) => {
  const codeRef = useRef(null);
  const [isModal, setIsModal] = useState(false);
  const [tagName, setTagName] = useState("");

  const onHightLightValue = (e) => {
    const selectedText = window.getSelection().toString();

    if (selectedText) {
      const newCode = codeRef.current.innerHTML.replace(
        selectedText,
        `<span class = "hightlight">${selectedText}</span>`
      );

      setTagName(selectedText);
      setIsModal(true);

      codeRef.current.innerHTML = newCode;
    }
  };

  const onClickModal = (e) => {
    e.preventDefault();

    onSubmit(e, tagName);

    setIsModal(false);
  };

  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  useEffect(() => {
    let newCode = codeRef.current.innerHTML;

    hgTags.map(({ name }) => {
      newCode = newCode.replace(name, `<span class = "hightlight">${name}</span>`);
    });

    codeRef.current.innerHTML = newCode;
  }, [code, hgTags]);

  useEffect(() => {
    document.addEventListener("mouseup", onHightLightValue);

    return () => {
      document.removeEventListener("mouseup", onHightLightValue);
    };
  }, [code]);

  return (
    <div className={classNames("editor-code-container", { disabled: isModal })}>
      <ul className="editor-code-number">
        {code.split("\n")?.map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
      <div className="editor-code">
        <pre className="javascript">
          <code ref={codeRef}>{code}</code>
        </pre>
        {isModal && (
          <div className="editor-modal">
            <input type="text" value={hgTag} onChange={onChange} placeholder="댓글을 입력하세요" />
            <span onClick={onClickModal}>추가</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { EditorCode };
