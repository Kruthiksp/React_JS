/*
function PropsComponent(props) {
  return (
    <div>
      <h1>
        Hello - {props.name} - {props.age}
      </h1>
    </div>
  );
}
*/
/*
// Default values
function PropsComponent({ name = "Guest", age = "18+", hobbies = [] }) {
  // name = "Guest";  // -- Not Allowed
  return (
    <div>
      <h1>
        Hello - {name} - {age}
      </h1>
      <ul>
        {hobbies.map((val) => (
          <li>{val}</li>
        ))}
      </ul>
    </div>
  );
}
*/

function PropsComponent({lable, handleClick}) {
     return <button onClick={handleClick}>{lable}</button>
}


export default PropsComponent;
