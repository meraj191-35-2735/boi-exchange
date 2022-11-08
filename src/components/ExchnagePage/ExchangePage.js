import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Books from "./Books";

const ExchangePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://floating-gorge-66618.herokuapp.com/exchange")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  if (books.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center font-serif font-bold text-green-600 text-3xl py-5">
        Books Available For Exchange
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

export default ExchangePage;
