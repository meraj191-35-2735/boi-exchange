import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import verifyLogo from "../../assets/images/logo/verify-logo.png";
import auth from "../../firebase.init";
import Footer from "../Footer/Footer";

const BorrowMessage = () => {
  const [user] = useAuthState(auth);
  const { bookId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requesterName = event.target.name.value;
    const requesterPhone = event.target.phone.value;
    const requesterAddress = event.target.address.value;
    const requesterDuration = event.target.duration.value;
    const email = user.email;

    const requesterDetails = {
      name: requesterName,
      phone: requesterPhone,
      address: requesterAddress,
      duration: requesterDuration,
      email: email,
    };

    fetch(`https://floating-gorge-66618.herokuapp.com/borrow/${bookId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requesterDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
        <div className="border rounded shadow-xl p-10 bg-cyan-50">
          <h1 className="text-center font-semibold">Verify your Account</h1>
          <h3 className="text-center">
            You can verify your account to use this exchange system securely.
          </h3>
          <div className="flex justify-center items-center">
            <img className="w-52 h-56" src={verifyLogo} alt="" />
          </div>
        </div>
        <div className="border rounded-lg shadow-xl py-10 bg-cyan-50">
          <h1 className="text-warning font-semibold text-xl text-center">
            Your Request will Send after Submit the Form!
          </h1>
          <h1 className="text-center mb-10">
            Please, Give some important information!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-4">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-4">Name:</h2>
                <input
                  placeholder="Your Name"
                  required
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-4">Phone:</h2>
                <input
                  placeholder="Phone Number"
                  required
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-3">Address:</h2>
                <input
                  placeholder="Your Address"
                  required
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="address"
                  id="address"
                />
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-4">Duration:</h2>
                <input
                  placeholder="Days you want this book"
                  required
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="duration"
                  id="duration"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                className="btn btn-sm btn-outline hover:rounded-full font-semibold"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BorrowMessage;
