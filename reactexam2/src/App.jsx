import { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const defaultContacts = [
    { id: 1, name: "Ali", email: "ali@gmail.com", phone: "1234567890" },
    { id: 2, name: "Sara", email: "sara@gmail.com", phone: "9876543210" },
  ];

 
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editId, setEditId] = useState(null);

  
  useEffect(() => {
    setContacts(defaultContacts);
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    if (editId) {
      const updated = contacts.map((c) =>
        c.id === editId ? { ...c, ...form } : c
      );
      setContacts(updated);
      setEditId(null);
    } else {
      const newContact = { ...form, id: Date.now() };
      setContacts([...contacts, newContact]);
    }

    setForm({ name: "", email: "", phone: "" });
  };

  
  const handleEdit = (contact) => {
    setForm(contact);
    setEditId(contact.id);
  };

  
  const handleDelete = (id) => {
    const filtered = contacts.filter((c) => c.id !== id);
    setContacts(filtered);
  };

  return (
    <div className="App-container">
      <div className="style">
        <h2>📇 Contact Manager</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
          <input name="email" placeholder="Email"  value={form.email}  onChange={handleChange}  />
          <input  name="phone"  placeholder="Phone"  value={form.phone}  onChange={handleChange}/>
          <button type="submit">{editId ? "Update" : "Add"}</button>
        </form>

        <ul>
          {contacts.map((c) => (
            <li key={c.id}>
              <strong>{c.name}</strong> - {c.email} - {c.phone}
              <button onClick={() => handleEdit(c)}>Edit</button>
              <button onClick={() => handleDelete(c.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
