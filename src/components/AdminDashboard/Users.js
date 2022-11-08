import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import User from "./User";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://floating-gorge-66618.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(users);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-3">
        Users Of This Website
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Gmail</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
              ></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
