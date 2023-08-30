import { ReviewBanner, ReviewTemplate } from "../components/review";
import { Header, Layout } from "../components/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground="true" />
      <ReviewTemplate>
        <ReviewBanner />
      </ReviewTemplate>
    </Layout>
  );
};

export default Home;
