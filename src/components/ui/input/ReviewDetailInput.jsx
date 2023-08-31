import Input from "./Input";

const ReviewDetailInput = ({ label, value, error, onInput, placeholder, isEssential }) => {
  return (
    <Input label={label} isEssential={isEssential}>
      <Input.Content>
        <Input.Value value={value} onChange={onInput} placeholder={placeholder} />
      </Input.Content>
      <Input.Error error={error} />
    </Input>
  );
};

export { ReviewDetailInput };
