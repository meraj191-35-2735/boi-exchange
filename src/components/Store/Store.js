import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Book from "./Book";

const Store = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("store.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  if (books.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className="pt-16">
      <h1 className="text-3xl text-center font-bold my-8 text-green-500">
        Book Store
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Store;
