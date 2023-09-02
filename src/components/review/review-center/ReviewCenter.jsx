import { ReviewList } from "../review-list/ReviewList";
import { ReviewRank } from "../review-rank/ReviewRank";
import { ReviewTags } from "../review-tags/ReviewTags";
import "./ReviewCenter.scss";

const ReviewCenter = () => {
  return (
    <div className="review-center">
      <ReviewRank />
      <ReviewList />
      <ReviewTags />
    </div>
  );
};

export { ReviewCenter };
