import React from "react";
import { ShopTitle, ShopProducts } from "./BooksStyles";
import { BOOKS } from "../../../data/books";
import { Item } from "../../item/Item";

export const Books = () => {
  return (
    <div className="wrapper shop">
      <ShopTitle>
        <h1>Books</h1>
      </ShopTitle>
      <ShopProducts>
        {BOOKS.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ShopProducts>
    </div>
  );
};