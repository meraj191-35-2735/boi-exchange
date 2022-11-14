import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useLibrarian from "../../hooks/useLibrarian";

const Books = ({ book }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [librarian] = useLibrarian(user);
  const {
    name,
    category,
    writter,
    image,
    userName,
    userEmail,
    userLocation,
    userContact,
    duration,
    _id,
  } = book;
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="grid lg:grid-cols-4 grid-cols-2 gap-5 mb-10 bg-cyan-50 border rounded-lg"
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
        className="flex flex-col justify-center items-center bg-cyan-100 rounded my-5"
      >
        {/* book name */}
        <h3 className="lg:text-xl text-lg font-bold ">{name}</h3>
        <p className="font-serif font-sm">
          <span className="font-bold">Category:</span> <br /> {category}
        </p>
        <p className="font-serif font-sm">
          <span className="font-bold">Writer:</span> <br /> {writter}
        </p>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="flex flex-col justify-center items-center bg-cyan-100 rounded my-5"
      >
        {/* user details */}
        <p className="font-serif font-sm">
          <span className="font-bold">Name:</span> {userName}
        </p>
        <p className="font-serif font-sm">
          <span className="font-bold">Email:</span> {userEmail}
        </p>
        <p className="font-serif font-sm">
          <span className="font-bold">Meet Point:</span> {userLocation}
        </p>
        <p className="font-serif font-sm">
          <span className="font-bold">Phone:</span> {userContact}
        </p>
        <p className="font-serif font-sm">
          <span className="font-bold">Available for:</span> {duration} days
        </p>
      </div>
      <div className="flex justify-center items-center">
        {/* Request button */}
        {admin && (
          <Link
            disabled
            to="/"
            className="btn btn-sm btn-outline hover:rounded-full font-serif disabled:btn"
          >
            Send Request
          </Link>
        )}
        {librarian ? (
          <Link
            disabled
            to="/"
            className="btn btn-sm btn-outline hover:rounded-full font-serif disabled:btn"
          >
            Send Request
          </Link>
        ) : (
          !admin && (
            <Link
              to={`/borrow/${_id}`}
              className="btn btn-sm btn-outline hover:rounded-full font-serif"
            >
              Send Request
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Books;
