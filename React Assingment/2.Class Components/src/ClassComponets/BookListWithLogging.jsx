import React, { Component } from "react";
import { booksData } from "./Bookdata";
import { Book } from "./BookDetails";
import { WithLogging } from "./WithLogging";

//Convert the BookList component to a class component:
class BookListWithLogging extends Component {
  render() {
    const books = booksData;
    return (
      <div>
        <h1>Book List From Class Componet</h1>
        <ul>
          {books.map((book, index) => (
            <Book bookObj={book} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

let Withloging = WithLogging(BookListWithLogging);

export { Withloging };
