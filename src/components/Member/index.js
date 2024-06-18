import { AiFillCloseCircle } from 'react-icons/ai';
import { FaRegStar, FaStar } from 'react-icons/fa';

import './Member.css';

const Member = ({
  id,
  name,
  role,
  image,
  starred,
  backgroundColor,
  onRemoveMember,
  onStarMember
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
        <div className='star' onClick={() => onStarMember(id)}>
          {starred ? <FaStar size={24} color='#ffd500'/> : <FaRegStar size={24}/>}
        </div>
      </div>
    </div>
  );
}

export default Member;