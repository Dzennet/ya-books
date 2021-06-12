import React from "react";
import { connect } from "react-redux";
import { getSelectedBook } from "../redux/main/mainActionCreators";
import emptyBookCover from "../common/img/books/book.png";

function BookModal({ selectedBook, visible, setModal }) {
  if (!visible) return null;
  return (
    <div className="book_modal">
      <div className="book_modal_inner">
        <div className="book_modal_header">
          <span
            className="book_modal_header_close"
            onClick={() => {
              setModal(false);
            }}
          >
            &times;
          </span>
        </div>
        <div className="book_modal_content">
          <div className="book_modal_img">
            <img
              src={
                selectedBook.imgCover
                  ? `http://covers.openlibrary.org/b/id/${selectedBook.imgCover}-M.jpg`
                  : emptyBookCover
              }
              alt="..."
            />
          </div>
          <div className="book_modal_info">
            <h3 className="book_modal_info_title info_item">
              {selectedBook.title}
            </h3>
            <div className="book_modal_info_author info_item">
              {selectedBook.author}
            </div>
            <div className="book_modal_info_publisher info_item">
              <i>Издатель:</i> {selectedBook.publisher}
            </div>
            <div className="book_modal_info_publish-date info_item">
              <i>Дата публикации:</i> {selectedBook.publish_date}
            </div>
            <div className="book_modal_info_ISBN info_item">
              <i>ISBN:</i> {selectedBook.ISBN}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { getSelectedBook })(BookModal);
