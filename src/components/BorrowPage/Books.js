import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Books = ({ book }) => {
  const [user] = useAuthState(auth);
  const { name, category, writter, image, userDetails, _id } = book;
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="grid lg:grid-cols-4 grid-cols-2 gap-5 mb-10 bg-orange-100 border rounded-lg"
    >
      <div>
        {/* image */}
        <img
          className="lg:w-60 h-52 lg:h-56 my-5 mx-5 rounded-lg"
          src={image}
          alt=""
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col justify-center items-center bg-orange-200 rounded my-5"
      >
        {/* book name */}
        <h3 className="lg:text-xl text-lg font-bold ">{name}</h3>
        <p>
          <span className="font-bold">Category:</span> <br /> {category}
        </p>
        <p>
          <span className="font-bold">Writer:</span> <br /> {writter}
        </p>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="flex flex-col justify-center items-center bg-orange-200 rounded my-5"
      >
        {/* user details */}
        <p>
          <span className="font-bold">Name:</span> {userDetails?.username}
        </p>
        <p>
          <span className="font-bold">Email:</span> {userDetails.email}
        </p>
        <p>
          <span className="font-bold">Meet Point:</span> {userDetails.location}
        </p>
        <p>
          <span className="font-bold">Phone:</span> {userDetails.contact}
        </p>
        <p>
          <span className="font-bold">Available for:</span>{" "}
          {userDetails.duration} days
        </p>
      </div>
      <div className="flex justify-center items-center">
        {/* Request button */}
        {user ? (
          <Link
            to={`/borrow/${_id}`}
            className="btn btn-sm btn-outline hover:rounded-full"
          >
            Send Request
          </Link>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Link
              to="/requestMessage"
              className="btn btn-sm btn-outline hover:rounded-full btn-disabled"
            >
              Send Request
            </Link>

            <p className="text-xs text-warning">
              (For Send Request You have to Login to System)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
