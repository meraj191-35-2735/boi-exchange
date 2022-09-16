import React from "react";

const Book = (book) => {
  const { name, image, category, writter, price } = book.book;
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl" alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">By</span> <span className="text-green-700 font-thin">{writter}</span>
        </p>
        <p><span className="font-bold">Category: </span>{category}</p>
        <p><span className="font-bold">Price: </span><span className="font-semibold">{price}</span></p>

        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
