import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-200">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-center  text-purple-500">
          Welcome to Your Dashboard!
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content ">
          {/* <!-- Sidebar content here --> */}
          {/* {!admin && (
            <>
              <li>
                <Link to="/dashboard">My Booking Tools</Link>
              </li>
              <li>
                <Link to="/dashboard/addAReview">Add a Review</Link>
              </li>
            </>
          )} */}

          <li className="border border-x-0  border-y-orange-400 mb-2">
            <Link to="/dashboard/user">Manage Librarian</Link>
          </li>
          <li className="border border-x-0  border-y-orange-400 mb-2">
            <Link to="/dashboard/manageProducts">Manage Products</Link>
          </li>
          <li className="border border-x-0  border-y-orange-400 mb-2">
            <Link to="/dashboard/addATool">Add A Tool</Link>
          </li>
          <li className="border border-x-0  border-y-orange-400">
            <Link to="/dashboard/manageOrder">Manage Orders</Link>
          </li>

          {/* <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
