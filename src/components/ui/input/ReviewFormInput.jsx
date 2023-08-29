import Input from "./Input";

const ReviewFormInput = ({ label, code, error, onInput, onKeyDown, placeholder }) => {
  return (
    <Input label={label}>
      <Input.Content>
        <Input.Code code={code} />
        <Input.Value onChange={onInput} onKeyDown={onKeyDown} placeholder={placeholder} />
      </Input.Content>
      <Input.Error error={error} />
    </Input>
  );
};

export { ReviewFormInput };
