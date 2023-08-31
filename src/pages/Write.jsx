import { ReviewForm, ReviewTemplate } from "../components/review";
import { Footer, Header, Layout } from "../components/ui";

const Write = () => {
  return (
    <Layout>
      <Header isBackground="false" />
      <ReviewTemplate>
        <ReviewForm />
      </ReviewTemplate>
      <Footer />
    </Layout>
  );
};

export default Write;
