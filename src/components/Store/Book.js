import React from "react";
import { useNavigate } from "react-router-dom";

const Book = (book) => {
  const { _id, name, image, category, writter, price } = book.book;
  const navigate = useNavigate();
  const handleBookNow = (bookId) => {
    navigate(`/buyNow/${bookId}`);
  };
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000"
      className="bg-gray-200 rounded-lg shadow-lg"
    >
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl" alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">By</span>{" "}
          <span className="text-green-700 font-thin">{writter}</span>
        </p>
        <p>
          <span className="font-bold">Category: </span>
          {category}
        </p>
        <p>
          <span className="font-bold">Price: </span>
          <span className="font-semibold">{price}</span>
        </p>

        <div className="card-actions">
          <button
            onClick={() => handleBookNow(_id)}
            className="btn btn-primary btn-sm mt-3 text-white"
          >
            Buy Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
