import "./ReviewCenter.scss";
import { ReviewList } from "../review-list/ReviewList";
import { ReviewRank } from "../review-rank/ReviewRank";

const ReviewCenter = () => {
  return (
    <div className="review-center">
      <ReviewRank />
      <ReviewList />
    </div>
  );
};

export { ReviewCenter };
