import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import {
  getBooksByTitle,
  toggleIsLoading,
} from "../redux/main/mainActionCreators";

function NavbarContainer(props) {
  return (
    <Navbar
      books={props.books}
      getBooksByTitle={props.getBooksByTitle}
      toggleIsLoading={props.toggleIsLoading}
      isLoading={props.isLoading}
    />
  );
}

let mapStateToProps = (state) => ({
  books: state.main.books,
  isLoading: state.main.isLoading,
});

export default connect(mapStateToProps, { getBooksByTitle, toggleIsLoading })(
  NavbarContainer
);
