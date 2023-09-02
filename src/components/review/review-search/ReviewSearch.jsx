import "./ReviewSearch.scss";
import { ReactComponent as MagifyIngGlass } from "../../../assets/magnifying-glass-solid.svg";

const ReviewSearch = () => {
  return (
    <form className="review-search">
      <input type="text" placeholder="제목을 입력하세요" />
      <MagifyIngGlass />
    </form>
  );
};

export { ReviewSearch };
