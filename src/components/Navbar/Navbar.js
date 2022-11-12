import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.png";
import userProfile from "../../assets/images/logo/userProfile.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useAdmin from "../../hooks/useAdmin";
import useExchangeRequest from "../../hooks/useExchangeRequest";
import useBorrowRequest from "../../hooks/useBorrowRequest";
import useLibrarian from "../../hooks/useLibrarian";
import useDbUser from "../../hooks/useDbUser";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [dbUser] = useDbUser();
  const navigate = useNavigate();
  const [admin] = useAdmin(user);
  const [librarian] = useLibrarian(user);
  const [myExchangeRequest] = useExchangeRequest();
  const [myBorrowRequest] = useBorrowRequest();
  let countForEx = 0;
  let countForBro = 0;

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  for (let request of myExchangeRequest) {
    if (request?.requesterDetails) {
      countForEx++;
    }
  }
  for (let request of myBorrowRequest) {
    if (request?.requesterDetails) {
      countForBro++;
    }
  }
  const totalCount = countForEx + countForBro;

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
            <Link className="hover:text-cyan-600 font-serif" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-600 font-serif" to="/store">
              Store
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-600 font-serif" to="/exchange">
              Exchange
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-600 font-serif" to="/borrow">
              Borrow
            </Link>
          </li>

          {totalCount > 0 && (
            <li>
              <Link className="hover:text-cyan-600 font-serif" to="/requests">
                Requests
                <div className="badge badge-error">
                  <p className="font-bold text-white">{totalCount}</p>
                </div>
              </Link>
            </li>
          )}

          <li>
            {user ? (
              <div className="dropdown lg:dropdown-left">
                {user?.photoURL && (
                  <label tabIndex={1} className="avatar">
                    <div className="w-6 rounded-full hover:ring hover:ring-cyan-400 hover:ring-offset-base-100 hover:ring-offset-2 cursor-pointer">
                      <img src={user?.photoURL} alt="Profile" />
                    </div>
                  </label>
                )}
                {dbUser?.photoURL ? (
                  <label
                    tabIndex={1}
                    className="font-bold m-1 flex justify-center items-center"
                  >
                    <div className="w-6 rounded-full hover:ring hover:ring-cyan-400 hover:ring-offset-base-100 hover:ring-offset-2 cursor-pointer">
                      <img
                        src={dbUser?.photoURL}
                        alt=""
                        className="w-6 rounded-full"
                      />
                    </div>
                  </label>
                ) : (
                  !user?.photoURL && (
                    <label
                      tabIndex={1}
                      className="font-bold m-1 flex justify-center items-center"
                    >
                      <div className="w-6 rounded-full hover:ring hover:ring-cyan-400 hover:ring-offset-base-100 hover:ring-offset-2 cursor-pointer">
                        <img src={userProfile} alt="" className="w-6" />
                      </div>
                    </label>
                  )
                )}
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {admin && (
                    <li>
                      <Link className="text-serif" to="/admin/dashboard">
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {librarian ? (
                    <li>
                      <Link className="text-serif" to="/librarian/dashboard">
                        Dashboard
                      </Link>
                    </li>
                  ) : (
                    !admin && (
                      <li>
                        <Link className="text-serif" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                    )
                  )}
                  <li>
                    <Link className="text-serif" to="/myProfile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-ghost text-serif"
                      onClick={logout}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="hover:text-cyan-600 font-serif" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
        <Link to="/" className="logo">
          <img className="w-52" src={logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
