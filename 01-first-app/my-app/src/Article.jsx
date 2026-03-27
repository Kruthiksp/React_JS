import "./Article.css";

let Article = () => {
  //   let flag = Math.floor(Math.random() * 10) % 2 === 0;
  let flag = false;

  const fruits = ["Apple", "Banana", "Cherry"];
  const user = {
    firstName: "Kruthik",
    lastName: "SP",
    age: 25,
  };

  let output;

  if (flag) {
    output = (
      <div id="article">
        <div>
          <h4>Fuilts List</h4>
          <ul>
            {fruits.map((fruit, idx) => (
              <li>
                {idx} - {fruit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    output = (
      <div id="article">
        <div>
          <h4>User Info</h4>
          <p>First Name : {user.firstName}</p>
          <p>Last Name : {user.lastName}</p>
          <p>Age : {user.age}</p>
        </div>
      </div>
    );
  }
  return output;

  //   return (
  //     <div id="article">
  //       <div>
  //           <h4>Fuilts List</h4>
  //         <ul>
  //           {fruits.map((fruit, idx) => (
  //             <li>
  //               {idx} - {fruit}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div>
  //           <h4>User Info</h4>
  //           <p>First Name : {user.firstName}</p>
  //           <p>Last Name : {user.lastName}</p>
  //           <p>Age : {user.age}</p>
  //      </div>
  //     </div>
  //   );
};

export default Article;
