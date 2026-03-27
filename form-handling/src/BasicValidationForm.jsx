import { useState } from "react";

function BasicValidationForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Please fill all fields.");
    } else {
      setError("");
      console.log(form);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Basic Validation Form</h1>

      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></input>
      <br />
      <br />

      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <br />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicValidationForm;
