import React from "react";
import "./Events.css";

const Events = () => {
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
          />
          <div>
            <h1 class="text-5xl font-bold">Book Exchange Fair</h1>
            <p class="py-6">
              Will held on 29th October, 2022. <br />
              At DIU, Ashulia, Savar, Dhaka. <br />
              You can Join and Exchange your Book.
            </p>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span className="span1"></span>
                </span>
                days
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span className="span2"></span>
                </span>
                hours
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span className="span3"></span>
                </span>
                min
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span className="span4"></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
