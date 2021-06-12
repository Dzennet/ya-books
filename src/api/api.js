import * as axios from "axios";

let baseUrl = "http://openlibrary.org/search.json?";

export const BooksAPI = {
  getBooksByTitle(bookTitle) {
    return axios.get(`${baseUrl}title=${bookTitle}`);
  },
};
