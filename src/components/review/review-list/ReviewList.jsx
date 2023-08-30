import "./ReviewList.scss";
import ReviewItem from "./ReviewItem";
import { useQuery } from "react-query";
import { getReviews } from "../../../api/review";

const ReviewList = () => {
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  console.log("[DEBUG] Review list error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>errors...</div>;

  return (
    <ul className="review-list">
      {data.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </ul>
  );
};

export { ReviewList };
