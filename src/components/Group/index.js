import Member from '../Member';
import './Group.css';

const Group = ({
  name,
  primaryColor,
  secondaryColor,
  groupMembers
}) => {
  return (
    groupMembers.length > 0 && <section 
      className='group'
      style={{ backgroundColor: secondaryColor }}
    >
      <h3 style={{ borderBottomColor: primaryColor }}>{name}</h3>
      <div className='members'>
        {groupMembers.map(member => {
          return (
            <Member
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              backgroundColor={primaryColor}
            />
          );
        })}
      </div>
    </section >
  );
}

export default Group;