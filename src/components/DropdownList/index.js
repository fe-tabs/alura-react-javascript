import './DropdownList.css';

const DropdownList = ({
  label,
  value,
  onValueChange,
  required,
  options
}) => {
  const onSelectChange = e => {
    onValueChange(e.target.value);
  }

  return (
    <div className='dropdown-list'>
      <label>{label}</label>
      <select 
        required={required}
        value={value}
        onChange={onSelectChange}
      >
        {options.map(option => {
          return (
            <option 
              key={option.id} 
              value={option.value}
            >
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownList;