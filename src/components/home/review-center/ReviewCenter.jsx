import { ReviewRank } from "../review-rank/ReviewRank";
import { ReviewList } from "../review-list/ReviewList";
import "./ReviewCenter.scss";

const ReviewCenter = () => {
  return (
    <div className="review-center">
      <ReviewRank />
      <ReviewList />
    </div>
  );
};

export { ReviewCenter };
