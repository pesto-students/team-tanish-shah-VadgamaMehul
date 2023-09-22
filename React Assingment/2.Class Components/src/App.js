import "./App.css";
import { BookListClass } from "./ClassComponets/bookListClass";
import { Withloging } from "./ClassComponets/BookListWithLogging";


function App() {
  return (
    <div>
      <BookListClass />
      <Withloging />
    </div>
  );
}

export default App;
