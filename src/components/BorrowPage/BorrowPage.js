import React from "react";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Books from "./Books";

const BorrowPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/borrow")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  if (books.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center font-serif font-bold text-green-600 text-3xl py-5">
        Books Available for Borrow
      </h1>
      <div className=" w-full mx-auto">
        {books.map((book) => (
          <Books key={books.indexOf(book)} book={book}></Books>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BorrowPage;
