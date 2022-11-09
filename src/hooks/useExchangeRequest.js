import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useExchangeRequest = () => {
  const [user] = useAuthState(auth);
  const [myExchangeRequest, setExchangeRequest] = useState([]);
  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/exchange/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setExchangeRequest(data));
  }, [user?.email]);
  return [myExchangeRequest, setExchangeRequest];
};

export default useExchangeRequest;
