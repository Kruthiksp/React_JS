import { useState } from "react";

function SimpleForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> Simple Form</h1>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <p>{form.name}</p>
      <br />
      <br />

      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <p>{form.email}</p>
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
export default SimpleForm;
