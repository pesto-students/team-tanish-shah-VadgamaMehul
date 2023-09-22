import React, { PureComponent } from "react";

export class BookDetailsPureComp extends PureComponent {
  render() {
    console.log("This is Pure Componate");
    return (
      <li>
        <p>Title: {this.props.bookObj.title}</p>
        <p>Author: {this.props.bookObj.author}</p>
        <p>Year: {this.props.bookObj.year}</p>
      </li>
    );
  }
}
