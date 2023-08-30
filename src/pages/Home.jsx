import { ReviewBanner, ReviewRank, ReviewTemplate } from "../components/review";
import { Header, Layout } from "../components/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground="true" />
      <ReviewTemplate>
        <ReviewBanner />
        <ReviewRank />
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;
