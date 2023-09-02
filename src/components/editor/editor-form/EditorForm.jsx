import { useEffect, useRef, useState } from "react";
import "./EditorForm.scss";

const EditorForm = ({ onCode }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onCode(value);
  }, [value]);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      data-testid="editor-form"
      className="editor-form"
      value={value}
      onChange={onChangeValue}
      autoComplete="false"
      spellCheck="false"
    ></textarea>
  );
};

export { EditorForm };
