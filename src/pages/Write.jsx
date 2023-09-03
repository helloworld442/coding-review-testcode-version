import { ReviewForm } from "../components/write";
import { Footer, Header, Layout, Main } from "../components/ui";

const Write = () => {
  return (
    <Layout>
      <Header isBackground="false" />
      <Main>
        <ReviewForm />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Write;
