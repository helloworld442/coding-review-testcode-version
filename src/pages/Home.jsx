import { ReviewBanner, ReviewCenter } from "../components/home";
import { Footer, Header, Layout, Main } from "../components/ui";

const Home = () => {
  return (
    <Layout>
      <Header isBackground="true" />
      <Main>
        <ReviewBanner />
        <ReviewCenter />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
