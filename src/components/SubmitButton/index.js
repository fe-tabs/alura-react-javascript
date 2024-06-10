import './SubmitButton.css';

const SubmitButton = ({
  children
}) => {
  return (
    <button className='button'>
      {children}
    </button>
  );
}

export default SubmitButton;