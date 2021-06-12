import React from "react";
import { connect } from "react-redux";
import Books from "../pages/Books";
import { getSelectedBook } from "../redux/main/mainActionCreators";

function BooksContainer(props) {
  return (
    <Books
      books={props.books}
      isLoading={props.isLoading}
      selectedBook={props.selectedBook}
      getSelectedBook={props.getSelectedBook}
    />
  );
}
let mapStateToProps = (state) => ({
  books: state.main.books,
  isLoading: state.main.isLoading,
  selectedBook: state.main.selectedBook[0],
});

export default connect(mapStateToProps, { getSelectedBook })(BooksContainer);
