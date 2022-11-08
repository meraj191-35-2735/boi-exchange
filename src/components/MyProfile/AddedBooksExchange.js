import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddedBooksExchange = () => {
  const [user] = useAuthState(auth);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/exchange/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooks(data));
  }, [user]);
  return (
    <div>
      <h1 className="text-2xl text-center">
        My Added Books Exchange: {myBooks.length}
      </h1>
    </div>
  );
};

export default AddedBooksExchange;
