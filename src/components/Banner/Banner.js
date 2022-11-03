import React from "react";
import bannerPic from "../../assets/images/banner/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerPic})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Boi Exchange</h1>
          <p className="mb-5">
            Boi Exchange is an utterly simple to use platform. We at Book
            exchange wanted to make sure that it is easy for book lovers of all
            age groups discover the joy of reading. It is a very intuitive
            platform for all ages to use easily and discover the joy of books.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
