import React from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="mt-10">
      <div className="flex lg:justify-around ">
        <Link className="btn btn-primary" to="addToExchange">
          Add A Book <span className="font-thin lowercase">(for exchange)</span>
        </Link>
        <Link className="btn btn-primary" to="addToBorrow">
          Add A Book{" "}
          <span className="lowercase font-extralight">
            {" "}
            (available for giving borrow)
          </span>{" "}
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
