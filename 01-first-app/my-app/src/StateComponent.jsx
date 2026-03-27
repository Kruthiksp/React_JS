import { useState } from "react";

function StateComponent() {
  /*
     // Counter Increment and Decrement
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  );
*/
  /*
  // Toggle text
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is a Secrate Message.</p>}
    </>
  );
*/
  /*
  // Like Button
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? " ❤️ Liked" : " 🤍 Like"}
    </button>
  );
*/
  /*
  // Multiple States
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);

  return (
    <>
      <h1>
        {name} is {age} years Old.
      </h1>
      <button onClick={() => setName("Kruthik")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </>
  );
*/
  /*
  // Passing Object
  const [student, setStudent] = useState({
    name: "Kruthik",
    age: 25,
    city: "Harihar",
  });

  function changeCity() {
     console.log("City Changed");
     setStudent({...student, city : "New City"});
  }

  return (
     <div>
          <h1>Name : {student.name}</h1>
          <h3>Age : {student.age}</h3>
          <h3>City : {student.city}</h3>
          <button onClick={changeCity}>Change City</button>
     </div>
  );
*/

     // input handling
     const [name, setName] = useState("");

     return (<div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          <p>Hello, {name || "Guest"}</p>
     </div>);
}

export default StateComponent;
