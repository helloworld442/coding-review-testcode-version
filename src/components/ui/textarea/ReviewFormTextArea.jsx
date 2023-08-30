import TextArea from "./TextArea";

const ReviewFormTextArea = ({ label, value, error, onInput, placeholder }) => {
  return (
    <TextArea label={label}>
      <TextArea.Value value={value} onChange={onInput} placeholder={placeholder} />
      <TextArea.Error error={error} />
    </TextArea>
  );
};

export { ReviewFormTextArea };
