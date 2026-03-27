let Header = () => {
  // Inline CSS
  const headerStyle = {
    backgroundColor: "lightblue",
    height: "10vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Function:
  function getName(newsPaper) {
    return newsPaper;
  }
  const newsPaper = "Times of India";

  return (
    <>
      <div style={headerStyle}>
         <h1>{/* Header for */} {getName(newsPaper)}</h1>
      </div>
    </>
  );
};

export default Header;
