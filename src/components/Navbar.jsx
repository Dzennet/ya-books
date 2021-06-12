import React, { useState, useEffect } from "react";
import logo from "../common/img/navbar/logo.svg";
import useDebounce from "../hooks/useDebounce";

function Navbar(props) {
  const [inputBookTitle, setInputBookTitle] = useState("");
  const debouncedSearchTitle = useDebounce(inputBookTitle, 1000);

  useEffect(() => {
    if (debouncedSearchTitle) {
      props.toggleIsLoading(true);
      props
        .getBooksByTitle(inputBookTitle)
        .then(() => props.toggleIsLoading(false));
    }
  }, [debouncedSearchTitle]);

  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_wrapper_left">
          <div className="navbar_wrapper_left-logo">
            <div className="navbar_wrapper_left-logo_img">
              <img src={logo} alt="Я" />
            </div>
            <div className="navbar_wrapper_left-logo_brand">
              <span>Книги</span>
            </div>
          </div>
        </div>
        <div className="navbar_wrapper_right">
          <input
            type="text"
            className="navbar_wrapper_right-search"
            value={inputBookTitle}
            onChange={(e) => {
              setInputBookTitle(e.target.value);
            }}
            placeholder="Введите название книги..."
          />
          <button
            className="navbar_wrapper_right-search_btn"
            onClick={() => {
              props.getBooksByTitle(inputBookTitle);
            }}
          >
            Найти
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
