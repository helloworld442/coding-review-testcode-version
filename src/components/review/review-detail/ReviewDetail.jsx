import "./ReviewDetail.scss";
import { Button, ReviewDetailInput, ReviewDetailTextArea, Tag } from "../../ui";
import { ReactComponent as Heart } from "../../../assets/heart-solid.svg";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../api/review";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";

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
          <div className="question-content-profile">
            <span></span>
            <h2>김민승</h2>
            <h2>2022.08.02</h2>
          </div>
          <h2 className="question-content-title">
            <span>1</span>코드 리뷰를 위한 코드 영역입니다.
          </h2>
          <Highlight className="question-content-code javascript">{data.code}</Highlight>
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
            {data.tags.map((tag, i) => (
              <Tag key={i} title={tag} />
            ))}
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
      <div className="review-detail-likes">
        <Heart />
        <h4>0</h4>
      </div>
    </div>
  );
};

export { ReviewDetail };
