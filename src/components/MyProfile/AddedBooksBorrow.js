import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddedBooksBorrow = () => {
  const [user] = useAuthState(auth);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/borrow/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooks(data));
  }, [user]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Writer</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {myBooks.map((book) => {
              return (
                <tr key={book._id}>
                  <th>{myBooks.indexOf(book) + 1}</th>
                  <td>
                    <img className="w-16 h-20" src={book.image} alt="" />
                  </td>
                  <td>{book.name}</td>
                  <td>{book.writter}</td>
                  <td>{book.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddedBooksBorrow;
