import {
  ReviewBanner,
  ReviewList,
  ReviewListTemplate,
  ReviewRank,
  ReviewTag,
  ReviewTemplate,
} from "../components/review";
import { Header, Layout } from "../components/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground="true" />
      <ReviewTemplate>
        <ReviewBanner />
        <ReviewListTemplate>
          <ReviewRank />
          <ReviewList />
          <ReviewTag />
        </ReviewListTemplate>
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;
