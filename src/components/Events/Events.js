import React from "react";
import Countdown from "react-countdown";


const Events = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="text-3xl font-bold">
          {hours}h :{minutes}m :{seconds}s
        </span>
      );
    }
  };
  return (
    <div className="px-5">
      <h1 className="text-3xl text-center font-bold my-8 text-green-500">
        Upcoming Events
      </h1>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold">Book Exchange Fair</h1>
            <p class="py-6">
              At DIU, Ashulia, Savar, Dhaka. <br />
              You can Join and Exchange your Book.
            </p>
            <Countdown
              date={Date.now() + 5000000000}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
