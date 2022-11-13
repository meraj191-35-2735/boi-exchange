import React from "react";
import useBooks from "../../hooks/useBooks";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Book from "./Book";
import searchBook from "../../assets/images/logo/searchBook.png";

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
      <div className="flex justify-center w-full items-center mb-5">
        <div className="w-1/2 lg:w-1/3 flex">
          <input
            className="input w-full input-sm input-success"
            name="searchText"
            id="searchText"
            type="text"
          />
          <button className="btn btn-ghost btn-xs hover:bg-transparent rounded-full">
            <img className="w-6" src={searchBook} alt="" />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 px-8 mb-4">
        {books.map((book) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Store;
