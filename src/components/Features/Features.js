import React from "react";
import { Link } from "react-router-dom";
import feature1 from "../../assets/images/features/feature2.jpg";
import feature2 from "../../assets/images/features/feature1.jpg";
import feature3 from "../../assets/images/features/feature3.jpg";

const Features = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-5">Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
        {/* feature 01 */}
        <div class="card bg-pink-200 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={feature1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Buy & Sell Books</h2>
            <p>Here, You can buy a book and also sell read books.</p>
            <div class="card-actions">
              <Link to="/store" class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* feature 02 */}
        <div class="card bg-green-200 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={feature2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Borrow & Return Book</h2>
            <p>Here, You can borrow a book by giving a returning date.</p>
            <div class="card-actions">
              <Link to="/borrow" class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* feature 03 */}
        <div class="card bg-pink-200 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={feature3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Give & Take Book</h2>
            <p>Here, You can exchange your book with other users.</p>
            <div class="card-actions">
              <Link to="/exchange" class="btn btn-primary">
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
