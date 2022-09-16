import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
// import auth from "../../firebase.init";

const BuyNow = () => {
  //   const [user] = useAuthState(auth);
  const { bookId } = useParams();
  const [buyingBook, setBuyingBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/book/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBuyingBook(data));
  }, [bookId]);
  console.log(buyingBook);

  return (
    <div className="px-12">
      <h1 className="text-center font-bold text-3xl mt-4 text-green-500">
        Thanks for Choosing Us!
      </h1>
      <p className="text-center font-thin text-pink-500">
        Please Give Your Information <br /> for Delivery The Books!
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-44" src={buyingBook.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{buyingBook.name}</h2>
            <p>By {buyingBook.writter}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{buyingBook.category}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="form-control mt-5">
            <label className="input-group input-group-vertical">
              <span className="font-semibold">Name</span>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control mt-3">
            <label className="input-group input-group-vertical">
              <span className="font-semibold">Email</span>
              <input
                type="email"
                placeholder="Enter a valid email"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control mt-3">
            <label className="input-group input-group-vertical">
              <span className="font-semibold">Phone</span>
              <input
                type="text"
                placeholder="Enter a valid phone number"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control mt-3">
            <label className="input-group input-group-vertical">
              <span className="font-semibold">Address</span>
              <input
                type="text"
                placeholder="Enter your address"
                className="input input-bordered"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-3 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
