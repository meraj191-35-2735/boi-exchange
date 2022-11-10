import React from "react";

const AddBookBorrow = () => {
  return (
    <div className="flex justify-center items-center">
      <form className=" py-3 px-10 bg-cyan-100 shadow-inner shadow-success my-5 rounded-xl">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow  rounded-box place-items-center">
            <div className="flex flex-col justify-center items-center ">
              <h4 className="font-bold text-xl font-serif my-3 text-center">
                Book Information
              </h4>
              <p className="font-semibold my-1 font-mono">Book Name:</p>
              <input
                className="input input-bordered input-success w-full max-w-xs input-sm"
                type="text"
                name="bookName"
                id="bookName"
              />
              <p className="font-semibold my-1 font-mono">Category:</p>
              <input
                className="input input-bordered input-success w-full max-w-xs input-sm"
                type="text"
                name="category"
                id="category"
              />
              <p className="font-semibold my-1 font-mono">Book Writer:</p>
              <input
                className="input input-bordered input-success w-full max-w-xs input-sm"
                type="text"
                name="writer"
                id="writer"
              />
              <p className="font-semibold my-1 font-mono">Image:</p>
              <input
                className="file-input file-input-bordered file-input-sm w-full max-w-xs file-input-success"
                type="file"
                name="image"
                id="image"
              />
              <p className="font-semibold my-1 font-mono">Duration:</p>
              <input
                className="input input-bordered input-success w-full max-w-xs input-sm"
                type="text"
                name="duration"
                id="duration"
              />
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="flex flex-col justify-center items-center w-1/2">
            {" "}
            <h4 className="font-bold text-xl font-serif my-3 text-center">
              User Information
            </h4>
            <p className="font-semibold my-1 font-mono">Your Name:</p>
            <input
              className="input input-bordered input-success w-full max-w-xs input-sm"
              type="text"
              name="userName"
              id="userName"
            />
            <p className="font-semibold my-1 font-mono">Your Email:</p>
            <input
              className="input input-bordered input-success w-full max-w-xs input-sm"
              type="email"
              name="userEmail"
              id="userEmail"
            />
            <p className="font-semibold my-1 font-mono">Your Location:</p>
            <input
              className="input input-bordered input-success w-full max-w-xs input-sm"
              type="text"
              name="userLocation"
              id="userLocation"
            />
            <p className="font-semibold my-1 font-mono">Phone:</p>
            <input
              className="input input-bordered input-success w-full max-w-xs input-sm"
              type="text"
              name="userContact"
              id="userContact"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Add"
            className="btn w-1/2 btn-sm text-white font-bold btn-success hover:rounded-full hover:bg-white hover:border-2 hover:text-success mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBookBorrow;
