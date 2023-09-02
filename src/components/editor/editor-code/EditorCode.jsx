import React from "react";
import "./EditorCode.scss";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";

const EditorCode = ({ code }) => {
  return <Highlight className="editor-code javascript">{code}</Highlight>;
};

export { EditorCode };
