import "./ReviewItem.scss";
import { Tag } from "../../ui";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right-solid.svg";

const ReviewItem = ({ review }) => {
  return (
    <li className="review-item">
      <h2 className="review-item-title">
        <span className="review-item-status">답변진행 중</span>
        <a href={"/detail/" + review.id}>{review.title}</a>
      </h2>
      <h3 className="review-item-comment">
        <ArrowRight />
        이렇게 해보시는 것은 어떨까요?
      </h3>
      <div className="review-item-tags">
        {review.tags?.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </div>
    </li>
  );
};

export default ReviewItem;
