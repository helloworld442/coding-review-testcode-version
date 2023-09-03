import "./ReviewCategory.scss";
import classNames from "classnames";
import { useState } from "react";

const ReviewCategory = () => {
  const [category, setCategory] = useState(0);

  return (
    <div className="review-category">
      <h2 onClick={() => setCategory(0)} className={classNames({ active: category === 0 })}>
        최신순
      </h2>
      <h2 onClick={() => setCategory(1)} className={classNames({ active: category === 1 })}>
        답변순
      </h2>
      <h2 onClick={() => setCategory(2)} className={classNames({ active: category === 2 })}>
        조회순
      </h2>
    </div>
  );
};

export { ReviewCategory };
