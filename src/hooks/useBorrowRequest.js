import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useBorrowRequest = () => {
  const [user] = useAuthState(auth);
  const [myBorrowRequest, setBorrowRequest] = useState([]);
  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/borrow/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBorrowRequest(data));
  }, [user?.email]);
  return [myBorrowRequest, setBorrowRequest];
};

export default useBorrowRequest;
