import { ReviewBanner, ReviewCenter, ReviewTemplate } from "../components/review";
import { Footer, Header, Layout } from "../components/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground="true" />
      <ReviewTemplate>
        <ReviewBanner />
        <ReviewCenter />
      </ReviewTemplate>
      <Footer />
    </Layout>
  );
};

export default Home;
