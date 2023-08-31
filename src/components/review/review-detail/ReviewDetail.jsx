import "./ReviewDetail.scss";

const ReviewDetail = () => {
  return (
    <div className="review-detail">
      <div className="review-detail-question">
        <h1 className="detail-question-title">
          <span>Q.</span>
          리엑트가 정말 재밌네요!!!
        </h1>
        <div className="detail-question-content">
          <h2 className="question-content-title">
            <span>1</span>코드 리뷰를 위한 코드 영역입니다.
          </h2>
          <pre className="question-content-code"></pre>
          <h2 className="question-content-title">
            <span>2</span>코드 리뷰를 위한 정보 영역입니다.
          </h2>
          <div className="question-content-info">
            <h4>문제상황</h4>
            <pre>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㅁㄴㄹㅁ</pre>
            <h4>궁금한 점</h4>
            <pre>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㅁㅇㄴㄹ</pre>
          </div>
        </div>
      </div>
      <div className="review-detail-answer">
        <h1 className="detail-answer-title">
          <span>A.</span>
          아직 답변이 없습니다.
        </h1>
      </div>
    </div>
  );
};

export { ReviewDetail };
