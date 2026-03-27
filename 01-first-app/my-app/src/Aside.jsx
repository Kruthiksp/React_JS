import styles from "./Aside.module.css";

let Aside = () => {

     let handleDoubleClick = () => {
          alert("Double Clicked on Lorem Content")
     }
     let handleMouseOver = () => {
          console.log("Mouse hovered on the Paragraph")
     }

     return (
          <div className={styles.aside}>
               {/* <h1>Aside</h1> */}
               <p onMouseOver={handleMouseOver} onDoubleClick = {handleDoubleClick}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem neque earum, officia facere voluptas natus architecto unde repudiandae doloremque harum quae qui quaerat expedita sit minima perferendis dolor ratione aliquam tempora possimus itaque? Est, eum laboriosam nam minima tempore ab dolores provident, velit corrupti rem blanditiis. Consectetur, molestiae facilis.</p>
          </div>
     );
}
export default Aside;