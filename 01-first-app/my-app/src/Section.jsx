import "./Section.css";

let Section = () => {
  // Event Handler
  function clickHandler() {
    alert("Section Button was Clicked");
  }

  return (
    <div id="section">
      {/* <h1>Section</h1> */}
      <button id="btn" onClick={clickHandler}>Click me</button>
    </div>
  );
};
export default Section;
