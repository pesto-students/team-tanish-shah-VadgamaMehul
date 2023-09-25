import { useMemo } from 'react';

const useBookSort = (books, sortBy) => {
  const setBooks = useMemo(()=>{
    if (!sortBy) return books;

    if (sortBy === "asc") {
      books.sort((a, b) => a.votes - b.votes);
    } else {
      books.sort((a, b) => b.votes - a.votes);
    }

    return books;
  },[books, sortBy])

  return setBooks;
};

export default useBookSort;
