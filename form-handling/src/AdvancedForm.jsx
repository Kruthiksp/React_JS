import { useState } from "react";

function AdvancedForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    country: "India",
    agree: false,
  });

  function handleChange(e) {
    // name = name attribute
    // value = current value
    // type = text / radio / checkbox / select
    // checked = true / false
    const { name, type, value, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Advanced Form</h1>

      {/* Name */}
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <br />
      <br />

      {/* Email */}
      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <br />

      {/* Gender */}
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />
      <br />

      {/* Country */}
      <label>
        Country:
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="France">France</option>
        </select>
      </label>
      <br />
      <br />

      <label>
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        I agree to terms and conditions
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default AdvancedForm;
