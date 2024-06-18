import { AiFillCloseCircle } from 'react-icons/ai';

import './Member.css';

const Member = ({
  id,
  name,
  role,
  image,
  backgroundColor,
  onRemoveMember
}) => {
  return (
    <div className="member">
      <AiFillCloseCircle 
        size={24}
        className='delete' 
        onClick={() => onRemoveMember(id)}
      />
      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name}/>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

export default Member;