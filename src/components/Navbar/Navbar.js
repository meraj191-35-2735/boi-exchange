import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
          <li>
            <Link to="/borrow">Borrow</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {user ? (
              <div className="dropdown lg:dropdown-left">
                {user?.photoURL ? (
                  <label tabIndex={0} className="avatar">
                    <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt="Profile" />
                    </div>
                  </label>
                ) : (
                  <label tabIndex={0} className="font-bold m-1">
                    More
                  </label>
                )}
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {admin === false ? (
                    <li>
                      <Link to="/myProfile">My Profile</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  )}
                  <li>
                    <button className="btn btn-ghost" onClick={logout}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
