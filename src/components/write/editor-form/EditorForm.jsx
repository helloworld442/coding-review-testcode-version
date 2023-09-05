import { useEffect, useRef, useState } from "react";
import "./EditorForm.scss";

const EditorForm = ({ onCode }) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const textareaRef = useRef(null);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onKeyDownValue = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      const tabSpaces = "   ";
      e.target.value = val.substring(0, start) + tabSpaces + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + tabSpaces.length;
      setValue(e.target.value);
    }
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
    <div className="editor-form">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChangeValue}
        onKeyDown={onKeyDownValue}
        spellCheck="false"
      ></textarea>
    </div>
  );
};

export { EditorForm };
