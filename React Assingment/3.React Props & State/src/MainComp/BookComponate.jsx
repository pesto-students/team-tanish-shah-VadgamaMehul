import { useState } from "react";
import "./BookComponate.css"

export function BookComponate(prop) {

  const[isExpanded,setIsExpand] = useState(false);

  function handelDelet() {
    prop.onDelete(prop.id);
    console.log("Book Deleted");
  }

  const toggleDetails = () => {
    setIsExpand(!isExpanded);
  };

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
      <h2 style={{ margin: "0px" }}>Title: {prop.bookobj.title}</h2>
      <p>Author: {prop.bookobj.author}</p>
      <p>Year: {prop.bookobj.year}</p>
      <button onClick={handelDelet}>Delete</button>
      <button onClick={toggleDetails}>
      {isExpanded ? 'Hide Details' : 'Show Details' }
      </button>
      {isExpanded && <div className="details">{prop.bookobj.title}</div>}
    </li>
  );
}
