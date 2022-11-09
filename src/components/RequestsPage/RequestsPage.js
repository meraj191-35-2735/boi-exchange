import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequestsPage = () => {
  const [user] = useAuthState(auth);
  const [myExchangeRequest, setExchangeRequest] = useState([]);
  const [myBorrowRequest, setBorrowRequest] = useState([]);

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/exchange/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setExchangeRequest(data));
  }, [user?.email]);

  const myRequest = myExchangeRequest;

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/borrow/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBorrowRequest(data));
  }, [user?.email]);

  const myBRequest = myBorrowRequest;

  if (myExchangeRequest.length === 0 && myBorrowRequest.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <>
      {myRequest.map(
        (m) =>
          m?.requesterDetails && (
            <div className="border rounded-lg flex justify-center items-center flex-col py-10 my-2 bg-cyan-100">
              <h1 className="text-lg  text-center my-2">
                <span className="font-bold">{m.requesterDetails?.name} </span>
                sent you a request for book:{" "}
                <span className="font-bold">{m?.name} </span>!
              </h1>
              <p className="mb-2">
                Interested Book for{" "}
                <span className="font-bold text-red-900">Exchange</span>:{" "}
                <span className="font-semibold">{m.requesterDetails.book}</span>
              </p>
              <div className="flex justify-around items-center w-1/2 mt-2">
                <button className="btn btn-sm text-white font-bold btn-success hover:rounded-full hover:bg-white hover:border-2 hover:text-success">
                  Accept
                </button>{" "}
                <button className="btn btn-sm text-white font-bold btn-warning hover:rounded-full hover:bg-white hover:border-2 hover:text-warning">
                  Reject
                </button>
              </div>
            </div>
          )
      )}

      {myBRequest.map(
        (m) =>
          m?.requesterDetails && (
            <div className="border rounded-lg flex justify-center items-center flex-col py-10 my-2 bg-cyan-100">
              <h1 className="text-lg  text-center my-2">
                <span className="font-bold">{m.requesterDetails?.name} </span>
                sent you a request for book:{" "}
                <span className="font-bold">{m?.name} </span>!
              </h1>
              <p className="mb-2">
                Will <span className="font-bold text-red-900">Borrow</span> for:{" "}
                <span className="font-semibold">
                  {m?.requesterDetails?.duration}
                </span>{" "}
                Days
              </p>
              <div className="flex justify-around items-center w-1/2 mt-2">
                <button className="btn btn-sm text-white font-bold btn-success hover:rounded-full hover:bg-white hover:border-2 hover:text-success">
                  Accept
                </button>{" "}
                <button className="btn btn-sm text-white font-bold btn-warning hover:rounded-full hover:bg-white hover:border-2 hover:text-warning">
                  Reject
                </button>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default RequestsPage;
