import {
  ReviewBanner,
  ReviewList,
  ReviewListTemplate,
  ReviewRank,
  ReviewTag,
  ReviewTemplate,
} from "../components/review";
import { Footer, Header, Layout } from "../components/ui";

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
      <Footer />
    </Layout>
  );
};

export default Home;
