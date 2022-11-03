import React from "react";
import { Link } from "react-router-dom";
import feature1 from "../../assets/images/features/feature2.jpg";
import feature2 from "../../assets/images/features/feature1.jpg";
import feature3 from "../../assets/images/features/feature3.jpg";

const Features = () => {
  return (
    <div>
      <h1 className="text-center font-serif font-bold text-green-600 text-3xl py-5 my-5">
        Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
        {/* feature 01 */}
        <div className="card bg-blue-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={feature1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Buy & Sell Books</h2>
            <p>Here, You can buy a book and also sell read books.</p>
            <div className="card-actions">
              <Link
                to="/store"
                className="btn btn-sm btn-outline hover:rounded-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* feature 02 */}
        <div className="card bg-blue-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={feature2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Borrow & Return Book</h2>
            <p>Here, You can borrow a book by giving a returning date.</p>
            <div className="card-actions">
              <Link
                to="/borrow"
                className="btn btn-sm btn-outline hover:rounded-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* feature 03 */}
        <div className="card bg-blue-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={feature3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Give & Take Book</h2>
            <p>Here, You can exchange your book with other users.</p>
            <div className="card-actions">
              <Link
                to="/exchange"
                className="btn btn-sm btn-outline hover:rounded-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
