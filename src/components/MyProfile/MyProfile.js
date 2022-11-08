import React from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="mt-10">
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-1">
        <Link
          className="btn hover:bg-transparent hover:border-2 hover:text-black hover:ease-in hover:duration-500 duration-500 ease-out text-white font-semibold hover:font-semibold hover:rounded-full"
          to="addToExchange"
        >
          Add A Book
          <span className="font-thin lowercase">(for exchange)</span>
        </Link>
        <Link
          className="btn hover:bg-transparent hover:border-2 hover:text-black hover:ease-in hover:duration-500 duration-500 ease-out text-white font-semibold hover:font-semibold hover:rounded-full"
          to="addToBorrow"
        >
          Add A Book{" "}
          <span className="lowercase font-extralight">
            {" "}
            (available for giving borrow)
          </span>{" "}
        </Link>
        <Link
          className="btn hover:bg-transparent hover:border-2 hover:text-black hover:ease-in hover:duration-500 duration-500 ease-out text-white font-semibold hover:font-semibold hover:rounded-full"
          to="addedBook"
        >
          Added Books{" "}
          <span className="font-thin lowercase">(for exchange)</span>
        </Link>
        <Link
          className="btn hover:bg-transparent hover:border-2 hover:text-black hover:ease-in hover:duration-500 duration-500 ease-out text-white font-semibold hover:font-semibold hover:rounded-full"
          to="addedBook"
        >
          Added Books{" "}
          <span className="font-thin lowercase">
            (available for giving borrow)
          </span>
        </Link>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center text-green-500 my-10">
          Dashboard
        </h1>
      </div>
    </div>
  );
};

export default MyProfile;
