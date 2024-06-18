import hexToRgba from 'hex-to-rgba';
import Member from '../Member';
import './Group.css';

const Group = ({
  id,
  name,
  color,
  groupMembers,
  onRemoveMember,
  onStarMember,
  changeGroupColor
}) => {
  return (
    groupMembers.length > 0 && <section 
      className='group'
      style={{ backgroundColor: hexToRgba(color, .25) }}
    >
      <input
        type='color'
        className='primary-color'
        style={{
          backgroundColor: `${color}`,
          border: `${color} solid 8px`
        }}
        value={color}
        onChange={(e) => changeGroupColor(id, e.target.value)}
      />
      <h3 style={{ borderBottomColor: color }}>{name}</h3>
      <div className='members'>
        {groupMembers.map(member => {
          return (
            <Member
              id={member.id}
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              starred={member.starred}
              backgroundColor={color}
              onRemoveMember={onRemoveMember}
              onStarMember={onStarMember}
            />
          );
        })}
      </div>
    </section >
  );
}

export default Group;