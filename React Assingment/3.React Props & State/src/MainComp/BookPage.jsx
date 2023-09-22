import React, { useState } from "react";
import { booksData } from "./Bookdata";
import { Header } from "./Header";
import { AddForm } from "./AddForm";
import { BookComponate } from "./BookComponate";
import "./BookPage.css"

function BookPage() {
  const [books, setBooks] = useState([...booksData]);

  //  console.log(books);
  console.log(books);

  function addBook(newBook) {
    setBooks((prevbooks) => [...prevbooks, newBook]);
  }

  function deleteBooks(id) {
    setBooks((prevNotes) => {
      return prevNotes.filter((bookitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="mainPage">
      <Header />
      <AddForm onAdd={addBook} />
      <div className="Books">
        {books.length>0 ? books.map((bookitem, index) => {
          return (
            <BookComponate
              key={index}
              id={index}
              bookobj={bookitem}
              onDelete={deleteBooks}
            />
          );
        }) : 
        <p>Book list is currently empty.</p>
        }
      </div>
    </div>
  );
}

export default BookPage;
