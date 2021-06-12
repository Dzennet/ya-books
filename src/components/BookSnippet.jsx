import React from "react";
import emptyBookCover from "../common/img/books/book.png";

function BookSnippet(props) {
  const handlerSelected = () => {
    props.setModal(true);
    props.getSelectedBook(
      props.bookImgId,
      props.title,
      props.author,
      props.publish_date[0],
      props.publisher[0],
      props.ISBN[0]
    );
  };
  return (
    <div className="book" onClick={() => handlerSelected()}>
      <div className="book_img">
        <img
          src={
            props.bookImgId
              ? `http://covers.openlibrary.org/b/id/${props.bookImgId}-M.jpg`
              : emptyBookCover
          }
          alt="..."
        />
      </div>
      <div className="book_info">
        <h3 className="book_info_title">
          {props.title.length > 40
            ? `${props.title.substr(0, 40)}...`
            : props.title}
        </h3>
        <div className="book_info_author">{props.author}</div>
      </div>
    </div>
  );
}

export default BookSnippet;
