import { ReviewForm, ReviewTemplate } from "../components/review";
import { Header, Layout } from "../components/ui";

const Write = () => {
  return (
    <Layout>
      <Header isBackground="false" />
      <ReviewTemplate>
        <ReviewForm />
      </ReviewTemplate>
    </Layout>
  );
};

export default Write;
