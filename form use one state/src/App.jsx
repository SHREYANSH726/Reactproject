import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    address: '',
    city: '',
    gender: '',
    isMarried: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form:', form);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      phone: '',
      age: '',
      address: '',
      city: '',
      gender: '',
      isMarried: false,
    });
  };

  const fillSampleData = () => {
    setForm({
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
      phone: '9876543210',
      age: '30',
      address: '123 Street, Surat',
      city: 'Surat',
      gender: 'Male',
      isMarried: true,
    });
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input type="text" name="name" value={form.name} onChange={handleChange} />

        <p>Email</p>
        <input type="email" name="email" value={form.email} onChange={handleChange} />

        <p>Password</p>
        <input type="password" name="password" value={form.password} onChange={handleChange} />

        <p>Phone</p>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />

        <p>Age</p>
        <input type="number" name="age" value={form.age} onChange={handleChange} />

        <p>Address</p>
        <textarea name="address" value={form.address} onChange={handleChange} rows="3" />

        <p>City</p>
        <select name="city" value={form.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Baroda">Baroda</option>
          <option value="Bhavnagar">Bhavnagar</option>
        </select>

        <p>Gender</p>
        <input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female

        <p>
          <label>
            <input type="checkbox" name="isMarried" checked={form.isMarried} onChange={handleChange} />
            Is Married
          </label>
        </p>
        <br />
        <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
        <button type="button" onClick={fillSampleData} style={{ marginLeft: '10px' }}>Fill Sample Data</button>
        <br />
        <input type="submit" value="Submit" />
        
      </form>
    </>
  );
}

export default App;