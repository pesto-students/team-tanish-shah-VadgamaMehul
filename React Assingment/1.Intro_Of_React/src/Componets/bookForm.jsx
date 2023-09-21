import { BookList } from "./bookList";

export function BookForm() {
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Author</label>
          <input type="text" />
        </div>
        <div>
          <label>Year</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <button type="submit" onClick={addBook}>
          Add Book
        </button>
      </div>
    </form>
  );
}

function addBook() {}