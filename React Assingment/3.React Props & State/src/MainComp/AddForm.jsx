import React, { useState } from "react";
import "./AddForm.css"

export function AddForm(props) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setBook((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  }

  function submitBook(event) {
    event.preventDefault();
    props.onAdd(book);
    setBook({
      title: "",
      author: "",
      year: ""
    });
    console.log("Book is succesesfully added");
  }

  return (
    <form onSubmit={submitBook}>
      <label htmlFor="title">Title:</label>
      <input name="title" value={book.title} placeholder="Title" onChange={handleChange} />
      <label htmlFor="author">Author:</label>
      <input name="author" value={book.author} placeholder="Author" onChange={handleChange} />
      <label htmlFor="year">Year:</label>
      <input type="number" name="year" value={book.year} placeholder="Year" onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

