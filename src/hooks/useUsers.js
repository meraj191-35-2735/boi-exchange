import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://floating-gorge-66618.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return [users];
};

export default useUsers;
