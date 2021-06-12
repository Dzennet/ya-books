import { BooksAPI } from "../../api/api";
import {
  GET_BOOKS,
  GET_SELECTED_BOOK,
  TOGGLE_IS_LOADING,
} from "./mainConstants";

const getBooks = (books) => ({ type: GET_BOOKS, books });

export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const getSelectedBook = (
  imgCover,
  title,
  author,
  publish_date,
  publisher,
  ISBN
) => ({
  type: GET_SELECTED_BOOK,
  imgCover,
  title,
  author,
  publish_date,
  publisher,
  ISBN,
});

export const getBooksByTitle = (bookTitle) => async (dispatch) => {
  try {
    const response = await BooksAPI.getBooksByTitle(bookTitle);
    dispatch(getBooks(response.data.docs));
  } catch (e) {
    console.error(e);
  }
};
