import * as Modal from "./Modal";

const ReviewHgModal = ({ trigger, content }) => {
  return (
    <Modal.Container>
      <Modal.Trigger trigger={trigger} />
      <Modal.Content content={content} />
    </Modal.Container>
  );
};

export { ReviewHgModal };
