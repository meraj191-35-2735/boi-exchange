import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Events from "../Events/Events";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Events></Events>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
