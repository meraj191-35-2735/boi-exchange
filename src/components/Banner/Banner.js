import React from "react";
import bannerGif from "../../assets/images/banner/bannerGif.gif";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerGif})`,
      }}
    >
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Boi Exchange</h1>
          <p class="mb-5">
            Boi Exchange is an utterly simple to use platform. We at Book
            exchange wanted to make sure that it is easy for book lovers of all
            age groups discover the joy of reading. It is a very intuitive
            platform for all ages to use easily and discover the joy of books.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
