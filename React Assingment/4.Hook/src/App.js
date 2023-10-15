import "./App.css";
// import { BookList } from "./Componets/bookList";
import { BookListObj } from "./Hooks/BookList";
import { bookObj } from "./Hooks/BookObj";
import { ThemeProvider } from "./Hooks/SetContex/TheamContex";

// import { BookDataLoder } from './Hooks/useEffect/BookDataLoder';
// import BookPage from './MainComp/BookPage';
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BookListObj books={bookObj} />
      </div>
    </ThemeProvider>
  );
}

export default App;
