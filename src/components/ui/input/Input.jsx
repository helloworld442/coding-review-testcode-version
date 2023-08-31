import "./Input.scss";

const Input = ({ children, label, isEssential }) => {
  return (
    <div className="input">
      <label className="input-label">
        {label} {isEssential && <span>*</span>}
      </label>
      {children}
    </div>
  );
};

const InputContent = ({ children }) => {
  return <div className="input-content">{children}</div>;
};

const InputCode = ({ code }) => {
  return <pre dangerouslySetInnerHTML={{ __html: code }} />;
};

const InputValue = ({ ...rest }) => {
  return <input {...rest} spellCheck="false" autoComplete="false" />;
};

const InputError = ({ error }) => {
  return <span className="input-error">{error}</span>;
};

Input.Content = InputContent;
Input.Code = InputCode;
Input.Value = InputValue;
Input.Error = InputError;

export default Input;
