import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const AddedBooksExchange = () => {
  const [user] = useAuthState(auth);
  const [myBooks, setMyBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/exchange/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooks(data));
  }, [user]);

  const handleDeleteBook = (book) => {
    const indexOfBook = myBooks.indexOf(book);
    myBooks.splice(indexOfBook, 1);
    const restBooks = [...myBooks];
    setMyBooks(restBooks);
    fetch(
      `https://floating-gorge-66618.herokuapp.com/exchange/book/${book._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(book),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyBooks(data);
        navigate("/");
      });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Writer</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myBooks.map((book) => {
              return (
                <tr key={book._id}>
                  <th>{myBooks.indexOf(book) + 1}</th>
                  <td>
                    <img className="w-16 h-20 " src={book.image} alt="" />
                  </td>
                  <td>{book.name}</td>
                  <td>{book.writter}</td>
                  <td>{book.category}</td>
                  <td>
                    <p
                      onClick={() => handleDeleteBook(book)}
                      className="btn btn-sm border-2 btn-error font-bold text-white hover:bg-white hover:border-2 hover:text-red-500 hover:rounded-full"
                    >
                      Delete
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddedBooksExchange;
