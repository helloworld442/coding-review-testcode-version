import "./ReviewDetail.scss";
import { ReviewQuestion } from "../review-question/ReviewQuestion";
import { ReviewAnswer } from "../review-answer/ReviewAnswer";
import { ReviewLikes } from "../review-likes/ReviewLikes";
import { useQuery } from "react-query";
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
      <ReviewQuestion data={data} />
      <ReviewAnswer data={data} />
      <ReviewLikes data={data} />
    </div>
  );
};

export { ReviewDetail };
