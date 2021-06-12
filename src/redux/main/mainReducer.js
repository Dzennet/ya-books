import {
  GET_BOOKS,
  GET_SELECTED_BOOK,
  TOGGLE_IS_LOADING,
} from "./mainConstants";

let initialState = {
  isLoading: false,
  books: [],
  selectedBook: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.books,
      };
    case GET_SELECTED_BOOK:
      return {
        ...state,
        selectedBook: [
          {
            imgCover: action.imgCover,
            title: action.title,
            author: action.author,
            publish_date: action.publish_date,
            publisher: action.publisher,
            ISBN: action.ISBN,
          },
        ],
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default mainReducer;
