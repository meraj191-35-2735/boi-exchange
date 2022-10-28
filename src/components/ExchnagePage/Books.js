import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Books = ({ book }) => {
  const [user] = useAuthState(auth);
  const { name, category, writter, image, userDetails } = book;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="grid lg:grid-cols-4 grid-cols-2 gap-5 mb-10 bg-gray-200 border rounded-lg"
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
        className="flex flex-col justify-center items-center bg-gray-300 rounded my-5"
      >
        {/* book name */}
        <h3 className="lg:text-xl text-lg font-bold ">{name}</h3>
        <p>
          Category: <br /> {category}
        </p>
        <p>
          Written by: <br /> {writter}
        </p>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="flex flex-col justify-center items-center bg-gray-300 rounded my-5"
      >
        {/* user details */}
        <p> User Name: {userDetails?.username}</p>
        <p>Email: {userDetails.email}</p>
        <p>Meet Location: {userDetails.location}</p>
        <p>Contact: {userDetails.contact}</p>
        <p>
          Interested Category for Exchange: <br />
          {userDetails.interestedBooksType.map((b) => `${b}, `)}
        </p>
      </div>
      <div className="flex justify-center items-center">
        {/* Request button */}
        {user ? (
          <Link to="/requestMessage" className="btn btn-sm ">
            Send Request
          </Link>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Link to="/requestMessage" className="btn btn-sm btn-disabled">
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
