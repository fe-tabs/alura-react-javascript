import './Group.css';

const Group = ({
  name,
  primaryColor,
  secondaryColor
}) => {
  return (
    <section 
      className='group'
      style={{
        backgroundColor: secondaryColor,

      }}
    >
      <h3 style={{ borderBottomColor: primaryColor }}>{name}</h3>

    </section>
  );
}

export default Group;