import { Button, ReviewDetailInput, ReviewDetailTextArea } from "../../ui";
import "./ReviewAnswer.scss";

const ReviewAnswer = ({ data }) => {
  return (
    <div className="review-detail-answer">
      <h1 className="detail-answer-title">
        <span>A.</span>
        아직 답변이 없습니다.
      </h1>
      <div className="detail-answer-content">
        <form className="answer-content-form">
          <ReviewDetailInput label="제목" placeholder="제목을 입력하세요" isEssential />
          <ReviewDetailTextArea label="내용" placeholder="내용을 입력하세요" isEssential />
          <div className="answer-content-form-button">
            <Button size="medium">취소</Button>
            <Button size="medium" primary type="submit">
              등록
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ReviewAnswer };
