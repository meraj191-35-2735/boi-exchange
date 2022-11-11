import React, { useEffect, useState } from "react";
import info from "../../assets/images/logo/info.png";
import manage from "../../assets/images/logo/manage.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://floating-gorge-66618.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
      <div className="bg-blue-400 border rounded-lg h-40 flex justify-evenly items-center">
        <div>
          <h1 className="font-bold text-3xl  text-white font-serif">
            {users.length}K
          </h1>
          <h3 className="font-bold text-xl  text-white font-serif">Users</h3>
        </div>
        <Link
          to="/admin/dashboard/users"
          className="flex  btn btn-ghost btn-sm"
        >
          <h5 className="font-semibold font-serif text-white">Manage Admin</h5>
          <img className="w-5 ml-1" src={manage} alt="" />
        </Link>
      </div>
      <div className="bg-green-400 border rounded-lg h-40 flex justify-evenly items-center">
        <div>
          <h1 className="font-bold text-3xl  text-white font-serif">
            {users.length + 1}K
          </h1>
          <h3 className="font-bold text-xl  text-white font-serif">Books</h3>
        </div>
        <div className="flex">
          <h5 className="font-semibold font-serif text-white">Details </h5>
          <img className="w-5 ml-1" src={info} alt="" />
        </div>
      </div>
      <div className="bg-yellow-400 border rounded-lg h-40 flex justify-evenly items-center">
        <div>
          <h1 className="font-bold text-3xl  text-white font-serif">
            {users.length}00
          </h1>
          <h3 className="font-bold text-xl  text-white font-serif">Reviews</h3>
        </div>
        <div className="flex">
          <h5 className="font-semibold font-serif text-white">Details </h5>
          <img className="w-5 ml-1" src={info} alt="" />
        </div>
      </div>
      <div className="bg-red-400 border rounded-lg h-40 flex justify-evenly items-center">
        <div>
          <h1 className="font-bold text-3xl  text-white font-serif">
            {users.length}
          </h1>
          <h3 className="font-bold text-xl  text-white font-serif">
            Librarian
          </h3>
        </div>
        <div className="flex">
          <Link
            to="/admin/dashboard/librarians"
            className="font-semibold text-xs font-serif text-white flex  btn btn-ghost btn-sm"
          >
            Manage <br /> Librarian
            <img className="w-5 ml-1" src={manage} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
