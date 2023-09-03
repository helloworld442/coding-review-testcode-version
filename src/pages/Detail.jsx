import { ReviewDetail } from "../components/detail";
import { Footer, Header, Layout, Main } from "../components/ui";

const Detail = () => {
  return (
    <Layout>
      <Header isBackground="false" />
      <Main>
        <ReviewDetail />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Detail;
