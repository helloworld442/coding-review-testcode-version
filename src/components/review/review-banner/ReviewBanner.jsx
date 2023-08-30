import { Tag } from "../../ui";
import "./ReviewBanner.scss";

const ReviewBanner = () => {
  return (
    <div data-testid="review-banner" className="review-banner">
      <ul className="review-banner-menu">
        <li className="review-banner-item">
          <h3 className="banner-item-title">
            <span className="banner-item-status">답변진행 중</span>리엑트 재밌다
          </h3>
          <div className="banner-item-tags">
            <Tag title="#리엑트" />
            <Tag title="#재밌다" />
          </div>
          <div className="banner-item-content">
            <h2 className="banner-item-problem">
              <span>문제상황</span>
              리엑트에서 이런 점들이 어렵습니다 예를 들어 리엑트에서
            </h2>
            <h2 className="banner-item-question">
              <span>궁금한 점</span>
              리엑트에서 제가 이런 방식으로 해보았는데 잘 안됩니다. 어떻게 해결해야 할까요?
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
      </ul>
    </div>
  );
};

export { ReviewBanner };
