export function Book(props) {
  return (
    <li>
      <p>Title: {props.bookObj.title}</p>
      <p>Author: {props.bookObj.author}</p>
      <p>Year: {props.bookObj.year}</p>
    </li>
  );
}
