const FormGroup = ({
  inputType,
  id,
  placeholder,
  labelText,
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={inputType}
        className="form-control"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormGroup;
