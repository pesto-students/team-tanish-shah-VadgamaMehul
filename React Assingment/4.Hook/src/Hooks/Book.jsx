export function Book(prop) {

  return (
    <li
      style={{
        display: "inline-block",
        margin: "10px 20px",
        borderStyle: "solid",
        borderColor: "black",
        padding: "20px 10px",
      }}
    >
      <h2 style={{ margin: "0px" }}>Title: {prop.bookItem.name}</h2>
      <p>Author: {prop.bookItem.author}</p>
      <p>Votes: {prop.bookItem.votes}</p>
    </li>
  );
}
