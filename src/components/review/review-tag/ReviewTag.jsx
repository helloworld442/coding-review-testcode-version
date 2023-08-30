import { Tag } from "../../ui";
import "./ReviewTag.scss";

const ReviewTag = () => {
  return (
    <div className="review-tag">
      <h2 className="review-tag-title">인기 태그</h2>
      <ul className="review-tag-menu">
        <li className="review-tag-item">
          <Tag title="#리엑트" />
        </li>
        <li className="review-tag-item">
          <Tag title="#자바스크립트" />
        </li>
        <li className="review-tag-item">
          <Tag title="#리엑트" />
        </li>
        <li className="review-tag-item">
          <Tag title="#리엑트" />
        </li>
        <li className="review-tag-item">
          <Tag title="#리엑트" />
        </li>
      </ul>
    </div>
  );
};

export { ReviewTag };
