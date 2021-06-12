import React, { useState } from "react";
import BookSnippet from "../components/BookSnippet";
import loading from "../common/img/books/loading.svg";
import BookModal from "../components/BookModal";

function Books({ books, getSelectedBook, selectedBook, isLoading }) {
  const [isModal, setModal] = useState(false);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={loading} alt="loading..." />
      </div>
    );
  }

  const booksList = books.map((book) => (
    <BookSnippet
      key={book.key}
      title={book.title}
      author={book.author_name}
      bookImgId={book.cover_i}
      publish_date={book.publish_date || '-'}
      publisher={book.publisher || '-'}
      ISBN={book.isbn || '-'}
      setModal={setModal}
      getSelectedBook={getSelectedBook}
      selectedBook={selectedBook}
    />
  ));

  return (
    <div className="books">
      <div className="books_list">{booksList}</div>
      {isModal ? (
        <BookModal
          setModal={setModal}
          visible={isModal}
          selectedBook={selectedBook}
        />
      ) : null}
    </div>
  );
}

export default Books;
