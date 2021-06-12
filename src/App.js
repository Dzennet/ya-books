import React from "react";
import BooksContainer from "./containers/BooksContainer";
import NavbarContainer from "./containers/NavbarContainer";

function App() {
  return (
    <>
      <NavbarContainer />
      <div className="app-container">
        <BooksContainer />
      </div>
    </>
  );
}

export default App;
