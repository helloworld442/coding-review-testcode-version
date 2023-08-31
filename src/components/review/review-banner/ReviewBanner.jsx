import "./ReviewBanner.scss";
import { Tag } from "../../ui";
import { useQuery } from "react-query";
import { getReviews } from "../../../api/review";
import { Link } from "react-router-dom";

const ReviewBanner = () => {
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews);

  console.log("[DEBUG] Review banner error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>errors...</div>;

  return (
    <div data-testid="review-banner" className="review-banner">
      <h1 className="review-banner-title">최신에 들어온 글이에요!</h1>
      <ul className="review-banner-menu">
        {data.slice(0, 3).map((item) => (
          <li data-testid="review-banner-item" className="review-banner-item" key={item.id}>
            <h3 className="banner-item-title">
              <span className="banner-item-status">답변진행 중</span>
              <Link to={"/detail/" + item.id}>{item.title}</Link>
            </h3>
            <div className="banner-item-tags">
              {item.tags.map((tag, i) => (
                <Tag key={i} title={tag} />
              ))}
            </div>
            <div className="banner-item-content">
              <h2 className="banner-item-problem">
                <span>문제상황</span>
                {item.problem}
              </h2>
              <h2 className="banner-item-question">
                <span>궁금한 점</span>
                {item.question}
              </h2>
            </div>
            <div className="banner-item-info">
              <h6>
                답변 <span>0</span>
              </h6>
              <h6>
                추천 <span>1</span>
              </h6>
              <h6>
                조회 <span>2</span>
              </h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ReviewBanner };
