import React, { useState } from "react";
import useBookSort from "./CoustomHook/useBookSort";
import useBookFilter from "./CoustomHook/useBookFilter";
import "./BookList.css";
import { ThemeProvider, useTheme } from "./SetContex/TheamContex";

export const BookListObj = ({ books }) => {
  const [sortBy, setSortBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, toggleTheme } = useTheme();

  books = useBookSort(books, sortBy);
  books = useBookFilter(books, searchTerm);

  return (
    <div className={`App ${theme}`}>
      <header>
        Theam:
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <header>
        <h2>Book List</h2>
      </header>
      <input
        className={`App ${theme}`}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search book"
      />
      <br />
      <label>
        Sort by:
        <select
          className={`App ${theme}`}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="asc">Low to high</option>
          <option value="dec">high to Low</option>
        </select>
      </label>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.name}, <strong>Author:</strong>{" "}
            {book.author}, <strong>Votes:</strong> {book.votes}
          </li>
        ))}
      </ul>
    </div>
  );
};
