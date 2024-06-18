import './Field.css';

const Field = ({
  type = 'text',
  label,
  value,
  onValueChange,
  required,
  placeholder
}) => {
  const onInputChange = e => {
    onValueChange(e.target.value);
  }

  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onInputChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Field;