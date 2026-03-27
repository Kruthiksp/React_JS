import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import Article from "./Article";
import Aside from "./Aside";
import Footer from "./Footer";
import PropsComponent from "./PropsComponent";
import StateComponent from "./StateComponent";

function App() {
  /*
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ display: "flex" }}>
        <div>
          <Section />
          <Article />
        </div>
        <div>
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  );
*/
  /*
  const hobbies = ["Playing", "Dancing", "Singing"];
  function clickHandler() {
     alert("Learning Props Very Nicely Keep it up");
  }
  return (
    <>
      <PropsComponent hobbies={hobbies} />
      <PropsComponent name="Kruthik" age={25} hobbies={hobbies} />
      <PropsComponent hobbies={hobbies} />
      <PropsComponent lable="Click Me" handleClick={clickHandler}/>
    </>
  );
*/
  return (
    <>
      <StateComponent />
    </>
  );
}

export default App;
