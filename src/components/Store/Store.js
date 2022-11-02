import React from "react";
import useBooks from "../../hooks/useBooks";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Book from "./Book";

const Store = () => {
  const [books] = useBooks();
  if (books.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center font-serif font-bold text-green-600 text-3xl py-5">
        Book Store
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-8 mb-4">
        {books.map((book) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Store;
