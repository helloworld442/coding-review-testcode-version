import "./ReviewLikes.scss";
import { ReactComponent as Heart } from "../../../assets/heart-solid.svg";

const ReviewLikes = ({ data }) => {
  return (
    <div className="review-detail-likes">
      <Heart />
      <h4>0</h4>
    </div>
  );
};

export { ReviewLikes };
