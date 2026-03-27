import { useRef } from "react";

function UnControlledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name: ", nameRef.current.value);
    console.log("Email: ", emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Uncontrolled Form</h1>

      <label>Name: </label>
      <input type="text" ref={nameRef} name="name"></input>
      <br />
      <br />

      <label>Email: </label>
      <input type="email" ref={emailRef} name="email"></input>
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UnControlledForm;
