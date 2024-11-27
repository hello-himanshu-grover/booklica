import axios from "axios";
import { GLOBALS } from "./config";
import { getWithAuth, postWithAuth } from "./helper";

export const getBookDetailsByISBN = (isbn) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${isbn}`;
  
    return axios.get(url)
      .then(response => {
        const data = response.data;
  
        if (data.totalItems > 0) {
          const book = data.items[0].volumeInfo;
          return {
            title: book.title,
            authors: book.authors,
            publisher: book.publisher,
            publishedDate: book.publishedDate,
            description: book.description,
            pageCount: book.pageCount,
            categories: book.categories,
            averageRating: book.averageRating,
            thumbnail: book.imageLinks?.thumbnail,
          };
        } else {
          throw new Error("No book found with that ISBN.");
        }
      })
      .catch(error => {
        console.error("Error fetching book data:", error.message);
        throw error;
      });
  };

export const addNewBookByName = (bookName) => {
  const url = `${GLOBALS.BASE_URL}/books/`;
    return postWithAuth(url,{name:bookName})
}

export const GetMyBooks = () => {
  const url = `${GLOBALS.BASE_URL}/books/`;
  return getWithAuth(url);
}