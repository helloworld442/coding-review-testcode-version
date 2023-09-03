import "./ReviewList.scss";
import ReviewItem from "./ReviewItem";
import { ReviewCategory } from "../review-category/ReviewCategory";
import { ReviewSearch } from "../review-search/ReviewSearch";
import { Pagnation } from "../../ui";
import { ReactComponent as ListView } from "../../../assets/list-solid.svg";
import { ReactComponent as GridView } from "../../../assets/grid-20.svg";
import { useQuery } from "react-query";
import { getReviews } from "../../../api/review";
import { useState } from "react";
import classNames from "classnames";

const ReviewList = () => {
  const [listView, setListView] = useState("grid");
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });

  console.log("[DEBUG] Review list error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>errors...</div>;

  return (
    <div className="review-list-container">
      <ReviewCategory />
      <ReviewSearch />

      <div className="review-list-view">
        <GridView
          onClick={() => setListView("grid")}
          className={classNames({ active: listView === "grid" })}
        />
        <ListView
          onClick={() => setListView("list")}
          className={classNames({ active: listView === "list" })}
        />
      </div>

      <ul className={classNames("review-list", { list: listView === "list" })}>
        {data.map((item) => (
          <ReviewItem key={item.id} review={item} listView={listView} />
        ))}
      </ul>

      <Pagnation totalPages={data.length} itemPerPages={6} />
    </div>
  );
};

export { ReviewList };
