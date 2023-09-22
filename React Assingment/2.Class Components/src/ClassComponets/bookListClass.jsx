import React, { Component } from "react";
import { booksData } from "./Bookdata";
import { Book } from "./BookDetails";
import { BookDetailsPureComp } from "./BookDetailsAsPureComponent";

//Convert the BookList component to a class component:
export class BookListClass extends Component {
  render() {
    const books = booksData;
    return (
      <div>
        <h1>Book List From Class Componet</h1>
        <ul>
          {/* //Books Details Using Pure Componate */}
          {books.map((book, index) => (<BookDetailsPureComp bookObj={book} key={index} />))}

          {/* //Books Details Using Normal Componate */}
          {books.map((book, index) => (<Book bookObj={book} key={index} />))}
        </ul>
      </div>
    );
  }
}
