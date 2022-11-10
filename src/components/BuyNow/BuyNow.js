import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
// import auth from "../../firebase.init";

const BuyNow = () => {
  //   const [user] = useAuthState(auth);
  const { bookId } = useParams();
  const [buyingBook, setBuyingBook] = useState([]);

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/book/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBuyingBook(data));
  }, [bookId]);

  return (
    <div className="px-12">
      <h1 className="text-center font-bold text-3xl mt-4 text-green-500 font-serif">
        Thanks for Choosing Us!
      </h1>
      <p className="text-center font-thin text-pink-500 font-serif">
        Please Give Your Information <br /> for Delivery The Books!
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-44" src={buyingBook.image} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif">{buyingBook.name}</h2>
            <p className="font-serif">By {buyingBook.writter}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-serif">
                {buyingBook.category}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="form-control mt-5">
            <label className="input-group input-group-vertical">
              <span className="font-semibold font-serif">Name</span>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered font-mono"
              />
            </label>
          </div>
          <div className="form-control mt-3">
            <label className="input-group input-group-vertical">
              <span className="font-semibold font-serif">Email</span>
              <input
                type="email"
                placeholder="Enter a valid email"
                className="input input-bordered font-mono"
              />
            </label>
          </div>
          <div className="form-control mt-3">
            <label className="input-group input-group-vertical">
              <span className="font-semibold font-serif">Phone</span>
              <input
                type="text"
                placeholder="Enter a valid phone number"
                className="input input-bordered font-mono"
              />
            </label>
          </div>
          <div className="form-control mt-3">
            <label className="input-group input-group-vertical">
              <span className="font-semibold font-serif">Address</span>
              <input
                type="text"
                placeholder="Enter your address"
                className="input input-bordered font-mono"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn hover:btn-success hover:text-white font-bold btn-outline hover:rounded-full font-serif mt-3 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
