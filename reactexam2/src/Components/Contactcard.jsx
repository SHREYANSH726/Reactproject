function Contactcard({ name, email, phone, onEdit, onDelete }) {
    return (
      <div className="contact-card">
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
  
  export default Contactcard;