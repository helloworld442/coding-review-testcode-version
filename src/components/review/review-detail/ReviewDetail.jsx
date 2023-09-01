import { useQuery } from "react-query";
import { Button, ReviewDetailInput, ReviewDetailTextArea } from "../../ui";
import "./ReviewDetail.scss";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../api/review";

const ReviewDetail = () => {
  const { postId } = useParams();
  const { isLoading, isError, data, error } = useQuery(["reviews", postId], () =>
    getReviewById(postId)
  );

  console.log("[DEBUG] Review detail error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>error....</div>;

  return (
    <div className="review-detail">
      <div className="review-detail-question">
        <h1 className="detail-question-title">
          <span>Q.</span>
          {data.title}
        </h1>
        <div className="detail-question-content">
          <h2 className="question-content-title">
            <span>1</span>코드 리뷰를 위한 코드 영역입니다.
          </h2>
          <pre className="question-content-code" dangerouslySetInnerHTML={{ __html: data.code }} />
          <h2 className="question-content-title">
            <span>2</span>코드 리뷰를 위한 정보 영역입니다.
          </h2>
          <div className="question-content-info">
            <h4>문제상황</h4>
            <pre>{data.problem}</pre>
            <h4>궁금한 점</h4>
            <pre>{data.question}</pre>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export { ReviewDetail };
