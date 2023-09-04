import "./ReviewQuestion.scss";
import { Tag } from "../../ui";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { useEffect } from "react";

const ReviewQuestion = ({ data }) => {
  const onDbClickCode = (e) => {
    const selectedText = window.getSelection().toString();
    const codeRegex = new RegExp(`\\b${selectedText}\\b`, "g");

    // 이전에 하이라이팅된 요소들을 찾아 제거
    const codeBlocks = document.querySelectorAll(".highlight");
    codeBlocks.forEach((block) => {
      block.outerHTML = block.innerHTML;
    });

    // 새로운 하이라이팅을 추가
    const newCode = e.target.innerHTML.replace(
      codeRegex,
      `<span class="highlight">${selectedText}</span>`
    );

    e.target.innerHTML = newCode;
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="review-detail-question">
      <h1 className="detail-question-title">
        <span>Q.</span>
        {data.title}
      </h1>
      <div className="detail-question-content">
        <div className="question-content-profile">
          <span></span>
          <h2>김민승</h2>
          <h2>2022.08.02</h2>
        </div>
        <h2 className="question-content-title">
          <span>1</span>코드 리뷰를 위한 코드 영역입니다.
        </h2>
        <div className="question-content-code-container">
          <ul className="question-content-code-number">
            {data.code.split("\n").map((_, i) => (
              <li key={i}> {i + 1}</li>
            ))}
          </ul>
          <pre className="question-content-code javascript">
            <code onDoubleClick={onDbClickCode}>{data.code}</code>
          </pre>
        </div>
        <h2 className="question-content-title">
          <span>2</span>코드 리뷰를 위한 정보 영역입니다.
        </h2>
        <div className="question-content-info">
          <h4>문제상황</h4>
          <pre>{data.problem}</pre>
          <h4>궁금한 점</h4>
          <pre>{data.question}</pre>
        </div>
        <div className="question-content-tags">
          {data.tags?.map((tag, i) => (
            <Tag key={i} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ReviewQuestion };
