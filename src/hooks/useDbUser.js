import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useDbUser = () => {
  const [user] = useAuthState(auth);
  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [user]);
  return [dbUser, setDbUser];
};

export default useDbUser;
