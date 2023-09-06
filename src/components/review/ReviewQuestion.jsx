import { styled } from "styled-components";
import { Tag } from "../ui";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { useEffect, useRef } from "react";

const ReviewQuestion = ({ data }) => {
  const codeRef = useRef(null);

  const onMouseUpCode = (e) => {
    const selectedText = window.getSelection().toString();

    if (selectedText) {
      const codeElements = document.querySelectorAll("code");

      codeElements.forEach((codeElement) => {
        const textNodes = findTextNodes(codeElement, selectedText);

        textNodes.forEach((textNode) => {
          const range = document.createRange();
          range.setStart(textNode, textNode.textContent.indexOf(selectedText));
          range.setEnd(textNode, range.startOffset + selectedText.length);

          const span = document.createElement("span");
          span.className = "highlight";
          range.surroundContents(span);
        });
      });
    }
  };

  const findTextNodes = (element, searchText) => {
    const textNodes = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (node.textContent.includes(searchText)) {
        textNodes.push(node);
      }
    }

    return textNodes;
  };

  const onMouseDownCode = (e) => {
    const highlightElements = codeRef.current.querySelectorAll(".highlight");

    highlightElements.forEach((element) => {
      element.outerHTML = element.innerHTML;
    });
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    codeRef.current.addEventListener("mouseup", onMouseUpCode);
    codeRef.current.addEventListener("mousedown", onMouseDownCode);

    return () => {
      codeRef.current.removeEventListener("mouseup", onMouseUpCode);
      codeRef.current.removeEventListener("mousedown", onMouseDownCode);
    };
  }, []);

  return (
    <StReviewQuestion>
      <StReviewQuestionTitle>
        <span>Q.</span>
        {data.title}
      </StReviewQuestionTitle>

      <StReviewQuestionContent>
        <ReviewQuestionProfile>
          <span></span>
          <h2>김민승</h2>
          <h2>2022.08.02</h2>
        </ReviewQuestionProfile>

        <ReviewQuestionNumber>
          <span>1</span>코드 리뷰를 위한 코드 영역입니다.
        </ReviewQuestionNumber>

        <ReviewQuestionCode>
          <ul className="question-content-code-number">
            {data.code.split("\n").map((_, i) => (
              <li key={i}> {i + 1}</li>
            ))}
          </ul>
          <pre className="question-content-code javascript">
            <code ref={codeRef}>{data.code}</code>
          </pre>
        </ReviewQuestionCode>

        <ReviewQuestionNumber>
          <span>2</span>코드 리뷰를 위한 정보 영역입니다.
        </ReviewQuestionNumber>

        <ReviewQuestionInfo>
          <h4>문제상황</h4>
          <pre>{data.problem}</pre>
          <h4>궁금한 점</h4>
          <pre>{data.question}</pre>
        </ReviewQuestionInfo>

        <ReviewQuestionTags>
          {data.tags?.map((tag, i) => (
            <Tag key={i} title={tag} />
          ))}
        </ReviewQuestionTags>
      </StReviewQuestionContent>
    </StReviewQuestion>
  );
};

const StReviewQuestion = styled.div`
  width: 100%;
  height: auto;
  padding: 24px 0;
  box-sizing: border-box;
  background: #fff;
`;

const StReviewQuestionTitle = styled.h1`
  width: 900px;
  margin: 0 auto;
  border-bottom: 3px solid #e8e8e8;
  font-size: 2rem;
  font-weight: 400;
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  span {
    font-size: 5rem;
    font-weight: 400;
    color: rgb(64, 58, 107, 0.8);
  }
`;

const StReviewQuestionContent = styled.div`
  width: 900px;
  margin: 24px auto;
`;

const ReviewQuestionProfile = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 72px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  span {
    display: inline-block;
    width: 36px;
    height: 36px;
    border: 5px solid #eee;
    border-radius: 100%;
    background: rgb(64, 58, 107, 1);
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #333;

    &:nth-child(3) {
      color: #888;
    }
  }
`;

const ReviewQuestionNumber = styled.h1`
  margin-bottom: 24px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  span {
    width: 36px;
    height: 36px;
    font-size: 1.4rem;
    font-weight: 400;
    color: #eee;
    border: 5px solid #e8e8e8;
    border-radius: 100%;
    background: #403a6b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ReviewQuestionCode = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: 24px;
  border: none;
  outline: none;
  background: rgb(41, 44, 51);
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: #eee;
  caret-color: red;
  z-index: 0;
  overflow-y: scroll;

  .question-content-code-number {
    position: absolute;
    left: 0;
    width: 5%;
    padding: 1rem 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    font-family: "monospace";
    color: #888;
    background: rgb(41, 44, 51);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    white-space: pre-wrap;
    line-height: 1.5rem;
  }

  .question-content-code {
    position: absolute;
    right: 0;
    width: 95%;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    font-family: monospace;
    color: #eee;
    caret-color: red;
    white-space: pre-wrap;
    line-height: 1.5rem;

    code {
      .highlight {
        color: #333;
        background: #888;
      }
    }
  }
`;

const ReviewQuestionInfo = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(64, 58, 107, 0.8);
  }

  pre {
    font-size: 1.1rem;
    font-weight: 400;
    font-family: "Jua", sans-serif;
    color: #333;
    line-height: 2.5rem;
  }
`;

const ReviewQuestionTags = styled.div`
  display: flex;
  gap: 12px;
`;

export { ReviewQuestion };
