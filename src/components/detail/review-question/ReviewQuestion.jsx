import "./ReviewQuestion.scss";
import { Tag } from "../../ui";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";

const ReviewQuestion = ({ data }) => {
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
          <Highlight className="question-content-code javascript">{data.code}</Highlight>
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
