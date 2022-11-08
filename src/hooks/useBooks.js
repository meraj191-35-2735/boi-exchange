import { useEffect } from "react";
import { useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://floating-gorge-66618.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return [books, setBooks];
};

export default useBooks;
