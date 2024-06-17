import './TextField.css';

const TextField = ({
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
    <div className="text-field">
      <label>{label}</label>
      <input
        value={value}
        onChange={onInputChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;