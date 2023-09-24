import { useMemo } from "react";

export default function useBookFilter(books, searchTerm) {
  const filteredBook = useMemo(() => {
    if (!searchTerm) {
      return books;
    }

    const searchTermLowerCase = searchTerm.toLocaleLowerCase();

    return books.filter((book) =>
      book.name.toLocaleLowerCase().includes(searchTermLowerCase)
    );
  }, [books, searchTerm]);

  return filteredBook;
}
