import React from "react";
import verifyLogo from "../../assets/images/logo/verify-logo.png";
import Footer from "../Footer/Footer";

const ExchangeMessage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const requesterName = event.target.name.value;
    const requesterPhone = event.target.phone.value;
    const requesterAddress = event.target.address.value;
    const requesterBook = event.target.bookName.value;
    console.log(requesterName, requesterPhone, requesterAddress, requesterBook);
  };
  return (
    <div>
      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
        <div className="border rounded shadow-xl p-10 bg-orange-100">
          <h1 className="text-center font-semibold">Verify your Account</h1>
          <h3 className="text-center">
            You can verify your account to use this exchange system securely.
          </h3>
          <div className="flex justify-center items-center">
            <img className="w-52 h-56" src={verifyLogo} alt="" />
          </div>
        </div>
        <div className="border rounded-lg shadow-xl py-10 bg-orange-100">
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
                <h2 className="font-semibold text-lg mr-4">Book:</h2>
                <input
                  placeholder="Book Name for Exchange"
                  required
                  className="input input-bordered input-sm w-full max-w-xs"
                  type="text"
                  name="bookName"
                  id="bookName"
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

export default ExchangeMessage;
